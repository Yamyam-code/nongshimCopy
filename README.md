# 농심 홈페이지 클론코딩

---

### \* 프로젝트 사이트 주소

---

- 농심 홈페이지 :
- 클론코딩 홈페이지:

### [주요 내용 설명]

#### 1. 헤더 및 슬라이드 구현

---

![헤더 및 슬라이드1](https://github.com/Yamyam-code/intro/assets/121215024/98f4d28c-109b-4069-88aa-fd89707316a7)

![슬라이드2](https://github.com/Yamyam-code/intro/assets/121215024/cfbab497-8fa4-4d84-aca2-9c7942d3e729)
![슬라이드3](https://github.com/Yamyam-code/intro/assets/121215024/82b0d26a-b491-4776-a61c-f4e28cd5c074)

- 헤더는 css의 flex를 이용하여 레이아웃을 구성하였고 border라인 및 드롭다운의 경우 hover 속성을 이용하였습니다.
- 슬라이드는 js 라이브러리인 swiper를 사용하여 구현하였습니다.

#### 2. 애니메이션 구현

---

![애니메이션](https://github.com/Yamyam-code/intro/assets/121215024/3d823f8a-35c7-4f11-9fa0-b081f33d7184)

- 슬라이드는 js 라이브러리인 swiper를 사용하여 구현하였습니다.

#### 3. 지도 구현

---

![지도](https://github.com/Yamyam-code/intro/assets/121215024/6c0ce9cd-1679-43b6-9108-759287a32f31)

- 지도의 경우 vanilla js로 작업하였습니다.

### [느낀 점 및 아쉬운 점]

#### 느낀 점

1. 자식구조나 클래스명 등을 미리 생각하고 시작해야겠다고 생각하였습니다.
   큰 구조를 생각하지 않고 바로 작업을 시작했더니 구조가 복잡해질수록 css
   작업을 함에 있어서 헷갈리거나 오타가 생기는 등 문제가 생겼습니다.

2. position을 함부로 남발하지 말아야겠다고 생각했습니다.
   이번 작업을 하면서 main태그가 header밑으로 일정부분 들어가야했기에
   편의를 위해서 absolute를 부여하였으나 이후에 body height에 문제가 생겨서
   큰 어려움을 겪게되었습니다.

3. 반복적으로 사용되는 css요소를 잘 파악하여 class명을 지혜롭게 부여하여야합니다.
   작업을 하며 최선을 다해서 시도해보았으나 저도 모르게 반복되는 코드를 많이 작성 하고있었고 이는 가독성과 재사용성에 큰 불편함을 안겨주었습니다.

---

#### 아쉬운 점

1. class명을 일관적으로 작성하지 못했습니다.
   많은 태그를 생성하다보니 작성형식이 헷갈리게 되었습니다.

2. 요소 배치의 많은 부분을 absoulte를 통해 해결했습니다.
   화면이 크고 작아짐에 있어서 요소의 형태가 일정하지 않은 바람에 min-width를
   걸고 최소한의 형태유지를 시켜놨습니다...

3. 지도 js 작업이 매우 비요율적으로 코딩되어있습니다.
   확실하게 코드량을 줄일 수 있을 것 같은데 너무 아쉽습니다.

4. swiper오류를 해결하지 못했습니다.
   slide2와 3의 요소를 넘기다 보면 한 번씩 뚝뚝 끝어져서 넘어가게 되는데
   해결방법을 찾지 못했습니다.
