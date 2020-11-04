const list = $('#list')
const input = $('input')
const btn = $('button')

btn.click(function () {
let name = input.val()
input.val('')
let newItem = $(`<li class="item">${name}</li>`)    
list.append(newItem)


})


list.on('click','.item',function () {
    $(this).remove()
})

