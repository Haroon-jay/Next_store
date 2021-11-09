import React, { FC,ReactNode,ReactNodeArray,HTMLAttributes } from "react"
interface Props{
children:ReactNode | ReactNodeArray
el?:React.ComponentType<HTMLAttributes<HTMLElement>>
}

const Container:FC<Props>=({children,el:El="div"})=>{
return(
<El className="px-6 mx-auto max-w-8xl" style={{maxWidth:1920}}>
    
    {children}
</El>
)
}
export default Container