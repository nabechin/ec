import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { Box, Image, Grid, useMediaQuery } from '@chakra-ui/react'
import Item1 from '~/assets/img/item1.jpg'

export const ItemList: FC = () => {
  const [isXs] = useMediaQuery('(max-width: 576px)')
  const style = {
    wrapper: {
      padding: '0 150px',
    },
    header: {
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 30,
    } as CSSProperties,
  }
  return (
    <div style={style.wrapper}>
      <h1 style={style.header}>Items</h1>
      <Grid
        templateColumns={isXs ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
        gap={10}
      >
        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          width='300px'
        >
          <Image src={Item1} width='300px' height='300px'></Image>
          <Box p='3'>
            <Box fontWeight='semibold' letterSpacing='wide'>
              304 stainless charm necklace
            </Box>
            <Box>¥2.500</Box>
          </Box>
        </Box>
        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          width='300px'
        >
          <Image src={Item1} width='300px' height='300px'></Image>
          <Box p='3'>
            <Box fontWeight='semibold' letterSpacing='wide'>
              304 stainless charm necklace
            </Box>
            <Box>¥2.500</Box>
          </Box>
        </Box>
        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          width='300px'
        >
          <Image src={Item1} width='300px' height='300px'></Image>
          <Box p='3'>
            <Box fontWeight='semibold' letterSpacing='wide'>
              304 stainless charm necklace
            </Box>
            <Box>¥2.500</Box>
          </Box>
        </Box>
        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          width='300px'
        >
          <Image src={Item1} width='300px' height='300px'></Image>
          <Box p='3'>
            <Box fontWeight='semibold' letterSpacing='wide'>
              304 stainless charm necklace
            </Box>
            <Box>¥2.500</Box>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}
