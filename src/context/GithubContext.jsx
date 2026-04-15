import { createContext, useEffect, useState } from "react";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [recentSearches, setRecentSearches] = useState(() => {
    const stored = localStorage.getItem("recentSearches");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  function addSearch(username) {
    if (!recentSearches.includes(username)) {
      setRecentSearches((prev) => [username, ...prev].slice(0, 5));
    }
  }

  return (
    <GithubContext.Provider value={{ recentSearches, addSearch }}>
      {children}
    </GithubContext.Provider>
  );
};
