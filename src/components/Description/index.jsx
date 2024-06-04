import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'
import { slideUp, opacity } from './animation'
import Rounded from '../../common/RoundedButton'
export default function index() {
  const phrase =
    'Focused on building software products with great user experience; building interfaces that are thoughful, intuitive and generally accessible. I have with experience in working with both front-end and back-end JavaScript frameworks and libraries for personal projects, client-facing products, and teams with fast development cycles. '
  const description = useRef(null)
  const isInView = useInView(description)
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  )
}
