import { Flex, Heading, VStack, Text, Image } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
    return (
        <Flex
            w={'100%'}
            h={'100vh'}
            bgGradient="linear(to-l, #CC1915, #390002)"
            px={100}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <VStack gap={10} alignItems={'flex-start'} w={'50%'} >
                <Heading color={'white'}>Conheça o seu mentor:</Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={'#ED1D24'}>Douglas Oldegardo,</Text>
                <Text color={'white'}>
                    Promotor de Justiça Titular do Tribunal do Júri de Campo Grande há 14 anos.<br></br><br></br>
                    Há 26 anos atuando em plenário, com cerca de 1.000 júris e 90 mil horas de sustentações orais.<br></br><br></br>
                    Bacharel e Direito pela Universidade Católica Dom Bosco.<br></br><br></br>
                    Curso de extensão em Filosofia Moral pela Harvard Law School.<br></br><br></br>
                    Especialista em Neurociências e Comportamento pela PUC/RS.<br></br><br></br>
                    Instrutor de Retórica, Oratória e Plenário do Júri. Palestrante e ministrador de cursos sobre Oratória, Júri e Segurança Pública em diversos estados da Federação.
                </Text>
            </VStack>
            <Image />

        </Flex>
    )
}
