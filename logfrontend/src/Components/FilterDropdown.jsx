import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  DropdownItem,
} from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeFilter, storeFilterValue } from "../Store/appSlice";

const FilterDropdown = () => {
  const { data: filterData, error, fetchData } = useFetch();
  const [filtersArr, setFiltersArr] = useState([]);
  const dispatch = useDispatch()
  const {filter, filterValue} = useSelector(state => state.appData)

  useEffect(() => {
    fetchData(`http://127.0.0.1:8080/api/filters/list/`);
  }, []);

  console.log(filter, filterValue);

  const filterTable = (key, value) => {
    dispatch(storeFilter(key))
    dispatch(storeFilterValue(value))
  };

 useEffect(() => {
     setFiltersArr(filterData);
   }, [filterData]);

  return (
    <>
      <Dropdown as={ButtonGroup} id="bg-nested-dropdown" className="w-2/4">
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
          Filters{" "}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          {Object.keys(filtersArr).length > 0
            ? Object.keys(filtersArr).map((key, index) => {
                return (
                  <>
                    <Dropdown
                      className="w-100 my-2"
                      drop="right"
                      as={ButtonGroup}
                      key={index}
                    >
                      <Dropdown.Toggle
                        split
                        variant="secondary"
                        id="dropdown-split-basic"
                      >
                        {key}{" "}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        {filtersArr[key]?.map((value, innerIndex) => {
                          return (
                            <Dropdown.Item
                              onClick={()=>{
                                filterTable(key, value)
                              }}
                              eventKey={`${index}.${innerIndex}`}
                            >
                              {String(value)}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                );
              })
            : null}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterDropdown;
