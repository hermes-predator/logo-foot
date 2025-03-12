
export interface GalleryItem {
  id: number;
  imageUrl: string;
  videoUrl: string;
  title: string;
  country: string;
  altText: string;
}

export interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  country: string;
}

export interface GalleryItemProps {
  item: GalleryItem;
  onHover: (id: number | null) => void;
  isHovered: boolean;
}
