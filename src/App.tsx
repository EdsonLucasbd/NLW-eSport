import './styles/main.css'
import logo from './assets/Logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react'
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';

function App() {
  return (
    <div className='max-w-[84rem] mx-auto flex items-center flex-col my-20'>
      <img src={logo} alt='' />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner />
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
