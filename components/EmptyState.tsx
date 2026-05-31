interface EmptyStateProps {
  icon?: string
  title: string
  description?: string
}

export default function EmptyState({ icon = '📭', title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-600 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-400">{description}</p>
      )}
    </div>
  )
}
