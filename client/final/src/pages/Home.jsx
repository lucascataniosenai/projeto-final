import React from 'react'
import CardProduto from '../components/CardProduto'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

const Home = () => {
  return (
    <div>
      <h1>Lista de produtos</h1>
      <Container>
        <div className="d-grid col-2 gap-2">
          <Button
            variant="primary"
            size="lg"
            className="mb-3 d-inline-flex justify-content-center"
            onClick={() => {

            }}
          >
            <span
              className="material-symbols-outlined flex"
              style={{ fontSize: "30px" }}
            >
              add_circle
            </span>
            Cadastrar
          </Button>
        </div>

        <Form.Group controlId="formGridCategoria">
          <Form.Label>Selecione uma categoria:</Form.Label>
          <Form.Select defaultValue="...">
            <option>Cereal</option>
            <option>Bebidas</option>
          </Form.Select>
        </Form.Group>

        <div className='lista-produtos mt-3'>
          <CardProduto />
        </div>
      </Container>
    </div>
  )
}

export default Home
