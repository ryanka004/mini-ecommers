import {api} from "./js/api.js"
import { tampilkanCart } from "./js/cart.js"
import { tampilakanTotal } from "./js/cart.js"
import {ambil} from "./js/storage.js"
import { tampilkanProduk } from "./js/produk.js"

const div = document.getElementById('container')
const btnCart = document.getElementById('btncart')
export const divCart = document.getElementById('containerCart')
const search = document.getElementById('pencarian')
const select = document.getElementById('select')
export const divProduk=document.createElement('div')
    div.appendChild(divProduk)
    divProduk.innerHTML=''
export let cart =[]
let hasilKategori=''
export let textTotal = document.createElement('p')
async function getProduk() {
    try { let produk=await api()
        console.log(produk)
        
   hasilKategori=produk
    tampilkanProduk(produk)

    
    
    select.addEventListener('change',function(){
     hasilKategori =tampilkanselect(produk)
    divProduk.innerHTML=''
    tampilkanProduk(hasilKategori)
    divProduk.innerHTML=''
    let hasil =tampilkanSearch(hasilKategori)
    console.log(hasil)
    tampilkanProduk(hasil)
    })


    search.addEventListener('input',function(){
    divProduk.innerHTML=''
    let hasil =tampilkanSearch(hasilKategori)
    console.log(hasil)
    tampilkanProduk(hasil)
    })

    }catch(error){
        console.log(error.message)
    }
    
}
getProduk()



btnCart.addEventListener('click',function(){  
    cart=ambil()
    tampilkanCart()
    tampilakanTotal()    
})





function tampilkanSearch(hasilKategori){
    let nilaiSearch = search.value
 return  hasilKategori.filter(hasilKategori=>
     hasilKategori.title.toLowerCase().includes(nilaiSearch.toLowerCase())
    )
    
    
}

function tampilkanselect(produk){

   let allKategory
    if(select.value==="semua"){return allKategory=produk

    }else{
 return produk.filter(produk=>produk.category===select.value)
  console.log(select.value)
    }
  
}





