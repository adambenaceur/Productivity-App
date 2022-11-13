import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';



const Header = () => {
  const router = useRouter()

  const list = [
    {
      id: "/",
      title: 'Home',
    },
    {
      id: "/contact",

      title: 'Contact',
    },
    {
      id: "/about",
      title: 'About',
    },
    {
      id: "/donate",
      title: 'Donate',
    },
  ];


  return (
    <div className='header'>

        <Link href='/'>     
            <a>
                <Image src='/new-astrano-logo.png' alt='' className='header-logo' width='350px' height='75px' />
            </a>
        </Link>
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
      <Link href='/training'><button className='button'> Training Astral </button></Link> 
    </div>
  )
}

export default Header