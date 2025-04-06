
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
          <PaginationContent className="gap-2">
            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                className={`w-11 h-11 p-0 flex items-center justify-center rounded-md
                  shadow-sm transition-all duration-300 border
                  backdrop-blur-[2px] bg-gradient-to-b from-white to-gray-50/95
                  ${currentPage === 1 
                    ? 'opacity-50 cursor-not-allowed border-gray-100' 
                    : 'border-gray-300/70 hover:border-gray-700/60 hover:text-gray-900 hover:shadow-md hover:shadow-gray-200/40 cursor-pointer'
                  }`}
              >
                <ChevronLeft className="h-5 w-5 stroke-[2px]" />
              </PaginationLink>
            </PaginationItem>

            {getVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis className="text-gray-400 mx-0.5 text-sm" />
                ) : (
                  <PaginationLink
                    onClick={() => setCurrentPage(page as number)}
                    isActive={currentPage === page}
                    className={`w-11 h-11 p-0 flex items-center justify-center rounded-md text-base
                      transition-all duration-300 cursor-pointer font-medium backdrop-blur-[2px]
                      ${currentPage === page 
                        ? 'bg-gradient-to-br from-gray-800/95 to-gray-700/95 text-white ring-1 ring-gray-600/30 shadow-md shadow-gray-400/10 border-0' 
                        : 'bg-gradient-to-b from-white to-gray-50/95 border border-gray-300/70 hover:border-gray-600/60 hover:text-gray-800 shadow-sm hover:shadow-md hover:shadow-gray-200/30'
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
                className={`w-11 h-11 p-0 flex items-center justify-center rounded-md
                  shadow-sm transition-all duration-300 border
                  backdrop-blur-[2px] bg-gradient-to-b from-white to-gray-50/95
                  ${currentPage === totalPages 
                    ? 'opacity-50 cursor-not-allowed border-gray-100' 
                    : 'border-gray-300/70 hover:border-gray-700/60 hover:text-gray-900 hover:shadow-md hover:shadow-gray-200/40 cursor-pointer'
                  }`}
              >
                <ChevronRight className="h-5 w-5 stroke-[2px]" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ClubGallery;
