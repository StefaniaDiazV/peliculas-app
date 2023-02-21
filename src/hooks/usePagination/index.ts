import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = () => {
    const [totalPages, setTotalPages] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

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

    return { handlePrev, handleNext, totalPages, setTotalPages, searchParams };
  };

  export { usePagination }