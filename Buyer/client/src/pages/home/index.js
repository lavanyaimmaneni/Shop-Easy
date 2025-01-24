import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import NavBar from '../components/Navbar';
import routes from "./routes"
import { LinearProgress } from '@mui/material';


const Home = ({history}) => {

  const [cid, setcid] = React.useState(0);
  const [data, setData] = React.useState({});
  const [fetching, setFetching] = React.useState(true)
  const fetchPrivateData = async () =>  {

    if(localStorage.getItem("authToken")){
  
        const config = 
        {
          headers: 
          {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        
        // In case of unauthorized login , it tells to login to the page 
        try 
        {
          const { data } = await axios.get("/api/private", config);
          if(data.success){
            setcid(data.cid);
            setData(data);
          setFetching(false)

          }
          else{ 
            setcid(0)
          setFetching(false)

          }
        } 
        catch (error) 
        {
          setcid(0)
          localStorage.removeItem("authToken");
          history.push("/");
          setFetching(false)
        }
  
      }
      else{
        setcid(0)
        setFetching(false)

      }
  
  }
  useEffect(() =>{
    if(!localStorage.getItem("authToken"))
    {
      setcid(0);
      setFetching(false)

    }
    else{
      fetchPrivateData();
    }
  })

  return (
    <>
      {fetching ? <LinearProgress/> :
      
      <>
              <NavBar cid = {cid}  data = {data}/>
      {/* <div>Home with cid = {cid}</div> */}
      <Switch>
        {routes.map(({component : Cmp, ...route}, key) => {
          return(
            <Route
              {...route}
              key = {key}
              render = {props => <Cmp {...props} cid = {cid} data = {data} />}
            />
          )
        })}
      </Switch>
      
      </>
      }
    </>

  )
}

export default Home