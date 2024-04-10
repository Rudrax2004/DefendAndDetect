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
import WebFundamentals from './components/learning/webfundamental.jsx';
import MovieCenter from './components/practice/xss-Movie.jsx';
import PhishingIntro from './components/learning/phishing.jsx';
import JuniorDataSecurityAnalyst from './components/learning/jr_anaylst.jsx';
import EmailSpoofing from './components/practice/lab1/email_spoofing.jsx';

function App() {

  
  return (
    <>
      <Router>
      <Routes>
      <Route exact path='/' 
        render={() => 
        <div>
          <NewHome/>
        </div> 
        } />
        <Route exact path='/register' 
        render={() => 
        <div>
          <Register/>
        </div> 
        } />
        <Route exact path='/login' 
        render={() => 
        <div>
          <Login/>
        </div> 
        } />
        <Route exact path='/blog' 
        render={() => 
        <div>
          <Blog/>
        </div> 
        } />
        <Route exact path='/logout' 
        render={() => 
        <div>
          <Logout/>
        </div> 
        } />
        <Route exact path='/about' 
        render={() => 
        <div>
          <About/>
        </div> 
        } />
        <Route exact path='/update/:userid' 
        render={() => 
        <div>
          <AdminUpdate/>
        </div> 
        } />
        <Route exact path='/contact' 
        render={() => 
        <div>
          <Contact/>
        </div> 
        } />
        <Route exact path='/Intro' 
        render={() => 
        <div>
          <Intro/>
        </div> 
        } />
        <Route exact path='/learn' 
        render={() => 
        <div>
          <Learn/>
        </div> 
        } />
        <Route exact path='/webfunda' 
        render={() => 
        <div>
          <WebFundamentals/>
        </div> 
        } />
        <Route exact path='/lab1' 
        render={() => 
        <div>
          <SqlInjection/>
        </div> 
        } />
        <Route exact path='/introsql' 
        render={() => 
        <div>
          <IntroSql/>
        </div> 
        } />
        <Route exact path='/introphishing' 
        render={() => 
        <div>
          <PhishingIntro/>
        </div> 
        } />
        <Route exact path='/introjr' 
        render={() => 
        <div>
          <JuniorDataSecurityAnalyst/>
        </div> 
        } />
        <Route exact path='/phishing' 
        render={() => 
        <div>
          <MovieCenter/>
        </div> 
        } />
        <Route exact path='/labs' 
        render={() => 
        <div>
          <Labs />
        </div> 
        } />
        <Route exact path='/user/:userid' 
        render={() => 
        <div>
          <User/>
        </div> 
        } />
        
        {/* <Route exact path='/emailSpoofing' element={<EmailSpoofing/>}/> */}
        {/*here user:__userid__ gives access in url and that __userid__ is drectly access in  User.jsx file with same name  */}   
     
        <Route exact path='/admin' 
        render={() => 
        <div>
          <Admin/>
        </div> 
        }>
        <Route exact path='users' 
        render={() => 
        <div>
          <AdminUsers/>
        </div> 
        } />
        <Route exact path='blogs' 
        render={() => 
        <div>
          <AdminBlog/>
        </div> 
        } />
        <Route exact path='contacts' 
        render={() => 
        <div>
          <AdminContacts />
        </div> 
        } />    
    </Route>
      </Routes>
      </Router>

    <GoogleOAuthProvider clientId='829875598179-tlqg8232655k6mgg7sj5nmar9mvt55i4.apps.googleusercontent.com'>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
