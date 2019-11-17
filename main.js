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
                        gr: <input id = "g">
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

