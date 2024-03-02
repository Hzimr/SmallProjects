'use client'
import { BackButton } from '@/components/back-button'
import { ChangeEvent, useReducer } from 'react'

interface state {
  name: string
  age: number
}
interface action {
  type: 'incremented_age' | 'changed_name'
  nextName: string
}

function reducer({ name, age }: state, { type, nextName }: action) {
  switch (type) {
    case 'incremented_age': {
      return {
        name,
        age: age + 1,
      }
    }
    case 'changed_name': {
      return {
        name: nextName,
        age,
      }
    }
    default: {
      throw Error('Unknown action:' + type)
    }
  }
}

const initialState = { name: 'Taylor', age: 42 }

export default function FormObject() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleButtonClick() {
    dispatch({ type: 'incremented_age', nextName: '' })
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'changed_name', nextName: event.target.value })
  }

  return (
    <div className="relative p-8 flex items-center">
      <BackButton navigate="/" />
      <div className="mt-8 flex flex-col gap-5 text-slate-100 text-2xl">
        <input
          className="text-black "
          value={state.name}
          onChange={handleInputChange}
        />
        <button
          className="border-none bg-teal-400 py-2 rounded-full hover:opacity-90"
          type="button"
          onClick={handleButtonClick}
        >
          Increment age
        </button>
        <p className="">
          Hello, {state.name}! You are {state.age}
        </p>
        <p>Este projeto foi modificado com typescript pro Hítalo Rodrigues</p>
        <a
          className="hover:underline"
          href="https://react.dev/reference/react/useReducer"
          target="_blank"
        >
          Link do projeto original
        </a>
      </div>
    </div>
  )
}
