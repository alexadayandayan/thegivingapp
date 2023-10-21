import "../App.scss";
import "semantic-ui-css/semantic.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Members from "../Pages/Members";
import MemberView from "../Pages/MemberView";
import MemberEdit from "../Pages/MemberEdit";
import MemberAdd from "../Pages/MemberAdd";
import Giving from "../Pages/Giving";
import GivingAdd from "../Pages/GivingAdd";
import GivingEdit from "../Pages/GivingEdit";
import Reports from "../Pages/Reports";
import Settings from "../Pages/Settings";
import ProtectedRoute from "../utils/ProtectedRoute";
import GivingTest from "@/Pages/GivingTest";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <Members />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-view"
            element={
              <ProtectedRoute>
                <MemberView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-add"
            element={
              <ProtectedRoute>
                <MemberAdd />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-edit/:id"
            element={
              <ProtectedRoute>
                <MemberEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/giving"
            element={
              <ProtectedRoute>
                <Giving />
              </ProtectedRoute>
            }
          />
          <Route
            path="/giving-add"
            element={
              <ProtectedRoute>
                <GivingAdd />
              </ProtectedRoute>
            }
          />
          <Route
            path="/giving-edit/:id"
            element={
              <ProtectedRoute>
                <GivingTest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
