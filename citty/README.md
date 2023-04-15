# myCat
🐈🐈‍⬛ 수업에서 들은 Sass를 이용하여 고양이 반응형 랜딩페이지 만들어보았습니다.

[🔗 Git pages 보러가기](https://jaycode-git.github.io/myCat/)

## 1. 변수 설정
``` scss
// 📌 size
$width : min(100%, 1320px);
$size: 10px, 20px, 30px, 40px, 50px, 60px, 70px, 80px, 90px, 100px, 110px, 120px;


// 📌 color
$primary : #5288D9;
$secondary : #6882a7;
$thirdary : #e7edf3;
$black : black;
$white : white;
$gray : #767676;
$blue : #263140;


// 📌 font
$family : 'Spoqa Han Sans Neo',
'sans-serif';


// 📌 Background
$path : '../img/';


// 📌 mediaQuery
$media-pc: 1024px;
$media-tab: 768px;
$media-m-lg: 425px;
$media-m-sm: 375px;
```

## 2. Mixin
``` scss
// ✅ font
@mixin font($type: null, $color: inherit) {
  color: $color;

  @if $type ==title {
    font-weight: 700;
    font-size: clamp(24px, 4vw, 48px);
  }

  @else if $type ==sub-title {
    font-weight: 700;
    font-size: clamp(24px, 4vw, 36px);
  }

  @else if $type ==desc {
    font-size: 14px;
  }

  @else {
    font-weight: 400;
    font-size: clamp(14px, 4vw, 16px);
  }
}


// ✅ Vendor prefix
@mixin v-prefix($property, $value) {
  @content;

  @if $property ==radius {
    border-radius: $value;
    -webkit-border-radius: $value;
    -moz-border-radius: $value;
    -ms-border-radius: $value;
    -o-border-radius: $value;
  }

  @else if $property ==translate {
    transform: translate($value);
    -webkit-transform: translate($value);
    -moz-transform: translate($value);
    -ms-transform: translate($value);
    -o-transform: translate($value);
  }

  @else if $property ==translateX {
    transform: translateX($value);
    -webkit-transform: translateX($value);
    -moz-transform: translateX($value);
    -ms-transform: translateX($value);
    -o-transform: translateX($value);
  }

  @else if $property ==translateY {
    transform: translateY($value);
    -webkit-transform: translateY($value);
    -moz-transform: translateY($value);
    -ms-transform: translateY($value);
    -o-transform: translateY($value);
  }

}


// ✅ Background url
@mixin bg($name, $color: null, $size: center, $position: cover, $repeat : no-repeat) {
  background: $color url($path + $name)$repeat $size/$position;
  @content;
}


// ✅ Flex
@mixin flex($align: null, $way: row) {
  display: flex;
  flex-direction: $way;
  @content;

  @if(#{$align}=='center') {
    justify-content: center;
    align-items: center;
  }

  @else if (#{$align}=='leftCenter') {
    align-items: center;
  }

  @else if (#{$align}=='spaceCenter') {
    justify-content: space-between;
    align-items: center;
  }

  @else if (#{$align}=='space') {
    justify-content: space-between;
  }
}


// ✅ Pseudo content
@mixin pseudo($content: '') {
  content: $content;
  @content;
}


// ✅ Margin Auto
@mixin m-auto($top: 0, $bottom: null) {
  @content;

  @if($top ==0) {
    margin: 0 auto;
  }

  @else {
    margin: $top auto $bottom;
  }
}


// ✅ media Query
@mixin media($size) {

  @if $size=='m-sm' {
    @media (max-width:$media-m-sm) {
      @content;
    }
  }

  @else if $size=='m-lg' {
    @media (max-width:$media-m-lg) {
      @content;
    }
  }

  @else if $size=='tab' {
    @media (max-width:$media-tab) {
      @content;
    }
  }

  @else if $size=='pc' {
    @media (max-width:$media-pc) {
      @content;
    }
  }

  @else {
    @media (max-width:$size) {
      @content;
    }
  }
}
```

## 3. Components
``` scss
.wrapper {
  width: $width;
  height: 100%;
  @include m-auto(0);
  padding: 0 nth($size, 2);
}

// a[class|="btn-"],
a[class^='btn'],
button[class^='btn'] {
  @include font();
  background: $primary;
  color: $white;
  border: none;
  padding: clamp(10px, 2vw, 15px) clamp(24px, 2vw, nth($size, 3));
  cursor: pointer;
  @include v-prefix(radius, nth($size, 4));
  &:hover {
    box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, .2)
  }
}

.round-img {
  width: 100%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
  @include v-prefix(radius, nth($size, 3));
}wrapper {
  width: $width;
  height: 100%;
  @include m-auto(0);
  padding: 0 nth($size, 2);
}

a[class^='btn'],
button[class^='btn'] {
  background: $primary;
  color: $w;
  font-size: map-get($font-size, "p");
  padding: clamp(10px, 2vw, 15px) clamp(24px, 2vw, nth($size, 3));
  cursor: pointer;
  border: none;
  border-radius: nth($size, 4);
  -webkit-border-radius: nth($size, 4);
  -moz-border-radius: nth($size, 4);
  -ms-border-radius: nth($size, 4);
  -o-border-radius: nth($size, 4);

  &:hover {
    box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, .2)
  }
}
```