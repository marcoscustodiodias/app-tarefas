import { Flex } from '@chakra-ui/layout';
import { AddIcon } from '@chakra-ui/icons';

export function Fab ({ onClick }) {
    return (
        <>
            <Flex
                w={'48px'}
                h={'48px'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'brand.primary'}
                color={'brand.white'}
                borderRadius={'100%'}
                onClick={onClick}
            >
                <AddIcon />
            </Flex>
        </>
    )
};
