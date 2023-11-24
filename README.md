# 웹 디자인 기능사 실기 준비
- 시간 단축을 위해 `JQuery`를 배우기 보단 알고 있는 언어 **`JavaScript`** 로 기능 구현할 예정입니다.
- https://www.youtube.com/watch?v=gm4YGPv6jR0&list=PL4UVBBIc6giK95pWwwoTQP82aI9iGNo-g&index=1
- 해당 강의 기준으로 진행될 예정입니다.

## 실기 시험 중 주요 사항
- 마크업 준수 (header, footer, article, section, nav, main 등)
  - ⭐️ `article`, `section` 태그에는 **`h1~h6(제목)`** 태그가 포함 되어야 한다. (감점 요인 중 하나)
- 접근성 준수
  - ⭐️ `img` 태그에 **`alt 속성`** 필수로 넣어준다.(감점 요인 중 하나)
  - ⭐️ 로고, 메뉴, 배너 등은 **`a` 태그로 감싸고 `href="#"`으로 작성**해 tab할 경우 자연스레 이동 되어야 한다. (감점 요인 중 하나)
- **⭐️ 슬라이드 배너 구현 필수** (구현하지 못 할 경우 바로 **`실격 처리`** 됨)
  - 기능 구현 없이 하나의 이미지만 배치했을 경우 실격 처리 됨
- 기능 구현 시 JavaScript, Jquery, CSS 등을 활용해 구현해야 함
  - 주어진 시간이 4시간으로 시간 엄수 필수 
- 페이지 오류 나면 안 됨
  - [W3C validator](https://validator.w3.org/) 에서 html 파일 검사 시 `[ERROR]` 날 경우 감점
  - [W3C validator](https://validator.w3.org/) 에서 css 파일 검사 시 `[ERROR]` 날 경우 감점
  - 콘솔 창에서 error 날 경우 감점
- 파일 용량 제한 있음
  - 파일 용량(5MB) 초과시 실격
 
## 작업 요구 사항
- 레이아웃 잡기
- `nav` drop down 메뉴 구현 (hover시 하나 씩/전부 나오기(가로/세로) - 랜덤)
- 슬라이드 배너 구현 (fade 효과, 왼/오른쪽으로 이동, 위/아래로 이동 - 랜덤)
- 탭 메뉴 구현
- 팝업 창 구현
- 요구 사항에 맞게 스타일 주기 (hover할 경우 등)

## 예시 화면
https://github.com/jieun419/web-di-study/assets/109754988/fb037f0a-167b-4e98-8718-0ef71aa8c4c6

## 작업 리스트
[사이트 유형 - A1](https://github.com/jieun419/web-di-study/blob/main/html/webd-1.html)
[사이트 유형 - A2](https://github.com/jieun419/web-di-study/blob/main/html/webd-2.html)<br/>
[사이트 유형 - B1](https://github.com/jieun419/web-di-study/blob/main/html/webd-3.html)
[사이트 유형 - B2](https://github.com/jieun419/web-di-study/blob/main/html/webd-4.html)
[사이트 유형 - B3](https://github.com/jieun419/web-di-study/blob/main/html/webd-5.html)<br/>
[메뉴 기능 모음집](https://github.com/jieun419/web-di-study/blob/main/html/webd-m.html)

## 작업 순서
1. 레이아웃 잡기
2. 이미지 작업하기 (배너, 로고 등)
3. 간단한 기능 먼저 작업하기 (popup, tabmenu)
   - css에서 `active` 클래스 유무로 작업하면 수월함
   - `classList.add`, `classList.remove` 활용하기
   ```js
   addEventListener("click", 함수)
   ```
4. css로 스타일 작업하기
   - 상단에 '@charset "UTF-8";' 작성하기
   ```css
   @charset "UTF-8";
   *{}
   ```
5. js 기능 구현하기 (navmenu, slider)
   - **navmenu :** `this`, `style.height` 속성 사용하기
   - mouseenter, mouseleave도 있지마 시험지에 요구하는 마우스 이벤트 사용하기
   ```js
   addEventListener("mouseover", 함수)
   addEventListener("mouseout", 함수)
   ```   
   - **slider :** `setInterval`, 배열 구조를 생각해 작업하기 (ex - arr[0])
   ```js
   setInterval(()=> {
     //반복할 함수 작성하기
   }, 3000)

   // fade 효과
   style.opacity = "0";
   style.opacity = "1";

   // 왼/오른쪽으로 이동
   style.marginLeft = "-슬라이드 넓이%"
   style.transition = "all 0.6s"

   // 위/아래로 이동
   style.marginTop = "슬라이드 높이px"
   style.transition = "all 0.6s"

   // 왼/오/위/아래 이동 시 필수 사항
   // 1. 맨 뒤에 앞에 요소 붙여 두기
   const sliderClone = sliderCont.firstElementChild.cloneNode(true); // 노드 복사하기
   sliderCont.appendChild(sliderClone) // 맨 뒤에 배치하기

   // 2. 끝까지 도달했을 때 다시 처음으로 돌리기
    if (currentIndex === slider.length) {
      setTimeout(() => {
      // 스타일 초기화
        sliderCont.style.marginLeft = "0";
        sliderCont.style.transition = "0s";
      // index 초기화
        currentIndex = 0;
      }, 700)
    }
   ```

## style 기본 세팅 필수
```css
/* 인코딩 */
@charset "UTF-8";

/* reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
  font-family: "맑은 고딕", sans-serif; /*폰트 스타일 별로라서 추가함*/
}

body {
  background-color: #fff;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  cursor: pointer;
  background-color: transparent;
}
```
