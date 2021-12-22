import { styled } from 'stitches.config';

export const Container = styled('div', {
  variants: {
    header: {
      mobile: {
        marginBottom: '24px',
        paddingX: '$16',
        paddingTop: '$12'
      },
      desktop: {
        paddingX: '$0',
        paddingTop: '24px'
      }
    },
    main: {
      mobile: {
        marginBottom: '92px',
        paddingX: '$16',
      },
      desktop: {
        paddingX: '$0',
        paddingTop: '48px'
      }
    },
    footer: {
      mobile: {
        paddingX: '$16',
        paddingBottom: '48px'
      },
      desktop: {
        paddingX: '$0',
        paddingBottom: '24px'
      }
    }
  }
});

export const Section = styled('section', {
  variants: {
    position: {
      asHero: {
        marginBottom: '96px',
      },
      hasSiblings: {
        marginBottom: '64px',
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
