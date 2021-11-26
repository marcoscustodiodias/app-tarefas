import { createContext, useCallback, useState } from "react";

export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      id: 1,
      label: "typography",
      defaultChecked: false,
      subitems: [
        { id: 2, itemId: 1, label: "box modal", defaultChecked: false },
      ],
    },
    { id: 3, label: "layout", defaultChecked: false, subitems: [] },
    { id: 4, label: "color", defaultChecked: false, subitems: [] },
    { id: 5, label: "style", defaultChecked: false, subitems: [] },
    { id: 6, label: "get-started", defaultChecked: true, subitems: [] },
  ]);

  const addItem = useCallback(() => {
    const newItem = {
      id: list.length + 1,
      label: "",
      defaultChecked: false,
      subitems: [],
    };

    setList([newItem, ...list]);
  }, [list, setList]);

  const updateItem = useCallback(
    (newItem) => {
      const index = list.findIndex(({ id }) => newItem.id === id);
      if (index >= 0) {
        const newList = [...list];
        newList[index] = { ...list[index], ...newItem };
        setList(newList);
      }
    },
    [list, setList]
  );

  const addSubitem = useCallback(
    (item) => {
      const newSubitem = {
        id: list.length + 1,
        label: "",
        defaultChecked: false,
        subitems: [],
      };

      const index = list.findIndex(({ id }) => item.id === id);
      if (index >= 0) {
        const newList = [...list];
        newList[index] = { ...item, subitems: [newSubitem, ...item.subitems] };
        setList(newList);
      }
    },
    [list, setList]
  );

  const updateSubitem = useCallback(
    (subitem) => {
      const itemIndex = list.findIndex(({ id }) => subitem.itemId === id);
      if (itemIndex >= 0) {
        const item = {
          ...list[itemIndex],
        };
        const newList = [...list];
        const subitemIndex = item.subitems.findIndex(
          ({ id }) => subitem.id === id
        );
        if (subitemIndex >= 0) {
          const newSublist = [...item.subitems];

          newSublist[subitemIndex] = {
            ...newSublist[subitemIndex],
            ...subitem,
          };
          newList[itemIndex] = { ...item, subitems: newSublist };
          setList(newList);
        }
      }
    },
    [list, setList]
  );

  return (
    <ListContext.Provider
      value={{ list, setList, addItem, updateItem, addSubitem, updateSubitem }}
    >
      {children}
    </ListContext.Provider>
  );
};
