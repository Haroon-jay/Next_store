

import { FC } from 'react'
import { useUI } from "@components/ui/context"
interface Props {
  children: any
  onClose:()=>void
}

const Sidebar: FC<Props> = ({ children,onClose }) => {
  const isOpen = true
  const {isSidebarOpen}=useUI()

  return (
    <>
      { isSidebarOpen ? (
        <div className="fixed inset-0 overflow-hidden h-full z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null }
    </>
  )
}

export default Sidebar