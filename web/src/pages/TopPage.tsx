import React, { FC } from 'react'
import Img from '~/assets/img/camp.jpg'
import { CSSProperties } from 'styled-components'

const HeroImage = () => {
  const style = {
    heroWrapper: {
      display: 'flex',
      width: '100%',
    } as CSSProperties,
    descriptionWrapper: {
      width: '50%',
      margin: 'auto',
      padding: '30px 0 30px 30px',
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
      padding: '30px 30px 30px 0',
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
        <img style={style.img} src={Img} />
        <h1 style={style.imgHeader}>s o l y l u n a</h1>
      </div>
    </div>
  )
}

const TopPage: FC = () => {
  return <HeroImage />
}

export default TopPage
