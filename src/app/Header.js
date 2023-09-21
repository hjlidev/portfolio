"use client"

import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation';

export function Header() {
  const params = useParams();
  const router = useRouter();
  // const id= params.id;
  const navHeaders = ['Skills','Project','Career','GitHub'];
  //const navHeaders = ['one','two','three'];
  return (
    <>
    <header>
      <h1>
        <Link href='/'>Home</Link>
      </h1>
      <nav>{navHeaders.map(nav=>{
        if(nav==='GitHub'){
          return <li key={nav}><Link href="https://github.com/hjlidev">{nav}</Link></li>
        }
        return <li key={nav}><Link href={nav.toLowerCase()} stat = {nav}>{nav}</Link></li>
      })}
      </nav>
   </header>
   </>
  );
}