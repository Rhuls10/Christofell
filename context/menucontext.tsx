import React, { createContext, useState, ReactNode } from "react";
import { MenuItem } from "../App";

type MenuContextType = {
  menu: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
};

export const MenuContext = createContext<MenuContextType>({
  menu: [],
  addMenuItem: () => {},
});

export const COURSES = ["Starters", "Mains", "Dessert"];

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => setMenu((prev) => [...prev, item]);

  return (
    <MenuContext.Provider value={{ menu, addMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
