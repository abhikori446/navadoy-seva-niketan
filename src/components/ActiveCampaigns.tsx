import React from 'react';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CAMPAIGNS } from '../data/mockData';
import { Language } from '../types';

interface ActiveCampaignsProps {
  onOpenDonation: (amount?: number, title?: string) => void;
  lang: Language;
}

export const ActiveCampaigns: React.FC<ActiveCampaignsProps> = ({ onOpenDonation, lang }) => {
  return (
    <section id="campaigns" className="py-20 bg-stone-100 text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              {lang === 'en' ? 'Active Grassroots Campaigns' : lang === 'bn' ? 'চলমান তৃণমূল আবেদনসমূহ' : 'सक्रिय जमीनी अभियान'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en'
                ? 'Current Fundraising Appeals'
                : lang === 'bn'
                ? 'চলতি ত্রাণ ও অর্থসংগ্রহ ক্যাম্পেইন'
                : 'वर्तमान सहायता एवं जनसहयोग अभियान'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {lang === 'bn'
                ? 'জরুরি গ্রামীণ সংকটের তাৎক্ষণিক সমাধান। বাস্তব সময়ের অগ্রগতি দেখুন এবং সমাপ্ত প্রকল্পের সরাসরি আলোকচিত্র প্রতিবেদন গ্রহণ করুন।'
                : 'Targeted, time-bound initiatives addressing urgent rural crises. Track real-time progress and receive direct photo updates of the completed project.'}
            </p>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'bn' ? '৮০জি ধারায় করছাড়যোগ্য (৫০%)' : '100% Tax Deductible under Sec 80G'}</span>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPAIGNS.map(camp => {
            const percentage = Math.min(100, Math.round((camp.raisedAmount / camp.targetAmount) * 100));

            return (
              <div 
                key={camp.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-stone-200">
                  <img
                    src={camp.imageUrl}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {camp.isUrgent && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                      {lang === 'bn' ? 'জরুরি আবেদন' : 'Urgent Appeal'}
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-amber-300" />
                      {camp.location}
                    </span>
                    <span className="bg-black/50 px-1.5 py-0.5 rounded">
                      {camp.daysRemaining} {lang === 'bn' ? 'দিন বাকি' : 'days left'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      {camp.category}
                    </span>
                    <h3 className="font-serif font-bold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                      {lang === 'bn' ? (camp.bengaliTitle || camp.title) : camp.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {camp.description}
                    </p>
                  </div>

                  {/* Progress info */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] block">{lang === 'bn' ? 'সংগৃহীত' : 'Raised'}</span>
                        <span className="font-bold text-emerald-700 font-serif">
                          ₹{camp.raisedAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 text-[10px] block">{lang === 'bn' ? 'লক্ষ্যমাত্রা' : 'Target'}</span>
                        <span className="font-bold text-slate-700 font-serif">
                          ₹{camp.targetAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Bar */}
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{percentage}% {lang === 'bn' ? 'সম্পূর্ণ' : 'Funded'}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        {camp.donorCount} {lang === 'bn' ? 'দাতা' : 'Donors'}
                      </span>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <button
                    onClick={() => onOpenDonation(1500, camp.title)}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>{lang === 'bn' ? 'এই প্রকল্পে অনুদান দিন' : 'Contribute to this Project'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
