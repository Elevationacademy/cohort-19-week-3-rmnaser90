const cart = $('#cart')
const item = $('.item')

item.on('click',function () {
    let itm=$(this)
    if(itm.data('instock')){

cart.append($(`<h3>${itm.text()}</h3>`))


    }else{console.log('item out of stock');}
    
})
