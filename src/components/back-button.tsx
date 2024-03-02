'use client'
import { useRouter } from 'next/navigation'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

interface ButtonProps {
  navigate: string
}

export function BackButton({ navigate }: ButtonProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <button
      onClick={handleNavigate}
      className="absolute left-3 top-9 flex cursor-pointer items-center justify-center gap-1 border-none p-2 text-lg font-medium md:top-2 text-slate-300"
    >
      <IoArrowBackCircleOutline size={24} />
      Back
    </button>
  )
}
