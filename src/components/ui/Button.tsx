import type { ButtonHTMLAttributes, ReactNode } from 'react'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}
export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      {...props}
    />
  )
}
interface IconButtonProps extends Omit<ButtonProps, 'children' | 'aria-label'> {
  label: string
  children: ReactNode
}
export function IconButton({
  label,
  children,
  className = '',
  ...props
}: IconButtonProps) {
  return (
    <Button
      aria-label={label}
      className={`icon-button ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}
