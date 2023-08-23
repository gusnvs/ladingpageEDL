import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Counter = ({title, number, bg, colorLetter}) => {
  return (
    <Flex w={'110px'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} bgColor={bg} gap={1} p={'10px'} borderRadius={'15px'}>
        <Text color={colorLetter} fontWeight={'bold'} fontSize={'2.5rem'}>{number}</Text>
        <Text color={colorLetter} fontWeight={'bold'}>{title}</Text>
    </Flex>
  )
}
