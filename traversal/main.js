let compID=[]

$('.generator').on('click',function () {
    
let processorID=$(this).closest('.processor').attr('id')

let cmpDataID =$(this).closest('.computer').data('id')
compID.push({['cmp_id']:cmpDataID})
let busNum = $(this).closest('.computer').find('.BUS').text()


console.log("Processor id: "+processorID);
console.log('computer data-id: '+cmpDataID);
console.log('BUS: '+busNum);
console.log(compID);
})




$('.validator').on('click',function () {
let genTXT=$(this).closest('.computer').find('.generator').text()
let MB = $(this).closest('.computer').find('.MB').text()
let QR = $(this).closest('.computer').find('.QR').text()

console.log("generator: "+genTXT);
console.log("MB: "+ MB);
console.log(QR);
  
})