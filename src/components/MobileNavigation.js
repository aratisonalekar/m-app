import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'


const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full'>
       <div className='flex items-center justify-between h-full text-neutral-400 ${isActive}'>
          {
            mobileNavigation.map((nav,index)=>{
                return(
                    <NavLink key={nav.label+"mobileNavigation"}
                    to={nav.href}
                    className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                        <div className='text-2xl'>
                            {nav.icon}
                        </div>
                        <p className='text-sm'>{nav.label}</p>
                    </NavLink>
                )
            })
          }
       </div>
    </section>
  )
}

export default MobileNavigation
