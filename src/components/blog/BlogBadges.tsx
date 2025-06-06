
import React from 'react';
import ReassuranceBadge from './ReassuranceBadge';
import JudgeMeBadge from './JudgeMeBadge';

const BlogBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
      <ReassuranceBadge />
      <JudgeMeBadge />
    </div>
  );
};

export default BlogBadges;
