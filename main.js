//окно при нажатии на кнопку COOK
let cookButton = document.querySelector('.cook-btn');
let cookWindow = document.querySelector('.cook-window');
let filter = document.querySelector('.filter');
let closeButton = document.querySelector('.close');

cookButton.addEventListener('click', function(){
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
    
    let product = document.createElement('p');
    product.classList.add(element.textContent)
    product.innerHTML = `<b>${element.textContent}</b><br>  
                        gr: <input id = "g" data-tooltip="1pc">
                        kcal: <output name = "kc">0
                        $<output name = "pr">0
                        <div class="remove-product"></div>`;
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



