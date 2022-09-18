import '../styles/main.css';
import logo from '../assets/Logo.svg';
import { DiscordLogo } from 'phosphor-react';

export default function Root() {
  return (
    <div className='flex flex-col items-center'>
      <img src={logo} alt='' aria-hidden='true' className='w-1/4 h-1/4 py-10 animate-slowBounces' />

      <h1 className='text-5xl lg:text-6xl text-center text-white font-black'>Faça Login para continuar</h1>

      <button
        className='bg-[#6985D9] hover:bg-[#6985D9]/80 hover:-translate-y-1 duration-200 ease-in-out h-20 flex flex-row items-center gap-5 mt-20 rounded-lg px-4 text-xl font-semibold text-white shadow-md shadow-black'
      >
        <DiscordLogo className='text-4xl bg-white text-[#6985D9] rounded-[50%] p-1' weight='fill' />
        Login with Discord
      </button>
    </div>
  )
}
