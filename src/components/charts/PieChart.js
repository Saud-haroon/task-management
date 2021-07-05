import React from 'react'

import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {
    const { tasks } = props;

    const totalTasks = tasks.length;

    const doneTasks = tasks.filter((task) => {
        return task.status === "Done"
    });
    const InPorgressTasks = tasks.filter((task) => {
        return task.status === "In Progress"
    });

    const totalDoneTasks = doneTasks.length;
    const totalInProgressTasks = InPorgressTasks.length;

    console.log(totalTasks);
    console.log(totalDoneTasks);
    return (
        <Pie
            data={{
                labels: ['Total Tasks', 'In Progress', 'Total Tasks Done'],
                datasets: [{
                    data: [totalTasks, totalInProgressTasks, totalDoneTasks],
                    backgroundColor: ['#ff8282',"#835c13", '#9ad3bc']

                }]

            }}
        />
    )
}

export default PieChart
