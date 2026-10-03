import { divProduk } from "../script.js"
import { cart } from "../script.js"
import { simpan } from "./storage.js"
export function tampilkanProduk(produk){
    
    
    produk.forEach(function(item){
    
        let gambar = document.createElement('img')
        gambar.src=item.images
       divProduk.appendChild(gambar)
        let namaBarang= document.createElement('p')
        namaBarang.textContent=item.title
       divProduk.appendChild(namaBarang)
        let harga= document.createElement('p')
        harga.textContent="$"+item.price
       divProduk.appendChild(harga)
        let category= document.createElement('p')
        category.textContent=item.category
       divProduk.appendChild(category)
       /* let rating= document.createElement('p')
        rating.textContent=`⭐ ${item.rating.rate} (${item.rating.count} review)`
       divProduk.appendChild(rating)*/
        
        let btnAdd = document.createElement('button')
        btnAdd.textContent='🛒'+'Add To Cart '
       divProduk.appendChild(btnAdd)
        btnAdd.addEventListener('click',function(){
            
            let f=cart.find(x=>x.id===item.id)
            if(f){f.Quantity++
                console.log(cart)
            }else{
              item.Quantity=1
            cart.push(item)
            console.log(cart)
            }
            simpan()         
        })
    })
}