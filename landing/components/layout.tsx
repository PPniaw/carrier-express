import { styled } from 'stitches.config';

export const Container = styled('div', {
  paddingX: '$16',

  variants: {
    header: {
      mobile: {
        marginBottom: '$16',
        paddingTop: '$12'
      },
      desktop: {
        paddingTop: '24px'
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

export const FullBlock = styled('section', {
  marginBottom: '$16',
  padding: '$24 0 $8',
});

export const FullLayout = styled('div', {
  marginBottom: '64px',
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
