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
        color: 'hsl($neon60)'
      }
    },
    loud: {
      mobile: {
        margin: '0 0 $8',
        fontSize: 'clamp(3.2rem, 4vw, 5rem)',
        lineHeight: 1.1
      },
      affix: {
        display: 'inline-block',
        color: 'hsl($shade20)',
        fontSize: '$24',
        fontWeight: 400
      }
    },
    moderate: {
      true: {
        display: 'inline-block',
        fontSize: '$24',
        fontWeight: 400
      }
    },
    lowered: {
      true: {
        display: 'inline-block',
        fontSize: '$20',
        fontWeight: 400
      }
    },
    space: {
      slogan: {
        maxWidth: '20ch'
      },
      loweredTitle: {
        marginBottom: '$8'
      }
    }
  }
});

export const Paragraph = styled('p', {
  margin: 0,
  color: 'hsl($shade30)',
  fontFamily: '$default',
  fontSize: '$16'
});

export const ParagraphLink = styled('a', {
  color: 'hsl($neon60)'
});
