import { useState, useEffect } from "react";

const cache = {};

export function useGithub(topRepos) {
  const cacheKey = topRepos.join(",");

  const [projects, setProjects] = useState(cache[cacheKey]?.data || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache[cacheKey]) {
      setProjects(cache[cacheKey].data);
      setLoading(false);
      return;
    }

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
        cache[cacheKey] = { data: results };
        setProjects(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepoData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey]);

  return { projects, loading, error };
}
