import { Flex, Image } from "@chakra-ui/react"
import logoDouglas from "../assets/logoDouglas.png"

export const  WhitePartLogo = () => {
    return (
        <>
        <Flex w={'100%'} h={'100px'} alignItems={'center'} justifyContent={'center'}>
            <Image src={logoDouglas.src} w='250px' alt="Logo Douglas OLdergardo"/>
        </Flex>
        </>
    )
}