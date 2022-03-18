import React from 'react';

import styles from './Hero.module.css'

export interface HeroProps {
  children: React.ReactNode;
  src: string;
  height: number;
  width: number;
}

export function Hero({ children, src, height, width }: HeroProps) {
  return (
    <div className={styles.hero}>
      <img alt="" src={src} height={height} width={width} />
      {children}
    </div>
  )
}
