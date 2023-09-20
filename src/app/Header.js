"use client"

import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation';

export function Header() {
  const params = useParams();
  const router = useRouter();
  // const id= params.id;
  // const navHeaders = ['Skills','Project','Career'];
  const navHeaders = ['one','two','three'];
  return (
    <header>
      <h1>
        <Link href='/' className="noUnderline">Home</Link>
      </h1>
      <nav>{navHeaders.map(nav=>{
        return <li key={nav}><Link href={nav}>{nav}</Link></li>
      })}
      </nav>
      {/* {id ?
      <>
        <li>
          <Link href={"/update/"+id}>Update</Link>
        </li>
        <li>
          <input type='button' value="delete" onClick={()=>{
            const options = { method : 'DELETE'}
            fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id,options).then(re=>re.json())
            .then(()=>{
              router.push('/');
              router.refresh()
            })
          }}></input>
        </li>
      </>
      :null} */}
   </header>
  );
}