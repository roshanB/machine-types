import Form from 'react-bootstrap/Form';
import FieldControl from './edit-field-control.component';

const EditMachineForm = ({ fields }) => {
  return (
    <Form>
      {
        fields.map(field =>
        (
          <FieldControl key={field.id} field={field} />
        )
        )
      }
    </Form>
  )
}

export default EditMachineForm;