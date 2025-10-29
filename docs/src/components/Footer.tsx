import React from 'react'

export default function Footer(): React.ReactElement {
  return (
    <footer className="max-w-5xl mx-auto p-6 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Kevin Huynh. Built with React + Vite + Tailwind.
    </footer>
  )
}
