import Form from 'react-bootstrap/Form';

const FieldControl = ({ field }) => {
  return (
    <Form.Group className="mb-3" controlId={field.id}>
      <Form.Label>{field.name}</Form.Label>
      <Form.Control type={field.type} value={field.value} onChange={() => { }} />
    </Form.Group>
  )
}

export default FieldControl;