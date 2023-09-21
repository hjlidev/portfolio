"use client"
import { useEffect, useState } from "react";

export function NavStatus(props) {

  const [routeState, setRouteState] = useState('');

    const address = location.href.split('/').reverse()[0];
  

  return (

    <div>{address}
    </div>
  );
}