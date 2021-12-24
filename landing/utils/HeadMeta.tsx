import Head from 'next/head'
import * as headMetaDefault from 'constant';

type HeadMetaProps = {
  title: string;
  description: string;
  canonical: string;
  ogCover: string;
} & typeof defaultProps;

const defaultProps = {
  title: headMetaDefault.TITLE,
  description: headMetaDefault.DESCRIPTION,
  canonical: '',
  ogCover: '/ogCover.jpg'
};

function HeadMeta({ title, description, canonical, ogCover }: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${canonical}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${canonical}`} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${ogCover}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:
        JSON.stringify
        ({
          '@context': 'https://schema.org',
          '@graph': [{
            '@type': 'WebPage',
            url: 'https://carrier.express',
            name: '外出籠規畫',
            datePublished: '2021-12-10',
            dateModified: '2021-12-24',
            publisher: {
              '@type': 'Organization',
              name: 'Intersection',
              url: 'https://intersection.tw',
              logo: {
                '@type': 'ImageObject',
                name: 'Intersection: 優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國網路媒體用語。',
                width: 400,
                height: 400,
                url: 'https://carrier.express/intersection.png'
              }
            }}
          ]
        })
      }}
      />
    </Head>
  )
}

HeadMeta.defaultProps = defaultProps;
export default HeadMeta;
