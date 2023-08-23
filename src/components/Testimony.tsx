import React, { useState, useEffect, useRef } from 'react'
import { Flex, Heading, Image, VStack, Text, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import celular from '../assets/celular.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const image = [image1, image2, image3, image4]

export const Testimony = () => {

    return (
        <Flex w={'100%'} h={'80vh'} alignItems={'center'} justifyContent={'space-between'} px={100} >
            <Image src={celular.src} w='450px' alt="Turma EDL" />
            <Flex w={'50%'} flexDir={'column'} alignItems={'flex-end'} gap={10}>
                <Heading textAlign="right" >
                    O que dizem os alunos do <Text color={'#ED1D24'}>Edificação do Discurso Jurídico</Text>
                    anterior?
                </Heading>
                <Box w={'100%'} maxWidth={'900px'} >
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
                <Flex w={'100%'} textAlign={'center'}>
                    <Text fontWeight={'medium'}>
                        Veja como o Edificação do Discurso Jurídico foi
                        fundamental para a evolução de diversas pessoas no
                        aprendizado de oratória.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
