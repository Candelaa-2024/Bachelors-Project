import { Table } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BsTable = () => {
  const { data, error, fetchData } = useFetch();
  const { accessToken, refreshToken, filter, filterValue } = useSelector(state => state.appData)
  const [url, setUrl] = useState("http://127.0.0.1:8080/api/read-csv/")  

  //console.log(accessToken, refreshToken)

  useEffect(()=>{
    if (filter && String(filterValue)){
      setUrl(`http://127.0.0.1:8080/api/read-csv/?filter=${filter}&value=${filterValue}`)
    } else {
      setUrl("http://127.0.0.1:8080/api/read-csv/")
    }
  
  }, [filter, filterValue])

  useEffect(()=>{
    fetchData(url)
  }, [url])

  useEffect(()=>{
    fetchData(url)
  }, [])

  console.log(url,data);
  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <>
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
                    typeof cell === "boolean" ?
                    <th key={cellIndex}>{cell.toString()}</th>
                    :                    
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
