import React, { FC } from 'react'
import { ItemList } from '~/organism/ItemList'
import { HeroImage } from '~/organism/HeroImage'

const TopPage: FC = () => {
  const style = {
    wrapper: {
      padding: 30,
    },
  }
  return (
    <div style={style.wrapper}>
      <HeroImage />
      <ItemList />
    </div>
  )
}

export default TopPage
