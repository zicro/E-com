
import styles from './footer.module.css'
import Image from 'next/image'

import { social_media } from './data'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div> All right Reserved ..</div>
      <div className={styles.social}>
        {
          social_media.map(media => 
            <Image
              key={media.id}
              src={`/images/icons/${media.name}.png`}
              width={20}
              height={20}
              className={styles.icon}
              alt={`${media.name} link`}
            />
            )
        }
        
      </div>
    </div>
  )
}
