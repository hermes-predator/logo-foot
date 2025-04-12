
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, Download } from 'lucide-react';

interface DownloadProgressProps {
  progress: number;
  status: 'idle' | 'downloading' | 'complete' | 'error';
}

const DownloadProgress = ({ progress, status }: DownloadProgressProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'downloading':
        return <Download className="h-5 w-5 text-blue-500 animate-bounce" />;
      default:
        return <Download className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'complete':
        return 'bg-green-500';
      case 'error':
        return 'bg-amber-500';
      case 'downloading':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col items-center bg-white p-3 rounded-lg shadow-lg border border-gray-200 z-50 w-24">
      <div className="mb-3">
        {getStatusIcon()}
      </div>
      
      <div className="h-32 w-5 bg-gray-100 rounded-full relative mb-2 overflow-hidden">
        <Progress 
          value={progress} 
          orientation="vertical"
          className="w-full"
        />
      </div>
      
      <div className="text-xs font-medium text-gray-700 mt-1">
        {status === 'idle' && 'Prêt'}
        {status === 'downloading' && `${progress}%`}
        {status === 'complete' && 'Terminé!'}
        {status === 'error' && 'Erreur'}
      </div>
    </div>
  );
};

export default DownloadProgress;
