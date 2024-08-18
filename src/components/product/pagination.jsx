"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { QUERY_LIMIT } from "@/app/page";

export function ProductPagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const maxPages = Math.ceil(totalPages / QUERY_LIMIT);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious href={createPageURL(currentPage - 1)} />
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(currentPage)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage + 1 <= maxPages && (
          <PaginationItem>
            <PaginationLink href={createPageURL(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 2 <= maxPages && (
          <PaginationItem>
            <PaginationLink href={createPageURL(currentPage + 2)}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          {currentPage + 2 < maxPages && <PaginationEllipsis />}
        </PaginationItem>
        {currentPage + 2 < maxPages && (
          <PaginationItem>
            <PaginationNext href={createPageURL(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
