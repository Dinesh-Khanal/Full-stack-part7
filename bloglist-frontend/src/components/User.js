import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector((state) => state.users.userlist);
  const id = useParams().id;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return null;
  }
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>Added blogs</h5>
      <ul>
        {user.blogs.map((b) => (
          <li key={b.id}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default User;
