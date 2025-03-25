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
                <li key={index} className={`${path == link.path && " transition-all duration-300 text-amber-400 "}`} >
                  <Link href={link.path} className=' py-[7px]'>{link.title}</Link>
                </li>
              )
            })}
    </>
  )
}

export default NavBarLinks