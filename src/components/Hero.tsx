import React, { useState } from 'react';
import { 
  Heart, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Award, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Droplets,
  Sparkles,
  X
} from 'lucide-react';
import { NSN_DETAILS, IMPACT_METRICS } from '../data/mockData';
import { Language } from '../types';

interface HeroProps {
  onOpenDonation: (amount?: number, title?: string) => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonation, lang }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-slate-900 to-slate-950 text-white">
      {/* Background Graphic Patterns & Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-amber-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Mission Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>
                {lang === 'en' 
                  ? 'Official Grassroots NGO • Serving Rural India Since 2008' 
                  : lang === 'bn'
                  ? 'স্বীকৃত তৃণমূল সমাজসেবামূলক সংস্থা • ২০০৮ সাল থেকে সেবায় নিবেদিত'
                  : 'पंजीकृत जमीनी गैर-सरकारी संगठन • 2008 से सेवारत'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {lang === 'en' ? (
                <>
                  Restoring Human Dignity, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    Nurturing Hope Across Rural Lives.
                  </span>
                </>
              ) : lang === 'bn' ? (
                <>
                  মানবিক মর্যাদার পুনরুজ্জীবন, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    গ্রামীণ প্রান্তিক জীবনে নতুন আশার আলো।
                  </span>
                </>
              ) : (
                <>
                  मानवीय गरिमा की पुनर्स्थापना, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                    ग्रामीण समुदायों में नई आशा का संचार।
                  </span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {lang === 'en' ? (
                <>
                  <strong>Navadoy Seva Niketan (NSN)</strong> delivers holistic education to first-generation learners, mobile medical clinics to remote tribal hamlets, self-help livelihoods for rural women, and safe fluoride-free drinking water.
                </>
              ) : lang === 'bn' ? (
                <>
                  <strong>নবোদয় সেবা নিকেতন (NSN)</strong> প্রথম প্রজন্মের শিক্ষার্থীদের সর্বাঙ্গীন শিক্ষা, প্রত্যন্ত আদিবাসী জনপদে ভ্রাম্যমাণ স্বাস্থ্যসেবা, গ্রামীণ নারীদের স্বনির্ভর জীবিকা এবং নিরাপদ বিশুদ্ধ পানীয় জল পৌঁছে দিচ্ছে।
                </>
              ) : (
                <>
                  <strong>नवोदय सेवा निकेतन (NSN)</strong> वंचित बच्चों को गुणवत्तापूर्ण शिक्षा, दूरदराज के आदिवासी क्षेत्रों में मोबाइल स्वास्थ्य सेवाएं, ग्रामीण महिलाओं को स्वावलंबी आजीविका और स्वच्छ पेयजल प्रदान कर रहा है।
                </>
              )}
            </p>

            {/* Credential Checks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? '৮০জি করছাড় (৫০%)' : '80G (50% Tax Saved)'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'MCA CSR-১ নিবন্ধিত' : 'MCA CSR-1 Registered'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'নীতি আয়োগ দর্পণ ভেরিফায়েড' : 'NITI Aayog Darpan Verified'}</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-primary-donate-btn"
                onClick={() => onOpenDonation()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/40 hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <Heart className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>{lang === 'en' ? 'Support Our Mission' : lang === 'bn' ? 'মিশনে সহযোগিতা করুন' : 'मिशन में सहयोग करें'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#programs"
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all text-center"
              >
                {lang === 'en' ? 'Explore 10 Programs' : lang === 'bn' ? '১০টি মূল ক্ষেত্র দেখুন' : '10 कार्यक्षेत्र देखें'}
              </a>

              <button
                id="hero-watch-video-btn"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-300 transition-colors py-2 px-3"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>{lang === 'en' ? 'Watch Ground Impact' : lang === 'bn' ? 'মাঠের ভিডিও দেখুন' : 'जमीनी वीडियो देखें'}</span>
              </button>
            </div>

            {/* Quick Micro-Donation Pills */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'en' ? 'Quick Impact:' : lang === 'bn' ? 'ত্বরিত অনুদান:' : 'त्वरित दान:'}
              </span>
              {[
                { amount: 500, label: lang === 'bn' ? '₹৫০০ (শিশুর পুষ্টি)' : '₹500 (Child Nutrition)' },
                { amount: 1200, label: lang === 'bn' ? '₹১,২০০ (মাসিক শিক্ষা)' : '₹1,200 (Monthly Schooling)' },
                { amount: 2500, label: lang === 'bn' ? '₹২,৫০০ (বিনামূল্যে চিকিৎসা কিট)' : '₹2,500 (Free Medical Kit)' },
              ].map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => onOpenDonation(tier.amount, 'Quick Support')}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-emerald-900/60 hover:text-emerald-300 text-slate-300 text-xs border border-slate-700 hover:border-emerald-500/40 transition-colors"
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composite & Urgent Appeal Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/70 bg-slate-800 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
                  alt="Rural children smiling at Navadoy Seva Niketan learning center"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                
                {/* Floating On-Image Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-left">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      Project Vidya Kendra
                    </span>
                    <span className="text-[11px] text-slate-400">Purulia Tribal Belt</span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    "Every child in our village now reads, counts, and dreams of college."
                  </p>
                </div>
              </div>

              {/* Floating Real-Time Trust Card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/95 border border-slate-800 shadow-xl text-left space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      {lang === 'en' ? 'Direct Field Transparency' : lang === 'bn' ? 'মাঠপর্যায়ের প্রত্যক্ষ স্বচ্ছতা' : 'जमीनी पारदर्शिता'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">87.4% Efficiency</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[87.4%]" />
                </div>
                <p className="text-[11px] text-slate-400">
                  {lang === 'en' 
                    ? '87.4% of every Rupee goes directly to medicines, books, nutrition & clean water.' 
                    : lang === 'bn'
                    ? 'প্রতি টাকার ৮৭.৪% সরাসরি ওষুধ, বই, পুষ্টি ও বিশুদ্ধ পানীয় জলে ব্যয় হয়।'
                    : 'प्रत्येक दान का 87.4% सीधा दवाइयों, पुस्तकों, पोषण और स्वच्छ पानी पर व्यय होता है।'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Ticker of Key Impact Statistics */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-800/90">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
            {IMPACT_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif">
                  {metric.value.toLocaleString('en-IN')}{metric.suffix}
                </div>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Representation */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl p-6 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {lang === 'en' ? 'Navadoy Seva Niketan Ground Documentary' : 'नवोदय सेवा निकेतन जमीनी वृत्तचित्र'}
                  </h3>
                  <p className="text-xs text-slate-400">Filmed on-site in Purulia, West Bengal</p>
                </div>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Visual Frame */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                alt="Community work preview"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="text-sm font-semibold text-white mt-3">
                  "Voices of Hope: A Journey from Hardship to Self-Reliance"
                </p>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Hear directly from community elders, schoolgirls, and rural women who transformed their villages through collective willpower and NSN partnership.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">Duration: 4 mins • English & Bengali Subtitles</span>
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  onOpenDonation();
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Support This Work' : 'इस कार्य में सहयोग दें'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
