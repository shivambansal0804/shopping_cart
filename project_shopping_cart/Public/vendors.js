$(()=>{
function RefreshList(vendors){
$('#tbody').empty()

 vendors.forEach(vendor => {
    
    $('#tbody')
    .append(
      $('<tr>')
        //   .attr('style','height: 10px;')
          .append($('<th>').attr('scope','row').text(vendor.id))
          .append($('<td>').text(vendor.name) )
          .append($('<td>')
             .append($('<button>')
               .attr('class','btn btn-dark p-1')
               .attr("id","delete-vendor")
               .text('REMOVE'))
               .click(()=>{
                $.post(
                    '/vendors',
                    {delete: true,
                     id: vendor.id  },
                    (data)=>{
                        RefreshList(data)
                    }
                )
               })
          )
             
          
    )
    $("#vendor-input").val('')
})

}
$.get(
    '/vendors',
    (data)=>{
        RefreshList(data)
    }
)




$("#add-vendor").click(
    ()=>{
        console.log('clicked')
        $.post(
            '/vendors',
            {name: $('#vendor-input').val()},
            (data)=>{
                RefreshList(data)
            }
        )
    }
)

})