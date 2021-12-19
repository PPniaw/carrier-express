import { styled } from 'stitches.config';

export const Heading = styled('h1', {
  fontFamily: '$default',

  variants: {
    purpose: {
      mono: {
        color: 'hsl($shade10)'
      },
      accent: {
        color: 'hsl($neon)'
      }
    },
    loud: {
      mobile: {
        margin: '0 0 $8',
        fontSize: '$32',
        lineHeight: '40px',
      },
      tablet: {
        fontSize: '4.8rem',
        lineHeight: '56px',
      },
      affix: {
        color: 'hsl($shade30)',
        fontSize: '$20'
      }
    },
    moderate: {
      true: {
        fontSize: '$24'
      }
    }
  }
});
