interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-500">{subtitle}</p>
      )}
      <div className="mt-3 mx-auto w-16 h-1 bg-warm rounded-full" />
    </div>
  )
}
