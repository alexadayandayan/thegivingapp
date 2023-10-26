import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import * as faker from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//Get all sundays of current month
var d = new Date();
var getTot = daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month
var sun = new Array();   //Declaring array for inserting Sundays

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

for (var i = 1; i <= getTot; i++) {    //looping through days in month
    var newDate = new Date(d.getFullYear(), d.getMonth(), i)
    if (newDate.getDay() == 0) {   //if Sunday
        sun.push(String(labels[d.getMonth()] + " " + i));
    }
}

export const optionsMonthly = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: labels[d.getMonth()] + " Collection",
        },
    },
};

export const dataMonthly = {
    labels: sun,
    datasets: [
        {
            label: "Dataset Month",
            data: sun.map(() => faker.faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: "#91b020",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

export default function DashboardMonthly() {
    return (
        <Line options={optionsMonthly} data={dataMonthly} />
    );
}