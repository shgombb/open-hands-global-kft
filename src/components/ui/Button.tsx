interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const base = 'inline-block text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-opacity hover:opacity-80'
  const styles = {
    primary: 'bg-brand text-black',
    secondary: 'border border-brand text-brand',
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}
