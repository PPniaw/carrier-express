import { createStitches } from '@stitches/react';

export const { css, styled, globalCss, createTheme, keyframes, getCssText } = createStitches({
  theme: {
    colors: {
      shade120: '200,23%,97%',
      shade110: '200,18%,97%',
      shade100: '200,14%,96%',
      shade90:  '210,13%,94%',
      shade80:  '195,8%,90%',
      shade70:  '195,5%,85%',
      shade60:  '210,4%,80%',
      shade50:  '195,3%,71%',
      shade40:  '195,2%,62%',
      shade30:  '200,1%,50%',
      shade20:  '180,1%,35%',
      shade10:  '180,1%,20%',
      shade0:   '0,0%,4%'
    },
    fonts: {
      default: '\'Nunito\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif',
      slab: '\'Crete Round\', serif',
      mono: '\'Inconsolata\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', monospace'
    }
  },
  media: {
    m768: '(min-width: 768px)',
    m992: '(min-width: 992px)',
    m1200: '(min-width: 1200px)',
    mHover: '(hover: hover) and (pointer: fine)',
    mReduced: '(prefers-reduced-motion)'
  }
});
