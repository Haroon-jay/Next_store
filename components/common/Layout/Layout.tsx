import { FC } from "react"
import classes from "./layout.module.css"
import { Footer } from "@components/common"
import { Navbar } from "@components/common"
import { Sidebar } from "@components/ui"
import { useUI } from "@components/ui/context"
import { CartSidebar } from "@components/cart"
const Layout:FC=({children})=>{
const ui=useUI()
return(
    <div className={classes.root}>
<Navbar/>
<Sidebar onClose={ui.closeSidebar}>
<CartSidebar/>
</Sidebar>
    <main className="fit">
        {children}
    </main>
    <Footer/>
    </div>
)
}
export default Layout