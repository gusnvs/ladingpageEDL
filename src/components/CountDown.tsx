import React, { useState, useEffect } from 'react'
import { Button, Flex, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import { Counter } from './Counter'
import useCountDownHook from '../hook/useCountDownHook'

export const CountDown = () => {

    const [day, hour, minute, second] = useCountDownHook("Nov 24, 2023 19:00:00");

    const [isWide] = useMediaQuery('(min-width: 1170px)');


    return (
        <Flex
            w={'100%'}
            h={'auto'}
            bgColor={'#390002'}
            alignItems={'center'}
            justifyContent={'space-between'}
            px={isWide ? 100 : 10}
            py={10}
            gap={'1rem'}
            direction={isWide ? 'row' : 'column'}>
            <Text color={'#fff'} fontSize={'lg'} w={'100%'} textAlign={isWide ? 'start' : 'center'}>
                As vagas para o evento já estão se esgotando
                e essa oportunidade única se <strong>encerra em:</strong>
            </Text>
            <Flex flexDir={{ base: 'column', md: 'row', lg: 'row'}} gap={5}>
                <Counter title="Dias" number={day} bg="white" colorLetter="#9B0A0F" />
                <Counter title="Horas" number={hour} bg="white" colorLetter="#9B0A0F" />
                <Counter title="Minutos" number={minute} bg="white" colorLetter="#9B0A0F" />
                <Counter title="Segundos" number={second} bg="white" colorLetter="#9B0A0F" />
            </Flex>
        </Flex>
    )
}
