import React, { FC } from 'react'
import LogoImg from '~/assets/img/logo.jpg'

const style = {
  img: {
    height: 40,
    width: 140,
  },
}

const Logo: FC = () => {
  return <img src={LogoImg} style={style.img}></img>
}

export default Logo
