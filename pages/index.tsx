import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import HeadMeta from '@utils/HeadMeta';
import { Container } from '@components/layout';

export default function Home() {
  return(
    <>
      <HeadMeta />
      <Container responsive={{ '@m768': 'max640' }}>Carrier Express</Container>
    </>
  )
}
