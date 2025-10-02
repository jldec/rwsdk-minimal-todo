'use client'
import { useState } from 'react'

export function Button() {
  const [time, setTime] = useState('Get time')

  const getTime = () => setTime(new Date().toISOString().slice(11, 22))

  return (
    <button className="mt-4 rounded bg-blue-600 hover:bg-blue-700 active:translate-y-0.5 px-3 py-1 text-white" onClick={getTime}>
      {time}
    </button>
  )
}


