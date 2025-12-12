"use client"

import { usePathname } from "next/navigation"

export default function NotFound () {
    const pathName = usePathname();
    const feedbackID = pathName.split("/")[2]
    return (
        <>
        <div>
            <h2></h2>
            <h4>Could not find feedback of requested {feedbackID} ID.</h4>
        </div>
        </>
    )
}