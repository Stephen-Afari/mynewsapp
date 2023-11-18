"use client"
import React from 'react'
import { MdLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)
useEffect(()=>setMounted(true),[])
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
    {mounted && (currentTheme === "dark" ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=> setTheme("light")}/>) : (
        <FaRegMoon className='text-xl cursor-pointer hover:text-amber-500' onClick = {()=>setTheme("dark")}/>)

    )}
      
      
    </>
  )
}

