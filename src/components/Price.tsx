import { Flex, HStack, Heading, Text, Badge, Link, Button, Box, Divider, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Counter } from './Counter';
import useCountDownHook from '../hook/useCountDownHook';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react"
import { Code } from '@chakra-ui/react'

export const Price = () => {

  const [day, hour, minute, second] = useCountDownHook("Nov 24, 2023 19:00:00");

  const [isWide] = useMediaQuery('(min-width: 1170px)');

  const lotes = [
    {
      title: 'Lote 1',
      date: '09/10 - 29/10',
      price: 'R$ 600,00'
    },
    {
      title: 'Lote 2',
      date: '30/10 - 05/11',
      price: 'R$ 650,00'
    },
    {
      title: 'Lote 3',
      date: '06/11 - 12/11',
      price: 'R$ 700,00'
    },
    {
      title: 'Lote 4',
      date: '13/11 - 19/11',
      price: 'R$ 750,00'
    },
    {
      title: 'Lote 5',
      date: '20/11 - 23/11',
      price: 'R$ 800,00'
    },
  ];

  return (
    <Flex
      w={'100%'}
      h={'auto'}
      bgColor={'white'}
      alignItems={'center'}
      justifyContent={'center'}
      px={isWide ? 100 : 5}
      py={10} >
      <Flex
        w={'100%'}
        h={'auto'}
        bgColor={'#1B1815'}
        borderRadius={'25px'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        gap={10}
        px={isWide ? 100 : 10}
        py={10}>
        <Heading color={'white'} textAlign={'center'} fontSize={'xl'}>
          Como dizia Epicuro, <Text color={'#ED1D24'}>"Metade do sucesso vem do acaso. Metade do esforço pessoal."</Text> portanto, invista no seu conhecimento pessoal.
        </Heading>
        <Text textAlign={'center'} color={'white'}>O evento começa exatamente em:</Text>
        <Flex flexDir={{ base: 'column', md: 'row', lg: 'row' }} gap={5}>
          <Counter title="Dias" number={day} bg="white" colorLetter="#9B0A0F" />
          <Counter title="Horas" number={hour} bg="white" colorLetter="#9B0A0F" />
          <Counter title="Minutos" number={minute} bg="white" colorLetter="#9B0A0F" />
          <Counter title="Segundos" number={second} bg="white" colorLetter="#9B0A0F" />
        </Flex>
        <Text textAlign={'center'} color={'white'}>Confira os lotes e faça sua inscrição antecipada</Text>
        <Box w={'100%'} maxWidth={'900px'} >
          {/* <motion.div whileTap={{ cursor: "grabbing" }} style={{
            cursor: 'grab',
            overflow: 'hidden'
          }}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -750 }} style={{
              display: 'flex',
            }}>
              {lotes.map(lote => (
                <motion.div style={{
                  minHeight: '150px',
                  minWidth: '270px',
                  padding: '14px',
                }} key={lote.title}>
                  <Flex
                    w={'100%'}
                    h={'100%'}
                    bgColor={'white'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'20px'}
                    flexDir={'column'}
                    gap={2}>
                    <Text fontWeight={'bold'} letterSpacing={1}>{lote.title}</Text>
                    <Text fontWeight={'medium'} color={'#ED1D24'}>{lote.date}</Text>
                    <Divider w={'70%'} border={'solid #CBD5E0 1px'} />
                    <Text fontWeight={'bold'} fontSize={'xl'}>{lote.price}</Text>
                  </Flex>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> */}
          <Swiper navigation >
            {lotes.map((lote, index) => (
              <SwiperSlide key={index}>
                <Flex w={'100%'} justifyContent={'center'}>
                  <Flex
                    w={'50%'}
                    h={'100%'}
                    bgColor={'white'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'20px'}
                    flexDir={'column'}
                    gap={2}
                    p={'15px'}>
                    <Text fontWeight={'bold'} letterSpacing={1}>{lote.title}</Text>
                    <Text fontWeight={'medium'} color={'#ED1D24'}>{lote.date}</Text>
                    <Divider w={'70%'} border={'solid #CBD5E0 1px'} />
                    <Text fontWeight={'bold'} fontSize={'xl'}>{lote.price}</Text>
                  </Flex>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Code colorScheme='red' children="Parcelável em até 7 vezes!" />
        <Text color={'white'} w={'100%'} textAlign={'center'}>
          Alunos do Curso Online Oratória Jurídica 3.0 tem desconto de 45%. Façam contato
          inbox pelo perfil Instagram <Link href='https://www.instagram.com/direct/t/112073226852259'><Badge colorScheme='red'>@oldegardo</Badge></Link> para obter o seu cupom.
        </Text>
        <Heading color={'white'} textAlign={'center'} fontSize={'md'} >
          Curso com vagas <Text color={'#ED1D24'} display={'inline'}>ALTAMENTE RESTRITAS!</Text> Garanta logo a sua!
        </Heading>
        <Link href='https://go.hotmart.com/Q87435750Y' target='_blank'>
          <Button size={'lg'}>Quero me inscrever</Button>
        </Link>
      </Flex>

    </Flex>
  )
}
