import { ButtonHTMLAttributes, FC } from 'react'

import { cnb } from 'cnbuilder'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, className = '', ...restProps }) => {
  return (
    <button className={cnb('button', className)} {...restProps}>
      {children}
    </button>
  )
}

export { Button }
