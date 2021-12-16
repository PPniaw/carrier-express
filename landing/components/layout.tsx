import { styled } from 'stitches.config';

export const Container = styled('div', {
  // marginX: '$auto',
  paddingX: '$16',

  // variants: {
  //   responsive: {
  //     max640: {
  //       maxWidth: '640px'
  //     },
  //     max960: {
  //       maxWidth: '960px'
  //     },
  //     max1168: {
  //       maxWidth: '1168px'
  //     }
  //   }
  // }
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
