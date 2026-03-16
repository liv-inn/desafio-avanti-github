export default function SearchBar({ username, onChange, onSearch }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') onSearch()
  }

  return (
    <section aria-label="Busca de perfil do GitHub" className="flex justify-center w-full">
      <div className="flex w-full max-w-[567px]">
        <label htmlFor="search-input" className="sr-only">
          Nome de usuário do GitHub
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Digite um usuário do Github"
          autoComplete="off"
          value={username}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 h-16 bg-white rounded-l-[10px] outline outline-1 outline-offset-[-0.5px] outline-neutral-200 px-5 text-xl font-semibold text-black placeholder:text-black focus:outline-none"
        />
        <button
          type="button"
          onClick={onSearch}
          aria-label="Buscar perfil"
          className="w-16 h-16 bg-blue-600 rounded-r-[10px] outline outline-1 outline-offset-[-0.5px] outline-neutral-200 flex items-center justify-center flex-shrink-0 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2.5" />
            <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  )
}