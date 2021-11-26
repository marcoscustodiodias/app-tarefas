import { useContext } from "react";
import { Box } from "@chakra-ui/layout";
import { Item } from "../item";

import { ListContext } from "../../contexts/ListContext";

export function List() {
  const { list } = useContext(ListContext);

  return (
    <Box py={2}>
      {list && list.map((item) => <Item key={item.id} item={item} />)}
    </Box>
  );
}
