import React from "react";
import {Route, Switch} from "react-router-dom";
import ResposeTable from "../components/ResponseTable"
import UploadCard from "./UploadCard/UploadCard";

const Routers = () => {
    return(
        <div>
          <Switch>
            <Route path="/" exact component ={UploadCard}/>
            <Route path="/response" component = {ResposeTable}/>
          </Switch>
        </div>
    )
}

export default Routers