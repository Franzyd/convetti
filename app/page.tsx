import Image from 'next/image'
import * as Event from '@/components/event'
import * as Layout from '@/components/page_layout'
import * as fs from 'fs'

export default function Home() {
  let rawJson = fs.readFileSync('app/eventList.json', 'utf-8')
  let eventList: Event.Events
  try {
    eventList = JSON.parse(rawJson)
  } catch (e) {
    eventList = {events: []}
  }

  let layoutElements: Layout.LayoutElements = {
    eventSide: ( <> { eventList.events.length != 0 && <>
      <Event.CurrentEvent {...eventList.events[0]}/>
      <Event.EventList events={eventList.events.slice(1)}/> </> }
    </>
    ),

    mediaSide: (
      <>Yo</>
    )
  }

  let layout = <Layout.Layout {...layoutElements}/>

  return layout
}
