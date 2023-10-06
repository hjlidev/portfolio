"use client"

import Link from 'next/link';
import { NavStatus } from './NavStatus';
import { usePathname } from 'next/navigation';
import { useState,useEffect } from "react";

export function Header() {
  const navHeaders = ['Skills','Project','Career','GitHub'];
  const pathname = usePathname().replace('/','');
 
  const current = pathname===''?null:pathname.replace(pathname[0],pathname[0].toUpperCase());
    const [resize, setResize] = useState();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });

    const time = setTimeout(() => {
      setResize(window.innerWidth);
    }, 0.0000000000000000001);
  
    return () => {
      window.removeEventListener("resize", () => {
        setResize(window.innerWidth);
      });

      clearTimeout(time);
    };

  }, []);
    
  return (
    <>
      <header>
        <h1>
          <Link href='/'>Home</Link>
        </h1>
        <nav className={resize<=900 ?"hide inlineCls":"flexCls"}>
          {navHeaders.map(nav=>{
            if(nav==='GitHub'){
              return <li key={nav}><Link className='headHover' href="https://github.com/hjlidev">{nav}</Link></li>
            }
            return <li key={nav}><Link className='headHover' href={nav.toLowerCase()}>{nav}</Link></li>
          })}
        </nav>
        <div className='hamburgerMenu' onClick={function(){
          document.querySelector('nav').classList.toggle('hide');
        }}>Ham</div> 
      </header>
      <NavStatus stat = {current}/>
   </>
  );
}