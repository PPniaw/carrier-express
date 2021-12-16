import Image from 'next/image';

import { styled } from 'stitches.config';

import { Container } from '@components/layout';

export default function Header() {
  return(
    <Container as="header" header={{ '@initial': 'mobile', '@m992': 'desktop' }}>
      <Image src="/logo.svg" width={144} height={40} alt="外出籠規畫" />
    </Container>
  )
}
