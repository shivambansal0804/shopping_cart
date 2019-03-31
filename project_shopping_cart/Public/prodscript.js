$(()=>{
    function RefreshList(products){
    $('#tbody').empty()
    
     products.forEach(product => {
        
        
        $('#tbody')
        .append(
          $('<tr>')
            //   .attr('style','height: 10px;')
              .append($('<th>').attr('scope','row').text(product.vendor.id))
              .append($('<td>').text(product.name) )
              .append($('<td>').text(product.quantity))
              .append($('<td>').text(product.price))
              .append($('<td>').text(product.vendor.name))
              
              )

    $('#inputProduct').val('')
    $('#inputPrice').val('')
    $('#inputQuant').val('')
    
    })
    
    }

    $.get(
        '/vendors',
        (vendors)=>{
            $('#inputVendor').empty()
            vendors.forEach(vendor=>{
                $('#inputVendor')
                  .append(
                      $('<option>')
                       .text(vendor.name)
                       .attr('value',vendor.id)
                       
                         )
               })
        }
)
    $.get(
        '/products',
        (data)=>{
            RefreshList(data)
        }
    )
    
    
    
    
    $("#add-product").click(
        ()=>{
            console.log('clicked')
            $.post(
                '/products',
                {name: $('#inputProduct').val(),
                price: $('#inputPrice').val(),
                quantity: $('#inputQuant').val(),
                vendorId: $('#inputVendor').val()
            
            },
                (data)=>{
                    RefreshList(data)
                }
            )
        }
    )
    
    })