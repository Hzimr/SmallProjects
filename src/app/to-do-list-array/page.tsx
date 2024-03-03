'use client'
import { BackButton } from '@/components/back-button'
import { useReducer } from 'react'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'

interface TaskProps {
  id: number
  text: string
  done: boolean
}

type TasksProps = TaskProps[]

type TaskAction =
  | { type: 'added'; actionId: number; actionText: string }
  | { type: 'changed'; actionId: number; task: TaskProps }
  | { type: 'deleted'; actionId: number }

function tasksReducer(tasks: TasksProps, action: TaskAction): TasksProps {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.actionId,
          text: action.actionText,
          done: false,
        },
      ]
    }
    case 'changed': {
      return tasks.map((task) => {
        if (task.id === action.actionId) {
          return action.task
        } else {
          return task
        }
      })
    }
    case 'deleted': {
      return tasks.filter((task) => task.id !== action.actionId)
    }
    default: {
      throw new Error('Unknown action')
    }
  }
}

export default function TodoList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  let nextId = initialTasks.length + 1

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      actionId: nextId++,
      actionText: text,
    })
  }

  function handleChangeTask(task: TaskProps) {
    dispatch({
      type: 'changed',
      actionId: task.id,
      task,
    })
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      actionId: taskId,
    })
  }

  return (
    <div className="p-10 flex gap-2 relative items-center flex-col text-slate-300 text-2xl">
      <BackButton navigate="/" />
      <h1>To-do</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

const initialTasks: TasksProps = [
  { id: 0, text: 'Visit legendary', done: false },
]
