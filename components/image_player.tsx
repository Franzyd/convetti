'use client'

import Image from 'next/image'
import React, {useState, useEffect} from "react";

export default function Slideshow(props: {files: string[]}) {
    const TEN_SECONDS = 10000
    let [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1)%props.files.length)
        }, TEN_SECONDS)

        return () => clearInterval(interval)
    }, [index])
    let filePath = '/slideshow/' + props.files[index]
    return <div className='min-h-[20vw] flex content-center justify-center'>
        <Image src={filePath} width={0} height={0} sizes="100vw" style={{width: 'auto', maxHeight: '20vw', alignSelf: 'center'}} alt={props.files[index]}/>
    </div>
}