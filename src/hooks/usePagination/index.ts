import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = () => {
  const [totalPages, setTotalPages] = useState("");
  const [page, setPage] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFirst = () => {
    setSearchParams({ page: "1" });
  };

  const handleNext = (page: string | null) => {
    let calc = Number(page) + 1;
    let text = String(calc);
    setSearchParams({ page: text });
  };

  const handlePrev = (page: string | null) => {
    let calc = Number(page) - 1;
    let text = String(calc);
    setSearchParams({ page: text });
  };

  const handleLast = (totalPages: string) => {
    let calc = Number(totalPages) < 500 ? totalPages : 500;
    let total =  calc.toString()
    setSearchParams({ page: total });
  };

  return {
    handleFirst,
    handlePrev,
    handleNext,
    handleLast,
    totalPages,
    setTotalPages,
    page,
    setPage,
    searchParams,
  };
};

export { usePagination };
