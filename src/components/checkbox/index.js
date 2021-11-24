import { Box, Flex } from "@chakra-ui/layout";
import { CheckIcon } from '@chakra-ui/icons';

export function Checkbox ({ checked, onClick }) {
    return (
        <>
            {checked && (
                <Flex alignItems={'center'} justifyContent={'center'} borderRadius={4} bg={'brand.primary'} w={6} h={6} onClick={onClick}>
                    <CheckIcon color="brand.white" w={3} h={3} />
                </Flex>
            )}
            {!checked && (
                <Box borderRadius={4} bg={'brand.dark'} w={6} h={6} onClick={onClick}></Box>
            )}
        </>
    )
};
