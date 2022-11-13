import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

interface Props {
  show: boolean,
  onHide: () => void
}

const AuthModal: React.FC<Props> = (props) => {
  return (
    <Modal
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Войти
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Войти</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;