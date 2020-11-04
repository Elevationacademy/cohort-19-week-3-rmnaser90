// const head=$('.header')
// console.log(head);
// head.css('color','red')

// $('h1').css('color','blue')
// $('.red-div').css('color','red')
// $('li:nth-child(1)').css('color','green')
// $('li:nth-child(2)').css('color','pink')
// $('#brown-div').css('color','brown')



// const b2 =$('#b2')
// $('#b1').addClass('box')
// b2.addClass('box')

// $("#my-input").val("Terabyte")

// let beObject = b2.data()
// console.log(beObject);
// console.log(`The item with barcode ${beObject.barcode} will expire on ${beObject.expirationdate}`);

// const hovered = function () {
//     console.log('hovered');
//     b2.css('background','red')
// }
// b2.hover(hovered)


// $('button').click(function () {

//     alert($('#my-input').val())
    
// })


// $('.box').hover(function () {
//     console.log(this.id);
// })



// const box = $('.box')

// box.hover(function () {
    

//     $(this).css('background','red')
// })





// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// $("body").append(elem)





// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')


// const text = "Banana"
// const item = $(`<div class=fruit>${text}</div>`)

// $('.fruits').append(item)

// const feedMe=$('.feedme')
// const container=$('.container')
// let count=0
// container.on('click','.feedme',function () {
// let feedMore=$(`<div class=feedme id=id-${count}>Feed me more</div>`)
// count++
// container.append(feedMore)
// console.log(this.id);
// })

// $('.box').remove()


const addDiv = function() {
    $("body").append("<div class=box></div>")
  };
  
  $("button").on("click", addDiv);
  
  $(".box").on("click", function() {
    alert("hi")
  });


