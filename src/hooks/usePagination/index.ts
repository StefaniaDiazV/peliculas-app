import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = () => {
    const [totalPages, setTotalPages] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();


    const handleFirst = () => {
      setSearchParams({ page: "1" })
    } 

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
        setSearchParams({ page: totalPages })
      }

    return { handleFirst, handlePrev, handleNext, handleLast, totalPages, setTotalPages, searchParams };
  };

  export { usePagination }