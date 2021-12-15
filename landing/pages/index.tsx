import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { TITLE, DESCRIPTION } from 'constant';
import HeadMeta from '@utils/HeadMeta';
import { Container } from '@components/layout';

export default function Home() {
  return(
    <>
      <HeadMeta />
      <Container responsive={{ '@m768': 'max640', '@m1200': 'max1168' }}>Carrier Express</Container>
    </>
  )
}
