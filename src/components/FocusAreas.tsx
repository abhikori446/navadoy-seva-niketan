import React, { useState } from 'react';
import { 
  BookOpen, 
  Stethoscope, 
  Users, 
  Droplets, 
  Sprout, 
  Briefcase, 
  Scale, 
  HeartHandshake, 
  Baby, 
  Megaphone,
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  MapPin, 
  X,
  Sparkles
} from 'lucide-react';
import { FOCUS_PROGRAMS } from '../data/mockData';
import { FocusProgram, Language } from '../types';

interface FocusAreasProps {
  onOpenDonation: (amount?: number, title?: string) => void;
  lang: Language;
}

export const FocusAreas: React.FC<FocusAreasProps> = ({ onOpenDonation, lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<FocusProgram | null>(null);

  // Map category filter tabs
  const categories = [
    { id: 'all', label: lang === 'en' ? 'All 10 Sectors' : lang === 'bn' ? 'সকল ১০টি ক্ষেত্র' : 'सभी 10 क्षेत्र' },
    { id: 'education', label: lang === 'en' ? 'Education & Kids' : lang === 'bn' ? 'শিক্ষা ও শিশু' : 'शिक्षा एवं बच्चे' },
    { id: 'healthcare', label: lang === 'en' ? 'Healthcare & Nutrition' : lang === 'bn' ? 'স্বাস্থ্য ও পুষ্টি' : 'स्वास्थ्य एवं पोषण' },
    { id: 'women', label: lang === 'en' ? 'Women Empowerment' : lang === 'bn' ? 'নারী ক্ষমতায়ন' : 'महिला सशक्तिकरण' },
    { id: 'wash', label: lang === 'en' ? 'Clean Water (WASH)' : lang === 'bn' ? 'বিশুদ্ধ জল (WASH)' : 'स्वच्छ जल (WASH)' },
    { id: 'livelihood', label: lang === 'en' ? 'Skills & Livelihood' : lang === 'bn' ? 'দক্ষতা ও জীবিকা' : 'कौशल एवं आजीविका' },
    { id: 'environment', label: lang === 'en' ? 'Environment' : lang === 'bn' ? 'পরিবেশ সংরক্ষণ' : 'पर्यावरण' },
  ];

  const filteredPrograms = activeFilter === 'all' 
    ? FOCUS_PROGRAMS 
    : FOCUS_PROGRAMS.filter(p => p.id === activeFilter || p.category.toLowerCase().includes(activeFilter));

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'education': return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'healthcare': return <Stethoscope className="w-5 h-5 text-rose-600" />;
      case 'women': return <Users className="w-5 h-5 text-purple-600" />;
      case 'wash': return <Droplets className="w-5 h-5 text-sky-600" />;
      case 'livelihood': return <Briefcase className="w-5 h-5 text-amber-600" />;
      case 'environment': return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'human_rights': return <Scale className="w-5 h-5 text-blue-600" />;
      case 'disaster_relief': return <HeartHandshake className="w-5 h-5 text-orange-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-white text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Our 10 Core Focus Sectors' : lang === 'bn' ? 'আমাদের ১০টি মূল কর্মক্ষেত্র' : 'हमारे 10 मुख्य कार्यक्षेत्र'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Comprehensive Community Transformation'
              : lang === 'bn'
              ? 'সামগ্রিক গ্রামীণ সমাজ রূপান্তর কর্মসূচি'
              : 'सामुदायिक परिवर्तन के बहुआयामी आयाम'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'bn' 
              ? 'দারিদ্র্য বহুমাত্রিক। নবোদয় সেবা নিকেতন শিক্ষা, প্রতিরোধমূলক স্বাস্থ্যসেবা, নারী আত্মনির্ভরশীলতা ও বিশুদ্ধ পানীয় জল নিশ্চিত করতে একযোগে নিবিড় তৃণমূল কর্মসূচি বাস্তবায়ন করে চলেছে।'
              : 'Poverty is multi-dimensional. Navadoy Seva Niketan executes integrated grassroots interventions addressing education, preventive health, women self-reliance, and clean water.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-6 max-w-4xl mx-auto no-scrollbar">
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredPrograms.map(program => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left group"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                  {getCategoryIcon(program.id)}
                  <span>{program.category}</span>
                </div>

                {/* Village / Beneficiary Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-emerald-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {program.activeVillages} {lang === 'bn' ? 'টি গ্রাম' : 'Villages'}
                  </span>
                  <span className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-medium">
                    {program.beneficiariesServed}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {lang === 'en' ? program.title : lang === 'bn' ? (program.bengaliTitle || program.title) : program.hindiTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? (program.bengaliTagline || program.tagline) : program.tagline}
                  </p>
                </div>

                {/* Highlights preview */}
                <ul className="space-y-1.5 pt-1 border-t border-stone-100 text-xs text-slate-600">
                  {program.keyHighlights.slice(0, 2).map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{lang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenDonation(program.sponsorAmountMonthly, program.title)}
                    className="py-2 px-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
                    title={`Sponsor for ₹${program.sponsorAmountMonthly}/mo`}
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>{lang === 'bn' ? 'সহায়তা' : 'Sponsor'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Deep Dive Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-5 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-stone-200">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  {selectedProgram.category} Sector
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  {selectedProgram.title}
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  {selectedProgram.hindiTitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProgram(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Banner */}
            <div className="relative h-56 rounded-xl overflow-hidden bg-stone-100">
              <img
                src={selectedProgram.imageUrl}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-white text-xs space-y-0.5">
                  <div className="font-semibold text-emerald-300">
                    Direct Reach: {selectedProgram.beneficiariesServed} across {selectedProgram.activeVillages} Villages
                  </div>
                  <div className="text-slate-200 text-[11px]">
                    Continuous ground presence supervised by local committees & social workers.
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-slate-900">
                Ground Reality & Program Methodology
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            {/* Key Deliverables & Outcomes */}
            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-sm text-slate-900">
                Key Strategic Activities & Impact:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProgram.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsorship Call to Action Box */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs font-bold text-emerald-900">
                  Recommended Monthly Sponsorship: ₹{selectedProgram.sponsorAmountMonthly.toLocaleString('en-IN')}/month
                </div>
                <div className="text-[11px] text-emerald-800">
                  {selectedProgram.sponsorDescription}
                </div>
              </div>
              <button
                onClick={() => {
                  const amt = selectedProgram.sponsorAmountMonthly;
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  onOpenDonation(amt, title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Sponsor This Cause (80G)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
