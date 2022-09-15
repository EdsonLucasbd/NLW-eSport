import './styles/main.css'
import logo from './assets/Logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='max-w-[84rem] mx-auto flex items-center flex-col my-20'>
      <img src={logo} alt='' />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className='relative rouded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>CS: go</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>APEX Legends</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>WOW</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8'>
        <div className='bg-[#2a2634] px-8 py-6 overflow-hidden flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white transition-all ease-in-out rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
