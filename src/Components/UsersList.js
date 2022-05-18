import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Features/users/userSlice";

const UsersList = () => {
  const { loading, data, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    if (loading)
      return (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    if (error) return <p>{error}</p>;
    if (data) {
      return (
        <div className="usersrList flex flex-col justify-center items-center w-full gap-3">
          <h1 className="text-2xl font-bold my-3">users list</h1>
          <div className="flex max-w-2xl border p-2 justify-start shadow-md gap-2 flex-wrap">
            {data.map((user) => {
              return (
                <span className="bg-gray-200 p-2 select-none" key={user.name}>
                  {user.name}
                </span>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return <div className="w-full">{renderUsers()}</div>;
};

export default UsersList;
