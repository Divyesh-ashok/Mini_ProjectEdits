import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signin from "./components/Signin"
import Admin from "./components/Admin"
//import Signup from "./components/Signup"
import Adminhome from "./components/Admin/Adminhome"
import Intermmediate from "./components/Intermmediate"
import Studentsignup from "./components/student/Studentsignup"
import Studenthome from "./components/student/Studenthome"
import Teachersignup from "./components/teachers/Teachersignup"
import Aluminisignup from "./components/Alumini/Aluminisignup"
import Teachershome from "./components/teachers/Teachershome"
import Alumnihome from "./components/Alumini/Alumnihome"
import Studentmagazine from "./components/student/Studentmagazine"
import Studentscholarship from "./components/student/Studentscholarship"
import Admingetstudents from "./components/Admin/Admingetstudents"
import Admingetteachers from "./components/Admin/Admingetteachers"
import Admingetalumni from "./components/Admin/Admingetalumni"
import Studentmentormatch from"./components/student/Studentmentormatch"
import Adminmagazine from "./components/Admin/Adminmagazine"
import Teacherstudymaterial from "./components/teachers/Teacherstudymaterial"
import Admincreateevent from "./components/Admin/Admincreateevent"
import Studentevent from "./components/student/Studentevent"
import Admincreatequiz from "./components/Admin/Admincreatequiz"
import Stustudymaterial from "./components/student/Stustudymaterial"
import Adminquiz from "./components/Admin/Adminquiz"
import Studentquiz from "./components/student/Studentquiz"
import Studentattenquiz from "./components/student/Studentattenquiz"
import alnav from "./components/Alumini/Alnav"
function App() {

  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/intermmediate" element={<Intermmediate/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        {/* <Route path="/teacher/signup" element={<Signup/>}/> */}
        <Route path="/student/signup" element={<Studentsignup/>}/>
        <Route path="/alumini/signup" element={<Aluminisignup/>}/>
        <Route path="/stuhome" element={<Studenthome/>}/>
        <Route path="/teacher/signup" element={<Teachersignup/>}/>
        <Route path="/teachhome" element={<Teachershome/>}/>
        <Route path="/alumnihome" element={<Alumnihome/>}/>
        <Route path="/studentmagazine" element={<Studentmagazine/>}/>
        <Route path="/studentscholarship" element={<Studentscholarship/>}/>
        <Route path="/adminstudents" element={<Admingetstudents/>}/>
        <Route path="/adminteachers" element={<Admingetteachers/>}/>
        <Route path="/adminalumni" element={<Admingetalumni/>}/>
        <Route path="/alumniconnect" element={<Studentmentormatch/>}/>
        <Route path="/adminmagazine" element={<Adminmagazine/>}/>
        <Route path="/teacherstudymaterials" element={<Teacherstudymaterial/>}/>
        <Route path="/admin/newevent" element={<Admincreateevent/>}/>
        <Route path="/student/events" element={<Studentevent/>}/>
        <Route path="/admin/newquiz" element={<Admincreatequiz/>}/>
        <Route path="/stustudymaterial" element={<Stustudymaterial/>}/>
        <Route path="/admincreatequiz" element={<Adminquiz/>}/>
        <Route path="/studentquiz" element={<Studentquiz/>}/>
        <Route path="/attendquiz" element={<Studentattenquiz/>}/>
        <Route path="/adminhome" element={<Adminhome/>}/>
        <Route path="/alumninav" element={<alnav/>}/>
  
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
