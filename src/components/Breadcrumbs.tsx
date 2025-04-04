
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
          <Link to="/" className="transition-colors hover:text-foreground">
            <Home className="h-4 w-4" />
          </Link>
        </BreadcrumbItem>
        
        {paths.map((path, index) => (
          // Only key should be passed to React.Fragment, not data-lov-id
          <React.Fragment key={index}>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link 
                to={`/${paths.slice(0, index + 1).join('/')}`}
                className="transition-colors hover:text-foreground"
              >
                {generateBreadcrumbLabel(path)}
              </Link>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
