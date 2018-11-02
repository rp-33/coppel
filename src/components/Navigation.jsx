import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Blog from './blog/Blog.jsx';
import BlogAll from './blog/BlogAll.jsx';
import Login from './login/Login.jsx';
import Signup from './signup/Signup.jsx';
import Cms from './cms/Cms.jsx';

const Navigation = ()=>{

    return (
      <Router>
        <div>        
            <Route exact path="/" component={BlogAll} />
            <Route exact path="/blog/:id" component={Blog} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cms" component={Cms} />
        </div>
      </Router>
    );
}

export default Navigation;