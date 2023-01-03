import { Table } from "flowbite-react";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";

const Review = ({ token }) => {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Qty</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {token.line_items.map((product) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
              <Table.Cell>
                {product.line_total.formatted_with_symbol}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Body>
          <Table.Cell>TOTAL</Table.Cell>
          <Table.Cell>{token.subtotal.formatted_with_symbol}</Table.Cell>
        </Table.Body>
      </Table>
    </>
  );
};

export default Review;
