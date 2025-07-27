import { useEffect } from 'react';
import { useSyncBlogPosts } from '../hooks/useSyncBlogPosts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, RefreshCw, AlertCircle, Database } from 'lucide-react';

export const SyncStatus = () => {
  const { syncPosts, isLoading, error, lastSync, totalPosts } = useSyncBlogPosts();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Synchronisation Blog
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Articles totaux:</span>
          <span className="font-semibold">{totalPosts}</span>
        </div>

        {lastSync && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Dernière sync:</span>
            <span className="text-sm">{lastSync.toLocaleTimeString()}</span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {!error && lastSync && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Synchronisé avec succès</span>
          </div>
        )}

        <Button 
          onClick={syncPosts} 
          disabled={isLoading}
          className="w-full"
          variant="outline"
        >
          {isLoading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Synchronisation...
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4 mr-2" />
              Synchroniser
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};