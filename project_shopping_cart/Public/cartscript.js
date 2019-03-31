$(()=>{
function refreshPage(products){

    $('#card-group').empty()
    
    products.forEach((product)=>{
        
        $('#card-group')
        .append(
            $('<div>')
             .attr('class','card text-white bg-dark mb-3 m-3')
             .attr('style','max-width: 18rem')
             .append(
                 $('<img>')
                 .attr('src','https://via.placeholder.com/200')
                 .attr('class','card-image-top')
             )
             .append(
                 $('<div>')
                 .attr('class','card-body text-center')
                 .append(
                   $('<h5>').attr('class','card-title').text(product.name)
                   )
                 .append(
                     $('<p>').attr('class','card-text').text('sold By '+ product.vendor.name)
                 )
                 .append(
                     $('<input>').attr('type','number').attr('class','form-control')
                 )
                 .append(
                     $('<button>').attr('type','submit').attr('class','btn-sm btn-light mt-1').text('ADD')
                     .click((e)=>{
                        //  $.post(
                        //      '/cart',
                        //      {quantity: e.target.prev().val(),
                        //       productId: product.id 
                        //      },
                        //      (dat)=>{
                        //          UpdateCart(dat)
                        //      }
                        //  )
                        console.log(e.target.previousSibling.value)
                         
                     })
                 )
                 .append(
                     $('<p>').attr('class','card-text')
                     .append($('<small>').attr('class','text-muted').text('only '+product.quantity+' left '))
                 )
             )
        )
        
    })
}

$('#accCart').click(()=>{
    $('#userCart').toggle()
})



$.get(
    '/products',
    (data)=>{
        refreshPage(data)
    }
)

})