'use strict';

// #text에 접근하는 counter 함수를 생성하고 #count 태그의 내용을 변경
function counter() {
  let content = document.getElementById('text').value;
  // 입력문자 개수가 100을 넘어가면 자르기
  if (content.length > 100) {
    content = content.substring(0, 100);
    document.getElementById('text').value = content;
  }
  // 입력문자 개수 표기
  document.getElementById('count').innerHTML = `( ${ content.length } / 100 )`;
}
counter();