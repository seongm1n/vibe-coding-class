# 바이브 코딩으로 수익나는 앱 만들기 — 학습 자료 사이트

세종청년센터 4일 강의의 학습 자료 사이트입니다. **Next.js + Nextra**로 만들었고, **Netlify**에 자동 배포됩니다.

수강생은 강의 시간에 함께 보고, 강의 후에도 다시 펼쳐 볼 수 있습니다.

---

## 빠르게 시작 (로컬에서 보기)

```bash
# 1. 의존성 설치 (최초 1회)
npm install

# 2. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

---

## 폴더 구조

```
docs-site/
├── pages/
│   ├── _meta.json              ← 사이드바 최상위 정렬
│   ├── index.mdx               ← 강의 소개 (홈 페이지)
│   ├── day1/
│   │   ├── _meta.json
│   │   ├── index.mdx           ← Day 1 개요
│   │   ├── what-is-vibe-coding.mdx
│   │   ├── text-llm.mdx
│   │   ├── image.mdx
│   │   ├── audio.mdx
│   │   ├── video.mdx
│   │   ├── no-code-builder.mdx
│   │   └── homework.mdx
│   ├── day2/                   ← 같은 구조
│   ├── day3/                   ← 같은 구조
│   ├── day4/                   ← 같은 구조
│   └── resources.mdx           ← 도구·참고자료 모음
├── theme.config.tsx            ← Nextra 테마 설정 (로고·색상·푸터)
├── next.config.js              ← Next.js + Nextra 설정
├── netlify.toml                ← Netlify 배포 설정
├── package.json
├── tsconfig.json
└── README.md                   ← 이 파일
```

---

## 콘텐츠 수정하는 법

### 글 내용 고치기

1. `pages/` 안의 `.mdx` 파일을 텍스트 에디터로 엽니다.
2. 마크다운 문법으로 수정합니다.
3. 저장하면 로컬 개발 서버에서 자동으로 새로고침됩니다.

### 새 챕터 추가하기

1. 해당 Day 폴더에 새 `.mdx` 파일을 만듭니다 (예: `pages/day3/extra.mdx`).
2. `pages/dayX/_meta.json`에 새 페이지를 추가합니다 (사이드바 정렬용).

   ```json
   {
     "index": "Day 3 개요",
     "concepts": "프론트·백엔드·DB 개념",
     "extra": "추가 챕터"
   }
   ```

3. 저장 후 새로고침하면 사이드바에 보입니다.

### Callout 사용하기

`.mdx` 파일 상단에 다음을 추가하면 콜아웃을 쓸 수 있습니다.

```mdx
import { Callout } from 'nextra/components'

<Callout type="info">팁 메시지</Callout>
<Callout type="warning">주의 메시지</Callout>
<Callout type="error">자주 하는 실수</Callout>
```

### 코드 블록의 파일명 표시

```` markdown
```text filename="✅ 좋은 예"
프롬프트 내용
```
````

`filename` 속성을 쓰면 코드 블록 위에 라벨이 표시됩니다.

### 색상·로고 바꾸기

`theme.config.tsx`를 수정합니다.

- **로고**: `logo` 항목의 JSX 수정
- **메인 색상**: `primaryHue` 와 `primarySaturation` 조정
  - 현재: 버밀리언 `#c8401a` ≈ HSL(13, 77%, 44%)
- **푸터 텍스트**: `footer.text` 항목 수정

---

## 배포하는 법 (Netlify)

### 1단계: GitHub 레포지토리에 푸시

```bash
# 처음 한 번만
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<본인계정>/<레포이름>.git
git push -u origin main
```

이후로는 변경 사항을 푸시할 때마다:

```bash
git add .
git commit -m "Update content"
git push
```

### 2단계: Netlify에 사이트 연결 (최초 1회)

1. [https://app.netlify.com](https://app.netlify.com) 로그인
2. **"Add new site" → "Import an existing project"**
3. **GitHub** 선택 → 본인 레포지토리 선택
4. 빌드 설정은 자동 인식됨 (`netlify.toml`이 있어서 따로 입력할 필요 없음)
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugins: `@netlify/plugin-nextjs` (자동)
5. **"Deploy"** 클릭 → 1~3분 후 배포 완료

### 3단계: 자동 배포 확인

이제부터 GitHub `main` 브랜치에 푸시할 때마다 Netlify가 **자동으로 새 버전을 배포**합니다. 별도로 무엇을 누를 필요가 없습니다.

배포 URL은 다음과 같은 형태입니다.

```
https://your-site-name.netlify.app
```

Netlify 사이트 설정에서 본인 도메인(`.com` 등)을 연결할 수도 있습니다.

---

## 자주 하는 실수

### 사이드바에서 새 페이지가 안 보임

**원인**: `_meta.json`에 추가하지 않음

**해결**: 해당 Day 폴더의 `_meta.json`에 페이지 파일명(확장자 제외)을 추가하세요.

### 빌드는 됐는데 페이지가 빈 화면

**원인**: `.mdx` 파일 상단에서 import한 컴포넌트(Callout 등)가 빠짐

**해결**: 해당 컴포넌트를 사용하는 모든 mdx 파일에 다음을 상단에 추가:

```mdx
import { Callout } from 'nextra/components'
```

### 색상이 안 바뀜

**원인**: `theme.config.tsx`의 `primaryHue`만 바꾸면 됨

**해결**: HSL 변환 후 색상값을 바꿉니다. 예: `#c8401a` → `primaryHue: 13, primarySaturation: 77`.

[HEX → HSL 변환기](https://www.w3schools.com/colors/colors_converter.asp) 사용 권장.

---

## 라이선스

강의용 학습 자료입니다. 자유롭게 복제·수정 가능합니다.
