# Chef Christoffel Menu App – Part 2

## Introduction
The **Chef Christoffel Menu App** is a cross-platform mobile application built with **React Native**.  
It allows Chef Christoffel to dynamically manage his menu for clients, adding new dishes and viewing the menu on Android and iOS devices.

---

## Objectives (Part 2)
By the end of Part 2, the app allows the chef to:

1. Enter menu items with:
   - Dish Name
   - Description
   - Course (Starters, Mains, Dessert)
   - Price (ZAR)
2. View the menu on the Home Screen.
3. Display the total number of menu items.
4. Add new menu items from the Home Screen.
5. Navigate between screens: Home, Add Dish, Menu Item Details.

---

## Features Implemented

- Add menu items with name, description, course, and price.
- Predefined course selection: Starters, Mains, Dessert.
- Home screen displays menu and total dishes.
- View details of a dish on a separate screen.
- React Context for global state management.
- React Navigation for screen transitions.
- Color scheme defined in `App.tsx`.

---

## Screens

- **HomeScreen:** Displays all dishes and total number of dishes.  
- **AddDishScreen:** Form to add a new dish.  
- **MenuItemScreen:** Displays details of a selected dish.  

---
Christoffel/
│
├── App.tsx # Main entry with navigation and colors
├── context/
│ └── MenuContext.tsx # Global state for menu items
└── screens/
├── HomeScreen.tsx # Displays menu and total dishes
├── AddDishScreen.tsx # Form to add new menu items
└── MenuItemScreen.tsx # Shows dish details
## Folder Structure


---

## How to Use

1. Open the app on your device or emulator.
2. Home Screen shows all current menu items and total dishes.
3. Click **Add New Dish** to open the form.
4. Enter Dish Name, Description, select Course, and Price.
5. Tap **Save Dish** to add it to the menu.
6. Tap a dish to view detailed information on the Menu Item Screen.

---



