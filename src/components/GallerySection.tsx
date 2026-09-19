import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem, Language } from '../types';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Activities' : lang === 'bn' ? 'সকল কর্মকাণ্ড' : 'सभी गतिविधियां' },
    { id: 'education', label: lang === 'en' ? 'Education' : lang === 'bn' ? 'শিক্ষা' : 'शिक्षा' },
    { id: 'healthcare', label: lang === 'en' ? 'Healthcare' : lang === 'bn' ? 'স্বাস্থ্যসেবা' : 'स्वास्थ्य' },
    { id: 'women', label: lang === 'en' ? 'Women Livelihood' : lang === 'bn' ? 'নারী আজীবিকা' : 'महिला आजीविका' },
    { id: 'wash', label: lang === 'en' ? 'Clean Water' : lang === 'bn' ? 'বিশুদ্ধ জল' : 'स्वच्छ जल' },
    { id: 'environment', label: lang === 'en' ? 'Plantation' : lang === 'bn' ? 'বৃক্ষরোপণ' : 'वृक्षारोपण' },
    { id: 'relief', label: lang === 'en' ? 'Relief' : lang === 'bn' ? 'ত্রাণ ও পুনর্বাসন' : 'राहत सेवा' },
  ];

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Grassroots In Action' : lang === 'bn' ? 'মাঠপর্যায়ে আমাদের কার্যক্রম' : 'जमीनी कार्य दृश्य'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Glimpses of Ground Realities & Impact'
              : lang === 'bn'
              ? 'বাস্তব কর্মক্ষেত্র ও পরিবর্তনের আলোকচিত্র'
              : 'सेवा, संकल्प और परिवर्तन की कुछ झलकियां'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'bn'
              ? 'আমাদের ফিল্ড সেন্টার, ভ্রাম্যমাণ স্বাস্থ্য ক্যাম্প ও গ্রামীণ নারী বৈঠকের প্রত্যক্ষ চিত্র প্রমাণ।'
              : 'Direct visual evidence from our field centers, mobile medical camps, and tribal village gatherings.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-6 max-w-3xl mx-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filter === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-left text-white space-y-1">
                <div className="flex items-center justify-between text-[11px] text-emerald-300 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl text-left">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 text-white space-y-2 bg-slate-950">
              <div className="flex items-center justify-between text-xs text-emerald-400">
                <span className="flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  {activePhoto.location}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {activePhoto.date}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
