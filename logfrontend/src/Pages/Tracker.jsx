import { useState, useEffect } from "react";
import { Chart, Dashboard } from "../Components";
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import validator from "validator";
import useFetch from "../Hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import usePost from "../Hooks/usePost";
import { storeWeightData } from "../Store/appSlice";

const Tracker = () => {
  const { data, error, fetchData } = useFetch();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData("http://127.0.0.1:8080/api/users/last-login/");
  }, []);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  return (
    <>
      <Dashboard>
        <div className="">
            <h4 className="text-center my-8">Users login count chart</h4>
          <Chart
            data={chartData}
            yLabel={`user count`}
            xKey={`last_login_date`}
            lineKeys={[`user_count`]}
          />
        </div>
      </Dashboard>
    </>
  );
};

export default Tracker;
