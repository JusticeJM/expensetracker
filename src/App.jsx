import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App(){

  return(
    <div className="font-sans antialiased">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features" element={<Feature/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/expenses" 
          element={<ProtectedRoute> 
              <Expenses/> 
            </ProtectedRoute>
          }
        />
        <Route path="/reports" 
          element={<ProtectedRoute> 
              <Reports/> 
            </ProtectedRoute>
          }
        />
        <Route path="/analytics" 
          element={<ProtectedRoute> 
              <Analytics/> 
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </div>
  )
}
