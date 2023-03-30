import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config = {
  logo: <span>Slimplate</span>,
  project: {
    link: 'https://github.com/slimplate/slimplate'
  },
  docsRepositoryBase: 'https://github.com/slimplate/slimplate.github.io/tree/main/',
  footer: {
    text: 'slimplate'
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://slimplate.github.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    const title = frontMatter.title ? `${frontMatter.title} - Slimplate` : 'Slimplate'

    return (
      <>
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={frontMatter.description || 'A light and easy CMS for any site'} />
        <title>{title}</title>
      </>
    )
  }
}

export default config
