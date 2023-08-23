import { Flex, HStack, Heading, Text, Badge, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { Counter } from './Counter';
import useCountDownHook from '../hook/useCountDownHook';

export const Price = () => {

  const [day, hour, minute, second] = useCountDownHook("Sep 15, 2023 00:00:00");

  return (
    <Flex w={'100%'} h={'100vh'} bgColor={'white'} alignItems={'center'} justifyContent={'center'} px={100}>
      <Flex
        w={'100%'}
        h={'90%'}
        bgColor={'#1B1815'}
        borderRadius={'25px'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        gap={10}>
        <Heading color={'white'} textAlign={'center'} fontSize={'xl'}>
          Como dizia Epicuro, <Text color={'#ED1D24'}>"Metade do sucesso vem do acaso. Metade do esforço pessoal."</Text> portanto, invista no seu conhecimento pessoal.
        </Heading>
        <Text color={'white'}>O evento começa exatamente em:</Text>
        <HStack >
          <Counter title="Dias" number={day} bg="white" colorLetter="#9B0A0F" />
          <Counter title="Horas" number={hour} bg="white" colorLetter="#9B0A0F" />
          <Counter title="Minutos" number={minute} bg="white" colorLetter="#9B0A0F" />
          <Counter title="Segundos" number={second} bg="white" colorLetter="#9B0A0F" />
        </HStack>
        <Text color={'white'}>Confira os lotes e faça sua inscrição antecipada</Text>
        <Text color={'white'} w={'50%'} textAlign={'center'}>
          Alunos do Curso Online Oratória Jurídica 3.0 tem desconto de 45%. Façam contato
          inbox pelo perfil Instagram <Link href='https://www.instagram.com/direct/t/112073226852259'><Badge colorScheme='red'>@oldegardo</Badge></Link> para obter o seu cupom.
        </Text>
        <Heading color={'white'} textAlign={'center'} fontSize={'md'} >
          Curso com vagas <Text color={'#ED1D24'} display={'inline'}>ALTAMENTE RESTRITAS!</Text> Garanta logo a sua!
        </Heading>
        <Button size={'lg'}>Quero me inscrever</Button>
      </Flex>

    </Flex>
  )
}
