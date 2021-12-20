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
        fontSize: 'clamp(3.2rem, 4vw, 5rem)',
        lineHeight: 1.1
      },
      affix: {
        color: 'hsl($shade30)',
        fontSize: '$24'
      }
    },
    moderate: {
      true: {
        fontSize: '$24'
      }
    },
    space: {
      slogan: {
        maxWidth: '20ch'
      }
    }
  }
});
