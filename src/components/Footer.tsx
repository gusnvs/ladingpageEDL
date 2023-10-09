import React from 'react'
import useCountDownHook from '../hook/useCountDownHook';
import { Counter } from './Counter';
import { Text, HStack, Flex, Image, Button, Box, useMediaQuery, Link } from '@chakra-ui/react';
import logoDouglas from '../assets/logoDouglas.png'


export const Footer = () => {
  const [day, hour, minute, second] = useCountDownHook("Nov 24, 2023 19:00:00");

  const [isWide] = useMediaQuery('(min-width: 1170px)');


  return (
    <Flex
      w={'100%'}
      h={'auto'}
      bgColor={'white'}
      px={isWide ? 100 : 10}
      py={10}
      alignItems={'center'}
      flexDir={isWide ? 'row' : 'column'}
      gap={10}
      justifyContent={isWide ? 'center' : 'space-between'}>
      <Image src={logoDouglas.src} w='250px' alt="Logo Douglas OLdergardo" />
      <Flex flexDir={{ base: 'column', md: 'row', lg: 'row' }} gap={5} >
        <Counter title="Dias" number={day} bg="#9B0A0F" colorLetter="white" />
        <Counter title="Horas" number={hour} bg="#9B0A0F" colorLetter="white" />
        <Counter title="Minutos" number={minute} bg="#9B0A0F" colorLetter="white" />
        <Counter title="Segundos" number={second} bg="#9B0A0F" colorLetter="white" />
      </Flex>

      <Link href='https://pay.hotmart.com/B85498475I' target='_blank'>
        <Button size={'lg'}>Quero me inscrever</Button>
      </Link>
    </Flex>
  )
}
