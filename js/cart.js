import { divCart } from "/script.js"
import {cart} from "/script.js"
import { textTotal } from "/script.js"
import { simpan } from "./storage.js"

export function tampilkanCart(){
    divCart.innerHTML=''
    cart.forEach(function(item){
        
    let nomor =cart.indexOf(item)
        console.log('nomor'+ nomor)
        let divCartItem=document.createElement('div')
        divCart.appendChild(divCartItem)
        let namaBarang= document.createElement('p')
        namaBarang.textContent=item.title
       divCartItem.appendChild(namaBarang)
        let harga= document.createElement('p')
        harga.textContent="$"+item.price
       divCartItem.appendChild(harga)

        let btnMin=document.createElement('button')
        btnMin.textContent='-'
       divCartItem.appendChild(btnMin)
        let Quantity=document.createElement('p')
        Quantity.textContent=item.Quantity
       divCartItem.appendChild(Quantity)
        let btnPlus=document.createElement('button')
        btnPlus.textContent='+'
       divCartItem.appendChild(btnPlus)
        let btnHapus= document.createElement('button')
        btnHapus.textContent='Hapus'
       divCartItem.appendChild(btnHapus)

        btnMin.addEventListener('click',function(){
        
        item.Quantity--
        if(item.Quantity===0){cart.splice(nomor,1),divCartItem.remove()}
        console.log(cart)
        console.log(nomor+'ke')
        Quantity.textContent=item.Quantity
        tampilakanTotal()
        simpan()
        
       })

       btnPlus.addEventListener('click',function(){
        item.Quantity++
        Quantity.textContent=item.Quantity
        tampilakanTotal()
        simpan()
        
       })
       btnHapus.addEventListener('click',function(){
        cart.splice(nomor,1)
        divCartItem.remove()
        tampilakanTotal() 
        simpan()
       })   
    })
}

export function tampilakanTotal(){
    
  
  let total=  cart.reduce((total,item)=>{
        return (total+(item.price * item.Quantity))
    },0)
    if(total===0){return textTotal.textContent=''}
    textTotal.textContent=`total = $${total}`
   divCart.appendChild(textTotal)
   console.log(textTotal)

}