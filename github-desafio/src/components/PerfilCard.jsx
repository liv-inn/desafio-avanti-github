export default function PerfilCard({ data }) {
  return (
    <div className="w-[804px] max-w-full bg-zinc-300 rounded-3xl p-5 flex items-center gap-8">
      <img
        className="w-[220px] h-[220px] rounded-full outline outline-2 outline-blue-600 object-cover flex-shrink-0"
        src={data.avatar_url}
        alt={data.name || data.login}
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-blue-600">{data.name || data.login}</h2>
        <p className="text-base font-light text-black leading-relaxed max-w-sm">
          {data.bio || 'Este usuário não possui bio.'}
        </p>
      </div>
    </div>
  )
}