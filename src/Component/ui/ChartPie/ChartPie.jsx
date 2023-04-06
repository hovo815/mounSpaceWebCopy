import React from 'react';
import Flex from "../Flex/Flex";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJs} from "chart.js/auto"
const ChartPie = ({data}) => {
    const options = {
        responsive: true,
        plugins:{
        legend:{
            display: false,
        }
        }
    }
    return (
        <Flex width="60%">
            <Doughnut data={data} options={options}/>
        </Flex>
    )
};


export default ChartPie;