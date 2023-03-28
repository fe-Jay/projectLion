'use strict';

// 빈 lotto array에 6번 반복해서 중복되지 않는 랜덤의 정수를 부여
const lotto = [];
while (lotto.length < 6) {
  const num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}
// lotto array 숫자를 오름차순으로 설정
lotto.sort((a, b) => a - b);

// lotto array 6개에 style을 지정해서 출력
for (let i = 0; i < 6; i++) {
  document.write(`<div class="ball"> ${ lotto[i] } </div>`)
}