import Pagination from "react-bootstrap/Pagination";
import './style.scss'

const PaginationMv = () => {
  return (
    <div className="pagination">
      <Pagination size="lg">
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Prev />
        <Pagination.Item>{15}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Item>{30}</Pagination.Item>
      </Pagination>
    </div>
  );
};

export { PaginationMv };
