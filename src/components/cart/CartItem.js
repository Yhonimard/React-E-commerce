import { Table, Button } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/product-context";
const CartItem = () => {
  const { cart, onUpdate, onRemove, onEmpty } = useContext(cartContext);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>Qty</Table.HeadCell>
          <Table.HeadCell>SubTotal</Table.HeadCell>
          <Table.HeadCell
            onClick={onEmpty}
            className="cursor-pointer underline"
          >
            Empty Cart
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cart?.line_items?.map((item) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800 "
                key={item.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>{item.price.formatted_with_symbol}</Table.Cell>
                <Table.Cell className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => onUpdate(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <span>
                    <button
                      onClick={() => onUpdate(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </span>
                </Table.Cell>
                <Table.Cell>{item.line_total.formatted_with_code}</Table.Cell>
                <Table.Cell
                  className="underline cursor-pointer"
                  onClick={() => onRemove(item.id)}
                >
                  Delete
                </Table.Cell>
              </Table.Row>
            );
          })}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              TOTAL
            </Table.Cell>
            <Table.Cell />
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {cart.total_items}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {cart.subtotal?.formatted_with_code}
            </Table.Cell>
            <Table.Cell>
              <Button gradientMonochrome="purple" size="sm">
                <Link to="/checkout">Chekout</Link>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default CartItem;
