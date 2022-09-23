import { Container, Button, Form } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Cuéntanos, ¿en qué te podemos ayudar? 
      </h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <Button variant="danger">Enviar</Button>
    </Form>
      
    </Container>
  );
};

export default Contacto