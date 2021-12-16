import { styled } from 'stitches.config';

import { Container } from '@components/layout';

const Tag = styled('span', {
  display: 'inline-block',
  color: 'hsl($shade20)',
  fontFamily: '$default',
  fontSize: '1.4rem'
});

export default function Footer() {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" footer={{ '@initial': 'mobile', '@m992': 'desktop' }}>
      <Tag>外出籠規畫 Carrier Express {Year}</Tag>
    </Container>
  )
}
