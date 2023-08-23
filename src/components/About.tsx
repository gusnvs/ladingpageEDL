import { Flex, Heading, VStack, Text, Image, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import douglas from '../assets/douglas.webp'
import Head from 'next/head';


export const About = () => {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Flex
            w={'100%'}
            h={'100vh'}
            bgGradient="linear(to-l, #CC1915, #390002)"
            px={100}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Head>
                <link
                    href="https://db.onlinewebfonts.com/c/07cb29fdcb073fff840edc6de2067b50?family=Amsterdam+Four_ttf"
                    rel="stylesheet"
                />
            </Head>
            <VStack gap={10} alignItems={'flex-start'} w={'50%'} p={5} >
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
            <Flex w={'50%'} justifyContent={'center'} p={10} position="relative">
                <Image
                    src={douglas.src}
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
