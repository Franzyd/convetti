import React from "react";

export type EventData = {
    startTime: number,
    endTime: number,
    title: string,
    host?: string,
    description?: string
}

export type Events = {
    events: EventData[]
}

function ToTime(time: number): string {
    let t: string = time.toString().padStart(4, '0')
    return [t.slice(0, 2), ':', t.slice(2)].join('')
}

export const UpcomingEvent: React.FC<EventData> = ({
    startTime, endTime, title, host = undefined
}):JSX.Element => {
    return <>
        <p className="font-neue text-3xl">
            <span className="font-azeret font-light">
                {ToTime(startTime)}-{ToTime(endTime)}
            </span>
            <span> - {title} <em>({host})</em></span>
        </p>
    </>
}

export function EventList({events}: Events) {
    let list
    return <>
        {events.length > 0 && events.map(ev => <UpcomingEvent {...ev} key={ev.startTime}/>)}
        <em className="font-neue font-light text-3xl text-[#696969]">--Koniec dnia--</em>
    </>
}

export const CurrentEvent: React.FC<EventData> = ({
    startTime, endTime, title, host = undefined, description = undefined
}) => {
    if (startTime == undefined) return <></>
    return <article>
        <p className="font-azeret font-bold text-4xl text-[#1E90FF]">
            {ToTime(startTime)}-{ToTime(endTime)}
        </p>
        <p className="font-neue font-bold text-5xl">
            {title} { (host) !== undefined && (<em>({host})</em>) }
        </p>
        { (description) !== undefined &&
        <p className="font-neue text-4xl text-[#696969]">
            {description}
        </p> }
    </article>
}