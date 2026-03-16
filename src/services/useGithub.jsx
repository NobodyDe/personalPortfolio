import { useState, useEffect } from "react";

export function useGithub(topRepos) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        setLoading(true);

        const promises = topRepos.map((repo) =>
          fetch(`https://api.github.com/repos/NobodyDe/${repo}`).then((res) => {
            if (!res.ok) throw new Error(`Erro ao buscar ${repo}`);
            return res.json();
          }),
        );

        const results = await Promise.all(promises);
        setProjects(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (topRepos.length > 0) {
      fetchRepoData();
    }
  }, [topRepos]);

  return { projects, loading, error };
}
