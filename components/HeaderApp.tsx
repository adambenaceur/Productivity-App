import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';



const HeaderApp = () => {
  const router = useRouter()

  const list = [
    {
      id: "/dashboard",
      title: 'Dashboard',
    },
    {
      id: "/habit-tracker",
      title: 'Habit Tracker',
    },
    {
      id: "/calander",
      title: 'Calander',
    },
    {
      id: "/to-do",
      title: 'to-do list',
    },
    {
        id: "/notes",
        title: 'notes',
      },
    {
        id: "/login",
        title: 'log in!',
      },   
  ];


  return (
    <div className='header'>
        <div className='nav-links'>
            <ul className='nav-bar'>
                {list.map((item) => (
                <li key={item.id}>
                    <Link href={item.id}>
                        <a className={router.pathname === item.id ? "active" : ""}>{item.title}</a>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
      <Link href='/'><button className='button'> Pause <Image src='/pause.svg' alt='' width='30px' height='30px'/> </button></Link> 
    </div>
  )
}

export default HeaderApp