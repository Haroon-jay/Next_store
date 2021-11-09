import { Product } from "@common/types/product"
import React,{FC} from 'react'
import Link from "next/link"
import s from "./product-card.module.css"
import Image from "next/image"
interface Props{
product:Product,
variant?:"simple" | "slim"
}

const ProductCard:FC<Props> = ({product,variant="simple"}) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <a className={s.root}> 
            {
                variant==="slim"?
                <>
                <div className=" flex items-center justify-center inset-0 absolute z-20">
                    <span className="bg-black text-white p-3 font-bold text-xl">{product.name}</span>
                </div>
                
                     {
              product.images &&(
              <Image alt={product.name ?? "product image"} 
              className={s.productImg}
              height={320} src={product.images[0].url} width={320} quality="85" layout="fixed"
              />
            )
        }
                
                </>
                :
                (
                  <> 
              <div className={s.productBg}>  </div>
              <div className={s.productTag}>
              <h3 className={s.productTitle}> 
              <span>
              {product.name}
              </span>
              </h3>
              <span className={s.productPrice}>
              {product.price.value} {product.price.currencyCode}
              </span>
              </div>
              {
              product.images &&(
              <Image alt={product.name ?? "product image"} 
              className={s.productImg}
              height={40} src={product.images[0].url} width={40} quality="85" layout="responsive"
              />
            )
        }
                    </>
                )
            }
        
        </a>
        </Link>
    )
}

export default ProductCard
