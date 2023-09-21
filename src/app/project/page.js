"use client";

import { useRouter } from "next/navigation";
import { NavStatus } from "../NavStatus";

export default function Career(){
  const router = useRouter();
  const address = location.href.split('/').reverse()[0]
  
  return(
    <NavStatus stat = {address}/>
  )
}