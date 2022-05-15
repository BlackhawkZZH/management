import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Start = () => {

  const nav = useNavigate()
  useEffect(()=>{
    nav('login')
  },[])
  return (
    <div>
      <h1>It Works!</h1>
    </div>
  )
}