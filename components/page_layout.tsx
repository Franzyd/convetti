'use client'

import React, {useState, useEffect} from "react";
import Link from "next/link";

export type LayoutElements = {
    eventSide: JSX.Element,
    mediaSide: JSX.Element
}

let s:boolean = true
function Clock() {
    const ONE_SECOND = 1000
    const [time, setTime] = useState(new Date())
    let colon:string = ':'
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, ONE_SECOND)

        return () => clearInterval(interval)
    }, [])
    let h:any = time.getHours()
    let m:any = time.getMinutes()
    if (h < 10) {h = "0" + h}
    if (m < 10) {m = "0" + m}
    // if (time.getSeconds() % 2 == 1) colon = ' '
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
    <main className="flex">
        <section className="flex-1">{eventSide}</section>
        <section className="flex-1 flex flex-col">{mediaSide}</section>
    </main>
    </>
}