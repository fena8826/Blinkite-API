import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import logo from "../assets/primary-logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signIn");
  };

  return (
    <Navbar className="bg-body-tertiary" expand="lg" style={{ padding: "0.5rem 1rem" }}>
      <Container className="d-flex align-items-center justify-content-between">
      
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center gap-2 text-primary">
          <img src={logo} alt=" Logo" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>

     
        <div style={{ fontWeight: "600", fontSize: "15px" }}>
          <div>Delivery in <span style={{ color: "#000" }}>17 minutes</span></div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            Pasodra Patiya, Surat, Gujarat, India
            <span style={{ cursor: "pointer", fontSize:"20px" }}> <GoTriangleDown /></span>
          </div>
        </div>

     
     <Navbar.Collapse className="justify-content-end mt-2 mb-2 me-3">
  <Link to="/add-product">
    <Button className="add-product-btn">Add Product</Button>
  </Link>
</Navbar.Collapse>

     
        <div className="user-menu">
          {user ? (
            <div className="logged-in">
              <FaUserCircle className="user-icon" />
              <span className="user-email">{user.email}</span>
              <Button className="add-product-btn logout-btn" onClick={handleLogOut}>
                <FaSignOutAlt /> Log Out
              </Button>
            </div>
          ) : (
            <Link className="add-product-btn " to="/signIn">
              <FaSignInAlt /> Sign In
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
