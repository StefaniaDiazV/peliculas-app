import { FC, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSearchParams } from "react-router-dom";
import "./style.scss";

type Props = {
  page: string;
  totalPages: string;
  first: () => void
  next: (page: string | null) => void;
  prev: (page: string | null) => void;
  last: (totalPages: string) => void
};

const PaginationMv: FC<Props> = ({ totalPages, page, next, prev, first, last }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: '1' });
  }, []);

  return (
    <div className="pagination">
      <Pagination size="lg">
        <Pagination.Item
          disabled={page === "1"}
          onClick={() => first()}
        >
          {1}
        </Pagination.Item>
        <Pagination.Prev disabled={page === "1"} onClick={() => prev(page)} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next
          disabled={page === totalPages || page === '500'}
          onClick={() => next(page)}
        />
        <Pagination.Item
          disabled={page === totalPages || page === '500'}
          onClick={() => last(totalPages)}
        >
          {Number(totalPages) < 500 ? totalPages : 500}
        </Pagination.Item>
      </Pagination>
    </div>
  );
};

export { PaginationMv };
