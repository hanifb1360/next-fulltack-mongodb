'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: 'white' }
          : { backgroundColor: 'black' }
      }
    >
      
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, backgroundColor: 'black' }
            : { right: 1, backgroundColor: 'white' }
        }
      >
       
      </div>
    </div>
  )
}

export default ThemeToggle
