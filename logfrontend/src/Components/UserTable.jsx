import { Table } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useEffect, useState } from "react";

const UserTable = () => {
  const { data, error, fetchData } = useFetch();
  const [headers, setHeaders] = useState([]);
  const [userArr, setUserArr] = useState([])

  useEffect(() => {
    fetchData("http://127.0.0.1:8080/api/users/list/");
  }, []);

  useEffect(() => {
    console.log(data)
    setUserArr(data)
    if (data.length > 0) {
      setHeaders(["user id", ...Object.keys(data[0].fields)]);
    }
  }, [data]);

  console.log(data);
  return (
    <>
      {userArr.length !== 0 ? (
        <>
          <Table striped bordered responsive hover variant="dark">
            <thead>
              <tr>
                {headers.map((header, index) => {
                    return(
                        <th key={index}>{header}</th>
                    )
                })}
              </tr>
            </thead>

            <tbody>
                {userArr?.map((user) => (
                <tr key={user.pk}>
                    <td>{user.pk}</td>
                    {Object.values(user.fields).map((value, index) => (
                    <td key={index}>{String(value)}</td>
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

export default UserTable;
