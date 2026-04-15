import { useState, useEffect } from "react";

export function useGithub(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
          ),
        ]);

        if (!userRes.ok) {
          throw new Error(
            userRes.status === 404 ? "User not found!" : "Failed to fetch user",
          );
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        console.log("repodata", reposData);

        setData(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);
  return { data, repos, loading, error };
}
