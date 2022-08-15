import styled from "styled-components";

const Button = styled.button`
  background-color: #4040bb;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;
const Loginform = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <>
      <form onSubmit={(e) => handleLogin(e, username, password)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" id="btn-login">
          login
        </Button>
      </form>
    </>
  );
};

export default Loginform;
