'use client'

import React from 'react'
import ReactPlayer from 'react-player'


export function VideoPlayer(props: {videos: string[]}) {
    return <ReactPlayer url={props.videos} playing={false} controls={true}/>
}