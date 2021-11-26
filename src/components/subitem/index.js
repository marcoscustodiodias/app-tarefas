import { useCallback, useContext, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { Radio } from "../radio";

import { ListContext } from "../../contexts/ListContext";

export function Subitem({ item, subitem }) {
  const { updateSubitem } = useContext(ListContext);

  const [checked, setChecked] = useState(subitem.defaultChecked);
  const [editing, setEditing] = useState(false);

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked, setChecked]);

  const handleEditing = useCallback(() => {
    setEditing(!editing);
  }, [editing, setEditing]);

  const handleUpdateSubitem = useCallback(
    (value) => {
      updateSubitem({ ...subitem, label: value });
    },
    [subitem, updateSubitem]
  );

  return (
    <>
      <Flex alignItems={"center"} pl={"40px"} mx={4} my={4}>
        <Box mr={4}>
          <Radio checked={checked} onClick={handleChecked} />
        </Box>
        {editing && (
          <Input
            variant="unstyled"
            value={subitem.label}
            onInput={(event) => {
              handleUpdateSubitem(event.target.value);
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
            {subitem.label}
          </Text>
        )}
      </Flex>
    </>
  );
}
