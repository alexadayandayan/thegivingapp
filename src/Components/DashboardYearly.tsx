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

export const optionsAnnually = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: d.getFullYear() + " Collection",
        },
    },
};

export const dataAnnually = {
    labels: labels,
    datasets: [
        {
            label: "Dataset Annual",
            data: labels.map(() => faker.faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: "#2d537d",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

export default function DashboardYearly() {
    return (

        <Line options={optionsAnnually} data={dataAnnually} />

    );
}
