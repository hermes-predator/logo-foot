
import { BlogCTASection } from "./BlogCTASection";
import { BlogPreviewCarousel } from "./BlogPreviewCarousel";
import { BlogQualityBadges } from "./BlogQualityBadges";

interface BlogHeaderProps {
  images?: string[];
  title?: string;
  description?: string;
}

export const BlogHeader = ({ 
  images = [], 
  title = "Logos de Football", 
  description = "Découvrez notre collection de logos de football" 
}: BlogHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden rounded-tl-2xl rounded-tr-none">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
            {title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Quality Badges */}
        <BlogQualityBadges />

        {/* Preview Carousel */}
        <BlogPreviewCarousel images={images} />

        {/* CTA Section */}
        <BlogCTASection />
      </div>
    </div>
  );
};
