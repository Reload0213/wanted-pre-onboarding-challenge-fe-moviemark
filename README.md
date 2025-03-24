# MovieMark

영화 정보를 검색하고 북마크할 수 있는 웹 애플리케이션입니다.

## 주요기능 

- 영화 목록 조회 및 무한 스크롤
- 영화 상세 정보 확인
- 영화 북마크 기능
- 북마크 된 영화 필터링

## 기술 스택
- Next.js 14
- TypeScript
- Tanstanck Query (React Query)
- Recoil
- Tailwind CSS

## 프로젝트 구조
- src
- api/ : API 통신 관련 코드
- components/ : React 컴포넌트
- types/ : TypeScript 타입 정의 
- utils/ : 유틸리티 함수

### 사전 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법

1. 저장소를 클론합니다:
bash
git clone https://github.com/YOUR_USERNAME/YOUR_FORKED_REPOSITORY.git
cd moviemark

2. 의존성 설치:
bash
npm install
또는
yarn install

3. 개발 서버 실행:
npm run dev
또는
yarn dev

4. http://localhost:3000 접속

### Backend 설정
1. [FastAPI 서버 다운로드](https://drive.google.com/file/d/1PQk2tr55ACw7qtX2UHSRPbgjxA0hAUoq/view?usp=drive_link)
2. 다운로드 받은 파일을 실행 후 현재 기기의 OS에 해당하는 파일의 압축을 해제합니다
3. `my_fastapi_server` 파일을 실행하면 자동으로 백엔드 서버가 구동됩니다
4.  API 문서는 Swagger UI(http://localhost:8000/docs)를 통해 확인할 수 있습니다. 에서 사용 가능한 API 목록을 확인할 수 있습니다