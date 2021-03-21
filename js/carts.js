let productAll = localStorage.getItem('cartProducts');

if (productAll) {
    let items = JSON.parse(productAll);
    allCartsProducts(items);
    removeFromCart = (id)=>{
        let items =  JSON.parse(productAll)
        let filteredItems = items.filter((item)=> item.id !== id)
        allCartsProducts(filteredItems)
        localStorage.setItem('cartProducts',JSON.stringify(filteredItems))
        window.location = 'cartProducts.html'
    }

    if(items.length === 0){
        document.querySelector('.container2').innerHTML=`<div class="no-items"><h1 style="position: absolute; top: 50%;left: 50%;transform: translate(-50%,-50%);">There Is No Products To Show</h1></div>`
        
    }
}

// function decriment(qty){
//     let items = JSON.parse(productAll);
//      return qty+1;

// }

function allCartsProducts(products){
    let priceProdct = [];
    let pruductsUI = products.map((item) =>{
        priceProdct.push(item.price*item.qty)
        localStorage.setItem('price', JSON.stringify(priceProdct))

        return `<div class='product-item col-lg2-4'>
                    <div class="card"/>
                        <img class="card-img" src="${item.imgUrl}" alt="${item.title}">
                        <div class="card-body">
                            <div class="card-header">
                                <h2 class="text-center">${item.title}</h2>
                            </div>
                            <div class="text-muted">
                                <p class="card-text">I’m the first card in the group, displaying some cool group very nice and good.</p>
                                <span class='size'> Size : ${item.size}</span><br/>
                                <span> Quntaty : ${item.qty}</span><br/>
                                <span class='priceCarts'> Price : ${item.price * item.qty}$</span>

                                <div class="mt-10 actions">
                                    <button onclick = "removeFromCart(${item.id})" id="addToCart" class="btn btn-success btn-lg addToCart">Remove From <i class="fa fa-cart-arrow-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    })
    document.querySelector('.productsInCart').innerHTML = pruductsUI.join("");
}


{/* <div class="action">
<button onclick="${item.qty = item.qty+1}" class="btn btn-success">+</button>
<span>${item.qty}</span>
<button class="btn btn-danger">-</button>
</div> */}


