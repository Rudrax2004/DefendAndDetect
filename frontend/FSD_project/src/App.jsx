/* eslint-disable no-unused-vars */

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contact.jsx'
import User from './components/User_Custom_Page/User.jsx'
// import GitHub, { githubInfoLoader } from './components/Github/Github.jsx'
import Register from './components/Pages/Register.jsx'
import Login from './components/Pages/login.jsx'
import Logout from './components/Pages/Logout.jsx';
import Blog from './components/Blogs/Blog.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import  Learn  from './components/learning/learn.jsx';
import { Admin } from './components/Admin/admin.jsx';
import {AdminUsers} from './components/Admin/AdminUsers.jsx';
import NewHome from "./components/Home/newHome.jsx"
import AdminUpdate from './components/Admin/AdminUpdate.jsx';
import AdminBlog from './components/Admin/AdminBlogs.jsx';
import { AdminContacts } from './components/Admin/adminContacts.jsx';
import Labs  from './components/learning/labs.jsx';
import { Intro } from './components/learning/intro.jsx';
import {SqlInjection} from "./components/practice/lab1/practice_sql.jsx";
import { IntroSql } from './components/learning/sqlnjection.jsx';
import { WebFundamentals } from './components/learning/webfundamental.jsx';
import MovieCenter from './components/practice/xss-Movie.jsx';
import PhishingIntro from './components/learning/phishing.jsx';
import JuniorDataSecurityAnalyst from './components/learning/jr_anaylst.jsx';
import EmailSpoofing from './components/practice/lab1/email_spoofing.jsx';

function App() {

  
  return (
    <>
      <Router>
      <Routes>
        <Route exact path='/' element={<NewHome/>}/>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/update/:userid' element={<AdminUpdate/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path="/intro" element={<Intro/>} />
        <Route exact path='/learn' element={<Learn/>}/>
        <Route exact path="/webfunda" element={<WebFundamentals/>} />
        <Route exact path='/learn' element={<Learn/>}/>
        <Route exact path='/lab1' element={<SqlInjection/>}/>
        <Route exact path='/introsql' element={<IntroSql/>}/>
        <Route exact path='/introphishing' element={<PhishingIntro/>}/>
        <Route exact path='/introjr' element={<JuniorDataSecurityAnalyst/>}/>
        <Route exact path='/phishing' element={<MovieCenter/>}/>
        {/* <Route exact path='/emailSpoofing' element={<EmailSpoofing/>}/> */}
        <Route exact path='/labs' element={<Labs/>}/>
        <Route  exact path='/user/:userid' element={<User/>}/>{/*here user:__userid__ gives access in url and that __userid__ is drectly access in  User.jsx file with same name  */}   
     
    <Route exact path='/admin' element={<Admin/>}>
      <Route exact path='users' element={<AdminUsers/>}/>
      <Route exact path='blogs' element={<AdminBlog/>}/>
      <Route exact path='contacts' element={<AdminContacts/>}/>
    </Route>
      </Routes>
      </Router>

    <GoogleOAuthProvider clientId='829875598179-tlqg8232655k6mgg7sj5nmar9mvt55i4.apps.googleusercontent.com'>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
