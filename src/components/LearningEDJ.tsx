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
        <Button variant={'primary'}>Quero me inscrever</Button>
      </VStack>
      <Box w={'50%'} >
        <Accordion >
          <AccordionItem >
            <Text>
              <AccordionButton >
                <Box as="span" flex='1' textAlign='left' color={'white'}>
                <span style={{ color: '#ED1D24', fontWeight: 'bold' }}>1º Encontro - 15/09</span> - Período noturno
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </Text>
            <AccordionPanel color={'white'} pb={4}>
            <span style={{ color: '#ED1D24'}}>•</span> Os fundamentos da retórica e da oratória.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Como organizar os quatro estágios da construção do discurso.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Como dispor os argumentos de forma adequada e eficaz.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> As linguagens verbal, gestual, postural e fisionômica no discurso jurídico.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' color={'white'}>
                <span style={{ color: '#ED1D24', fontWeight: 'bold' }}>2º Encontro - 16/09</span> - Período matutino
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </Text>
            <AccordionPanel color={'white'} pb={4}>
              <span style={{ color: '#ED1D24'}}>•</span> O efeito halo primário e o efeito halo secundário.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> O efeito Alfa no domínio mental de cenários.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Recursos neurocientíficos de alto poder mnemônico.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Os efeitos positivos da austeridade, da firmeza e da hostilidade.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' color={'white'}>
                <span style={{ color: '#ED1D24', fontWeight: 'bold' }}>3º  Encontro - 16/09</span> - Período verpertino
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </Text>
            <AccordionPanel color={'white'} pb={4}>
              <span style={{ color: '#ED1D24'}}>•</span> Como reger nossos hormônios para que o ‘Estado de Júri’ não se sobreponha ou torne obscura a racionalidade necessária à nossa atuação.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Como lidar e, em certa medida, influir no estado emocional do ex-adverso.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Como desenvolver um standart discursivo alinhado ao nosso ouvinte.<br></br>
              <span style={{ color: '#ED1D24'}}>•</span> Como perceber, nas expressões de quem nos ouve, o grau de receptividade da nossa tese ou dos nossos argumentos.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  )
}
