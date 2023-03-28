let now = new Date();
let start = new Date('2021-05-14');

// 현재 ms에서 계산 시작일 ms 빼서 경과시간 측정
let timeDiff = now.getTime() - start.getTime()

// ms * 60초 * 60분 * 24시간 + 1(1일부터 시작)
let day = parseInt(timeDiff / (1000 * 60 * 60 * 24) + 1)

// 크리스마스까지 남은 D-day 계산
let christmas = new Date('2023-12-25');
let timeDiff2 = christmas.getTime() - now.getTime();
let day2 = parseInt(timeDiff2 / (1000 * 60 * 60 * 24) + 1);

// 만난 날로부터 1000일 되는 날짜 계산
let ms = start.getTime() + 999 * (1000 * 60 * 60 * 24)
let thousand = new Date(ms);
let thousandDate = thousand.getFullYear() + '년 ' + (thousand.getMonth() + 1) + '월 ' + thousand.getDate() + '일';

// 1000일까지 남은 D-day 계산
// let thousand2 = new Date('2024-2-7');
let timeDiff3 = thousand.getTime() - now.getTime();
let day3 = parseInt(timeDiff3 / (1000 * 60 * 60 * 24) + 1);



// 화면에 기념일로부터 몇일이 지났는지 출력.
document.getElementById('love').innerHTML = `💛 우리 만난지 ${ day } 일째`

// 화면에 크리스마스까지 남은 D-day 출력.
document.getElementById('christmas').innerHTML = `🎄 크리스마스까지 D - ${ day2 }`

// 만난 날로부터 1000일 되는 날짜 출력.
document.getElementById('thousand-date').innerHTML = `💙 1000일되는 날은 ${ thousandDate }`

// 화면에 1000일까지 남은 D-day 출력.
document.getElementById('thousand-d-day').innerHTML = `💜 1000일까지 D - ${ day3 }`