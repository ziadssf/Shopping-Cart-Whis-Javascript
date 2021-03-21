let productAll = localStorage.getItem('productFavorite');

if (productAll) {
    let items = JSON.parse(productAll);
    allFavoriteProducts(items);
    removeFromFavorites = (id)=>{
        let items =  JSON.parse(productAll)
        let filteredItems = items.filter((item)=> item.id !== id)
        allFavoriteProducts(filteredItems)
        localStorage.setItem('productFavorite',JSON.stringify(filteredItems))
        window.location = 'favorites.html'
    }

    if(items.length === 0){
        document.querySelector('.container2').innerHTML=`<div class="no-items"><h1 style="position: absolute; top: 50%;left: 50%;transform: translate(-50%,-50%);">There Is No Products To Show</h1></div>`
        
    }
}
function allFavoriteProducts(products){
    let favoritePruductsUI = products.map((item) =>{
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
                                <span class='priceCarts'> Price : ${item.price}$</span>
                                <div class="mt-10 actions">
                                    <button onclick = "removeFromFavorites(${item.id})" id="addToCart" class="btn btn-success btn-lg addToCart">Remove From <i class="fa fa-heart"></i></button>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>`;
    })
    document.querySelector('.productFavorite').innerHTML = favoritePruductsUI.join("");
}