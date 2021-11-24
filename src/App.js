import { useCallback, useContext } from 'react';
import { Box } from '@chakra-ui/layout';

import { Header } from './components/header'
import { List } from './components/list'
import { Fab } from './components/fab'

import { ListContext } from './contexts/ListContext'

function App() {
  const { list, setList } = useContext(ListContext)

  const handleAddItem = useCallback(() => {
    const newItem = { id: list.length + 1, label: 'Marcos Dias', defaultChecked: false }

    setList([ newItem, ...list ])
  }, [list, setList])

  return (
    <>
      <Header />
      <List />
      <Box position={'fixed'} right={'16px'} bottom={'16px'}>
        <Fab onClick={handleAddItem} />
      </Box>
    </>
  );
}

export default App;
