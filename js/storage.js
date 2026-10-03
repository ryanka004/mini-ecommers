import {cart} from "../script.js"
export function simpan(){
    let data = JSON.stringify(cart)
    localStorage.setItem('cart',data)
}
export function ambil(){
    let data= localStorage.getItem('cart')
    let hasil= JSON.parse(data)
    return hasil
    console.log(cart)
}