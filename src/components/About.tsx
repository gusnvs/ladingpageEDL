import { Flex, Heading, VStack, Text, Image, Box, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import douglas from '../assets/douglas.webp'
import douglasCentralizado from '../assets/douglasCentralizado.png'
import Head from 'next/head';


export const About = () => {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const [isWide] = useMediaQuery('(min-width: 1170px)');


    return (
        <Flex
            w={'100%'}
            h={'auto'}
            bgGradient="linear(to-l, #CC1915, #390002)"
            px={isWide ? 100 : 10}
            py={10}
            gap={10}
            alignItems={'center'}
            justifyContent={isWide? 'center' : 'space-between'}
            flexDir={isWide? 'row' : 'column'}>
            <Flex gap={10} flexDir={'column'} alignItems={isWide? 'flex-start' : 'center'} w={'100%'} >
                <Heading textAlign={isWide ? 'start' : 'center'} color={'white'}>Conheça o seu mentor:</Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={'#ED1D24'}>Douglas Oldegardo,</Text>
                <Text textAlign={isWide ? 'start' : 'center'} color={'white'}>
                    Promotor de Justiça Titular do Tribunal do Júri de Campo Grande há 14 anos.<br></br><br></br>
                    Há 26 anos atuando em plenário, com cerca de 1.000 júris e 90 mil horas de sustentações orais.<br></br><br></br>
                    Bacharel e Direito pela Universidade Católica Dom Bosco.<br></br><br></br>
                    Curso de extensão em Filosofia Moral pela Harvard Law School.<br></br><br></br>
                    Especialista em Neurociências e Comportamento pela PUC/RS.<br></br><br></br>
                    Instrutor de Retórica, Oratória e Plenário do Júri. Palestrante e ministrador de cursos sobre Oratória, Júri e Segurança Pública em diversos estados da Federação.
                </Text>
            </Flex>
            <Flex w={'100%'} justifyContent={'center'} position="relative">
                <Image
                    src={douglasCentralizado.src}
                    w={'500px'}
                    h={'600px'}
                    objectFit={'cover'}
                    // objectPosition={'-200px center'}
                    borderRadius={'35px'}
                    border={'solid 5px #7F0C0B'}
                    boxShadow={'md'}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: hovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.6s ease-in-out',
                    }}
                />
                <Text
                    zIndex={1000}
                    position={'absolute'}
                    color={'white'}
                    bottom={'20px'}
                    right={'80px'}
                    fontSize={'30px'}
                    fontFamily={'Amsterdam Four_ttf, sans-serif'}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: hovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.6s ease-in-out',
                    }}
                >
                    Douglas Oldegardo
                </Text>

            </Flex>
        </Flex>
    )
}
