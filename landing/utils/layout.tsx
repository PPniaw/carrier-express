import { styled } from 'stitches.config';

export const Container = styled('div', {
  paddingX: '$16',

  variants: {
    header: {
      mobile: {
        marginBottom: '24px',
        paddingTop: '$12'
      },
      desktop: {
        paddingTop: '24px'
      }
    },
    main: {
      mobile: {
        marginBottom: '48px'
      },
      desktop: {
        paddingTop: '48px'
      }
    },
    footer: {
      mobile: {
        paddingBottom: '48px'
      },
      desktop: {
        paddingBottom: '24px'
      }
    }
  }
});

export const Section = styled('section', {
  variants: {
    position: {
      hasSiblings: {
        marginBottom: '48px'
      }
    },
    purpose: {
      aboveTheFold: {
        minHeight: '64vh'
      }
    }
  }
});

export const ListItem = styled('li', {
  fontFamily: '$default',

  variants: {
    nomark: {
      true: {
        listStyleType: 'none'
      }
    },
    square: {
      true: {
        listStyleType: 'square'
      }
    }
  }
});

export const IconList = styled('ul', {
  display: 'grid',
  rowGap: '$16',
  margin: 0,
  padding: 0
});
