"use client"

import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation';

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id= params.id;
  return (
    <ul>
      <li>
        <Link href='/create'>Create</Link>
      </li>
      {id ?
      <>
        <li>
          <Link href={"/update/"+id}>Update</Link>
        </li>
        <li>
          <input type='button' value="delete" onClick={()=>{
            const options = { method : 'DELETE'}
            fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id,options).then(re=>re.json())
            .then(res=>{
              router.push('/'); // 현재 페이지가 홈페이지('/') 경로로 이동
              router.refresh(); // 현재 페이지를 재로드하고 해당 페이지의 데이터나 상태 갱신 (사용자가 현재 페이지를 유지하면서 페이지 내용을 업데이트할 때 유용)
            })
          }}></input>
        </li>
      </>
      :null}
    </ul>
  );
}
