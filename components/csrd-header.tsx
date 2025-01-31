'use client'

import { Button } from '@nextui-org/react'

export function CSRDHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">EU CSRD</h1>
        <span className="px-2 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 rounded">2024</span>
      </div>
      <Button color="success" variant="shadow">
        Generate
      </Button>
    </header>
  )
}

