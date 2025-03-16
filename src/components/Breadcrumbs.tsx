
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const getBreadcrumbItems = (pathname: string) => {
  const paths = pathname.split('/').filter(Boolean);
  return paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1);
    return { path, url, label };
  });
};

export default function Breadcrumbs() {
  const location = useLocation();
  const items = getBreadcrumbItems(location.pathname);

  if (location.pathname === '/') return null;

  return (
    <Breadcrumb className="mb-6 px-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Accueil
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => (
          <BreadcrumbItem key={item.url}>
            <BreadcrumbSeparator />
            {index === items.length - 1 ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link to={item.url}>{item.label}</Link>
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
