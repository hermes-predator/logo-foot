
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Folder } from "lucide-react";

const BlogPost = () => {
  return (
    <Button 
      asChild 
      className="w-full bg-white hover:bg-gray-50 text-black border border-gray-200 hover:shadow transition-all duration-200"
    >
      <Link to="/" className="flex items-center justify-center gap-1.5">
        <Folder className="h-4 w-4" />
        <span>Voir le fichier</span>
      </Link>
    </Button>
  );
};

export default BlogPost;
