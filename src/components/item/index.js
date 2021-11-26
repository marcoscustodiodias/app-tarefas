import { useCallback, useContext, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { ListContext } from "../../contexts/ListContext";

import { Checkbox } from "../checkbox";
import { Subitem } from "../subitem";

export function Item({ item }) {
  const { updateItem } = useContext(ListContext);

  const [checked, setChecked] = useState(item.defaultChecked);
  const [editing, setEditing] = useState(false);

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked, setChecked]);

  const handleEditing = useCallback(() => {
    setEditing(!editing);
  }, [editing, setEditing]);

  const handleUpdateItem = useCallback(
    (value) => {
      updateItem({ ...item, label: value });
    },
    [item, updateItem]
  );

  return (
    <>
      <Flex alignItems={"center"} mx={4} my={4}>
        <Box mr={4}>
          <Checkbox checked={checked} onClick={handleChecked} />
        </Box>
        {editing && (
          <Input
            variant="unstyled"
            value={item.label}
            onInput={(event) => {
              handleUpdateItem(event.target.value);
            }}
            onBlur={handleEditing}
          />
        )}
        {!editing && (
          <Text
            fontSize="md"
            as={checked ? "s" : ""}
            color={checked ? "gray.500" : "brand.dark"}
            onClick={handleEditing}
          >
            {item.label}
          </Text>
        )}
      </Flex>
      {item.subitems &&
        item.subitems.map((subitem) => (
          <Subitem
            key={subitem.id}
            item={item}
            subitem={subitem}
            checked={subitem.defaultChecked}
          />
        ))}
    </>
  );
}
