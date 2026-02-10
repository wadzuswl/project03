# 🛋️ Project03 | 동서가구 리뉴얼 – 프리미엄 가구 쇼핑몰 프로젝트

## 프로젝트 개요

### 프로젝트 주제
**프리미엄 가구 쇼핑몰 웹사이트 리뉴얼**  
사용자 친화적인 인터페이스와 완전한 반응형 디자인을 갖춘 이커머스 플랫폼 구현 프로젝트입니다.

### 제작 목적
- **실전 웹 개발 학습**: HTML, SCSS, Vanilla JavaScript로 쇼핑몰 핵심 기능 구현
- **반응형 웹 디자인**: 모바일/태블릿/데스크톱 환경에서 일관된 UX 제공
- **상태 관리 학습**: `localStorage` 기반 장바구니/찜/최근 본 상품 관리
- **컴포넌트 기반 개발**: 재사용 가능한 UI 컴포넌트(상품 카드, 알림, 탭) 설계

### 주요 타겟 사용자
- **주 사용자**: 가구 구매를 원하는 일반 소비자 (20~50대)
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원을 고려한 UI

---

## 🛠 기술 스택

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Bootstrap Icons-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/LocalStorage-333333?style=flat-square"/>
</p>

---

## 🗂 카테고리 구성 (5개)

기능(침대/소파) 단위 분류가 아닌, 쇼핑몰 감성과 탐색 흐름을 고려해 아래 5개로 구성했습니다.

- 휴식
- 수납
- 생활
- 공간
- 분위기

---

## 🏗 전체 구조 설명

### 페이지 구성도

- index.html → 메인 페이지(홈)
- sub1.html → 상품 목록 페이지(검색 결과 포함)
- sub2.html → 베스트 상품 페이지
- sub3.html → 장바구니 페이지
- sub4.html → 마이페이지
- product-detail.html → 상품 상세 페이지

### 공통 레이아웃 구조
┌─────────────────────────────────┐<br>
│ Header │<br>
│ - 로고 / 네비게이션 │<br>
│ - 검색 / 장바구니 / 마이페이지 │<br>
├─────────────────────────────────┤<br>
│ Main Content │<br>
│ (페이지별 고유 콘텐츠) │<br>
├─────────────────────────────────┤<br>
│ Footer │<br>
│ - 고객센터 정보 / 회사 정보 │<br>
└─────────────────────────────────┘<br>

---

## 📁 프로젝트 파일 구조

project03/<br>
│<br>
├── js/ # JavaScript 기능별 모듈<br>
│ ├── best-products.js # 베스트 상품 페이지 로직<br>
│ ├── cart.js # 장바구니 공통 로직 (추가/삭제/수량)<br>
│ ├── cart-page.js # 장바구니 페이지 렌더링 및 이벤트<br>
│ ├── header.js # 헤더(모바일 메뉴, UI 제어)<br>
│ ├── index.js # 메인 페이지 초기화 로직<br>
│ ├── mypage.js # 마이페이지 탭 및 기능<br>
│ ├── product-detail.js # 상품 상세 페이지 로직<br>
│ ├── products-data.js # 상품 데이터 (정적 데이터)<br>
│ ├── products.js # 상품 카드 생성 및 이벤트 연결<br>
│ ├── recent-products.js # 최근 본 상품 관리<br>
│ ├── search.js # 검색 기능<br>
│ └── utils.js # 공통 유틸리티 함수<br>
│<br>
├── source/ # SCSS 소스 파일<br>
│ ├── _variables.scss # 디자인 시스템 변수 (색상, 폰트, 간격)<br>
│ ├── _mixins.scss # SCSS 믹스인<br>
│ ├── _reset.scss # CSS 리셋<br>
│ ├── _fonts.scss # 웹폰트 설정<br>
│ ├── _common.scss # 공통 스타일<br>
│ ├── _best-products.scss # 베스트 상품 전용 스타일<br>
│ ├── responsive.scss # 반응형 스타일<br>
│ └── style.scss # 메인 SCSS (모든 partial import)<br>
│<br>
├── index.html # 메인 페이지<br>
├── sub1.html # 상품 목록 페이지<br>
├── sub2.html # 베스트 상품 페이지<br>
├── sub3.html # 장바구니 페이지<br>
├── sub4.html # 마이페이지<br>
├── product-detail.html # 상품 상세 페이지<br>
│<br>
├── style.css # 컴파일된 메인 CSS<br>
├── responsive.css # 컴파일된 반응형 CSS<br>
│<br>
├── README.md # 프로젝트 설명 문서<br>


---

### 📌 구조 설계 의도
- **기능 기준 분리**: JavaScript는 페이지/역할 단위로 파일 분리
- **SCSS 관리 용이성**: 디자인 시스템(_variables) 중심 구조
- **유지보수성**: 공통 로직(utils, common 스타일) 재사용
- **확장성**: 페이지 추가 시 기존 구조 유지하며 확장 가능

---

## ⭐ 주요 기능

### 상품 카드 UI
- 상품 데이터 기반 **동적 카드 생성**
- 별점(정수/반별) 표시
- 할인 가격(정가/할인가) 노출
- 뱃지(베스트/특가 등) 조건부 표시
- 빠른 보기 / 찜 / 장바구니 인터랙션 제공

### 검색 기능
- URL 파라미터(`?search=`) 기반 검색
- 상품 제목 기준 필터링(대소문자 구분 없이)
- 검색 결과 없음 UI 제공

### 장바구니
- 상품 추가 / 수량 변경 / 삭제
- 총 금액 자동 계산
- 헤더 장바구니 개수 실시간 반영
- `localStorage` 기반 상태 유지

### 최근 본 상품
- 상품 상세 페이지 진입 시 자동 저장
- 중복 제거 및 최대 개수 제한(예: 10개)

### 찜 기능
- 하트 아이콘 토글
- `localStorage` 기반 찜 목록 관리
- 알림(Notification)으로 사용자 피드백 제공

### 알림(Notification)
- 성공/경고 등 타입 기반 알림 UI
- 일정 시간 후 자동 닫힘 처리

---

## 📄 페이지별 구현 의도 및 설명

### [메인 페이지 (index.html)]
**구현 목표**: 사용자가 쇼핑몰을 직관적으로 이해하고 주요 상품을 한눈에 볼 수 있도록 구성

- Hero 슬라이더(자동 전환 배너)
- 베스트/신상품/특가 섹션
- 최근 본 상품 섹션
- 검색 기능
- 장바구니 아이콘 실시간 개수 표시

---

### [상품 목록 페이지 (sub1.html)]
**구현 목표**: 검색/탐색 흐름을 단순화하고, 결과 상태에 따라 UI가 자연스럽게 전환되도록 구성

- URL 검색(`?search=`) 기반 검색 결과 표시
- 결과 없음 안내 메시지 UI 제공

---

### [베스트 상품 페이지 (sub2.html)]
**구현 목표**: 인기 상품을 순위별로 강조하여 구매 결정을 돕는 정보 제공

- TOP 3 상품 강조 UI
- 순위 배지 및 랭킹 스타일
- 나머지 상품 그리드 표시

---

### [장바구니 페이지 (sub3.html)]
**구현 목표**: 구매 직전 단계 UX 제공(수량/삭제/총액) + 상태 유지

- 장바구니 상품 목록 표시
- 수량 증가/감소 버튼
- 상품 삭제
- 총 금액 자동 계산
- 비어있을 때 안내 UI

---

### [마이페이지 (sub4.html)]
**구현 목표**: 사용자 관련 기능을 탭 UI로 정리해 한 곳에서 관리 가능하도록 구성

- 탭 메뉴 전환(주문내역/찜/리뷰/회원정보/배송지 등)
- 찜 목록 로드 및 상태별 UI 전환

---

### [상품 상세 페이지 (product-detail.html)]
**구현 목표**: 구매 결정에 필요한 정보를 제공하고, 장바구니 흐름과 최근 본 상품 저장을 완성

- 상세 설명 / 스펙 / 리뷰 표시
- 수량 선택 및 장바구니 추가
- 최근 본 상품 자동 저장

---

## 🎨 디자인 시스템

프로젝트 전반의 스타일 일관성을 위해 **SCSS 변수 기반 디자인 시스템**을 적용했습니다.

### Typography
- Primary: `NEXON Lv1 Gothic` (본문/기본 UI)
- Secondary: `GmarketSansMedium` (포인트/배지/강조)
- Accent: `Cafe24Ssurround` (리본/배지 등 포인트 요소)

### Color Palette (Semantic)
- Brand Main: `#150f6e`
- Brand Sub: `#1389ff`
- Success: `#0a7536`
- Warning: `#FFD912`
- Error: `#ED2040`
- Background: `#FFFFFF`, `#F9F9F9`
- Text: `#333`, `#111`, `#555`, `#999`
- Border: `#eee`

### Gradients
- Primary: `linear-gradient(135deg, #150f6e 0%, #1389ff 100%)`
- Warm: `linear-gradient(135deg, #ff8521 0%, #ffb428 100%)`
- Pink Accent: `linear-gradient(135deg, #ff588a 0%, #FFD1DC 100%)`
- Green Accent: `linear-gradient(135deg, #2add2a 0%, #5eddaa 100%)`
- Overlay Dark: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)`

### Breakpoints
- Mobile: `400px`
- Tablet: `767px`
- Desktop: `1024px`
- Desktop (Wide): `1440px`

### Radius / Shadow / Spacing
- Radius: `3px ~ 30px` (카드/버튼/배너 등 단계별 적용)
- Shadow: `sm/md/lg/xl` (UI 깊이감 표현)
- Spacing: `5px ~ 60px` (전역 여백 규칙 통일)

---

## 🧯 트러블슈팅

- **Sass mixed-decls 경고**
  - CSS 파일에서 원인을 찾고 있었던 문제 → 경고 경로 기준으로 SCSS 파일에서 수정하여 해결

- **상품목록 페이지 장바구니 추가 실패**
  - 하드코딩 카드에 `data-product-id`가 없어 ID 매칭 실패
  - 제목 기반으로 데이터에서 상품을 찾아 ID를 보정하는 로직으로 해결

- **검색 결과 없음 시 빈 화면**
  - 결과 없음 안내 UI를 별도로 구현하여 사용자 피드백 강화

---

## ♿ 웹표준 & 접근성 고려 사항

- 시맨틱 태그 사용(`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- 아이콘 버튼에 `aria-label` 적용
- 스킵 링크 및 포커스 스타일 제공으로 키보드 접근성 강화
- 이미지 `alt` 텍스트 제공(장식용 이미지는 빈 `alt`)
- 스크린 리더 전용 텍스트(`.sr-only`) 클래스 사용

---

## 📝 학습 포인트

- SCSS 변수/믹스인/중첩을 통한 효율적인 스타일 관리
- 반응형 레이아웃(Grid/Flex + 미디어 쿼리)
- 기능별 JS 파일 분리로 모듈화 경험
- `localStorage` 기반 상태 관리
- 동적 요소 이벤트 처리(재연결/위임 패턴)
- 접근성(ARIA, 키보드 네비게이션, 시맨틱 HTML)

---

## 💭 프로젝트 진행하며 느낀 점(초보 관점)

- HTML은 단순히 화면을 구성하는 것이 아니라 **의미를 전달하는 구조**라는 점을 이해하게 되었습니다.
- Flex/Grid를 활용하면서 레이아웃 설계가 명확해졌고, SCSS 변수로 스타일 유지보수가 쉬워졌습니다.
- JavaScript는 어렵게 느껴졌지만 기능을 함수로 나누고 콘솔로 확인하며 문제를 추적하는 과정에서 자신감이 생겼습니다.
- 접근성은 “선택 사항”이 아니라, **모든 사용자를 위한 기본 품질**이라는 것을 직접 테스트하며 체감했습니다.

---

## 🚀 개선 예정

- 이미지 최적화(lazy loading)
- 서버 API 연동으로 데이터 구조 개선
- 필터/정렬 기능 실제 구현
- 리뷰 섹션 강화(필터, 사진 리뷰)
- 성능 최적화(렌더링 개선)

---

## 👤 기여한 부분

프로젝트 개발 및 문서화
