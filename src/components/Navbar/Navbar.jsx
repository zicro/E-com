import Link from "next/link";
import styles from "./Navbar.module.css"
import links from "./data"
import Button from "../Button/Button";

export default function Navbar() {
  return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}> Name </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                    ))}

                <Button />
            </div>
        </div>
  )
}
