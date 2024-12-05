import React from 'react'

const Button = ({ title ,id ,rightIcon ,leftIcon ,containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer 
      px-7 rounded-full overflow-hidden py-3 text-black ${containerClass}`}>
        {leftIcon}

        <span className='relative text-xs incline-flex overflow-hidden font-general uppercase'>
          <div>{title}</div>
        </span>
    </button>
  )
}

export default Button