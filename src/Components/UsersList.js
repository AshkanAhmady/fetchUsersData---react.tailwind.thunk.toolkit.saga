import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../Redux/users/userAction";

const UsersList = () => {
  const { loading, data, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  const renderUsers = () => {
    if (loading)
      return (
        <div className="lds-roller">
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
          <div className=" w-4/5 md:w-1/2 border p-2 grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] shadow-md gap-2 flex-wrap">
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
