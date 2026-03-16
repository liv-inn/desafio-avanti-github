export default function ErroCard() {
  return (
    <div className="w-[710px] max-w-full bg-zinc-300 rounded-[10px] h-20 flex items-center justify-center px-8">
      <p className="text-xl font-normal text-red-600 text-center leading-relaxed">
        Nenhum perfil foi encontrado com esse nome de usuário.
        <br />
        Tente novamente
      </p>
    </div>
  )
}