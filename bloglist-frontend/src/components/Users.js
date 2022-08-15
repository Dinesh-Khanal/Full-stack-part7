import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const Users = () => {
  const users = useSelector((state) => state.users.userlist);
  return (
    <>
      <h1>Users</h1>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Blogs created</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Users;
