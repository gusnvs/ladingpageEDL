import React, { useState } from 'react';
import { Box, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import { RiUserVoiceFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import Typewriter from 'typewriter-effect';

export const Information = () => {

    const [isWide] = useMediaQuery('(min-width: 1170px)');
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const items = [
        {
            text: 'Quer superar bloqueios e desenvolver uma oratória fluente.',
            icon: <RiUserVoiceFill size={40} />,
        },
        {
            text: 'Quer ter uma oratória diferenciada e altamente poderosa.',
            icon: <AiFillFire size={40} />,
        },
        {
            text: 'Não quer perder a chance de conhecer os recursos mais modernos da oratória.',
            icon: <BsBookmarkStarFill size={40} />,
        },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <Flex
            w={'100%'}
            h={'auto'}
            bgGradient="linear(to-l, #390002,  #CC1915)"
            px={isWide ? 100 : 10}
            py={10}
            gap={10}
            alignItems={'center'}
            direction={isWide ? 'row' : 'column'}
            justifyContent={'space-between'}>
            <Box textAlign={isWide ? 'start' : 'center'}>
                <Heading >Este evento é</Heading>
                {/* <Heading color={'white'}>obrigatório</Heading> */}
                <Heading color={'white'}>
                    <Typewriter
                        options={{
                            strings: ['obriatório', 'essencial', 'indispensável'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Heading>
                <Heading >para quem ...</Heading>
            </Box>

            <Flex gap={10} flexDir={{ base: 'column', md: 'row', lg: 'row' }} >
                {items.map((item, index) => (
                    <Flex
                        key={index}
                        w={'200px'}
                        h={'150px'}
                        bgColor={hoveredIndex === index ? 'white' : '#390002'}
                        p={5}
                        color={hoveredIndex === index ? '#CC1915' : 'white'}
                        textAlign={'center'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={'30px'}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        transition={'0.6s'}>
                        {hoveredIndex === index ? <Text fontWeight={'semibold'}>{item.text}</Text> : item.icon}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
