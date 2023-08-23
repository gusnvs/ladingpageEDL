import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = defineStyleConfig({
    baseStyle: {
        borderRadius: '8px'
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3,
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 4,
        },
    },
    variants: {
        outline: {
            bg: 'transparent',
            border: '2px solid',
            borderColor: 'primary',
            color: 'primary',
            _hover: { bg: '#E3EDFF' },
            _active: { bg: '#8FB7FF' }
        },
        secundary: {
            bg: 'purple.500',
            color: 'white',
            _hover: { bg: 'purple.400' },
            _active: { bg: 'purple.700' },
            _dark: {
                bg: 'purple.500',
                color: 'white',
                _hover: { bg: 'purple.700' },
                _active: { bg: 'purple.800' }
            }
        },
        primary: {
            bg: '#ED1D24',
            color: 'white',
            _hover: { bg: '#ff000a' },
            _active: { bg: '#730a0e' },
        },
        ghost: {
            bg: 'gray.400',
            color: 'white',
            _hover: { bg: 'gray.500' },
            _active: { bg: 'gray.600' },
            _dark: {
                bg: 'gray.50',
                color: 'black',
                _hover: { bg: 'gray.300' },
                _active: { bg: 'gray.500' },
            }
        },
        cancel: {
            bg: 'red.500',
            color: 'white',
            _hover: { bg: 'red.400' },
            _active: { bg: 'red.600' }, 
        }
    },
    defaultProps: {
        size: 'md',
        variant: 'primary',
    },
})