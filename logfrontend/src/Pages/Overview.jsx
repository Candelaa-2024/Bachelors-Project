import { Button } from "react-bootstrap";
import { Dashboard, FilterDropdown } from "../Components";
import { BsTable } from "../Components";
import { useDispatch } from "react-redux";
import { storeFilter, storeFilterValue } from "../Store/appSlice";

const Overview = () => {
  //console.log(filter. filterValue)
  const dispatch = useDispatch()

  const resetFilter = ()=> {
    dispatch(storeFilterValue(null))
    dispatch(storeFilter(null))
  }
  return (
    <>
      <Dashboard>
        {/**
         * <BmiCalculator/>
         */}
        <FilterDropdown />{" "}
        <Button variant="success" onClick={resetFilter}>
          Reset filter
        </Button>
        <h4 className="text-center text-black my-8">Todo User login Logs</h4>
        <div className="h-[75vh] w-auto overflow-auto">
          <BsTable />
        </div>
      </Dashboard>
    </>
  );
};

export default Overview;
