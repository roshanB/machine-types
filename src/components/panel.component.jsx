import Card from 'react-bootstrap/Card';
import EditMachineForm from './form.component';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const MachinePanel = ({ machine, mode }) => {
  return (
    <Card>
      <Card.Header>{getMachineName(machine)}</Card.Header>
      <Card.Body>
        <EditMachineForm fields={machine.fields}></EditMachineForm>
        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-1"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </Card.Body>
    </Card>
  )
}

const getMachineName = (machine) => {
  let titleField = machine.fields.find(field => field.id === machine.titleFieldId);
  return titleField.value;
}

export default MachinePanel;