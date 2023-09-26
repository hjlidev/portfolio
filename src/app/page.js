"use client";
import { useState,useEffect } from "react";


export default function Home() {
//   const [resize, setResize] = useState();

// useEffect(() => {
//   window.addEventListener("resize", () => {
//     setResize(window.innerWidth);
//   });

//   const time = setTimeout(() => {
//     setResize(window.innerWidth);
//   }, 0.0000000000000000001);

//   return () => {
//     window.removeEventListener("resize", () => {
//       setResize(window.innerWidth);
//     });

//     clearTimeout(time);
//   };
// }, []);
  return (
    <>
      <h2>Welcome</h2>
      Hello. WEB!
      <br></br>
      {/* <div>{resize}</div> */}
    </>
  )
}
