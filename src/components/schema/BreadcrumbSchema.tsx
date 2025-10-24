
interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

export const BreadcrumbSchema = ({ 
  items, 
  baseUrl = "https://www.logo-foot.com" 
}: BreadcrumbSchemaProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
        "url": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
        "name": item.name
      }
    }))
  };

  return breadcrumbSchema;
};

// Helper function to generate breadcrumb items from path
export const generateBreadcrumbItems = (
  pathname: string, 
  postTitle?: string, 
  category?: string
): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [
    {
      name: "Accueil",
      url: "/",
      position: 1
    }
  ];

  const pathSegments = pathname.split('/').filter(segment => segment);
  let currentPath = "";
  let position = 2;

  for (const segment of pathSegments) {
    currentPath += `/${segment}`;
    
    // Handle different path types
    if (segment === 'blog') {
      items.push({
        name: "Blog",
        url: currentPath,
        position: position++
      });
    } else if (segment === 'gallery') {
      items.push({
        name: "Galerie",
        url: currentPath,
        position: position++
      });
    } else if (segment === 'category' && category) {
      items.push({
        name: category.charAt(0).toUpperCase() + category.slice(1),
        url: currentPath,
        position: position++
      });
    } else if (segment.match(/^\d+/)) {
      // Blog post ID detected
      if (postTitle) {
        items.push({
          name: postTitle.length > 60 ? postTitle.substring(0, 60) + "..." : postTitle,
          url: currentPath,
          position: position++
        });
      }
    } else {
      // Generic segment handling
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      items.push({
        name,
        url: currentPath,
        position: position++
      });
    }
  }

  return items;
};
