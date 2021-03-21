let searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup',function(e){
    let arry = JSON.parse(localStorage.getItem('pruducts'))
    let val = e.target.value.trim()
    search(val, arry)
    if(e.target.value.trim() === ""){
        productsfunc(JSON.parse(localStorage.getItem("pruducts")))
    }
})

function search(title, myArray){
    let arr = myArray.filter((item)=>item.title.indexOf(title) !== -1);
    productsfunc(arr)
}