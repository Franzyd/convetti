import Image from 'next/image'
import { EventData, CurrentEvent } from '@/components/event'

export default function Home() {
  let eventData: EventData = {
    startTime: 1000,
    endTime: 1100,
    title: 'Tytuł',
    host: 'Host',
    // description: 'Opis'
  }
  return (
    <CurrentEvent {...eventData}></CurrentEvent>
  )
}
