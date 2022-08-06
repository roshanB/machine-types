import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectMachineTypesForNav } from '../store/machines/machines.selectors';

const Header = ({ machinesTypes }) => {
  return (
    <Navbar expand="md">
      <Navbar.Brand href="#">My Machines</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        {getNavs(machinesTypes)}
      </Navbar.Collapse>
    </Navbar>
  )
}

const getNavs = (machinesTypes) => {
  return (<Nav
    className="me-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll
  >
    <Nav.Link href="/">All</Nav.Link>
    {
      machinesTypes.map((type) =>
      (
        <Nav.Link key={type.typeId} href={`/${type.typeId}`}>{type.typeName}</Nav.Link>
      )
      )
    }
  </Nav>)
}

const mapStateToProps = createStructuredSelector({
  machinesTypes: selectMachineTypesForNav
});

export default connect(mapStateToProps)(Header);