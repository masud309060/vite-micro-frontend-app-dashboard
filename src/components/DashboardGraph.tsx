import React from 'react';
import {Link} from "react-router-dom";
import {Stack, Typography} from "@mui/material";
import AreaChartView from "./graph/AreaChartView.tsx";
import BarChartGraph from "./graph/BarChartGraph.tsx";

const DashboardGraph: React.FC = () => {
    return (
        <div>
            <Typography variant="h1" gutterBottom>
                Dashboard Graph
            </Typography>

            <Stack direction={"row"} spacing={4}>
                <Link to={"/dashboard"}>
                    Go to dashboard
                </Link>

                <Link to={"/dashboard/graph"}>
                    Go to dashboard
                </Link>
            </Stack>


            <Stack direction={"row"} spacing={4}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>
        </div>
    );
};

export default DashboardGraph;