import { styled } from 'stitches.config';

export const Heading = styled('h1', {
  fontFamily: '$default',

  variants: {
    slogan: {
      mobile: {
        margin: '0 0 $8',
        fontSize: '3.2rem',
        lineHeight: '40px',
      },
      tablet: {
        fontSize: '4.8rem',
        lineHeight: '56px',
      },
      affix: {
        color: 'hsl($shade30)',
        fontSize: '2rem'
      }
    },
    purpose: {
      mono: {
        color: 'hsl($shade10)'
      },
      accent: {
        color: 'hsl($neon)'
      }
    }
  }
});
