const botaosom = document.getElementById('btn-som');
const containerplayer = document.querySelector('.player-container');
const player = document.getElementById('player');
const nomemusica = document.getElementById('nome-musica');

const musicas = [
  { nome: 'the beatles - something', arquivo: 'anexos/something.mp3' },
  { nome: 'pearl jam - yellow ledbetter', arquivo: 'anexos/yellow_ledbetter.mp3' },
  { nome: 'foto em grupo - eu tenho medo', arquivo: 'anexos/eu_tenho_medo.mp3' }
];

botaosom.addEventListener('click', () => {
  const index = Math.floor(Math.random() * musicas.length);
  const musica = musicas[index];
  
  nomemusica.innerText = musica.nome;
  player.src = musica.arquivo;
  containerplayer.style.display = 'block';
  player.play();
});