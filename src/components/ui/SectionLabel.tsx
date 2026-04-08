interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[9px] font-bold tracking-[3px] text-brand uppercase mb-2">
      {children}
    </p>
  )
}
