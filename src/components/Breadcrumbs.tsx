
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
          <Link 
            to="/" 
            className="flex items-center justify-center bg-gray-100 hover:bg-purple-100 w-8 h-8 rounded-full transition-colors duration-200 group shadow-sm hover:shadow"
          >
            <Home className="h-4 w-4 text-gray-600 group-hover:text-purple-600" />
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
                className="px-3 py-1 bg-gray-100 hover:bg-purple-100 rounded-full text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 shadow-sm hover:shadow flex items-center relative overflow-hidden group"
              >
                <span>{generateBreadcrumbLabel(path)}</span>
                <span className="absolute inset-0 w-full h-full bg-purple-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </Link>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
