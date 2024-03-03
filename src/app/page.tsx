import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-slate-400 ">
      <ul className="flex flex-col gap-4">
        <li className="hover:underline p-2 rounded-full bg-slate-600">
          <Link href="/form-object">form (Object)</Link>
        </li>
        <li className="hover:underline p-2 rounded-full bg-slate-600">
          <Link href="/to-do-list-array">To-do List (reducer)</Link>
        </li>
        <li className="hover:underline p-2 rounded-full bg-slate-600">
          <Link href="/">próximo</Link>
        </li>
      </ul>
    </div>
  )
}
