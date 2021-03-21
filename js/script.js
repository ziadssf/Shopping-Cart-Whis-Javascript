let links = document.querySelector('#links');
let user = document.querySelector('#user');
let user_info = document.querySelector('#user_info');

let log_out = document.querySelector('#log_out'),
    log_out_burger = document.querySelector('#log_out_burger'),
    log_in_burger = document.querySelector('#log_in_burger')



if(localStorage.getItem("username")){
    links.remove()
    user.style.display = "flex";
    user_info.innerHTML = "Hello " + localStorage.getItem('username');
    log_out.addEventListener('click', function(){
        localStorage.clear();
        setTimeout(function(){
            window.location = 'regster.html';
        },900)
    })

    log_in_burger.style.display='none';
    log_out_burger.style.display='block';
    
    log_out_burger.addEventListener('click', function(){
        localStorage.clear();
        setTimeout(function(){
            window.location = 'regster.html';
        },900)
    }) 
}else{
    user_info.style.display='none'
    log_in_burger.style.display='block';
    log_out_burger.style.display='none';
}



// Products --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

let allProducts = document.querySelector('.row');
let cartproductBurger = document.querySelector('.cartproduct-burger p');
let cartproductUser = document.querySelector('.cartproduct-user p');
let cartproductLinks = document.querySelector('.cartproduct-links p');
let badgeLink = document.querySelector('#links .badge');
let badgeUser = document.querySelector('#user .badge');
let productsInCart = document.querySelector('.productsInCart');









let productsfunc;
(productsfunc = function(products = []){
    let items = JSON.parse(localStorage.getItem('price'))

    let pruductsUI = products.map( (item) =>{
        return `<div class='product-item col-lg2-4'>
                    <div class="card"/>
                        <img onclick="saveItemData(${item.id})" class="card-img" src="${item.imgUrl}" alt="${item.title}">
                        <div class="card-body">
                            <div class="card-header">
                                <h2 class="text-center">${item.title}</h2>
                            </div>
                            <div class="text-muted">
                                <p class="card-text">I’m the first card in the group, displaying some cool group very nice and good.</p>
                                <span class='size'> Size : ${item.size}</span>
                                <span class='price'> Price : ${item.price}$</span>
                                <div class="actions mt-10">
                                    <button onclick = "checkedUser() || addedToCart(${item.id})" id="addToCart" class="btn btn-success btn-lg addToCart">Add to <i class="fa fa-cart-plus"></i></button>
                                    <button style="background-color: ${item.liked === true ? 'white' : ''}" onclick="addedToFavorite(${item.id})" id="addToMyfev" class="btn btn-danger text-center btn-lg addToMyfev"><i style="color: ${item.liked === true ? '#dc3545' : ''}" class="fa fa-heart" id="heart"></i></button>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>`
    })

    

    allProducts.innerHTML = pruductsUI.join("");
})(JSON.parse(localStorage.getItem("pruducts")));






function checkedUser() {
    if (!localStorage.getItem('username')) {
        alert("You can't add items in the Cart \nPlease Sign Up")
        window.location = 'regster.html'
    }
}


if (!localStorage.getItem('uername')) {
        if (localStorage.getItem('username')) {
            function addedToCart(id){
                let chosenItem = products.find((item) => item.id === id );   
                cartproductBurger.innerHTML += `<p>${chosenItem.title}</p>`;
                cartproductLinks.innerHTML += `<p>${chosenItem.title}</p>`;
                badgeLink.innerHTML = addedItem.length+1;
            }     
        }
}
let addedItem = !localStorage.getItem('cartProducts') ? [] : JSON.parse(localStorage.getItem('cartProducts'));
if (addedItem) {
    addedItem.map((item)=>{
        cartproductBurger.innerHTML += `<p>${item.title} <span class="badges">${item.qty}</span></p>`;
        cartproductUser.innerHTML += `<p>${item.title} <span class="badges">${item.qty}</span></p>`;
        badgeUser.innerHTML = addedItem.length;
    })
}

if(localStorage.getItem('username')){
    if (localStorage.getItem('username')) {
        function addedToCart(id){
            let product = products.find((item) => item.id === id );
            let isProductCart = addedItem.some(i => i.id === product.id)

            if(isProductCart){
                addedItem = addedItem.map(p=>{
                    if(p.id === product.id) p.qty +=1;
                    return p;
                })
            }else{
                addedItem.push(product);
            }

            cartproductBurger.innerHTML = "";
            cartproductUser.innerHTML = "";
            addedItem.forEach(item =>{
                cartproductBurger.innerHTML += `<p>${item.title} <span class="badges">${item.qty}</span></p>`;
                cartproductUser.innerHTML += `<p>${item.title} <span class="badges">${item.qty}</span></p>`;
            })

            badgeUser.innerHTML = addedItem.length;
            let unqueAddedItem = getUniqueArr(addedItem ,"id")
            localStorage.setItem('cartProducts', JSON.stringify(unqueAddedItem))
        }
    }
}

//  AddedToFavorite

let favoriteItem = !localStorage.getItem('productFavorite') ? [] : JSON.parse(localStorage.getItem('productFavorite'));
function addedToFavorite(id){
    let chosenItem = products.find((item) => item.id === id );
    chosenItem.liked = true;
    favoriteItem = [...favoriteItem, chosenItem]
    let unqueAddedItem = getUniqueArr(favoriteItem ,"id")
    localStorage.setItem('productFavorite', JSON.stringify(unqueAddedItem))
    products.map(item =>{
        if(item.id === chosenItem.id){
            item.liked = true;
        }
    });
    localStorage.setItem('products',JSON.stringify(products))
    productsfunc(products)

} 

function getUniqueArr(arr,filterType){
    let unique = arr
    .map((item)=> item[filterType])
    .map((item,i,final)=>final.indexOf(item)===i && i)
    .filter(item=>arr[item])
    .map(item=>arr[item])
    return unique;
}


function saveItemData(id){
    localStorage.setItem('itemId',id)
    window.location = 'cartDetales.html';
    localStorage.setItem('pruducts',JSON.stringify(products))
}


if (localStorage.getItem('username')) {
    $(function(){
        $('.iconBurger').click(function(){
            $('.slideBurger').slideToggle(300)
        })
        $('.icone-burger').click(function(){
            $('.cartproduct-burger').fadeToggle(300)
        })
        $('.icone-links').click(function(){
            $('.cartproduct-links').slideToggle(300)
        })
        $('.icone-user').click(function(){
            $('.cartproduct-user').slideToggle(300)
        })
    
    })
}



function checkedToConect() {
    if (localStorage.getItem('username')) {
        console.log('conected');
    }else {
        setTimeout(()=>{
            window.location = 'login.html';
        },1000)
    }
}

