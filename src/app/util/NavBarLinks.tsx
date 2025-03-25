"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBarLinks = () => {

    const path = usePathname();

    console.log(path);

    const navLinks = [
        {
          title : "About me",
          path : "/aboutme"
        },
        {
          title : "Project",
          path : "/project"
        },
        {
          title : "Resume",
          path : "/resume"
        }
      ]

  return (
    <>
         {navLinks.map((link , index) => {
              return (
                <li key={index} className={`${path == link.path && " border-b-[6px] border-amber-500"}`} >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              )
            })}
    </>
  )
}

export default NavBarLinks