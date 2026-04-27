import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>
      바이브 코딩으로
      <br />
      <span style={{ color: '#c8401a' }}>수익나는 앱 만들기</span>
    </span>
  ),
  project: {
    link: 'https://github.com/'
  },
  // #c8401a (버밀리언) ≈ HSL(13, 77%, 44%)
  primaryHue: 13,
  primarySaturation: 77,
  search: {
    placeholder: '검색...'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    title: '이 페이지 목차',
    backToTop: true
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system'
  },
  footer: {
    text: (
      <span>
        세종청년센터 · 바이브 코딩으로 수익나는 앱 만들기 · 2026
      </span>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/' || asPath === '') {
      return { titleTemplate: '바이브 코딩으로 수익나는 앱 만들기' }
    }
    return { titleTemplate: '%s — 바이브 코딩 강의' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="세종청년센터에서 진행하는 4일 바이브 코딩 강의의 학습 자료입니다."
      />
      <meta name="og:title" content="바이브 코딩으로 수익나는 앱 만들기" />
    </>
  ),
  i18n: [],
  faviconGlyph: '🛠️'
}

export default config
