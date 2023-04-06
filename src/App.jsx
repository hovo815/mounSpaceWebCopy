import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Page/Home/Home";
import LaunchServices from "./Page/LaunchServices/LaunchServices";
import BusinessCase from "./Page/BusinessCase/BusinessCase";
import TokenEconomy from "./Page/TokenEconomy/TokenEconomy";
import Jobs from "./Page/Jobs/Jobs";
import TeamPartners from "./Page/TeamPartners/TeamPartners";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="launch-services" element={<LaunchServices/>}/>
                <Route path="business-case" element={<BusinessCase/>}/>
                <Route path="token-economy" element={<TokenEconomy/>}/>
                <Route path="jobs" element={<Jobs/>}/>
                <Route path="team-partners" element={<TeamPartners/>}/>
            </Routes>
        </Router>
    );
};


export default App;