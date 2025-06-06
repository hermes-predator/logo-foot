
import React from 'react';
import { Shield, Trophy, Globe, Users } from 'lucide-react';

const BlogStatsSection = () => {
  const stats = [
    { icon: Shield, label: "Clubs analysés", value: "500+" },
    { icon: Trophy, label: "Compétitions", value: "50+" },
    { icon: Globe, label: "Pays couverts", value: "80+" },
    { icon: Users, label: "Lecteurs mensuels", value: "10K+" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
            <stat.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogStatsSection;
