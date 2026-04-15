import { useParams } from "react-router-dom";
export default function RepoDetails() {
  const { username, repoName } = useParams();

  return (
    <div>
      <h1>User: {username}</h1>
      <h2>Repository: {repoName}</h2>
    </div>
  );
}
