import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Image, VStack, Text, Box, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import celular from '../assets/celular.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const image = [image1, image2, image3, image4]

export const Testimony = () => {

    const [isWide] = useMediaQuery('(min-width: 1170px)');


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
                    <Image src={celular.src} w='30%' alt="Turma EDL" />

                    <Box w={'100%'} maxWidth={isWide ? '600px' : '500px'} >
                        <motion.div whileTap={{ cursor: "grabbing" }} style={{
                            cursor: 'grab',
                            overflow: 'hidden'
                        }}>
                            <motion.div drag="x" dragConstraints={{ right: 0, left: -1000 }} style={{
                                display: 'flex',
                            }}>
                                {image.map(image => (
                                    <motion.div style={{
                                        minHeight: '200px',
                                        minWidth: '400px',
                                        padding: '14px'
                                    }} key={image.src}>
                                        <Image borderRadius={'12px'} pointerEvents={'none'} width={'100%'} h={'90%'} src={image.src} alt="Imagens EDJ" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
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
