# 상품 목록 및 상세 페이지

## 개발 환경

- Node.js 22.19.0
- NPM 11.5.2
- Chrome 139.0
- Visual Studio Code 1.103.2
- Git 2.49

## 빌드 및 실행 방법

```sh
# 빌드
npm run build

# 개발
npm run dev

# 프로덕션 모드 (프리뷰)
npm run preview
```

## 배포 사이트 URL

> [https://artinus.vercel.app](https://artinus.vercel.app)

## 개발 내용

### 리스트 페이지

- 카드 형태 UI로 상품 리스트 페이지 구현
- Intersection Observer API를 활용한 스크롤 기반 Lazy Load 기능 구현
  - SWR의 `useSWRMutation` 활용
- Suspense 및 로딩 상태에서 Skeleton UI 적용

### 상세 페이지

- 커머스 서비스의 상세 페이지 디자인 차용
- 스크롤 기반 섹션 이동을 위한 ContentNav 개발
- Suspense 및 로딩 상태에서 Skeleton UI 적용

### 공통

- 반응형 디자인 적용 (데스크탑/모바일 지원)
- 코드/커밋 품질 관리를 위한 설정 추가
  - Git Hook 기반 커밋 및 코드 품질 관리 자동화
- Zod를 활용한 런타임 타입 체크 로직 추가
- 페이지 로딩 뷰 구현
- 404 Not Found 페이지 구현

### 빌드 최적화

- 페이지 로드 단계에서 Dynamic import 적용
- `manualChunks` 적용을 통한 청크 분리
- 패키지 용량 감축 작업 진행
  - `zod` → `zod/mini` 로 import 교체

## 기술 선택

- React + Vite
  - 현재 프로젝트 규모로서는 비교적 작은 사이즈의 프로젝트라 판단했고, 요구사항에서 SEO 혹은 SSR에 대한 명확한 도입 기준이 없다고 판단되어 빠른 개발을 위한 React + Vite 선정
- Vanilla Extract
  - 비교군으로 Tailwind CSS를 선정했고, 동일하게 Zero Runtime을 지원하지만 TypeScript 기반 타입 체크가 가능하여 타입 안정성을 갖추고 Tree Shaking, 조건부 스타일링 기능을 지원하며 비교적 유지보수에 용이한 Vanilla Extract를 선정
  - 추가로 clsx는 className 병합을 위해 적용
- SWR
  - 비교군으로 @tanstack/react-query를 선정했고, 현재 프로젝트 요구사항 기준, 단순한 데이터 페칭과 캐싱, 설정 최소화가 가능하며 빠른 구현이 용이한 SWR을 사용하여 상품 목록 및 상세 페이지를 개발함.
- Zod
  - TypeScript에서 미비한 런타입 타입 체크를 통해 안정적인 데이터 처리 및 유효성 검증 적용
- Day.js
  - 날짜 포맷팅을 위한 라이브러리

## 디렉토리 구조

- Feature-Sliced Design 적용
  - 기능 단위 모듈화, 재사용성, 확장성, 명확한 레이어 구분
  - 전역 및 페이지 기반 디렉토리 구조의 한계를 극복할 수 있어 해당 디렉토리 구조 적용
