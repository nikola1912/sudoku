import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const Button: FC<ButtonProps> = ({ children, className, ...restProps }) => {
  return (
    <button className={`button ${className}`} {...restProps}>
      {children}
    </button>
  )
}

export default Button
