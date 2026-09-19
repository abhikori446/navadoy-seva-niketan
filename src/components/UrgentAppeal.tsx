import React from 'react';
import { 
  AlertCircle, 
  Heart, 
  Users, 
  Clock, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CAMPAIGNS } from '../data/mockData';
import { Language } from '../types';

interface UrgentAppealProps {
  onOpenDonation: (amount?: number, title?: string) => void;
  lang: Language;
}

export const UrgentAppeal: React.FC<UrgentAppealProps> = ({ onOpenDonation, lang }) => {
  const urgentCampaign = CAMPAIGNS[0]; // Project Kanya Shiksha
  const percentage = Math.min(100, Math.round((urgentCampaign.raisedAmount / urgentCampaign.targetAmount) * 100));

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-1 shadow-2xl">
        <div className="rounded-[14px] bg-stone-900 text-white p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Urgent Campaign Details */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  {lang === 'en' ? 'Urgent Grassroots Appeal' : lang === 'bn' ? 'জরুরি তৃণমূল আবেদন' : 'अति आवश्यक जमीनी अपील'}
                </span>
                <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {urgentCampaign.location}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {lang === 'bn' ? (urgentCampaign.bengaliTitle || urgentCampaign.title) : urgentCampaign.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {lang === 'bn' 
                  ? 'এই ত্রৈমাসিকে ৫০০-রও বেশি প্রান্তিক আদিবাসী কন্যাশিশুদের পড়াশোনা বন্ধ হওয়ার উপক্রম হয়েছে, যতক্ষণ না শিক্ষাসামগ্রী, ব্রিজ টিউশন ও যাতায়াতের সাইকেল দিয়ে তাদের পাশে দাঁড়ানো হচ্ছে।' 
                  : `${urgentCampaign.description} Over 500 adolescent tribal girls face forced school dropouts this academic quarter unless sponsored with educational kits, bridge tuition, and bicycles.`}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                  <div className="text-xs text-slate-400">{lang === 'bn' ? 'সংগৃহীত অনুদান' : 'Raised So Far'}</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 font-serif">
                    ₹{urgentCampaign.raisedAmount.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                  <div className="text-xs text-slate-400">{lang === 'bn' ? 'লক্ষ্যমাত্রা' : 'Target Goal'}</div>
                  <div className="text-lg sm:text-xl font-bold text-white font-serif">
                    ₹{urgentCampaign.targetAmount.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-between sm:flex-col sm:items-start">
                  <div>
                    <div className="text-xs text-slate-400">{lang === 'bn' ? 'অবশিষ্ট সময়' : 'Time Left'}</div>
                    <div className="text-lg sm:text-xl font-bold text-amber-400 font-serif flex items-center gap-1">
                      <Clock className="w-4 h-4 text-amber-400" />
                      {urgentCampaign.daysRemaining} {lang === 'bn' ? 'দিন' : 'Days'}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 sm:mt-0.5">
                    {urgentCampaign.donorCount} {lang === 'bn' ? 'উদার দাতা' : 'Generous Donors'}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{lang === 'bn' ? 'প্রচারণার অগ্রগতি' : 'Campaign Progress'}</span>
                  <span className="text-amber-400">{percentage}% {lang === 'bn' ? 'সম্পূর্ণ' : 'Completed'}</span>
                </div>
                <div className="w-full h-3 bg-stone-800 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Instant Donate Widget */}
            <div className="lg:col-span-5 bg-stone-800/90 rounded-xl p-5 border border-stone-700 text-left space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {lang === 'en' ? 'Choose Impact Tier' : lang === 'bn' ? 'অনুদানের ধাপ বেছে নিন' : 'दान राशि चुनें'}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {lang === 'bn' ? '৮০জি ৫০% করছাড়' : '80G 50% Tax Free'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { amt: 500, label: '₹500', desc: lang === 'bn' ? 'বই ও খাতা' : 'Books & Stationery' },
                  { amt: 1200, label: '₹1,200', desc: lang === 'bn' ? '১ মাসের সম্পূর্ণ পড়াশোনা' : '1 Month Full Schooling' },
                  { amt: 2500, label: '₹2,500', desc: lang === 'bn' ? 'স্কুল ব্যাগ + ইউনিফর্ম' : 'School Bag + Uniform' },
                  { amt: 5000, label: '₹5,000', desc: lang === 'bn' ? 'যাতায়াতের সাইকেল' : 'Bicycle for Travel' },
                ].map((tier) => (
                  <button
                    key={tier.amt}
                    onClick={() => onOpenDonation(tier.amt, urgentCampaign.title)}
                    className="p-3 rounded-lg bg-stone-900/90 hover:bg-emerald-900/40 border border-stone-700 hover:border-emerald-500/50 text-left transition-all group"
                  >
                    <div className="font-serif font-bold text-base text-white group-hover:text-emerald-300">
                      {tier.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>

              <button
                id="urgent-donate-now-btn"
                onClick={() => onOpenDonation(1200, urgentCampaign.title)}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>{lang === 'en' ? 'Sponsor a Girl Child Now' : lang === 'bn' ? 'এখনই একটি কন্যাশিশুকে সহায়তা করুন' : 'अभी एक बेटी को शिक्षित करें'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'bn' 
                  ? 'তাত্ক্ষণিক ডিজিটাল ৮০জি আয়কর ছাড়ের রসিদ প্রস্তুত হবে' 
                  : 'Instant 80G Tax Exemption Receipt Generated Digitally'}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
