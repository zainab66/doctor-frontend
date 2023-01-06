import React, { useEffect, useState } from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {
  AiOutlineLeft,
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineSearch,
  AiOutlineGift,
} from 'react-icons/ai';

export default function AppSidebar() {
  const { collapseSidebar } = useProSidebar();

  const [activePage2, setActivePage2] = useState(false);

  const [activePage, setActivePage] = useState(false);
  let toggleClass = activePage ? 'active' : null;
  let toggleClass2 = activePage2 ? 'active' : null;

  function test() {
    setActivePage((activePage) => !activePage);
    setActivePage2(false);
  }
  function test2() {
    setActivePage2((activePage2) => !activePage2);
    setActivePage(false);
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        marginTop: '70px',
        maxHeight: '90%',
      }}
    >
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  fontFamily: 'Roboto',
                  fontSize: '15px',
                  fontWeight: '400',
                  color: disabled ? '#f5d9ff' : '#000',
                  backgroundColor: active
                    ? 'rgba(145, 158, 171, 0.12)	'
                    : undefined,
                  '&:hover': {
                    backgroundColor: 'rgba(145, 158, 171, 0.12)',
                    color: '#000',
                  },
                  // '&:active': {
                  //   backgroundColor: active ? '#0096FF	' : undefined,
                  //   color: '#fff',
                  // },
                };
            },
          }}
        >
          <MenuItem
            icon={<AiOutlineDashboard />}
            active
            routerLink={<Link to="/a" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem>Sales</MenuItem>
          <MenuItem
            icon={<AiOutlineFileText />}
            onClick={test}
            active={activePage}
            className={toggleClass}
          >
            New Sale
          </MenuItem>
          <MenuItem
            onClick={test2}
            icon={<AiOutlineFileText />}
            active={activePage2}
            className={toggleClass2}
          >
            Return Sale
          </MenuItem>
          <MenuItem icon={<AiOutlineSearch />}>Sales History</MenuItem>

          <MenuItem>Purchases</MenuItem>
          <MenuItem icon={<AiOutlineFileText />}>New Purchase</MenuItem>
          <MenuItem icon={<AiOutlineFileText />}>Return Purchase</MenuItem>
          <MenuItem icon={<AiOutlineSearch />}>Purchase History</MenuItem>

          <MenuItem>Products</MenuItem>
          <MenuItem icon={<AiOutlineFileText />}>New Product</MenuItem>
          <MenuItem icon={<AiOutlineGift />}>Product/Services List</MenuItem>

          <MenuItem>Customers</MenuItem>
          <MenuItem
            icon={<AiOutlineFileText />}
            routerLink={<Link to="/a/invite/user" />}
          >
            New User
          </MenuItem>
          <MenuItem
            icon={<AiOutlineSearch />}
            routerLink={<Link to="/a/userList" />}
          >
            Users List
          </MenuItem>

          <SubMenu label="Others">
            <MenuItem>Skill Matrix</MenuItem>
            <MenuItem>Know Your Company</MenuItem>
            <MenuItem>Joining Day Information</MenuItem>
            <MenuItem>Feedback</MenuItem>
            <MenuItem>Background Check</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main style={{ marginTop: '10px' }}>
        <AiOutlineLeft onClick={() => collapseSidebar()} size="20" />
      </main>
    </div>
    // <div className="sidebar">
    //   <Nav defaultActiveKey="/home" className="flex-column">
    //     <Nav.Link href="/">Active</Nav.Link>
    //     <Nav.Link href="/register">Link</Nav.Link>
    //     <Nav.Link href="/login">Link</Nav.Link>
    //     <Nav.Link href="disabled">Disabled</Nav.Link>
    //   </Nav>
    // </div>
  );
}
