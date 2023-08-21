import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    height="100vh"
    w={'100%'}
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <VStack
      w={'100%'}
      p={40}
      justifyContent="center"
      alignItems="center"
      >
      <Heading fontSize="3vw">{title}</Heading>
      <Text fontSize={'md'}>
        Já realizado em Campo Grande, com sucesso absoluto, esgotamento de vagas
        e fila de espera, agora tem a sua segunda edição, 2.0, com conteúdo amplamente
        ATUALIZADO, especialmente no âmbito da COMUNICAÇÃO NÃO VERBAL e no uso de recursos
        da NEUROCIÊNCIA jamais aplicados à dialética judiciária. Presencialmente em Campo Grande, MS
        dias 15 e 16 de setembro.
      </Text>
      <Button >Quero me inscrever agora</Button>
    </VStack>
  </Flex>
)

Hero.defaultProps = {
  title: 'A edificação do discurso jurídico 2.0',
}
