import React from 'react'
import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Counter } from './Counter'
import useCountDownHook from '../hook/useCountDownHook'

export const CountDown = () => {

    const [day, hour, minute, second] = useCountDownHook("Sep 15, 2023 00:00:00");

    return (
        <Flex w={'100%'} h={'200px'} bgColor={'#390002'} alignItems={'center'} justifyContent={'space-between'} px={100} gap={'1rem'}>
            <Text color={'#fff'} fontSize={'lg'}>
                As vagas para o evento já estão se esgotando
                e essa oportunidade única se <strong>encerra em:</strong>
            </Text>
            <HStack >
                <Counter title="Dias" number={day}/>
                <Counter title="Horas" number={hour}/>
                <Counter title="Minutos" number={minute}/>
                <Counter title="Segundos" number={second}/>
            </HStack>
        </Flex>
    )
}
