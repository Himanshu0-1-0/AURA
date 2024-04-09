'use client'
import { useEffect } from "react";

export default function Bootstrapjs() {
    useEffect(()=>{
        //@ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.js")
      },[]);
      
    return <></>
}
