import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading, Text, VStack, Box, Image, useMediaQuery, Link } from '@chakra-ui/react';
import douglas from "../assets/douglas.webp";
import douglasFundo2 from "../assets/douglas_fundo2.png"
import ReactPlayer from 'react-player'


export const Starting = () => {

    const [isWide] = useMediaQuery('(min-width: 1170px)');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (

        <Flex
            w={'100%'}
            h={'auto'}
            background={`url(${douglasFundo2.src}) no-repeat center center fixed`}
            // bgGradient="linear(to-b, #791714, #390002)"
            backgroundSize="cover" // Ajusta o dimensionamento da imagem
            alignItems={'center'}
            flexDir={'column'}
            color={'white'}
            gap={10}
            px={isWide ? 100 : 10}
            py={10}>

            <Heading textAlign={isWide ? 'start' : 'center'} >A edificação do discurso jurídico 2.0</Heading>
            <Text fontSize={'md'} textAlign={'center'} >
                Já realizado em Campo Grande, com sucesso absoluto, esgotamento de vagas
                e fila de espera, o Workshop 'A Edificação do Discurso Jurídico' tem agora a sua segunda edição 2.0, com conteúdo amplamente
                ATUALIZADO, especialmente no âmbito da COMUNICAÇÃO NÃO VERBAL e no uso de recursos
                da NEUROCIÊNCIA jamais aplicados à dialética judiciária. Presencialmente em Campo Grande, MS
                dias 24 e 25 de novembro.
            </Text>
            <Flex w={'100%'} justifyContent={'center'}>
                {isClient && (
                    <ReactPlayer url={'https://www.youtube.com/watch?v=wn5U72xXNaY'} />
                )}
            </Flex>
            <Link href='https://pay.hotmart.com/B85498475I' target='_blank'>
                <Button size={'lg'}>Quero me inscrever</Button>
            </Link>



        </Flex>

    )
};


export default Starting;

