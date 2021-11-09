import React,{FC} from 'react'
import s from "./usernav.module.css"
import Link from "next/link"
import { useUI } from '@components/ui/context'
import { Bag as Cart,Heart } from '@components/icons'
const Usernav:FC = () => {
    const ui=useUI()
    return (
     <nav>
         <ul className={s.list}>
             <li className={s.item}>
                 <Cart onClick={()=>ui.openSidebar()}/>
             </li>
             <li className={s.item}>
                 <Link href="/wishlist">
                 <a>  <Heart/> </a>
                 </Link>
               
             </li>
         </ul>
     </nav>
    )
}

export default Usernav
