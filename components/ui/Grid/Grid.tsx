import React,{FC,ReactNode} from 'react'
import classes from "./grid.module.css"
import cn from "classnames"
interface props {
children:ReactNode[],
layout?:"A" | "B"
}
const Grid:FC<props> = ({children,layout="A"}) => {
    const rootClassName=cn(
        classes.root,
        {[classes.layoutA]:layout==="A",
        [classes.layoutB]:layout==="B",
    }
    )
    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Grid
