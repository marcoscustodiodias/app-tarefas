import { createContext, useState } from 'react'

export const ListContext = createContext({})

export const ListProvider = ({ children }) => {
    const [list, setList] = useState([
        { id: 1, label: 'typography', defaultChecked: false },
        { id: 2, label: 'layout', defaultChecked: false },
        { id: 3, label: 'color', defaultChecked: false },
        { id: 4, label: 'style', defaultChecked: false },
        { id: 5, label: 'get-started', defaultChecked: true },
    ])

    return (
      <ListContext.Provider value={{ list, setList }}>
        {children}
      </ListContext.Provider>
    )
  }
  
