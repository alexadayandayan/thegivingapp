import { Routes, Route, HashRouter } from "react-router-dom";
// import ProtectedRoute from "../utils/ProtectedRoute";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Members from "../Pages/Members";
import MemberView from "../Pages/MemberView";
import MemberEdit from "../Pages/MemberEdit";
import Giving from "../Pages/Giving";
import GivingAdd from "../Pages/GivingAdd";
import GivingEdit from "../Pages/GivingEdit";
import Reports from "../Pages/Reports";
import Settings from "../Pages/Settings";
import MemberCreate from "../Pages/MemberCreate";
import "../App.scss";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/member-view" element={<MemberView />} />
          <Route path="/member-add" element={<MemberCreate />} />
          <Route path="/member-edit" element={<MemberEdit />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/giving-add" element={<GivingAdd />} />
          <Route path="/giving-edit" element={<GivingEdit />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
