const list = $('#list')
const input = $('input')
const btn = $('button')

btn.click(function () {
let name = input.val()
input.val('')
let newItem = $(`<li>${name}</li>`)    
list.append(newItem)


})

