
let ingredientsArr = [
  {
    id: 1,
    group: "protein",
    name: "chicken",
    price100gr: 0.7,
    kcal: 190,
    pc: 1500
  },
  {
    id: 2,
    group: "protein",
    name: "eggs",
    price100gr: 0.3,
    kcal: 157,
    pc: 55
  },
  {
    id: 3,
    group: "protein",
    name: "fish",
    price100gr: 0.8,
    kcal: 140
  },
  {
    id: 4,
    group: "protein",
    name: "shrimps",
    price100gr: 1.2,
    kcal: 95,
  },
  {
    id: 5,
    group: "greenVeg",
    name: "lettuce",
    price100gr: 0.2,
    kcal: 14,
  },
  {
    id: 6,
    group: "greenVeg",
    name: "peas",
    price100gr: 0.5,
    kcal: 42,
    pc:135
  },
  {
    id: 7,
    group: "greenVeg",
    name: "broccoli",
    price100gr: 0.5,
    kcal: 28
  },
];

//заполнение ul
let proteinList = document.querySelector('.left .protein');
let greenVegList = document.querySelector('.left .greenVeg');
function fillUl(arr){
  arr.forEach(function(item){
    let liElement = document.createElement('li');
    liElement.innerHTML = item.name;
    switch(item.group){
      case 'protein': 
        proteinList.append(liElement);
        break;
      case 'greenVeg': 
        greenVegList.append(liElement);
        break;
    }
  });
}

fillUl(ingredientsArr);

//окно при нажатии на кнопку COOK
let cookButton = document.querySelector('.cook-btn');
let cookWindow = document.querySelector('.cook-window');
let filter = document.querySelector('.filter');
let closeButton = document.querySelector('.close');

cookButton.addEventListener('click', function(){
    //показать в окне весь заказ

    cookWindow.style.display = 'block';
    filter.style.display = 'block';
});

closeButton.addEventListener('click', function(){
    cookWindow.style.display = 'none';
    filter.style.display = 'none';
});

//добавление продуктов в поле added products
let ingredients = document.querySelectorAll('.left li');
let productList = document.querySelector('.right-fix .added');

ingredients.forEach(element => element.addEventListener('click', function(){
    //не добавлять, если уже в списке
    let exist = document.querySelector('.added .'+ element.textContent)
    if(exist){
        productList.scrollTo(0, exist.offsetTop);
        exist.style.backgroundColor = 'rgba(86, 97, 44, 0.7)';
        setTimeout(() => exist.style.backgroundColor = 'rgba(243, 230, 113, 0.9)', 1000);
        return;
    }

    //найти объект с таким именем в БД
    let elOfArr = ingredientsArr.find(el => el.name == element.textContent);
    let product = document.createElement('p');
    product.classList.add(element.textContent);
    let contentProduct = ``;
    //если продукт поштучный, добавить подсказку
    if(elOfArr.hasOwnProperty('pc'))
      contentProduct += `data-tooltip="1pc-${elOfArr.pc}gr"`;

    contentProduct =  `<b>${element.textContent}</b><br>  
    gr: <input id = "${element.textContent}" `+ contentProduct + `>
    <div class="remove-product"></div>` 

    product.innerHTML = contentProduct;
    productList.append(product);

    productList.scrollBy(0, product.offsetTop);
}));

//при нажатии на крестик удалить из списка
productList.addEventListener('click', function(event){
    if (event.target.className != 'remove-product') 
        return;
    event.target.closest('p').remove(); 
});



//подсказка: сколько грамм в штуке "1 apple-165pc"
let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  productList.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { 
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

//при нажатии на кнопку count подсчитать все поля
let countButton = document.querySelector('.count-btn');
countButton.addEventListener('click', function(){
  let pList = document.querySelectorAll('.right-fix p');
  alert(pList[1].className);

  //continue...
});


