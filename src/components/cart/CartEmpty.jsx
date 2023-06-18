import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import emptybag from '../../assets/emptybag.png'
import React from 'react'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
        <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
            <img src={emptybag} alt="empty/img"
            className='w-40 lg:36 sm28 h-auto object-fill transition-all duration-300
            hover:scale-110' />
            <button type='button' className='button-theme bg-gradient-to-b from-amber-500
            to-orange-500 flex items-center justify-center text-slate-900 
            py-2 gap-3 px-5 font-semibold text-sm active:scale-110' onClick={onCartToggle}>
                <ArrowLeftIcon className='w-5 text-slate-900 h-5'/>
                <span className=''> Back To Nike Store</span>
                 </button>
        </div>
    </>

  )
}

export default CartEmpty