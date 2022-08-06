import Button from "react-bootstrap/Button";
import MachinePanel from "../components/panel.component"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { selectPerParams } from '../store/machines/machines.selectors';
import { connect } from "react-redux";
import withRouter from "../hocs/with-router.hoc";


const MachinesPage = ({ machines }) => {
  return (
    <Row xs={1} md={2} lg={4}>
      {
        machines.map((machine) => (
          <Col style={{ padding: '1rem' }} key={machine.id}>
            <MachinePanel machine={machine}></MachinePanel>
          </Col>
        ))
      }
      <Col><Button variant="primary">Add Item</Button></Col>
    </Row>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    machines: selectPerParams(ownProps.router.params)(state)
  }
}

export default withRouter(connect(mapStateToProps)(MachinesPage));