'use client'

import React, {useState, useEffect} from "react";

let s:boolean = true

export default function Clock() {
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
    if (time.getSeconds() % 2 == 1) colon = ' '
    return <>{h}{colon}{m}</>
}