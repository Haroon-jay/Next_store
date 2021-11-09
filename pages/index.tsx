import type { InferGetStaticPropsType } from "next"

import { Layout } from "@components/common"
import getAllProducts from "@framework/products/getAllProducts"
import { getConfig } from "@framework/api/config"
import { ProductCard } from "@components/product"
import { Grid,Hero,Marquee } from "@components/ui"
export default function Home({products}
  :InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
<Grid>
   
      {products.slice(0,3).map(product=>(
        <ProductCard   key={product.id} product={product}/>
      ))}
     
     </Grid>
     <Hero headline="Cookie, Icecream and muffin" description="Lollipop powder marzipan gummies croissant tiramisu bonbon. Fruitcake sugar plum pastry cupcake croissant gummies ice cream. Donut gummi bears sweet toffee carrot cake oat cake lollipop. Lemon drops macaroon dragée soufflé jelly caramels. Icing jelly-o pudding apple pie apple pie pastry jelly beans. Macaroon cotton candy halvah oat cake jelly jujubes cotton candy gingerbread sesame snaps. Cake caramels gingerbread pastry powder. Wafer sesame snaps chupa chups cotton candy cake dessert brownie macaroon sweet roll. Chocolate cake biscuit bonbon caramels cupcake croissant lollipop muffin pie."/>
     <Marquee>   {products.slice(0,3).map(product=>(
        <ProductCard variant="slim" key={product.id} product={product}/>
      ))} </Marquee>
      <Grid layout="B">
   
   {products.slice(0,3).map(product=>(
     <ProductCard   key={product.id} product={product}/>
   ))}
  </Grid>
  <Marquee variant="B">   {products.slice(0,3).map(product=>(
        <ProductCard variant="slim" key={product.id} product={product}/>
      ))} </Marquee>
     </>
  )
}


Home.Layout=Layout
export async function getStaticProps(){
  const config=getConfig()
  
  const products=await getAllProducts(config)
  console.log(products)
  return {
    props:{
    products
    },
    revalidate:4*60*60
  }
}