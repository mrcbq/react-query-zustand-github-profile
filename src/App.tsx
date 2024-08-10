import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteReposStore } from './store/favoriteRepos';

function App() {
  const { data, isLoading } = useFetchRepositories()
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repository={repo}
          isFavorite={favoriteReposIds.includes(repo.id)}
        />
      ))}
    </div>
  );
}

export default App;
