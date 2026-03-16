import { useState } from 'react'
import SearchBar from './components/SearchBar'
import PerfilCard from './components/PerfilCard'
import ErroCard from './components/ErroCard'
import LoadingCard from './components/Loading'

export default function App() {
  const [username, setUsername] = useState('')
  const [status, setStatus] = useState('idle') 
  const [perfil, setPerfil] = useState(null)

  async function buscar() {
    const query = username.trim()
    if (!query) return

    setStatus('loading')
    setPerfil(null)

    try {
      const res = await fetch(`https://api.github.com/users/${query}`)
      if (!res.ok) {
        setStatus('error')
        return
      }
      const data = await res.json()
      setPerfil(data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-stone-900 min-h-screen font-sans">
      <div
        className="min-h-screen bg-no-repeat bg-cover relative overflow-hidden flex items-center justify-center px-6 py-12"
        style={{ backgroundImage: "url('/assets/imgs/bg.svg')" }}
      >
        <main className="relative z-10 w-full max-w-[1156px] bg-black border border-black flex flex-col items-center justify-center gap-8 px-6 md:px-20 py-16 min-h-[300px] md:min-h-[537px]">

          <header className="flex flex-wrap items-center justify-center gap-4">
            <img src="/assets/imgs/github-logo.svg" alt="GitHub" className="w-14 h-14" />
            <h1 className="text-white text-6xl font-semibold leading-none">Perfil</h1>
            <img src="/assets/imgs/github.svg" alt="" aria-hidden="true" className="w-40 h-11" />
          </header>

          <SearchBar
            username={username}
            onChange={setUsername}
            onSearch={buscar}
          />

          <section aria-live="polite" aria-atomic="true" className="w-full flex justify-center">
            {status === 'loading' && <LoadingCard />}
            {status === 'success' && perfil && <PerfilCard data={perfil} />}
            {status === 'error' && <ErroCard />}
          </section>

        </main>
      </div>
    </div>
  )
}