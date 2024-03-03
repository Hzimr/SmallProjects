import { useState } from 'react'

interface AddTaskProps {
  onAddTask: (text: string) => void
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState('')

  return (
    <>
      <input
        className="text-black"
        placeholder="Add task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="mt-4 p-2 bg-slate-600 rounded-full"
        onClick={() => {
          setText('')
          onAddTask(text)
        }}
      >
        Adicionar Tarefa
      </button>
    </>
  )
}
