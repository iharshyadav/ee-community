'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

interface MultipleChoiceQuestionProps {
  options: { id: string; text: string }[]
  onChange: (selectedOptions: string[]) => void
  value?: string[]
}

export function MultipleChoiceQuestion({ options, onChange, value = [] }: MultipleChoiceQuestionProps) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => {
            const newValue = value.includes(option.id)
              ? value.filter(id => id !== option.id)
              : [...value, option.id]
            onChange(newValue)
          }}
          className={`w-full flex items-center justify-between p-4 rounded-lg border ${
            value.includes(option.id)
              ? 'border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <span className="text-sm">{option.text}</span>
          {value.includes(option.id) && (
            <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
          )}
        </button>
      ))}
    </div>
  )
}

