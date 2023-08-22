import React from 'react'
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


export const Info = () => {
    return (
        <Flex
            w={'100%'}
            h={'300px'}
            bgGradient="linear(to-l, #390002,  #CC1915)"
            px={100}
            alignItems={'center'}
            flexDir={'row'}
            justifyContent={'space-between'}>
            <Heading >Este evento é <Heading color={'white'}>obrigatório</Heading>para quem ..</Heading>
            <HStack gap={10}>
                <Flex
                    w={'250px'}
                    h={'200px'}
                    bgColor={'#390002'}
                    p={5}
                    color={'white'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'30px'}>
                    <Text>Quer superar bloqueios e desenvolver uma oratória fluente.</Text>
                </Flex>
                <Flex
                    w={'250px'}
                    h={'200px'}
                    bgColor={'#390002'}
                    p={5}
                    color={'white'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'30px'}>
                    <Text>Quer ter uma oratória diferenciada e altamente poderosa.</Text>
                </Flex>
                <Flex
                    w={'250px'}
                    h={'200px'}
                    bgColor={'#390002'}
                    p={5}
                    color={'white'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'30px'}>
                    <Text>Não quer perder a chance de conhecer os recursos mais modernos da oratória.</Text>
                </Flex>
            </HStack>
        </Flex>
    )
}
