"use client";

import { useRouter } from "next/navigation";

export default function Skills(){
  const skillMap = new Map();
  skillMap.set('Front-End',['HTML','CSS','JS','jQuery','React(Next.js)']);
  skillMap.set('Back-End',['MS-SQL','MY-SQL','Node.js(express)']);

  return (
    <div>
      {Array.from(skillMap.entries()).map(([category, skills]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )

}