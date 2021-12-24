import Link from 'next/link';
import Image from 'next/image';

import { styled } from 'stitches.config';

import { Container } from '@utils/layout';

const LogoLink = styled('a', {
  display: 'inline-block'
});

export default function Header() {
  return(
    <Container as="header" header={{ '@initial': 'mobile', '@m1200': 'desktop' }}>
      <Link href="/" passHref>
        <LogoLink>
          <Image src="/logo.svg" width={144} height={40} alt="外出籠規畫" />
        </LogoLink>
      </Link>
    </Container>
  )
}
