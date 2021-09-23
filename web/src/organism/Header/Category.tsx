import React, { FC } from 'react'

import { Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Category: FC = () => {
  type IsOpen = { isOpen: boolean }
  return (
    <Box w={100}>
      <Menu>
        {(isOpen: IsOpen) => (
          <>
            <MenuButton isActive={isOpen} borderBottom='1px'>
              Category
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Earrings</MenuItem>
              <MenuItem>Bracelet</MenuItem>
              <MenuItem>Necklace</MenuItem>
              <MenuItem>Ring</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  )
}

export default Category
