import React, { useEffect, useState } from "react";
import "./style.scss";
import { machines } from "./machines";
import { enemies } from "./enemies";

const Steel = () => {
    console.log();

 return (
    <div>
        <div className="board">
            <div className="row" id="row1">
                <div className="spot" id="row1col1"><img src={Object.values(machines[0].image)[0]} /></div>
                <div className="spot" id="row1col2"></div>
                <div className="spot" id="row1col3"></div>
                <div className="spot" id="row1col4"></div>
                <div className="spot" id="row1col5"></div>
                <div className="spot" id="row1col6"></div>
                <div className="spot" id="row1col7"></div>
                <div className="spot" id="row1col8"></div>
            </div>
            <div className="row" id="row2">
                <div className="spot" id="row2col1"></div>
                <div className="spot" id="row2col2"></div>
                <div className="spot" id="row2col3"></div>
                <div className="spot" id="row2col4"></div>
                <div className="spot" id="row2col5"></div>
                <div className="spot" id="row2col6"></div>
                <div className="spot" id="row2col7"></div>
                <div className="spot" id="row2col8"></div>
            </div>
            <div className="row" id="row3">
                <div className="spot" id="row3col1"></div>
                <div className="spot" id="row3col2"></div>
                <div className="spot" id="row3col3"></div>
                <div className="spot" id="row3col4"></div>
                <div className="spot" id="row3col5"></div>
                <div className="spot" id="row3col6"></div>
                <div className="spot" id="row3col7"></div>
                <div className="spot" id="row3col8"></div>
            </div>
            <div className="row" id="row4">
                <div className="spot" id="row4col1"></div>
                <div className="spot" id="row4col2"></div>
                <div className="spot" id="row4col3"></div>
                <div className="spot" id="row4col4"></div>
                <div className="spot" id="row4col5"></div>
                <div className="spot" id="row4col6"></div>
                <div className="spot" id="row4col7"></div>
                <div className="spot" id="row4col8"></div>
            </div>
            <div className="row" id="row5">
                <div className="spot" id="row5col1"></div>
                <div className="spot" id="row5col2"></div>
                <div className="spot" id="row5col3"></div>
                <div className="spot" id="row5col4"></div>
                <div className="spot" id="row5col5"></div>
                <div className="spot" id="row5col6"></div>
                <div className="spot" id="row5col7"></div>
                <div className="spot" id="row5col8"></div>
            </div>
            <div className="row" id="row6">
                <div className="spot" id="row6col1"></div>
                <div className="spot" id="row6col2"></div>
                <div className="spot" id="row6col3"></div>
                <div className="spot" id="row6col4"></div>
                <div className="spot" id="row6col5"></div>
                <div className="spot" id="row6col6"></div>
                <div className="spot" id="row6col7"></div>
                <div className="spot" id="row6col8"></div>
            </div>
            <div className="row" id="row7">
                <div className="spot" id="row7col1"></div>
                <div className="spot" id="row7col2"></div>
                <div className="spot" id="row7col3"></div>
                <div className="spot" id="row7col4"></div>
                <div className="spot" id="row7col5"></div>
                <div className="spot" id="row7col6"></div>
                <div className="spot" id="row7col7"></div>
                <div className="spot" id="row7col8"></div>
            </div>
            <div className="row" id="row8">
                <div className="spot" id="row8col1"></div>
                <div className="spot" id="row8col2"></div>
                <div className="spot" id="row8col3"></div>
                <div className="spot" id="row8col4"></div>
                <div className="spot" id="row8col5"></div>
                <div className="spot" id="row8col6"></div>
                <div className="spot" id="row8col7"></div>
                <div className="spot" id="row8col8"></div>
            </div>
        </div>
    </div>
 )
};

export default Steel;
