import React, { FC, useMemo } from 'react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import Category from './Category'
import Logo from './Logo'
import SignIn from './SignIn'

type Menu = { key: string; component: JSX.Element }

const Header: FC = () => {
  const menus = useMemo(() => {
    const menus: Menu[] = []
    menus.push({
      key: 'category',
      component: <Category></Category>,
    })
    menus.push({ key: 'leftSpacer', component: <Spacer /> })
    menus.push({
      key: 'logo',
      component: <Logo />,
    })
    menus.push({
      key: 'rightSpacer',
      component: <Spacer />,
    })
    menus.push({
      key: 'signIn',
      component: <SignIn />,
    })
    return menus
  }, [])

  return (
    <>
      <Flex p='8' align='center'>
        {menus.map((menu) => (
          <React.Fragment key={menu.key}>{menu.component}</React.Fragment>
        ))}
      </Flex>
    </>
  )
}

export default Header
