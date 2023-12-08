'use client'

import React from 'react'
import dynamic from "next/dynamic";

// export async function Title() {
//     const videoData = await fetch()
// }

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export function VideoPlayer(props: {videos: string[]}) {
    return <ReactPlayer url={props.videos} playing={false} controls={true}
    />
}