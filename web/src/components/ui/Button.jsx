/** @typedef {{ href?: string; variant?: 'primary' | 'outline' | 'ghost' | 'onDarkOutline' | 'onDarkSolid'; className?: string; children: import('react').ReactNode }} ButtonProps */

const baseClasses =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold tracking-wide transition-[color,background-color,border-color,box-shadow] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variantClasses = {
  primary:
    'bg-wine text-cream hover:bg-wine-deep focus-visible:outline-wine shadow-soft',
  outline:
    'border border-wine/20 bg-transparent text-wine hover:border-wine/50 hover:bg-wine-muted focus-visible:outline-wine',
  ghost:
    'border border-transparent bg-transparent text-ink hover:text-wine focus-visible:outline-wine',
  onDarkOutline:
    'border border-cream/40 bg-cream/5 text-cream hover:border-cream/70 hover:bg-cream/15 focus-visible:outline-cream',
  onDarkSolid:
    'border border-transparent bg-cream text-wine hover:bg-cream-100 hover:text-wine-deep focus-visible:outline-cream shadow-soft',
}

/**
 * @param {ButtonProps & Omit<import('react').JSX.IntrinsicElements['button'], 'className'>} props
 */
export function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  type,
  ...rest
}) {
  const merged = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={merged} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={merged} {...rest}>
      {children}
    </button>
  )
}
