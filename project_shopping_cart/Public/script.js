$(()=>{

var cartItems=[]
 var items=[]
 var Item={
    "name":name,
    "quantity":0
}
var listItems=document.getElementsByClassName("col-4 col-md-3 p-2 container block")
function incrQant(){
for(var i=0;i<listItems.length;i++){
var itemtrack= Object.create(Item)
itemtrack.name='item '+i
console.log(i)
 
//  $(".btn-block col-4 p-2").click(()=>{ 
//      itemtrack["quantity"]+=1
//      console.log('clickeds')
//      incrQant()
//     })
//  console.log('quantity of item is '+itemtrack['quantity'])
//  var value=rowdiv.childElementCount(2)
//  value.val=itemtrack.quantity


items.push(itemtrack)
}
}
incrQant()
function printQuant(){
    $(".btn-block col-4 p-2").click(()=>{ 
        itemtrack["quantity"]+=1
        console.log('clickeds')
        printQant()
       })
    console.log('quantity of item is '+itemtrack['quantity'])
}
console.log(items)
localStorage.setItem("items",JSON.stringify(items))



})