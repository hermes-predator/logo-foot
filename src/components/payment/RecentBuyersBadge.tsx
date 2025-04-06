
import React from 'react';
import { Users } from 'lucide-react';

interface RecentBuyersBadgeProps {
  count: number;
}

const RecentBuyersBadge = ({ count }: RecentBuyersBadgeProps) => {
  return (
    <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 animate-[pulse_1.5s_ease-in-out_infinite]">
      <Users className="h-3 w-3" />
      <span>{count} personnes ont acheté récemment</span>
    </div>
  );
};

export default RecentBuyersBadge;
