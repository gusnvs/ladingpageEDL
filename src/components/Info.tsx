import React, { useState } from 'react';
import { Flex, Heading, HStack, Text, useMediaQuery  } from '@chakra-ui/react';
import { RiUserVoiceFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter'

export const Info = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [isWide] = useMediaQuery('(min-width: 1170px)');


    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


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
            <Heading textAlign={isWide ? 'start' : 'center'} >
                Este evento é
                <Heading color={'white'}>
                    <Typewriter
                        words={['obriatório', 'essencial', 'indispensável']}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000} />
                </Heading>
                para quem ...
            </Heading>
            <Flex gap={10} flexDir={{ base: 'column', md: 'row', lg: 'row'}} >
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
