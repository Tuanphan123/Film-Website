import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path= "/movies">
                    <Home type="movie" />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;