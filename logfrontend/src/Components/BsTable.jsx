import { Table } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";

const BsTable = () => {
  const { data, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData("http://127.0.0.1:8080/api/read-csv/");
  }, []);

  console.log(data);
  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <>
          <h4 className="text-center text-black my-8">Todo User login Logs</h4>

          <Table striped bordered responsive hover variant="dark">
            <thead>
              <tr>
                {data.columns.map((value, index) => {
                  return <th key={index}>{value}</th>;
                })}
              </tr>
            </thead>

            <tbody>
              {data.data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <th key={cellIndex}>{cell}</th>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <h4 className="text-center text-black">No Logs yet</h4>
        </>
      )}
    </>
  );
};

export default BsTable;
