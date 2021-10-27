const image = ['img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = ['Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const mgItem = document.getElementsByClassName('mg-item');

let counter = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click',function(){
  counter--;
  if(counter < 0) counter = mgItem.length - 1;
  console.log(counter);

});

next.addEventListener('click',function(){
  counter++;
  if(counter > mgItem.length - 1) counter = 0;
  console.log(counter);
});
