import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import axios from 'axios'
import { CaretDown, CaretUp, Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { FormEvent, useEffect, useState } from "react";

export interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    console.log(data)

    if (!data.name) {
      return;
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })

      alert('Anúncio criado com sucesso!')
    } catch (err) {
      console.log(err)
      alert('Erro ao criar anúncio!')
    }
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

      <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='game' className='font-semibold' >Qual o game?</label>

            <Select.Root name="game">
              <Select.Trigger id="game" className='flex flex-row items-center justify-between gap-2 bg-zinc-900 py-3 px-4'>
                <Select.Value placeholder='Selecione o game que deseja jogar' />
                <CaretDown />
              </Select.Trigger>

              <Select.Portal className="bg-zinc-900 text-white w-auto py-1 rounded-md shadow-lg shadow-black/20">
                <Select.Content>
                  <Select.Viewport>
                    <Select.Group className="flex flex-col gap-1">
                      {games.map(game => {
                        return (
                          <Select.Item
                            className="flex flex-row pl-4 hover:bg-zinc-500 hover:rounded-md hover:shadow-sm hover:shadow-zinc-600"
                            key={game.id}
                            value={game.id}
                          >
                            <Select.ItemText>{game.title}</Select.ItemText>
                            <Select.ItemIndicator>
                              <Check className="ml-2" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        )
                      })}
                    </Select.Group>
                  </Select.Viewport>
                  {/* <CaretDown className="relative left-1/2" /> */}
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Seu nome (ou nickname)</label>
            <Input type="text" name="name" id='name' placeholder='Como te chamam no game?' />
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
              <Input type="number" name="yearsPlaying" id='yearsPlaying' placeholder='Tudo bem ser ZERO' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="discord">Qual o seu Discord?</label>
              <Input type="text" name="discord" id='discord' placeholder='Usuario#777' />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <ToggleGroup.Root
                type="multiple"
                className='grid grid-cols-4 gap-2'
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title='Domingo'
                  className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title='Segunda'
                  className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title='Terça'
                  className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title='Quarta'
                  className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title='Quinta'
                  className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title='Sexta'
                  className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title='Sábado'
                  className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'} `}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input name="hourStart" id='hourStart' type="time" placeholder='De' />
                <Input name="hourEnd" id='hourEnd' type="time" placeholder='Até' />
              </div>
            </div>
          </div>

          <label className='mt-2 flex gap-2 text-sm items-center'>
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true)
                } else {
                  setUseVoiceChannel(false)
                }
              }}
              className="w-6 h-6 rounded bg-zinc-900 p-1"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close
              type='button'
              className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
            >
              Cancelar
            </Dialog.Close>
            <button
              type='submit'
              className='bg-violet-500 flex items-center gap-3 px-5 h-12 rounded-md font-semibold hover:bg-violet-600'
            >
              <GameController className='w-6 h-6' />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal >
  )
}
