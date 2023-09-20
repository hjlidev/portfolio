"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id).then(re=>re.json()).then(res=>{
      setTitle(res.title);
      setBody(res.body);
    })
  },[])
  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      const opts = {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({title, body})
      }
      fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id,opts).then(re=>re.json())
      .then(res=>{
        const lastid = res.id;
        router.refresh(); // 라우터가 서버컴포넌트의 데이터를 가져와서 다시 보여줌
        router.push(`/read/${lastid}`);
      })
    }}>
      <p>
        <input type="text" name="title" placeholder="title" value={title} onChange={e=>{
          setTitle(e.target.value)}}></input>
      </p>
      <p>
        <textarea name="body" placeholder="body" value={body} onChange={e=>{
          setBody(e.target.value)}}></textarea>
      </p>
      <p>
        <input type="submit" value="update"></input>
      </p>
    </form>
  )
}