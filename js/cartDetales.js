let user = document.querySelector('#user');
let user_info = document.querySelector('#user_info');



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


function cartDetale(id){
   let cartDetales = document.querySelector('.cartDetales .container .row');
   let cartDetalesPruducts = JSON.parse(localStorage.getItem('pruducts')).filter(product=>{
       return product.id == id;
   })
   let cartDetalesUi = cartDetalesPruducts.map(item =>{
       return `<div class='product-item col2-6'>
                   <div class="card"/>
                       <img class="img2 card-img" src="${item.imgUrl}" alt="${item.title}">
                       <div class="card-body">
                           <div class="card-header">
                               <h2 class="text-center">${item.title}</h2>
                           </div>
                           <div class="text-muted text-center">
                               <p class="card-text">I’m the first card in the group, displaying some cool group very nice and good.I’m the first card in the group, displaying some cool group very nice and good.I’m the first card in the group, displaying some cool group very nice and good.I’m the first card in the group, displaying some cool group very nice and good.I’m the first card in the group, displaying some cool group very nice and good.I’m the first card in the group, displaying some cool group very nice and good.</p>    
                               <span > Size : ${item.size}</span><br/>
                               <span > Quntaty : ${item.qty}</span><br/>
                                <span class='priceDetales'> Price : ${item.price}$</span>
                            </div>
                       </div>
                   </div>
               </div>`
   })

   cartDetales.innerHTML = cartDetalesUi.join("");
}cartDetale(localStorage.getItem('itemId'))


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