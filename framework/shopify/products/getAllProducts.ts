
import {normalizeProduct,getAllProductsQuery} from "../utils"
import  { ProductConnection} from "../schema"
// import { normalizeProduct } from "../utils/normalize-product"
import {Product} from "@common/types/product"
import { ApiConfig } from "@common/types/api"
const getAllProducts=async(config:ApiConfig):Promise<Product[]>=>{
    const {data}=await config.fetch<{products:ProductConnection}>({ 
        url:config.apiUrl,
        query:getAllProductsQuery})
    const products=data.products.edges.map(({node})=>{
        return normalizeProduct(node)
    }
        
        )
    return products
}
export default getAllProducts