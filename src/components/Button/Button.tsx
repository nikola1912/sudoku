import { ButtonHTMLAttributes, FC } from 'react'

import { cnb } from 'cnbuilder'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// const style = {
//   default: `font-black shadow active:opacity-70`,
//   disabled: `opacity-60 cursor-not-allowed`,
//   sizes: {
//     sm: 'px-6 py-1 text-sm',
//     md: 'px-6 py-2',
//     lg: 'px-6 py-3',
//   },
//   colors: {
//     custom: 'bg-[#14445c] text-white',
//     white: 'bg-white text-[#14445c]',
//     black: 'bg-black text-white',
//     green: 'bg-green-700 text-white',
//     'blue-sky': 'bg-[#26a69a] text-white',
//   },
// };

const Button: FC<ButtonProps> = ({ children, className = '', ...restProps }) => {
  return (
    <button className={cnb('button', className)} {...restProps}>
      {children}
    </button>
  )
}

export { Button }
