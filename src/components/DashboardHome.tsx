import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button, Stack, Typography} from "@mui/material";
import viteLogo from '/vite.svg'
import reactLogo from "../assets/react.svg";
import AreaChartView from "./graph/AreaChartView.tsx";
import BarChartGraph from "./graph/BarChartGraph.tsx";

const DashboardHome: React.FC = () => {
    return (
        <div>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={4}>
                <Link to={"/"}>
                    Go to home
                </Link>

                <Link to={"/dashboard/graph"}>
                    Dashboard Graph only
                </Link>
            </Stack>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>



            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>







            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>


            <Box sx={{border: "2px solid #32aa45", p: 3, m: 3}}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </Box>

            <Stack direction={"row"} spacing={2}>
                <AreaChartView />
                <BarChartGraph />
            </Stack>


            <Link to={"/"}>
                Go to home
            </Link>


            <Box sx={{width: '100%'}}>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Link to={"/dashboard"}>
                    <Button variant="text" color={"primary"}>Go to dashboard</Button>
                </Link>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>
        </div>
    );
};

export default DashboardHome;