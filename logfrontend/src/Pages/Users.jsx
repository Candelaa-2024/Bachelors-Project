import { Dashboard, UserTable } from "../Components";

const Users = () => {
  return (
    <>
      <Dashboard>
        <h4 className="text-center text-black my-8">User Data</h4>

        <div className="h-[75vh] w-auto overflow-auto">
          <UserTable />
        </div>
      </Dashboard>
    </>
  );
};

export default Users;
