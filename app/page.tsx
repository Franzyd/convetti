import Image from 'next/image'
import * as Event from '@/components/event'
import * as Layout from '@/components/page_layout'
import * as fs from 'fs'
import { VideoPlayer } from '@/components/video_player'

export default function Home() {
  let eventList: Event.Events
  try {
    let eventJson = fs.readFileSync('app/json/eventList.json', 'utf-8')
    eventList = JSON.parse(eventJson)
  } catch (e) {
    eventList = {events: []}
  }

  let videos: string[]
  try {
      let videoJson = fs.readFileSync('app/json/videolist.json', 'utf-8')
      videos = JSON.parse(videoJson)
  } catch (e) {
      videos = []
  }

  let layoutElements: Layout.LayoutElements = {
    eventSide: ( <article> 
      <Event.CurrentEvent {...eventList.events[0]}/>
      <Event.EventList events={eventList.events.slice(1)}/>
    </article>
    ),

    mediaSide: (<>
        <figure className='flex-1 self-center m-10'>
          {videos.length > 0 && <VideoPlayer videos={videos}/>}
        </figure>
        <figure className='flex-1 relative self-center m-6 bg-slate-400'>
          <Image src='/Example image.png'
          height={600} width={600} alt='Example Image'/>
        </figure>
      </>
    )
  }

  let layout = <Layout.Layout {...layoutElements}/>

  return layout
}
