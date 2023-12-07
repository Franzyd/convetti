'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useRef } from "react";

export type LayoutElements = {
    eventSide: JSX.Element,
    mediaSide: JSX.Element
}

let s:boolean = true
function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    let h:any = time.getHours()
    let m:any = time.getMinutes()
    if (h < 10) {h = "0" + h}
    if (m < 10) {m = "0" + m}
    let colon:string = ':'
    if (time.getSeconds() % 2 == 1) colon = ' '
    return <>{h}{colon}{m}</>
}

export const Layout: React.FC<LayoutElements> = ({
    eventSide, mediaSide
}) => {
    return <>
    <header className="h-12 border-b-2 border-b-[#F68500]">
        <div className="absolute self-center left-1/2 transform -translate-x-1/2 font-azeret text-4xl">
            <Clock/>
        </div>
        <div className="relative flex h-10 flex-row-reverse items-center gap-x-5">
            <Link href="/" className="text-3xl text-[#F68500] ">🎉Convetti</Link>
            <span className="text-xl">Edytuj</span>
        </div>
    </header>
    <div className="flex">
        <div className="flex-1">{eventSide}</div>
        <div className="flex-1">{mediaSide}</div>
    </div>
    </>
}