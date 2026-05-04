/** @typedef {{ eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; headingId?: string }} HeadingProps */

/**
 * @param {HeadingProps} props
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  headingId,
}) {
  const alignClass =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-2xl text-left'

  return (
    <header className={`mb-12 sm:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-olive sm:text-[13px]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.65rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty font-body text-[17px] leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
