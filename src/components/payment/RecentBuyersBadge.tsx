
import React from 'react';
import { Users } from 'lucide-react';

interface RecentBuyersBadgeProps {
  count: number;
}

const RecentBuyersBadge = ({ count }: RecentBuyersBadgeProps) => {
  return (
    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1.5 rounded-bl-lg rounded-tr-xl text-sm font-semibold shadow-md flex items-center gap-1.5 animate-[fastBlink_1s_ease-in-out_infinite]">
      <Users className="h-3.5 w-3.5" />
      <span>{count} personnes ont acheté récemment</span>
    </div>
  );
};

export default RecentBuyersBadge;
