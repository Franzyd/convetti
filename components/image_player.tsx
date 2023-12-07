import React, {useState, useEffect} from "react";

export function Slideshow() {
    const TEN_SECONDS = 10000
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, TEN_SECONDS)

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