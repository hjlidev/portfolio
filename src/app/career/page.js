"use client";

import { useRouter } from "next/navigation";
import { NavStatus } from "../NavStatus";

export default function Career(){
  const router = useRouter();
  const carr = [{
    company : '현 회사',
    period : '2022 - 04 - 01',
    position : 'FE'
  }]
  return(
    <div>{carr.map(ca=>{
      return <li key={ca.company}>{ca.company}</li>
    })}</div>
  )
}