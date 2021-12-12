import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Home } from "./Pages/Home"
import { AddReceipe } from "./Pages/AddReceipe"
import { NavigationBar } from "./StyledComponents/NavigationBar/NavigationBar";

const NavRoute = ({ exact, path, component: Component }) => (
    <Route exact={exact} path={path} render={(props) => (
        <Component {...props} />
    )} />
)

export default function App() {
    return (
        <>
            <Router>
                <NavigationBar />
                <NavRoute exact path="/" component={Home} />
                <NavRoute exact path="/addReceipe" component={AddReceipe} />
            </Router>
        </>
    );
}