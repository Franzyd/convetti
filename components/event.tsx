import React from "react";

export type EventData = {
    startTime: number,
    endTime: number,
    title: string,
    host?: string,
    description?: string
}

export const CurrentEvent: React.FC<EventData> = ({
    startTime, endTime, title, host = undefined, description = undefined
}) => {
    let start: string = startTime.toString().padStart(4, '0')
    start = [start.slice(0, 2), ':', start.slice(2)].join('')
    let end: string = endTime.toString().padStart(4, '0')
    end = [end.slice(0, 2), ':', end.slice(2)].join('')

    return <div>
        <p className="font-azeret font-bold text-4xl text-[#1E90FF]">
            {start}-{end}
        </p>
        <p className="font-neue font-bold text-5xl">
            {title} { (host) !== undefined && (<em>({host})</em>) }
        </p>
        { (description) !== undefined &&
        <p className="font-neue text-3xl text-[#696969]">
            {description}
        </p> }
    </div>
}