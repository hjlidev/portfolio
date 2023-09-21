// "use client";
import Link from 'next/link'
import './globals.css'
import { Control } from './Control';
import { Header } from './Header';
import { NavStatus } from './NavStatus';

export const metadata = {
  title: 'Web tutorials',
  description: 'Generated by Me',
}

export default async function RootLayout({ children }) {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics',{cache:'no-store'}); // 한 번 가져온 정보를 저장(캐싱되어있음)
    const topics = await resp.json();
  return (
    <html>
      <body>
        {/* <h1><Link href="/">Home</Link></h1> */}
        <Header/>
        <ol>
        {topics.map((topic)=>{
          return<li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
        })}
        </ol>
        {children}
        <Control/>
        </body>
    </html>
  )
}
