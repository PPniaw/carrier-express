import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },

  body: {
    backgroundColor: 'hsl($shade120)',
    overflowY: 'scroll',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  '#__next': {
    display: 'grid',
    grid: 'auto 1fr auto / minmax(10px, 1168px)',
    justifyItems: 'stretch',
    justifyContent: 'center',
    minHeight: '100vh',
  }
});
