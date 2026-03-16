const input = document.getElementById('search-input');
const btn = document.getElementById('search-btn');
const result = document.getElementById('result');

btn.addEventListener('click', buscar);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') buscar();
});

async function buscar() {
  const username = input.value.trim();
  if (!username) return;

  result.innerHTML = `<p class="text-zinc-400 text-sm animate-pulse">Buscando...</p>`;

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      mostrarErro();
      return;
    }

    const data = await res.json();
    mostrarPerfil(data);
  } catch {
    mostrarErro();
  }
}

function mostrarPerfil(data) {
  result.innerHTML = `
    <div class="w-[804px] max-w-full bg-zinc-300 rounded-3xl p-5 flex items-center gap-8">
      <img
        class="w-[220px] h-[220px] rounded-full outline outline-2 outline-blue-600 object-cover flex-shrink-0"
        src="${data.avatar_url}"
        alt="${data.name || data.login}"
      />
      <div class="flex flex-col gap-3">
        <h2 class="text-xl font-bold text-blue-600">${data.name || data.login}</h2>
        <p class="text-base font-light text-black leading-relaxed max-w-sm">${data.bio || 'Este usuário não possui bio.'}</p>
      </div>
    </div>
  `;
}

function mostrarErro() {
  result.innerHTML = `
    <div class="w-[710px] max-w-full bg-zinc-300 rounded-[10px] px-8 py-5 text-center">
      <p class="text-xl font-normal text-red-600 leading-relaxed">
        Nenhum perfil foi encontrado com esse nome de usuário.<br />
        Tente novamente
      </p>
    </div>
  `;
}