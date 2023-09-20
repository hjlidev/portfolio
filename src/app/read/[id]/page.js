export default async function Read(props){
  // 사용자와 상호작용이 없으면 서버 컴포넌트 -> useeffect 써도 됨
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`,{cache:"no-store"});

  const topic = await resp.json();
  return(
    <>
      <h2>{topic.title}</h2>
      {topic.body}
      </>
  )
}