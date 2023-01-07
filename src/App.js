import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Register from './screens/Signup';
import Login from './screens/Signin';
import { ToastContainer } from 'react-toastify';
import Dashboard from './screens/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Col, Row, Container } from 'react-bootstrap';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import CreateUser from './screens/CreateUser';
import Main from './screens/Main';
import UserList from './screens/UserList';
import InviteUser from './screens/InviteUser';
import Denied from './screens/Denied';
import AgentPrivateRoute from './routes/AgentPrivateRoute';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* 
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            this is a test
          </Col>
        </Row>
      </Container> */}
      {/* <Header /> */}

      {/* <div className="app">
        <Sidebar /> */}

      {/* <Header /> */}
      <Routes>
        {/* <Route path="/denied" element={<AgentPrivateRoute />}>
          <Route path="/denied" element={<PermissionDenied />} />
        </Route> */}

        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route> */}

        {/* <Route path="/register" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route> */}

        <Route path="/a" element={<PrivateRoute role="admin" />}>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<Main />} />
            <Route path="create/user/:id" element={<CreateUser />} />
            <Route path="userList" element={<UserList />} />
            <Route path="invite/user" element={<InviteUser />} />
            {/* <Route path="tabs" element={<Tabs props={{userName: "Bikash web"}} />}>
					<Route path="/tabs" element={<Navigate replace to="tab1" />} />
					<Route path="tab1" element={<Tab1 />} />
					<Route path="tab2" element={<ProtectedRoutes roleRequired="USER" />}>
						<Route path="/tabs/tab2" element={<Tab2 />} />
					</Route>
					<Route path="tab3" element={<Tab3 />} />
				</Route> */}
            {/* <Route path="settings" element={<Settings />} />
				<Route path="dynamic-form" element={<DynamicForm />} />
				<Route
					path="users"
					element={<Users extraItem="test extra item from router" />}
				/>
				<Route path="users/:userId" element={<SingleUser />} />
				<Route path="users/new" element={<NewUser />} /> */}
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 
        <Route path="/" element={<PrivateRoute role="admin" />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="/create/user/:id" element={<CreateUser />} />
            <Route path="/userList" element={<UserList />} />
            <Route path="/invite/user" element={<InviteUser />} />

            <Route exact path="/Dashboard" element={<Main />} />
          </Route>
        </Route> */}

        {/** Permission denied route */}
        {/* <Route path="/denied" element={<Denied />} /> */}

        <Route path="/denied" element={<PrivateRoute role="Assistant" />}>
          <Route path="/denied" element={<Denied />} />
        </Route>

        {/* <Route path="/" element={<PrivateRoute role="false" />}>
          <Route path="/" element={<Dashboard />}>
            <Route exact path="/create/user/:id" element={<CreateUser />} />
            <Route exact path="/userList" element={<UserList />} />
            <Route exact path="/invite/user" element={<InviteUser />} />

            <Route exact path="/" element={<Main />} />
          </Route>
        </Route> */}

        {/* <Route path="/userList" element={<PrivateRoute role="true" />}>
          <Route exact path="/userList" element={<UserList />} />
        </Route> */}
        {/* <Route exact path="/register" element={<Register />} /> */}
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
