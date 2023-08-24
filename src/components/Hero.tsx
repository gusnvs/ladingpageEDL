import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading, Text, VStack, Box, Image, useMediaQuery } from '@chakra-ui/react';
import douglas from "../assets/douglas.webp";
import ReactPlayer from 'react-player'


export const Hero = () => {

  const [isWide] = useMediaQuery('(min-width: 1170px)');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Flex
      h={'100vh'}
      w={'100%'}
      position="relative"
    >
      {/* <Image
        src={douglas.src}
        alt="Douglas Oldegardo"
        objectFit="cover"
        w="100%"
        h="100%"
      /> */}
      {/* Componente Box para a sobreposição com fundo degradê */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-b, #791714, #390002)"
        opacity={1}
      />
      <Flex
        w={'100%'}
        h={'auto'}
        px={isWide ? 100 : 10}
        py={10}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        color={'white'}
        direction={'column'}
        gap={10}>

        <Heading textAlign={isWide ? 'start' : 'center'} >A edificação do discurso jurídico 2.0</Heading>
        <Text fontSize={'md'} textAlign={'center'} >
          Já realizado em Campo Grande, com sucesso absoluto, esgotamento de vagas
          e fila de espera, agora tem a sua segunda edição, 2.0, com conteúdo amplamente
          ATUALIZADO, especialmente no âmbito da COMUNICAÇÃO NÃO VERBAL e no uso de recursos
          da NEUROCIÊNCIA jamais aplicados à dialética judiciária. Presencialmente em Campo Grande, MS
          dias 22 e 23 de setembro.
        </Text>
        <Flex w={'100%'} justifyContent={'center'}>
          {isClient && (
            <ReactPlayer url={'https://www.youtube.com/watch?v=7sDY4m8KNLc&t=149s'} />
          )}
        </Flex>
        <Button size={'lg'}>Quero me inscrever</Button>
      </Flex>
    </Flex>
  )
};


export default Hero;
