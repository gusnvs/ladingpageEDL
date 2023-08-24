import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Image, VStack, Text, Box, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import celular from '../assets/celular.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import turma from '../assets/alunosEDJ1.jpeg'
import { FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react"

const image = [image1, image2, image3, image4]

export const Testimony = () => {

    const [isWide] = useMediaQuery('(min-width: 1170px)');

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    const depoiments = [
        {
            name: 'Renata Ruth Fernandes Goya Marinho',
            position: 'Promotora de Justiça',
            text: 'Vivi momentos importantes de reflexão. O curso é farol e aponta questões necessárias para uma verdadeira evolução!'
        },
        {
            name: 'Arthur Vasques',
            position: 'Advogado e Professor Universitário',
            text: 'A oratória é atributo distintivo do profissional das carreiras jurídicas. Procurar o aprimoramento é a postura que se espera de nós e, para aperfeiçoar meu desempenho na advocacia e no magistério superior, busquei o curso do professor Douglas.'


        },
        {
            name: 'André Matsushita Gonçalves',
            position: 'Presidente da ADEPOL/MS',
            text: 'Um curso essencial para o domínio e aprimoramento da capacidade de falar em público, quer seja em entrevistas, quer seja ministrando aulas e palestras, quer seja sustentando ideias em debates orais ou qualquer outra atividade que exija a comunicação verbal coletiva. Abrange técnicas e princípios de linguagem corporal, dicção, entonação de voz, uso de retóricas, concatenação de argumentos em linha temporal e lógica, sempre visando a perfeita compreensão ou convencimento por parte do interlocutor. Recomendo para todas as pessoas que buscam um melhor desenvolvimento da capacidade de comunicação, tanto no aspecto profissional como também no pessoal.'
        }
    ]


    return (
        <Flex
            w={'100%'}
            h={'auto'}
            px={isWide ? 100 : 10}
            py={10}
            alignItems={'center'}
            flexDir={isWide ? 'row' : 'column'}
            justifyContent={'center'} >
            <Flex w={'100%'} flexDir={'column'} alignItems={'center'} gap={10} >
                <Heading textAlign={'center'} >
                    O que dizem os alunos do <Text color={'#ED1D24'}>Edificação do Discurso Jurídico</Text>
                    anterior?
                </Heading>
                <Flex flexDir={isWide ? 'row' : 'column'} w={'100%'} alignItems={'center'} justifyContent={'center'} gap={10}>
                    <Image
                        src={turma.src}
                        w='500px'
                        alt="Turma EDL"
                        borderRadius={'25px'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: hovered ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.6s ease-in-out',
                        }}
                    />

                    <Box w={'100%'} maxWidth={isWide ? '600px' : '500px'} >
                        {/* <motion.div whileTap={{ cursor: "grabbing" }} style={{
                            cursor: 'grab',
                            overflow: 'hidden'
                        }}>
                            <motion.div drag="x" dragConstraints={{ right: 0, left: -800 }} style={{
                                display: 'flex',
                            }}>
                                {depoiments.map(depoiment => (
                                    <motion.div style={{
                                        minHeight: '200px',
                                        minWidth: '400px',
                                        padding: '14px'
                                    }} key={depoiment.name}>
                                        <Flex
                                            flexDir={'column'}
                                            alignItems={'flex-start'}
                                            justifyContent={'space-between'}
                                            w={'100%'}
                                            h={'100%'}
                                            p={10}
                                            borderRadius={'25px'}
                                            bgColor={'gray.100'}>
                                            <Box h={'150px'} overflowY={'auto'}>
                                                <FaQuoteLeft color='#ED1D24' />
                                                <Text as={'em'} >{depoiment.text}</Text>
                                            </Box>
                                            <Box>
                                                <Text as={'cite'} fontSize={'sm'} color={'#ED1D24'}>{depoiment.position}</Text>
                                                <Text fontWeight={'bold'}>Dr. {depoiment.name}</Text>
                                            </Box>

                                        </Flex>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div> */}
                        <Swiper pagination={{ clickable: true }} navigation >
                            {depoiments.map(depoiment => (
                                <SwiperSlide>
                                    <Flex w={'100%'} justifyContent={'center'}>
                                        <Flex
                                            flexDir={'column'}
                                            alignItems={'flex-start'}
                                            justifyContent={'space-between'}
                                            w={'80%'}
                                            h={'100%'}
                                            p={10}
                                            borderRadius={'25px'}
                                            bgColor={'gray.100'}
                                            gap={10}>
                                            <Box h={'170px'} overflowY={'auto'} >
                                                <FaQuoteLeft color='#ED1D24' />
                                                <Text as={'em'} >{depoiment.text}</Text>
                                            </Box>
                                            <Box>
                                                <Text as={'cite'} fontSize={'sm'} color={'#ED1D24'}>{depoiment.position}</Text>
                                                <Text fontWeight={'bold'}>Dr. {depoiment.name}</Text>
                                            </Box>

                                        </Flex>
                                    </Flex>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Flex>
                <Text fontWeight={'medium'} textAlign={'center'}>
                    Veja como o Edificação do Discurso Jurídico foi
                    fundamental para a evolução de diversas pessoas no
                    aprendizado de oratória.
                </Text>
            </Flex>
        </Flex>
    )
}
