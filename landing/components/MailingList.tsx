import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import splitbee from '@splitbee/web';

const Form = styled('form', {
  display: 'grid',
  grid: `"input input"
         "error error"
         "guarantee action" 42px / 1fr 120px`,
  alignItems: 'center',
  gap: '6px $16',
  width: 'clamp(280px, 100%, 480px)'
});

const EmailInput = styled('input', {
  gridArea: 'input',
  padding: '$16 $8',
  color: 'hsl($shade20)',
  fontSize: '$16',
  lineHeight: '16px',
  backgroundColor: 'hsl($shade120)',
  border: '2px solid hsl($neon60)',
  borderRadius: '8px'
});

const EmailAction = styled('button', {
  gridArea: 'action',
  padding: '$12',
  color: 'hsl($neon60)',
  fontSize: '$14',
  lineHeight: '14px',
  backgroundColor: 'hsl($neon90)',
  border: '2px solid transparent',
  borderRadius: '8px',

  '&:disabled': {
    padding: 0,
    textAlign: 'right',
    backgroundColor: 'transparent'
  }
});

const EmailMessage = styled('span', {
  fontFamily: '$default',
  fontSize: '$14',

  variants: {
    purpose: {
      error: {
        gridArea: 'error',
        color: 'hsl($neon60)'
      },
      guarantee: {
        gridArea: 'guarantee',
        color: 'hsl($shade40)'
      }
    }
  }
});

type Inputs = {
  email: string
};

export default function MailingList() {
  const { t } = useTranslation('landing');

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [ successMsg, setSuccessMsg ] = useState('');
  const onSubmit: SubmitHandler<Inputs> = data => {
    splitbee.track('Submit to Mailing List', {
      email: data.email
    });
    setSuccessMsg(t('section.interested.form.success'))
  };

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <EmailInput type="email" {...register('email', { required: true, maxLength: 50 })} placeholder={t('section.interested.form.email')} />
      {errors.email && <EmailMessage purpose="error" dangerouslySetInnerHTML={{__html: t('section.interested.form.error')}} />}
      <EmailMessage purpose="guarantee" dangerouslySetInnerHTML={{__html: t('section.interested.guarantee')}} />
      <EmailAction type="submit" disabled={successMsg ? true : false} >{successMsg ? successMsg : t('section.interested.form.action')}</EmailAction>
    </Form>
  )
}
