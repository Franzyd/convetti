import Image from 'next/image'
import * as Event from '@/components/event'
import * as Layout from '@/components/page_layout'
import * as fs from 'fs'
import { VideoPlayer } from '@/components/video_player'
import dynamic from 'next/dynamic'
import Slideshow from '@/components/image_player'

const ListEvents = dynamic(() => import('../components/list_events'), { ssr:false})

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

  let images = fs.readdirSync('public/slideshow/')

  let layoutElements: Layout.LayoutElements = {
    eventSide: ( <ListEvents events={eventList.events}/> ),

  mediaSide: (<>
      <figure className='flex-1 m-5'>
        {videos.length > 0 && <VideoPlayer videos={videos}/>}
      </figure>
      <figure className='flex-1 self-center flex content-center justify-center min-w-full bg-slate-400'>
        <Slideshow files={images}/>
      </figure>
    </>)
  }

  let layout = <Layout.Layout {...layoutElements}/>

  return layout
}
