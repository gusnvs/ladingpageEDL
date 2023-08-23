import React, { useState, useEffect } from 'react'
import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Counter } from './Counter'
import useCountDownHook from '../hook/useCountDownHook'

export const CountDown = () => {

    const [day, hour, minute, second] = useCountDownHook("Sep 15, 2023 00:00:00");

    // const [started, setStarted] = useState(false);
    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setStarted(true);
    //     }, 5000); // Espera 5 segundos antes de iniciar o contador

    //     return () => clearTimeout(timer);
    // }, []);

    // if (!started) {
    //     return (
    //         <Flex w={'100%'} h={'200px'} bgColor={'#390002'} alignItems={'center'} justifyContent={'space-between'} px={100} gap={'1rem'}>
    //             <Text color={'#fff'} fontSize={'lg'}>
    //                 Aguarde enquanto a contagem regressiva é inicializada...
    //             </Text>
    //         </Flex>
    //     );
    // }

    return (
        <Flex w={'100%'} h={'200px'} bgColor={'#390002'} alignItems={'center'} justifyContent={'space-between'} px={100} gap={'1rem'}>
            <Text color={'#fff'} fontSize={'lg'} w={'50%'}>
                As vagas para o evento já estão se esgotando
                e essa oportunidade única se <strong>encerra em:</strong>
            </Text>
            <HStack >
                <Counter title="Dias" number={day} bg="white" colorLetter="#9B0A0F"/>
                <Counter title="Horas" number={hour} bg="white" colorLetter="#9B0A0F"/>
                <Counter title="Minutos" number={minute} bg="white" colorLetter="#9B0A0F"/>
                <Counter title="Segundos" number={second} bg="white" colorLetter="#9B0A0F"/>
            </HStack>
        </Flex>
    )
}
