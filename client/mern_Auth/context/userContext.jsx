import axios from "axios";

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Load user profile only once, when the component mounts
    axios
      .get("/profile")
      .then(({ data }) => setUser(data))
      .catch((error) => {
        // Handle errors, e.g., by logging or showing a notification
        console.error("Failed to load user profile:", error);
      });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
