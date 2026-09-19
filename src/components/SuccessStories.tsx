import React, { useState } from 'react';
import { 
  Quote, 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IMPACT_STORIES } from '../data/mockData';
import { Language } from '../types';

interface SuccessStoriesProps {
  onOpenDonation: (amount?: number, title?: string) => void;
  lang: Language;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenDonation, lang }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const story = IMPACT_STORIES[activeIdx];

  const nextStory = () => {
    setActiveIdx((prev) => (prev + 1) % IMPACT_STORIES.length);
  };

  const prevStory = () => {
    setActiveIdx((prev) => (prev - 1 + IMPACT_STORIES.length) % IMPACT_STORIES.length);
  };

  return (
    <section id="stories" className="py-20 bg-stone-50 text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Lives Transformed' : lang === 'bn' ? 'বাস্তব জীবনের রূপান্তর' : 'सच्ची परिवर्तन गाथाएं'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Real Stories of Hope, Courage & Triumph'
              : lang === 'bn'
              ? 'আশা, সাহস ও ঘুরে দাঁড়ানোর সত্য কাহিনী'
              : 'हौसले और बदलाव की सच्ची जमीनी कहानियां'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'bn'
              ? 'প্রতিটি পরিসংখ্যানের পেছনে রয়েছে এক একটি সজীব মানুষের জীবন। পরিচিত হোন সেই অদম্য কন্যা, মা ও শিশুদের সাথে যাদের ভাগ্য বদলে গেছে তৃণমূল অংশীদারিত্বের মাধ্যমে।'
              : 'Behind every statistic is a breathing human life. Meet the brave girls, mothers, and children whose destiny was rewritten through grassroots partnership.'}
          </p>
        </div>

        {/* Featured Story Display */}
        <div className="mt-12 bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Story Image */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-stone-900">
              <img
                src={story.imageUrl}
                alt={story.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-serif font-bold text-xl">{story.name}, {story.age}</div>
                <div className="text-xs text-emerald-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {story.village}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {lang === 'bn' ? 'প্রকল্প' : 'Program'}: {story.program}
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    {lang === 'bn' ? `কেস স্টাডি #${activeIdx + 1} (${story.year})` : `Case Study #${activeIdx + 1} (${story.year})`}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevStory}
                      className="p-1.5 rounded-lg border border-stone-200 text-slate-600 hover:bg-stone-100 transition-colors"
                      title="Previous Story"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextStory}
                      className="p-1.5 rounded-lg border border-stone-200 text-slate-600 hover:bg-stone-100 transition-colors"
                      title="Next Story"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  {story.headline}
                </h3>

                {/* Quote */}
                <div className="relative pl-6 py-2 border-l-4 border-emerald-500 bg-stone-50 rounded-r-xl pr-4">
                  <Quote className="w-5 h-5 text-emerald-600/40 absolute -top-1 left-1" />
                  <p className="font-serif italic text-sm sm:text-base text-slate-700 leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                {/* Detailed Story Narrative */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {story.story}
                </p>

                {/* Before vs After Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 text-xs">
                    <span className="font-bold text-red-900 block mb-1">
                      {lang === 'bn' ? 'এনএসএন হস্তক্ষেপের পূর্বে:' : 'Before NSN Intervention:'}
                    </span>
                    <p className="text-red-700 leading-relaxed">{story.beforeState}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-xs">
                    <span className="font-bold text-emerald-900 block mb-1">
                      {lang === 'bn' ? 'বর্তমান ইতিবাচক বাস্তবতা:' : "Today's Reality:"}
                    </span>
                    <p className="text-emerald-800 leading-relaxed">{story.afterState}</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {IMPACT_STORIES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeIdx === i ? 'w-6 bg-emerald-600' : 'w-2 bg-stone-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => onOpenDonation(1200, `Inspired by ${story.name}'s Story`)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>{lang === 'bn' ? 'এমন আরেকটি জীবন গড়তে সাহায্য করুন' : 'Create Another Story (Donate 80G)'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
