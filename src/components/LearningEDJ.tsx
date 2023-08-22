import React from 'react'
import {
  Flex,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button
} from '@chakra-ui/react'

export const LearningEDJ = () => {
  return (
    <Flex w={'100%'} h={'50vh'} bgColor={'#1B1815'} alignItems={'center'} justifyContent={'space-between'} px={100}>
      <VStack w={'50%'} display={'flex'} alignItems={'flex-start'} gap={10}>
        <Box >
          <Heading mb={2} color={'white'}>O que você vai aprender no <Text color={'#ED1D24'}>EDJ 2.0?</Text></Heading>
          <Text color={'white'} w='80%'>
            No final do curso você sairá preparado para aplicar as técnicas
            e conhecimentos imediatamente, sem nenhuma dificuldade,
            percebendo já nas primeiras oportunidades a evolução no desempenho da sua oratória
          </Text>
        </Box>
        <Button>Quero me inscrever</Button>
      </VStack>
      <Box w={'50%'} >
        <Accordion >
          <AccordionItem >
            <Text>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' color={'white'}>
                  Section 1 title
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </Text>
            <AccordionPanel color={'white'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' color={'white'}>
                  Section 1 title
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </Text>
            <AccordionPanel color={'white'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' color={'white'}>
                  Section 1 title
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </Text>
            <AccordionPanel color={'white'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  )
}
