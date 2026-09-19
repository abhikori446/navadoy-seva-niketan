import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  UserCheck, 
  Sparkles 
} from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/mockData';
import { Language } from '../types';

interface EventsSectionProps {
  lang: Language;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-stone-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Community Calendar' : lang === 'bn' ? 'কমিউনিটি ক্যালেন্ডার' : 'आगामी जमीनी कार्यक्रम'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Upcoming Grassroots Events & Drives'
              : lang === 'bn'
              ? 'আসন্ন মাঠপর্যায়ের ক্যাম্প ও সেবা কার্যক্রম'
              : 'निकट भविष्य के सेवा शिविर एवं आयोजन'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'bn'
              ? 'আমাদের মাঠপর্যায়ের কার্যক্রম স্বচক্ষে প্রত্যক্ষ করুন। সকল ইভেন্ট স্থানীয় জনগণের অংশগ্রহণ, দাতা পরিদর্শন এবং স্বেচ্ছাসেবকদের জন্য উন্মুক্ত।'
              : 'Witness our ground operations firsthand. All events are open for community participation, donor visits, and volunteer assistance.'}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {UPCOMING_EVENTS.map(event => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    {event.category}
                  </span>
                  <div className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                  {event.title}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-stone-100">
                  {event.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  {event.expectedBeneficiaries}
                </span>
                <span className="text-emerald-700 font-medium">
                  {event.coordinator.split('(')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
