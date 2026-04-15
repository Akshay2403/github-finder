import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GithubContext } from "../context/GithubContext";

export default function useSearchUser() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { addSearch } = useContext(GithubContext);

  function searchUser(recentQuery) {
    const target = recentQuery || query;
    if (target.trim()) {
      navigate(`/profile/${target}`);
      addSearch(target);
    }
  }
  return {
    query,
    searchUser,
    setQuery,
  };
}
