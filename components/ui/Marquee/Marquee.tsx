import React,{ReactNode,FC} from 'react'
import s from "./marquee.module.css"
import Ticker from "react-ticker"
import cn from "classnames"
interface Props{
    children:ReactNode[],
    variant?:"A" | "B"
}
const Marquee:FC<Props> = ({children,variant="A"}) => {
    const rootClass=cn(
        s.root,{
            [s.secondary]:variant==="B"
        }
    )
    return (
        <div className={rootClass}>
            <Ticker offset={80}>
            {
                ()=>(
                <div className={s.container}>
                {children}
                </div>
                            )            }
            </Ticker>
        </div>
    )
}

export default Marquee
