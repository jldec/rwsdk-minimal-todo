'use client'
import { useState } from 'react'

type TodoItem = {
  name: string
  complete: boolean
}

export function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [inputVal, setInputVal] = useState('')

  function handleAdd() {
    let val = inputVal.trim()
    if (val === '') return
    setTodos((prev) => {
      prev.unshift({ name: val, complete: false })
      return [...prev]
    })
  }

  function toggleComplete(index: number) {
    setTodos((prev) => {
      prev[index].complete = !prev[index].complete
      return [...prev]
    })
  }

  function handleRemove(index: number) {
    setTodos((prev) => {
      prev.splice(index, 1)
      return [...prev]
    })
  }

  return (
    <>
      <input
        value={inputVal}
        className="border rounded p-1 mr-2"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleAdd} className="border rounded p-1">
        Add
      </button>
      {todos.map((todo, index) => {
        return (
          <div key={index} className='py-1'>
            <input
              type="checkbox"
              className="mr-2"
              checked={todo.complete}
              onClick={(e) => toggleComplete(index)}
            />
            {JSON.stringify(todo)}
            <button className="ml-2 border-gray-500 border rounded px-1" onClick={(e) => handleRemove(index)}>
              X
            </button>
          </div>
        )
      })}
    </>
  )
}
