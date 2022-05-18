import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/users/userAction";

const UsersList = () => {
  const { loading, data, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    if (loading) return <p>loading ...</p>;
    if (error) return <p>{error}</p>;
    if (data) {
      return (
        <div className="usersrList">
          <h1>users list</h1>
          {data.map((user) => {
            return <span key={user.name}>{user.name}</span>;
          })}
        </div>
      );
    }
  };

  return <div>{renderUsers()}</div>;
};

export default UsersList;
