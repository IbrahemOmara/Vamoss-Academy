import { createContext, useState } from "react";

export const StoreContext = createContext(0);

export default function StoreContextProvider({ children }) {
  const [toggleSidebarProfile, setToggleSidebarProfile] = useState(false);
  const [countCartPkg, setCountCartPkg] = useState(0);
  const [titleDashboard, setTitleDashboard] = useState("Dashboard");
  const [coursesHome, setCoursesHome] = useState([]);
  const [sponsorAttributeId, setSponsorAttributeId] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        toggleSidebarProfile,
        setToggleSidebarProfile,
        countCartPkg,
        setCountCartPkg,
        titleDashboard,
        setTitleDashboard,
        coursesHome,
        setCoursesHome,
        sponsorAttributeId,
        setSponsorAttributeId
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
