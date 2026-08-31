interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, light }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="ornament font-sans text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      )}
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl ${light ? 'text-ink' : 'text-cream'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-sans text-sm sm:text-base ${light ? 'text-ink/70' : 'text-cream/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
