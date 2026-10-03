export async function api(){
    try{
        let response=await fetch("https://dummyjson.com/products")
       if(!response.ok){throw new Error('fetch sedang error')}
        let data= await response.json()
         let produk= data.products
        return produk

    }catch(error){
        console.log(error)
    }
}
