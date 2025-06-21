
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const BlogPagination = ({ currentPage, totalPages, setCurrentPage }: BlogPaginationProps) => {
  return (
    <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
      <Pagination className="">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(currentPage - 1)}
                className="cursor-pointer text-white hover:text-white border-gray-600 hover:bg-gray-700/50 transition-colors"
                style={{ backgroundColor: 'rgba(50, 48, 46, 0.6)' }}
              />
            </PaginationItem>
          )}
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            
            if (totalPages > 7) {
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      onClick={() => setCurrentPage(pageNumber)}
                      isActive={currentPage === pageNumber}
                      className={`cursor-pointer transition-colors ${
                        currentPage === pageNumber
                          ? 'text-white border-gray-500'
                          : 'text-gray-300 hover:text-white border-gray-600 hover:bg-gray-700/50'
                      }`}
                      style={{ 
                        backgroundColor: currentPage === pageNumber 
                          ? 'rgba(70, 68, 66, 0.8)' 
                          : 'rgba(50, 48, 46, 0.6)' 
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                return <PaginationEllipsis key={pageNumber} className="text-gray-400" />;
              }
              return null;
            }
            
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  onClick={() => setCurrentPage(pageNumber)}
                  isActive={currentPage === pageNumber}
                  className={`cursor-pointer transition-colors ${
                    currentPage === pageNumber
                      ? 'text-white border-gray-500'
                      : 'text-gray-300 hover:text-white border-gray-600 hover:bg-gray-700/50'
                  }`}
                  style={{ 
                    backgroundColor: currentPage === pageNumber 
                      ? 'rgba(70, 68, 66, 0.8)' 
                      : 'rgba(50, 48, 46, 0.6)' 
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(currentPage + 1)}
                className="cursor-pointer text-white hover:text-white border-gray-600 hover:bg-gray-700/50 transition-colors"
                style={{ backgroundColor: 'rgba(50, 48, 46, 0.6)' }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
