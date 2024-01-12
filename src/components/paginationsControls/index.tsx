"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <div className="flex gap-2 items-center justify-center p-8">
      <Button
        className=" text-white p-1 cursor-pointer"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/produtos?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}
      >
        Anterior
      </Button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <Button
        className="bg-blue-900 text-white p-1 cursor-pointer"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/produtos?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}
      >
        Próxima
      </Button>
    </div>
  );
};

export default PaginationControls;
