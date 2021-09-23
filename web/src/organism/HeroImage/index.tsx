import React, { CSSProperties, FC } from 'react'
import Hero from '~/assets/img/hero.jpg'

export const HeroImage: FC = () => {
  const style = {
    heroWrapper: {
      display: 'flex',
      width: '100%',
      marginBottom: '100px',
    } as CSSProperties,
    descriptionWrapper: {
      width: '50%',
      margin: 'auto',
    },
    head: {
      fontSize: 100,
    },
    description: {
      fontSize: 25,
    },
    imgWrapper: {
      position: 'relative',
      width: '50%',
    } as CSSProperties,
    img: {
      width: '100%',
      height: 'calc(100vh - 177px)',
    },
    imgHeader: {
      position: 'absolute',
      color: 'white',
      top: '45%',
      left: '50%',
      fontSize: 50,
      transform: 'translate(-50%, -50%)',
    } as CSSProperties,
  }

  return (
    <div style={style.heroWrapper}>
      <div style={style.descriptionWrapper}>
        <div style={style.head}>solyluna.</div>
        <div style={style.description}>
          <div>
            comes from the sun and moon, silver base and charm selected from
            overseas.
          </div>
          <div>International order to TAIWAN is available since Jul 8th !!</div>
        </div>
      </div>
      <div style={style.imgWrapper}>
        <img style={style.img} src={Hero} />
        <h1 style={style.imgHeader}>s o l y l u n a</h1>
      </div>
    </div>
  )
}
