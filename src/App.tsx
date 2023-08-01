import {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DashboardHome from "./components/DashboardHome.tsx";
import DashboardGraph from "./components/DashboardGraph.tsx";


const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <DashboardHome />,
    },
    {
        path: "/dashboard/graph",
        element: <DashboardGraph />,
    },
]);

function App() {

    useEffect(() => {
        return () => console.log("Dashboard page unmount ===============> ")
    }, [])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
