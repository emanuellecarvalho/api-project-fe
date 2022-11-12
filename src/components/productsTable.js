import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/productsTable.css';


const productsTable = ({ products }) => {

  return (
    <div className='table-container'>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
      <tr>
        <>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>R$ {product.price}</td>
        <td>
          <button>Detalhes</button>
          <button>Editar</button>
          <button>Excluir</button>
        </td>
        </>
      </tr>
      ))}
    </tbody>
    </Table>
    </div>
  )
}

export default productsTable;

