
import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';
import GalleryItem from './GalleryItem';
import GallerySkeleton from './GallerySkeleton';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationEllipsis 
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClubGalleryProps {
  items: GalleryItemType[];
  isLoading: boolean;
}

const ITEMS_PER_PAGE = 12;

const ClubGallery = ({ items, isLoading }: ClubGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getVisiblePages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    
    if (currentPage <= 3) return [1, 2, 3, 4, 'ellipsis', totalPages];
    if (currentPage >= totalPages - 2) return [1, 'ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    
    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <GallerySkeleton key={index} />
          ))
        ) : (
          currentItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onHover={setHoveredItem}
              isHovered={hoveredItem === item.id}
            />
          ))
        )}
      </div>

      {!isLoading && totalPages > 1 && (
        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                className={`w-10 h-10 p-0 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-all duration-200 ${
                  currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </PaginationLink>
            </PaginationItem>

            {getVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis className="text-gray-500" />
                ) : (
                  <PaginationLink
                    onClick={() => setCurrentPage(page as number)}
                    isActive={currentPage === page}
                    className={`w-10 h-10 p-0 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                      ${currentPage === page 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-gray-50 border border-gray-200 hover:bg-primary hover:text-white shadow-sm'
                      }`}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                className={`w-10 h-10 p-0 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 shadow-sm hover:bg-primary hover:text-white transition-all duration-200 ${
                  currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ClubGallery;
