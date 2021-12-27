import Link from 'next/link';

import { Container } from '@utils/layout';
import { Heading, Paragraph, ParagraphLink } from '@utils/typography';
import { Section } from '@utils/layout';

export default function Contact() {
  return(
    <Container as="main" contact={{ '@initial': 'mobile', '@m768': 'tablet', '@m1200': 'desktop' }}>
      <Section contactsection="contact">
        <Heading as="h1" loud={{ '@initial': 'mobile' }} accent="identity">聯繫</Heading>
        <Paragraph>
          「外出籠規畫 Carrier Express」是練習作品，有事要聯絡？請至<Link href="https://ymcheung.tw" passHref><ParagraphLink rel="noopener" target="_blank">我的個人網站</ParagraphLink></Link>。
        </Paragraph>
      </Section>
      <Section contactsection="privacy">
        <Heading as="h2" loud={{ '@initial': 'mobile' }} accent="heavy">隱私權</Heading>
        <Paragraph>
          此專案透過 <Link href="https://splitbee.io" passHref><ParagraphLink rel="noopener" target="_blank">Splitbee</ParagraphLink></Link> 進行設計研究，以及參考 <Link href="https://vercel.com/analytics" passHref><ParagraphLink rel="noopener" target="_blank">Vercel Analytics</ParagraphLink></Link> 提供的瀏覽體驗。記錄的資料不會被再利用或販售至第三方。
        </Paragraph>
      </Section>
      <Section contactsection="credit">
        <Heading as="h2" loud={{ '@initial': 'mobile' }} accent="heavy">引用素材</Heading>
        <Paragraph>
        <Link href="https://thenounproject.com/icon/cat-3037142" passHref><ParagraphLink rel="noopener" target="_blank">貓圖示</ParagraphLink></Link>是 The Noun Project 上，<Link href="https://thenounproject.com/coquet_adrien" passHref><ParagraphLink rel="noopener" target="_blank">Adrien Coquet</ParagraphLink></Link> 的作品。
        </Paragraph>
      </Section>
    </Container>
  )
}