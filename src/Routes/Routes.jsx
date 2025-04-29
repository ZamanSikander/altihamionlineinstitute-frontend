import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import Home from "../Pages/Home"
import RegistrationPage from "../Pages/RegistrationPage";
import FeeChart from "../Pages/FeeChart";
import Contact from "../Pages/Contact";
import Privacy_Policy from "../Pages/Privacy_Policy";
import Terms_Services from "../Pages/Terms_Services";
import PrivateRoutes from "./PrivateRoutes";
import Admin from "../Pages/admin";
import Admin_login from "../Pages/Admin_login";
// import Noorani_Qaida_with_Tajweed from "../Pages/Noorani_Qaida_with_Tajweed";
// import Nazra_Quran_With_Tajweed from "../Pages/Nazra_Quran_With_Tajweed";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/fee-charts" element={<FeeChart/>}/>
                <Route path="/contact" element={<Contact/>} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/privacy-policy" element={<Privacy_Policy/>}/>
                <Route path="/terms-services" element={<Terms_Services/>}/>
                <Route path="/admin-login" element={<Admin_login/>}/>
                {/* Protected Routes */}
                <Route element={<PrivateRoutes/>}>
                    <Route path="/admin" element={<Admin/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes