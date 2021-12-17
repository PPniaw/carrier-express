import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { styled } from 'stitches.config';

import { Container, ListItem } from '@components/layout';

const Tag = styled('strong', {
  display: 'inline-block',
  marginBottom: '$16',
  color: 'hsl($shade20)',
  fontFamily: '$default',
  fontSize: '1.4rem',
  fontWeight: 400
});

const LinksList = styled('ul', {
  display: 'grid',
  margin: 0,
  padding: 0
});

const FooterLink = styled('a', {
  display: 'inline-block',
  textDecoration: 'none'
});

const FooterLinkName = styled('strong', {
  display: 'block',
  fontSize: '1.6rem',
  color: 'hsl($shade20)'
});

const FooterLinkAffix = styled('span', {
  fontSize: '1.4rem',
  color: 'hsl($shade40)'
});

export default function Footer() {
  const Year = new Date().getFullYear();

  const { t } = useTranslation('landing');

  const Links = [{
    name: t('footer.link.contact'),
    affix: t('footer.link.affix', { privacy: t('footer.link.privacy'), credit: t('footer.link.credit') }),
    link: '/contact'
  }];

  return(
    <Container as="footer" footer={{ '@initial': 'mobile', '@m992': 'desktop' }}>
      <Tag>&copy; 外出籠規畫 Carrier Express {Year}</Tag>
      <LinksList>
      {
        Links.map(({ name, affix, link }, index) => (
          <ListItem nomark key={`link${index}`}>
            <Link href={link} passHref>
              <FooterLink>
                <FooterLinkName dangerouslySetInnerHTML={{__html: name}} />
                <FooterLinkAffix dangerouslySetInnerHTML={{__html: affix}} />
              </FooterLink>
            </Link>
          </ListItem>
        ))
      }
      </LinksList>
    </Container>
  )
}
