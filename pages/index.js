import Head from 'next/head'
import Image from 'next/image'

import Link  from 'next/link';

export default function Home() {
  return (
    <div >
      <h1> ONLINE MANAGEMENT SYSTEM</h1>
      <Link href='/wpa'> Home </Link>
     <Link href='/labs'> Lab Controller </Link>
     <Link href='/devices'> Device </Link>
    </div>
  )
}


