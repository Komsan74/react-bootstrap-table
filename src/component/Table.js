import { Container, Table } from "react-bootstrap";

export default function Tables(props) {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            {props.header.map((head, idx) => {
              return <th key={idx}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
