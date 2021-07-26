import { ButtonHTMLAttributes, FC } from 'react'

import { cnb } from 'cnbuilder'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const Button: FC<ButtonProps> = ({ children, className = '', ...restProps }) => {
  return (
    <button className={cnb('button', className)} {...restProps}>
      {children}
    </button>
  )
}

export { Button }
