'use client'

import React, { useEffect, useState } from "react"
import { CurrentEvent, EventData, EventList, Events } from "./event"

export default function ListEvents({events}: Events) {
    const ONE_SECOND = 1000
    const [sortedEvents, setEvents] = useState(events.sort(
        (a, b) => a.startTime - b.startTime
    ))
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, ONE_SECOND)

        return () => clearInterval(interval)
    }, [])
    let h:any = date.getHours()
    let m:any = date.getMinutes()
    if (h < 10) {h = "0" + h}
    if (m < 10) {m = "0" + m}
    let time = + ("" + h + m)
    while (sortedEvents.length > 0) {
        if (+time >= events[0].endTime) {
            sortedEvents.shift()
            setEvents(sortedEvents)
        }
        else break
    }
    let se = sortedEvents
    return <article>
        <CurrentEvent {...se[0]}/>
        <EventList events={se.slice(1)}/>
    </article>
}