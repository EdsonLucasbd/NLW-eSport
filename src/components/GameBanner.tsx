interface GameBannerProps {
  banner: string,
  title: string,
  adsCout: number
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className='relative rouded-lg overflow-hidden'>
      <img src={props.banner} alt={`banner ${props.title}`} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-sm text-zinc-300 block'>{props.adsCout} anúncio(s)</span>
      </div>
    </a>
  )
}
