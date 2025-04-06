
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface MusicCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  className?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, subtitle, imageUrl, className }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn('music-card w-full cursor-pointer', className)}>
      <div className="music-card-image bg-ytmusic-secondary">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl opacity-30">♪</span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium truncate`}>{title}</h3>
        <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-ytmusic-text-secondary truncate`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default MusicCard;
