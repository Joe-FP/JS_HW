var CATS_ARRAY = [
  {name: 'Dave', favFood: 'Pasta', image: 'https://i.ytimg.com/vi/g7ZnOq-o7rc/hqdefault.jpg'},
  {name: 'Joe', favFood:'Pizza', image: 'https://i.imgur.com/Y3Hp4en.jpg'},
  {name: 'Boba', favFood:'Sock fluff', image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  {name: 'Barnaby', favFood:'Tuna', image: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'},
  {name: 'Max', favFood:'Whiskas Temptations', image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'}
]

var addCat= function(name, favFood, image){
  var newCat = createNewCat();
  var catName = addName(name);
  var catFood = addFood(favFood);
  var catImage = addImage(image);
  appendElements(newCat, catName, catFood, catImage);
}

var createNewCat = function(){
  var newCat = document.createElement("ul");
  newCat.setAttribute("class", "cat");
  return newCat;
}

var addName = function(name){
  var li = document.createElement("li");
  var data = document.createTextNode('Name: ' + name)
  li.appendChild(data);
  return li;
}

var addFood = function(favFood){
  var li = document.createElement("li");
  var data = document.createTextNode('Favourite food: ' + favFood)
  li.appendChild(data);
  return li;
}

var addImage = function(image){
  var li = document.createElement("li");
  var img = document.createElement("img");
  img.setAttribute('src', image);
  img.setAttribute('width', '500');
  li.appendChild(img);
  return li;
}

var appendElements = function(newCat, catName, catFood, catImage){
  var cats = document.querySelector('#cats');
  newCat.appendChild(catName);
  newCat.appendChild(catFood);
  newCat.appendChild(catImage);
  cats.appendChild(newCat);
}

var app = function(){
  for(var cat of CATS_ARRAY){
    addCat(cat.name, cat.favFood, cat.image);
  }
}

window.onload = app;
