import { useCallback, useContext } from "react";
import { Box } from "@chakra-ui/layout";

import { Header } from "./components/header";
import { List } from "./components/list";
import { Fab } from "./components/fab";

import { ListContext } from "./contexts/ListContext";

function App() {
  const { addItem } = useContext(ListContext);

  const handleAddItem = useCallback(() => {
    addItem();
  }, [addItem]);

  return (
    <>
      <Header />
      <List />
      <Box position={"fixed"} right={"16px"} bottom={"16px"}>
        <Fab onClick={handleAddItem} />
      </Box>
    </>
  );
}

export default App;
