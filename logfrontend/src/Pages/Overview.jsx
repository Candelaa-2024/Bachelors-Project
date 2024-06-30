import { useSelector } from "react-redux";
import { Dashboard, BmiCalculator } from "../Components";
import { BsTable } from "../Components";

const Overview = () => {
  const { accessToken, refreshToken } = useSelector(state => state.appData)
    
  console.log(accessToken, refreshToken)
  return (
    <>
      <Dashboard>
        {/**
         * <BmiCalculator/>
        */}
        
        <h4 className="text-center text-black my-8">Todo User login Logs</h4>

        <div className="h-[75vh] w-auto overflow-auto">
          <BsTable/>
        </div>

        

      </Dashboard>
    </>
  );
};

export default Overview;
