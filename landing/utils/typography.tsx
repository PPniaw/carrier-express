import { styled } from 'stitches.config';

export const Heading = styled('h1', {
  fontFamily: '$default',

  variants: {
    accent: {
      heavy: {
        color: 'hsl($shade10)'
      },
      light: {
        color: 'hsl($shade30)'
      },
      identity: {
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
        color: 'hsl($shade20)',
        fontSize: '$24'
      }
    },
    moderate: {
      true: {
        fontSize: '$24'
      }
    },
    lowered: {
      true: {
        fontSize: '$20',
        fontWeight: 400
      }
    },
    space: {
      slogan: {
        maxWidth: '20ch'
      }
    }
  }
});
