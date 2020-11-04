$('body').append($(`<div class="box"></div>
<div class="box"></div>`))

$('body').on('mouseenter','.box',function () {
    console.log('enter');
$(this).css('background','red')

})
$('body').on('mouseleave','.box',function () {
    console.log('leave');
    $(this).css('background','#8e44ad')
    
    })