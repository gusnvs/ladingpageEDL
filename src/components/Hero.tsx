import React from 'react';
import { Button, Flex, Heading, Text, VStack, Box, Image } from '@chakra-ui/react';
import douglas from "../assets/douglas.webp";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    height="100vh"
    w={'100%'}
    position="relative"
  >
    <Image
      src={douglas.src}
      alt="Douglas Oldegardo"
      objectFit="cover"
      w="100%"
      h="100%"
    />
    {/* Componente Box para a sobreposição com fundo degradê */}
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      bgGradient="linear(to-b, #791714, #390002)"
      opacity={0.5}
    />
    <VStack
      w={'100%'}
      p={40}
      justifyContent="center"
      alignItems="center"
      position="absolute"
      color={'white'}
    >
      <Heading fontSize="3vw">{title}</Heading>
      <Text fontSize={'md'} textAlign={'center'} >
        Já realizado em Campo Grande, com sucesso absoluto, esgotamento de vagas
        e fila de espera, agora tem a sua segunda edição, 2.0, com conteúdo amplamente
        ATUALIZADO, especialmente no âmbito da COMUNICAÇÃO NÃO VERBAL e no uso de recursos
        da NEUROCIÊNCIA jamais aplicados à dialética judiciária. Presencialmente em Campo Grande, MS
        dias 15 e 16 de setembro.
      </Text>
      <Button size={'lg'}>Quero me inscrever</Button>
    </VStack>
  </Flex>
);

Hero.defaultProps = {
  title: 'A edificação do discurso jurídico 2.0',
};

export default Hero;
