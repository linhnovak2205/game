import { useState } from 'react'
import type { FormEvent } from 'react'
import { SearchIcon } from './icons'

type FieldProps = {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

function Field({ id, label, placeholder, value, onChange }: FieldProps) {
  return (
    <div className="flex flex-1 flex-col justify-center rounded-buttons px-6 py-3 transition-colors hover:bg-faint">
      <label htmlFor={id} className="text-ui font-medium text-hof">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full bg-transparent text-body text-hof outline-none placeholder:text-foggy"
      />
    </div>
  )
}

/**
 * The signature element of the homepage: a floating white capsule on the
 * canvas. Three segmented fields split by hairline dividers, with the only
 * Rausch surface on the page as the submit control.
 */
export function SearchBar() {
  const [where, setWhere] = useState('')
  const [when, setWhen] = useState('')
  const [who, setWho] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Wiring to a real search happens once the results page exists.
    console.log({ where, when, who })
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="mx-auto flex w-full max-w-[880px] items-center rounded-buttons bg-white p-2 shadow-subtle"
    >
      <Field
        id="search-where"
        label="Where"
        placeholder="Search destinations"
        value={where}
        onChange={setWhere}
      />
      <span aria-hidden="true" className="h-8 w-px shrink-0 bg-bebe" />
      <Field
        id="search-when"
        label="When"
        placeholder="Add dates"
        value={when}
        onChange={setWhen}
      />
      <span aria-hidden="true" className="h-8 w-px shrink-0 bg-bebe" />
      <Field
        id="search-who"
        label="Who"
        placeholder="Add guests"
        value={who}
        onChange={setWho}
      />
      <button
        type="submit"
        aria-label="Search"
        className="ml-2 grid size-12 shrink-0 place-items-center rounded-buttons bg-rausch text-white transition-colors hover:bg-rausch-600"
      >
        <SearchIcon size={20} />
      </button>
    </form>
  )
}
