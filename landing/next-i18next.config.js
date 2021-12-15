module.exports = {
  i18n: {
    defaultNS: 'landing',
    ns: ['landing'],
    defaultLocale: 'zh-Hant-TW',
    locales: ['zh-Hant-TW', 'en'],
    ...(typeof window === undefined
      ? { localePath: path.resolve('./public/locales') }
      : {}),
    reloadOnPrerender: true,
    localeDetection: false
  }
};
