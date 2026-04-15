import { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const isVideo = product.image.endsWith('.mov') || product.image.endsWith('.mp4');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPreviewPlayed, setHasPreviewPlayed] = useState(false);
  const previewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-preview: play 3 seconds when scrolled into view
  useEffect(() => {
    if (!isVideo) return;
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
  }, [hasPreviewPlayed, isPlaying, isVideo]);

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

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default config for quick add
    addToCart(product, 1, 'M', product.colors?.[0] || 'Default');
  };

  return (
    <Link ref={containerRef} to={`/product/${product.id}`} className="group block">
      <div className="relative bg-white dark:bg-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 aspect-[3/4] hover-lift">
        {product.isBestseller && (
          <div className="absolute top-4 left-4 z-20 gradient-primary text-white text-[10px] px-3 py-1.5 uppercase tracking-widest rounded-full font-bold shadow-md">
            Bestseller
          </div>
        )}
        
        {isVideo ? (
          <video
            ref={videoRef}
            src={product.image}
            className="w-full h-full object-cover"
            playsInline
            muted
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
        )}

        {/* Hover overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isVideo && isPlaying ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />

        {/* Quick Add Button */}
        <button 
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 ${isVideo ? 'right-20' : 'right-4'} glass py-3.5 rounded-xl text-sm font-bold tracking-wider uppercase translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-slate-900 dark:text-white hover:bg-primary/20 z-10`}
        >
          Quick Add +
        </button>

        {/* Play button — bottom right */}
        {isVideo && (
          <button
            onClick={togglePlay}
            className={`absolute bottom-4 right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-md ${
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
        )}
      </div>
      <div className="mt-5">
        <h4 className="font-serif text-lg text-slate-900 dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{product.name}</h4>
        <p className="text-slate-400 text-sm italic mb-2 tracking-wide">{product.colors?.[0] || 'Classic'}</p>
        <p className="font-bold text-accent-gold text-lg">₦{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
