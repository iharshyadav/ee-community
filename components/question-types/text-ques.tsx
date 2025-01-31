'use client'

interface TextQuestionProps {
  value?: string
  onChange: (value: string) => void
  placeholder?: string
}

export function TextQuestion({ value = '', onChange, placeholder }: TextQuestionProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-48 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
    />
  )
}

