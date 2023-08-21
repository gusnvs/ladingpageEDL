import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Counter = ({title, number}) => {
  return (
    <Flex w={'110px'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'#fff'} gap={1} p={'10px'} borderRadius={'15px'}>
        <Text color={'#9B0A0F'} fontWeight={'bold'} fontSize={'2.5rem'}>{number}</Text>
        <Text color={'#9B0A0F'} fontWeight={'bold'}>{title}</Text>
    </Flex>
  )
}
