# 웹 디자인 기능사 실기 준비
- 시간 단축을 위해 `JQuery`를 배우기 보단 알고 있는 언어 **`JavaScript`** 로 기능 구현할 예정입니다.
- https://www.youtube.com/watch?v=gm4YGPv6jR0&list=PL4UVBBIc6giK95pWwwoTQP82aI9iGNo-g&index=1
- 해당 강의 기준으로 진행될 예정입니다.

## 실기 시험 중 주요 사항
- 마크업 준수 (header, footer, article, section, nav, main 등)
- 접근성 준수 (img 태그에 alt 속성 필수 등)
  - 감점 사유 중 하나 
- **⭐️ 슬라이드 배너 구현 필수** (구현하지 못 할 경우 바로 **`실격 처리`** 됨)
  - 기능 구현 없이 하나의 이미지만 배치했을 경우 실격 처리 됨
- 기능 구현 시 JavaScript, Jquery, CSS 등을 이용해 구현해야 함
  - 주어진 시간이 4시간으로 시간 엄수 필수 
- 페이지(런타임) 오류가 나면 안 됨 
- 파일 용량 제한 있음
  - 파일 용량 초과시 실격
 
## 작업 요구 사항
- 레이아웃 잡기
- `nav` drop down 메뉴 구현 (hover시 하나 씩/전부 나오기(가로/세로) - 랜덤)
- 슬라이드 배너 구현 (fade 효과, 왼/오른쪽으로 이동, 위/아래로 이동 - 랜덤)
- 탭 메뉴 구현
- 팝업 창 구현
- 요구 사항에 맞게 스타일 주기 (hover할 경우 등)

## 예시 화면
https://github.com/jieun419/web-di-study/assets/109754988/fb037f0a-167b-4e98-8718-0ef71aa8c4c6

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
5. js 기능 구현하기 (navmenu, slider)
   - **navmenu :** `this`, `style.height` 속성 사용하기
   ```js
   addEventListener("mounseenter", 함수)
   addEventListener("mounseleave", 함수)
   ```   
   - **slider :** `setInterval`, 배열 구조를 생각해 작업하기 (ex - arr[0])
   ```js
   setInterval(()=> {
     //반복할 함수 작성하기
   }, 초단위)
   ```
   


## style 기본 세팅 필수
```css
/* reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "맑은 고딕", sans-serif; /*폰트 스타일 별로라서 추가함*/
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

button {
  border: none;
  cursor: pointer;
  background-color: transparent;
}
```
