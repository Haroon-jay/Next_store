import { useContext,createContext,FC, ReactNode,useReducer  } from "react";
 export interface StateModifiers{
  openSidebar:()=>void
  closeSidebar:()=>void
 }
export interface StateValues{
    isSidebarOpen:boolean
}


const StateModifiers={
    openSidebar:()=>{},
    closeSidebar:()=>{},
}
const initialState={isSidebarOpen:false}

type State=StateModifiers & StateValues


interface Props{
    children:ReactNode | ReactNode[]
}
const UIcontext=createContext<State>({
    ...StateModifiers,...initialState
})
type Action={
    type:"OPEN_SIDEBAR"| "CLOSE_SIDEBAR"}

function uiReducer(state:StateValues,action:Action){
switch(action.type){
    case "OPEN_SIDEBAR":
        return {
           isSidebarOpen:true
        }
      
    case "CLOSE_SIDEBAR":
            return{
                isSidebarOpen:false
            }
        break;
        default:
            return state
}
}


export const UIProvider:FC<Props>=({children})=>{
    const [state,dispatch]=useReducer(uiReducer,initialState)
    const openSidebar=()=>dispatch({
        type:"OPEN_SIDEBAR"
    })
    const closeSidebar=()=>dispatch({
        type:"CLOSE_SIDEBAR"
    })
  const value={
      openSidebar,closeSidebar,isSidebarOpen:state.isSidebarOpen
  }
    return(
        <>
        <UIcontext.Provider value={value}>
         {children}
         </UIcontext.Provider>
          </>

    )
}
export const useUI=()=>{
    const context=useContext(UIcontext)
    return context
}