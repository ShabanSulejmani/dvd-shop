import { NavLink, Outlet } from "react-router";

export default function Layout() {
    return <>
        <header>
            <nav>
                <ul id="nav">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/action"}>Action</NavLink>
                <NavLink to={"/animation"}>Animation</NavLink>
                <NavLink to={"/Comedy"}>Comedy</NavLink>
                <NavLink to={"/drama"}>Drama</NavLink>
                <NavLink to={"/romance"}>Romance</NavLink>
                <NavLink to={"/thriller"}>Thriller</NavLink>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>
}