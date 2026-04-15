import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoCardProps {
  src: string;
  title: string;
  subtitle?: string;
  poster?: string;
}

export default function VideoCard({ src, title, subtitle, poster }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPreviewPlayed, setHasPreviewPlayed] = useState(false);
  const previewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-preview: play 3 seconds when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPreviewPlayed && !isPlaying) {
            const video = videoRef.current;
            if (video) {
              video.muted = true;
              video.currentTime = 0;
              video.play().then(() => {
                previewTimerRef.current = setTimeout(() => {
                  if (!isPlaying) {
                    video.pause();
                    video.currentTime = 0;
                  }
                  setHasPreviewPlayed(true);
                }, 3000);
              }).catch(() => {});
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      observer.disconnect();
      if (previewTimerRef.current) clearTimeout(previewTimerRef.current);
    };
  }, [hasPreviewPlayed, isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (previewTimerRef.current) {
      clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = false;
      video.currentTime = 0;
      video.play().then(() => {
        setIsPlaying(true);
        setHasPreviewPlayed(true);
      }).catch(() => {});
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div ref={containerRef} className="group block">
      <div className="relative bg-white dark:bg-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 aspect-[3/4] hover-lift">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          playsInline
          muted
          preload="metadata"
          onEnded={handleVideoEnd}
        />

        {/* Gradient overlay — hidden when playing */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />

        {/* Play button — bottom right */}
        <button
          onClick={togglePlay}
          className={`absolute bottom-4 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md ${
            isPlaying 
              ? 'bg-white/20 text-white hover:bg-white/30' 
              : 'gradient-primary text-white hover:scale-110 shadow-primary/30 animate-pulse'
          }`}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        {/* Video badge */}
        {!isPlaying && (
          <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1.5 uppercase tracking-widest rounded-full font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Video
          </div>
        )}
      </div>
      <div className="mt-5">
        <h4 className="font-serif text-lg text-slate-900 dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{title}</h4>
        {subtitle && <p className="text-slate-400 text-sm italic tracking-wide mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
