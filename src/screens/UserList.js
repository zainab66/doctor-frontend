import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Title from '../components/Title';
//import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';

import LineChart from '../components/LineChart';
import { UserData } from '../components/Data';
import PieChart from '../components/PieChart';
import Orders from '../components/Orders';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { getUsers, deleteUser, updateUser } from '../reducers/assistantSlice';
import Table from 'react-bootstrap/Table';
import {
  Container,
  Button,
  FormGroup,
  Label,
  Select,
  Input,
  Form,
  Card,
} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import {
  AiFillEdit,
  AiOutlineDashboard,
  AiOutlineFileText,
  AiFillDelete,
  AiOutlinePlus,
} from 'react-icons/ai';
export default function UserList() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [id, setId] = useState('');

  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const { usersList } = useSelector((state) => state.users);
  const { users } = usersList;
  const reload = () => window.location.reload();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteHandler = (user) => {
    console.log(user);
    // if (window.confirm('Are you sure to delete?')) {
    dispatch(deleteUser(user._id));
    //}
    handleClose();
    reload();
  };

  const editHandler = () => {
    console.log(
      email,
      fullName,
      phoneNumber,
      country,
      state,
      city,
      address,
      zipCode,
      company,
      role,
      id
    );
    handleCloseEditModal();

    dispatch(
      updateUser({
        _id: id,
        email,
        fullName,
        phoneNumber,
        country,
        state,
        city,
        address,
        zipCode,
        company,
        role,
      })
    );

    //reload();
    // if (window.confirm('Are you sure to delete?')) {
    // dispatch(deleteUser(user._id));
    //}
    setTimeout(() => {
      reload();
    }, 50);
  };

  return (
    <Container>
      <Row className="my-2">
        <Col lg="10">User List</Col>
      </Row>
      <Row className="my-4">
        <Col lg="10">Dashboard/User/List</Col>
        <Col lg="2">
          <Button href="/invite/user" variant="outline-primary">
            <AiOutlinePlus /> New User
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>city</th>
                <th>zipCode</th>
                <th>Company</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td></td>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.city}</td>
                      <td>{user.zipCode}</td>
                      <td>{user.company}</td>
                      <td>{user.role}</td>
                      <td
                        onClick={() => {
                          handleShowEditModal();
                          setFullName(user.fullName);
                          setEmail(user.email);
                          setId(user._id);
                        }}
                      >
                        <AiFillEdit />
                      </td>
                      <td
                        onClick={() => {
                          handleShow();
                          setFullName(user.fullName);
                          setId(user._id);
                        }}
                      >
                        {/* <td onClick={() => deleteHandler(user)}> */}
                        <AiFillDelete />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete {fullName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => deleteHandler(id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="FullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editHandler()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
