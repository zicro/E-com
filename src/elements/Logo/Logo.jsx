import Link from "next/link"
import styles from "./logo.module.css"

import { Lalezar } from 'next/font/google'
const LogoFont = Lalezar({ 
    subsets: ['arabic'], 
    weight: ['400'], 
  })

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${LogoFont.className}`}> Name </Link>
  )
}
