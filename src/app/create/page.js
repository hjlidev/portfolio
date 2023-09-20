"use client";

import { useRouter } from "next/navigation";

export default function Create(){
  const router = useRouter();
  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      const opts = {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          title, body
        })
      }
      fetch(process.env.NEXT_PUBLIC_API_URL+'topics',opts).then(re=>re.json())
      .then(res=>{console.log(res)
        const lastid = res.id;
        router.refresh(); // 라우터가 서버컴포넌트의 데이터를 가져와서 다시 보여줌
        router.push(`/read/${lastid}`);
      })
    }}>
      <p>
        <input type="text" name="title" placeholder="title"></input>
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create"></input>
      </p>
    </form>
  )
}