import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/components.css";
import { Context } from "../store/appContext";
import { LeftMenuTeacher } from "../component/leftMenuTeacher";

export const DashboardTeacher = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="row" >
                <div className="col mt-5" >
                    <LeftMenuTeacher />
                </div>
            </div>
        </div>
    );
};