import { useCallback, useContext, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input';

import { ListContext } from '../../contexts/ListContext'

import { Checkbox } from '../checkbox'

export function Item ({ item }) {
    const { list, setList } = useContext(ListContext)

    const [checked, setChecked] = useState(item.defaultChecked)
    const [editing, setEditing] = useState(false);

    const handleChecked = useCallback(() => {
        setChecked(!checked)
    }, [checked, setChecked])

    const handleEditing = useCallback(() => {
        setEditing(!editing)
    }, [editing, setEditing])

    const handleUpdateItem = useCallback((value) => {
        const index = list.findIndex(({ id }) => item.id === id)
        if (index >= 0) {
            const newList = [...list]
            newList[index] = { ...list[index], label: value }
            setList(newList)
        }
    }, [item, list, setList])

    return (
        <Flex alignItems={'center'} mx={4} my={4}>
            <Box mr={4}>
                <Checkbox checked={checked} onClick={handleChecked} />
            </Box>
            {editing && (
                <Input variant="unstyled" value={item.label} onInput={event => { handleUpdateItem(event.target.value) }} onBlur={handleEditing} />
            )}
            {!editing && (
                <Text fontSize="md" as={checked ? 's' : ''} color={checked ? 'gray.500' : 'brand.dark'} onClick={handleEditing}>
                    {item.label}
                </Text>
            )}
        </Flex>
    )
};
