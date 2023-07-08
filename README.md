# 카카오마켓

## 프로젝트 설명
카카오마켓은 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 플랫폼입니다.
- 상품을 판매하려고 한다면 판매자로 로그인하여 상품 정보를 등록 및 수정할 수 있습니다.
- 판매자가 상품을 구매하는 것은 불가능합니다.
- 오픈마켓에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.
- [배포 링크](https://main--kakao-market.netlify.app/)

### 📆 기간

2023.6.24 ~ 2021.07.08<br/>

### 🏃 구성원
- Frontend<br/>
  - 김준수(React)
  - 사용 기술 : `React`, `JavaScript`, `React Router`, `Styled Components`, `Ant Design`
 
## 🔎 기능 설명

### 1. 메인페이지

![헤더](https://github.com/skdksldk/Kakao/assets/85090323/faa209e4-ba34-4696-a814-2f3a304eb475)

![헤더2](https://github.com/skdksldk/Kakao/assets/85090323/3e408350-6341-443c-92c3-a262ee160e82)

- Header와 Mainpage에 반응형 레이아웃 구현
- Image Carousel 직접 구현

### 2. 로그인

![로그인](https://github.com/skdksldk/Kakao/assets/85090323/34598af5-3790-45cb-9112-cd02e260ed23)

- styled-components를 이용해 뷰를 구축했습니다.
- 로그인이 실했했을 경우 로그인에 실패했다는 안내의 alert 처리를 해두었습니다.

### 3. 회원가입

![회원가입](https://github.com/skdksldk/Kakao/assets/85090323/6dcb712c-2ec1-4548-a41d-107b55eceb73)

- 로그인과 마찬가지로 회원가입도 styled-components를 이용하여 뷰를 구축했습니다.
- 로그인과 마찬가지로 reponse를 받지 못할 경우 회원가입에 실패했다는 안내의 alert 처리를 해두었습니다.

### 4. 인기매물 페이지

![상품 페이지](https://github.com/skdksldk/Kakao/assets/85090323/0d0e2585-4a9b-4888-b055-e5733b0e9a50)

- 매물 클릭 시 해당 ID값으로 상세페이지를 불러오게 했습니다.
- 이미지, 네임, 가격, 카운터수를 불러옵니다.

### 5. 장바구니 페이지

![장바구니](https://github.com/skdksldk/Kakao/assets/85090323/db31827f-2ce7-4303-be03-7708a71c9093)

- 장바구니 페이지 구현
1. 상품 수량 조절 기능
2. 상품 삭제 기능
3. 체크박스와 가격 연동

### 6. 주문/결재 페이지

![주문](https://github.com/skdksldk/Kakao/assets/85090323/c462cc86-2c08-400d-b247-1199d0ff51f9)

![배송](https://github.com/skdksldk/Kakao/assets/85090323/da61333d-8ab9-43c6-8d20-a7cf4f1ace98)

![결재](https://github.com/skdksldk/Kakao/assets/85090323/d7a45d96-12c1-410f-a947-9a8c68a11bdc)

- 주문 페이지 구현

### 7. 마이 페이지

![마이페이지](https://github.com/skdksldk/Kakao/assets/85090323/e4eb0fae-5f42-450b-a1c1-4a2f73abfeb9)

- 주문목록 조회 기능


### 8. 판매자 페이지
![판매자용](https://github.com/skdksldk/Kakao/assets/85090323/2bf24a06-c935-4be7-822d-c63b246209b5)

![상품 수정](https://github.com/skdksldk/Kakao/assets/85090323/8db81caa-62dc-4b74-9769-c06155925d63)

![상품 등록](https://github.com/skdksldk/Kakao/assets/85090323/975705da-840b-4f28-8fa0-9b69277cc4f0)

- 판매자용-판매자센터 구현
1. 상품 등록 기능
2. 상품 수정 기능
3. 상품 삭제 기능

  
## 💡 카카오마켓을 코딩한 이유

가천대 길병원과 서울 성모병원에서 배웠던 경험을 토대로 유사한 사이트 중에서도 카카오마켓이 병원에서 만든 프로젝트와 비슷한 스택과 구조로 만들수 있을 것 같아 선택했습니다.

## 실행 방법

### 실행
`yarn run dev`

개발모드로 앱을 실행합니다.

[http://localhost:8080](http://localhost:8080)에서 확인 가능합니다.

### 빌드
`yarn run build`

`dist` 폴더에 앱을 빌드합니다.

### ID & PW
- 샘플 회원 id & pw
  - (구매회원) id: buyer1, pw: hodu0910
  - (구매회원) id: buyer2, pw: hodu0910
  - (구매회원) id: buyer3, pw: hodu0910
  - (판매회원) id: seller1, pw: hodu0910
  - (판매회원) id: seller2, pw: hodu0910
  - (판매회원) id: seller3, pw: hodu0910
