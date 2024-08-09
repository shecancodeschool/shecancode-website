// import { createContext, useState } from "react"

// export const minimiseContext = createContext();

// export const SideNavProvider = ({ children }) => {
//     const [isSideNavOpen, setSideNavOpen] = useState(true);
  
//     const toggleSideNav = () => {
//       setSideNavOpen(!isSideNavOpen);
//     };
  
//     return (
//       <SideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
//         {children}
//       </SideNavContext.Provider>
//     );
//   };