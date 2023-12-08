'use client'

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import('../components/clock'), { ssr:false})

export type LayoutElements = {
    eventSide: JSX.Element,
    mediaSide: JSX.Element
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
            <Link href="/" className="font-quicksand text-3xl text-[#F68500] m-2 ">🎉Convetti</Link>
            {/* <span className="text-xl">Edytuj</span> */}
        </div>
    </header>
    <main className="flex">
        <section className="flex-1 m-6">{eventSide}</section>
        <section className="flex-1 flex flex-col m-6">{mediaSide}</section>
    </main>
    </>
}