import { ImageConnection, ImageEdge,MoneyV2, Product as ShopifyProduct } from "../schema";
import {Product as Custom } from "@common/types/product"
 function normalizeProductImages({edges} :{edges:Array<ImageEdge>}){
  return edges.map(({node:{originalSrc,...rest}})=>{
      return {
          url:`/images/${originalSrc}`,
          ...rest
      }
  })
}
function normalizePrice({amount,currencyCode}:MoneyV2){
return{
value:+amount,
currencyCode
}
}
export function normalizeProduct(productNode:ShopifyProduct):Custom{

    const {id,title:name
        ,handle,vendor,
        priceRange,
        images,description,...rest}=productNode

    const product={id,name,vendor,handle,description,path:`/${handle}`,
slug:handle.replace(/^\/+|\/+$/g,""),images:normalizeProductImages(images),
price:normalizePrice(priceRange.minVariantPrice),
...rest
}
return product
}