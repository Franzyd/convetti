'use client'

import React from 'react'
import dynamic from "next/dynamic";

// export async function Title() {
//     const videoData = await fetch()
// }

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export function VideoPlayer(props: {videos: string[]}) {
    return <div className='relative pt-[56.25%]'>
        <ReactPlayer className='react-player' url={props.videos} playing={false} controls={true} height="100%" width="100%"
    />
    </div>
}