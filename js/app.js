// 네비게이션 요소 객체 작성
const navConetents = {
  title: [
    'collection',
    'store location',
    'adverisoment',
    'oline store',
    'contact',
    'corporate',
  ],
  img: [
    'img/thumb1.jpg',
    'img/thumb2.jpg',
    'img/thumb3.jpg',
    'img/thumb4.jpg',
    'img/thumb5.jpg',
    'img/thumb6.jpg',
  ],
  subMenu: 'menu Item',
};

// 요소 삽입을 위한 DOM 변수
const nav = document.querySelector('nav ul');

// 삽입될 요소 초기화 변수
// let naviList = '';

// navConetents.title.map((content, index) => {
//   naviList += `<li><a href="#">${content}</a></li>`;
//   console.log(naviList);
// });

// // +, -, /, *, %, +=, -=, */, ==, ===

// nav.insertAdjacentHTML('beforeend', naviList);
