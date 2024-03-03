'use client'
import React, { useState, ChangeEvent } from 'react'

interface Task {
  id: number
  text: string
  done: boolean
}

interface TaskListProps {
  tasks: Task[]
  onChangeTask: (task: Task) => void
  onDeleteTask: (taskId: number) => void
}

export function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  )
}

interface TaskProps {
  task: Task
  onChange: (task: Task) => void
  onDelete: (taskId: number) => void
}

function Task({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...task,
      done: event.target.checked,
    })
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...task,
      text: event.target.value,
    })
  }

  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={handleTextChange} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="text-base p-2 bg-slate-600 rounded-full"
          onClick={() => setIsEditing(true)}
        >
          Editar
        </button>
      </>
    )
  }

  return (
    <label className="flex p-2 gap-2 items-center justify-center">
      <input
        className="w-4 h-4"
        type="checkbox"
        checked={task.done}
        onChange={handleCheckboxChange}
      />
      {taskContent}
      <button
        className="text-base p-2 bg-slate-600 rounded-full"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </label>
  )
}
