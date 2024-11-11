import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzA-snu1byTgtiFNkckKUmVezsFewHPYq0kQ&s"></Card.Img>
      <Card.Body>
        <Card.Title>Nome Produto: {props.nome}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'> Preço {props.preço}</Card.Subtitle>
        <Card.Text>
          Descrição: {props.descricao}
        </Card.Text>
        <Card.Text>
          Categoria {props.caegoria}
        </Card.Text>

        <Card.Link href={`/produtos/edicao/${props.id}`}>
          <Button variant='warning'>Editar</Button>
        </Card.Link>
        <Card.Link href={`/produtos/excluir/${props.id}`}>
          <Button variant='danger'>Excluir</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;