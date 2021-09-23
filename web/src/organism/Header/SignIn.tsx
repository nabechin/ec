import React, { FC } from 'react'
import { Text, Box } from '@chakra-ui/react'

const SignIn: FC = () => {
  return (
    <Box borderBottom='1px' w={100}>
      <Text fontSize='lg' textAlign={['center']}>
        Sign In
      </Text>
    </Box>
  )
}

export default SignIn
