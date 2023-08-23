import React from 'react'
import useCountDownHook from '../hook/useCountDownHook';
import { Counter } from './Counter';
import { Text, HStack, Flex, Image, Button, Box } from '@chakra-ui/react';
import logoDouglas from '../assets/logoDouglas.png'

export const Footer = () => {
  const [day, hour, minute, second] = useCountDownHook("Sep 15, 2023 00:00:00");

  return (
    <Flex w={'100%'} h={'150px'} bgColor={'white'} alignItems={'center'} justifyContent={'space-between'} px={100} gap={'1rem'}>
      <Image src={logoDouglas.src} w='250px' alt="Logo Douglas OLdergardo" />
      <HStack >
          <Counter title="Dias" number={day} bg="#9B0A0F" colorLetter="white" />
          <Counter title="Horas" number={hour} bg="#9B0A0F" colorLetter="white" />
          <Counter title="Minutos" number={minute} bg="#9B0A0F" colorLetter="white" />
          <Counter title="Segundos" number={second} bg="#9B0A0F" colorLetter="white" />
      </HStack>
      <Button>Quero me inscrever</Button>
    </Flex>
  )
}
