import { FC, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSearchParams } from "react-router-dom";
import "./style.scss";

type Props = {
  page: string | null;
  totalPages: string;
  next: (page: string | null) => void;
  prev: (page: string | null) => void;
};

const PaginationMv: FC<Props> = ({ totalPages, page, next, prev }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: "1" });
  }, []);

  return (
    <div className="pagination">
      <Pagination size="lg">
        <Pagination.Item
          disabled={page === "1"}
          onClick={() => setSearchParams({ page: "1" })}
        >
          {1}
        </Pagination.Item>
        <Pagination.Prev disabled={page === "1"} onClick={() => prev(page)} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next
          disabled={page == totalPages}
          onClick={() => next(page)}
        />
        <Pagination.Item
          disabled={page == totalPages}
          onClick={() => setSearchParams({ page: totalPages })}
        >
          {totalPages}
        </Pagination.Item>
      </Pagination>
    </div>
  );
};

export { PaginationMv };
