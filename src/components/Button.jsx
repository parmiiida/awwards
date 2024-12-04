import React from 'react'

const Button = ({ title ,id ,rightIcon ,leftIcon ,containerClass}) => {
  return (
    <Button id={id} className={`group relative z-10 w-fit cursor-pointer 
      px-7 rounded-full overflow-hidden bg-violet-50 py-3 text-black ${containerClass}`}>{leftIcon}</Button>
  )
}

export default Button