
//model
let cartArray = []








//renderer - view

const cart = $('#cart')


const makeObjArray = function (array) {
    let arr = [...array]
    let objArray = []



    for (let i = 0; i < arr.length; i++) {
        let count = 0
        let item = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (item == arr[j]) {
                count++
                arr.splice(j, 1)
                j--
                i = -1
            }
        }
        //    console.log(item);
        //    console.log(count);
        objArray.push({ item, count })



    }

    return objArray
}


const render = function () {

    cart.empty()


    for (const item of makeObjArray(cartArray)) {

        let newItemPost = $(`  <h3>${item.item} x ${item.count}</h3>   `)
        cart.append(newItemPost)

    }




}












//controller
const item = $('.item')
item.on('click', function () {
    let itm = $(this)
    if (itm.data('instock')) {
        let itmName = itm.text()

        cartArray.push(itmName)


    } else { console.log('item out of stock'); }
    render()
})









