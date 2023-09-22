"use client"
export function NavStatus(props) {

  // state는 컴포넌트의 생명 주기와 밀접한 연관이 있는 요소이므로 렌더링과 관련 없는 값을 저장하기에는 적합치 않다.
  // ref는 setTimeout, setInterval이 반환하는 ID 값, state의 이전 값, 이 외 렌더링과 무관한 가변값 저장하기에 적합하다.
  // effect : 컴포넌트가 렌더링될 때마다 특정 작업을 실행할 수 있도록
  if(props.stat === null){
    return
  }else{
    return <div>{'현재 경로는 '+props.stat}</div>;
  }
}