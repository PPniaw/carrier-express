import { styled } from 'stitches.config';

import { Container } from '@components/layout';

const Tag = styled('span', {
  display: 'inline-block',
  fontFamily: '$default',
  fontSize: '1.4rem'
});

export default function Footer() {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer">
      <Tag>Carrier Express {Year}</Tag>
    </Container>
  )
}
