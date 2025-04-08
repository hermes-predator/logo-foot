
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path);

  const generateBreadcrumbLabel = (path: string) => {
    switch(path) {
      case 'blog':
        return 'Blog';
      default:
        return path;
    }
  };

  return (
    <Breadcrumb className="pt-3 mb-4 pl-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/" className="transition-colors hover:text-purple-600 flex items-center gap-1 text-gray-500 hover:scale-105 transform duration-200 group">
            <Home className="h-4 w-4 group-hover:text-purple-600" />
          </Link>
        </BreadcrumbItem>
        
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link 
                to={`/${paths.slice(0, index + 1).join('/')}`}
                className="transition-colors hover:text-purple-600 font-medium text-gray-600 hover:scale-105 transform duration-200 relative group"
              >
                <span>{generateBreadcrumbLabel(path)}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
