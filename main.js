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

ingredients.forEach(element => element.addEventListener('click', function(event){
    let product = document.createElement('p');
    product.innerHTML = `<b>${element.textContent}</b><br>  
                        gr: <input id = "g">
                        kcal: <output name = "kc">0
                        $<output name = "pr">0`;
    productList.append(product);
}));