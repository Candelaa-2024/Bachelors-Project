import { useState, useEffect } from "react";
import { Chart, Dashboard } from "../Components"
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import validator from "validator";
import useFetch from "../Hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import usePost from "../Hooks/usePost";
import { storeWeightData } from "../Store/appSlice";


const WeightTracker = () =>{
    
    return(
        <>
            <Dashboard>
                
            </Dashboard>
        </>
    )
}

export default WeightTracker