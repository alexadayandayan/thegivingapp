import { Routes, Route, HashRouter } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";
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
import MemberCreate from "@/Pages/MembersCreate";
import "../App.scss";
import "semantic-ui-css/semantic.min.css";

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
                <MemberCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-edit"
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
            path="/giving-edit"
            element={
              <ProtectedRoute>
                <GivingEdit />
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
