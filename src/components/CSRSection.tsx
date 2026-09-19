import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Mail, 
  Send,
  Download,
  Users,
  Briefcase
} from 'lucide-react';
import { NSN_DETAILS } from '../data/mockData';
import { Language } from '../types';

interface CSRSectionProps {
  onOpenVolunteer: () => void;
  lang: Language;
}

export const CSRSection: React.FC<CSRSectionProps> = ({ onOpenVolunteer, lang }) => {
  const [csrSubmitted, setCsrSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [sectorInterest, setSectorInterest] = useState('Education & Girl Child');
  const [budgetRange, setBudgetRange] = useState('₹5 Lakhs - ₹25 Lakhs');

  const handleCSRSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCsrSubmitted(true);
  };

  const scheduleVIICategories = [
    { 
      title: lang === 'bn' ? 'আইটেম (i): স্বাস্থ্য ও পুষ্টি' : 'Item (i): Health & Malnutrition', 
      desc: lang === 'bn' ? 'দোরগোড়ায় ভ্রাম্যমাণ ক্লিনিক ভ্যান, মাতৃত্বকালীন পুষ্টি ও অপুষ্টি দূরীকরণ।' : 'Doorstep mobile clinic vans, maternal nutrition & combating acute stunting.' 
    },
    { 
      title: lang === 'bn' ? 'আইটেম (ii): শিক্ষা ও জীবিকা' : 'Item (ii): Education & Livelihood', 
      desc: lang === 'bn' ? 'স্মার্ট বিদ্যা ল্যাব, কন্যা শিশু বৃত্তি ও যুব বৃত্তিমূলক প্রশিক্ষণ।' : 'Smart Vidya learning labs, girl child scholarships & youth vocational certifications.' 
    },
    { 
      title: lang === 'bn' ? 'আইটেম (iii): লিঙ্গ সমতা ও নারী' : 'Item (iii): Gender Equality & Women', 
      desc: lang === 'bn' ? 'স্বনির্ভর সেলাই ক্লাস্টার, ক্ষুদ্র ব্যবসা উদ্যোগ ও আইনি সচেতনতা।' : 'Self-help stitching clusters, micro-enterprises & women legal literacy.' 
    },
    { 
      title: lang === 'bn' ? 'আইটেম (iv): পরিবেশ সংরক্ষণ' : 'Item (iv): Environmental Sustainability', 
      desc: lang === 'bn' ? 'সৌরচালিত কমিউনিটি পানীয় জল ও ১ লক্ষ বৃক্ষরোপণ কর্মসূচি।' : 'Solar-powered community drinking water borewells & 100K tree afforestation.' 
    },
  ];

  return (
    <section id="csr" className="py-20 bg-stone-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            {lang === 'en' ? 'Institutional & CSR Partnerships' : lang === 'bn' ? 'প্রাতিষ্ঠানিক ও সিএসআর অংশীদারিত্ব' : 'संस्थागत एवं सीएसआर साझेदारी'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en'
              ? 'Partner with Us for High-Impact CSR Programs'
              : lang === 'bn'
              ? 'কার্যকর সিএসআর রূপান্তরের জন্য আমাদের সাথে অংশীদার হোন'
              : 'सार्थक कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) साझेदारी'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {lang === 'bn'
              ? `নবোদয় সেবা নিকেতন কেন্দ্রীয় কর্পোরেট বিষয়ক মন্ত্রণালয়ের নিবন্ধিত সংস্থা (MCA CSR-1: ${NSN_DETAILS.csrRegNo})। আমরা কোম্পানি আইন ২০১৩ এর শিডিউল ৭ অনুযায়ী পরিমাপযোগ্য ও অডিটকৃত প্রকল্প বাস্তবায়ন করি।`
              : `Navadoy Seva Niketan is registered with the Ministry of Corporate Affairs (MCA Form CSR-1: ${NSN_DETAILS.csrRegNo}). We execute turnkey, audited CSR projects aligned with Schedule VII of the Companies Act, 2013.`}
          </p>
        </div>

        {/* Schedule VII Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-left">
          {scheduleVIICategories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-emerald-500/40 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                <span>{cat.title}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CSR Proposal Request Form & Volunteer Callout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CSR Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-800/90 rounded-2xl p-6 sm:p-8 border border-stone-700 text-left space-y-5">
            <div className="flex items-center justify-between border-b border-stone-700 pb-3">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Request a Customized CSR Proposal
                </h3>
                <p className="text-xs text-slate-400">
                  Receive our comprehensive CSR Deck, budget models, and Baseline Village Assessment.
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                MCA: {NSN_DETAILS.csrRegNo}
              </span>
            </div>

            {csrSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-white">
                  Thank You, {contactPerson}!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Our CSR Partnership Director will email the detailed proposal dossier and reach out to {workEmail} within 24 business hours.
                </p>
                <button
                  onClick={() => setCsrSubmitted(false)}
                  className="text-xs font-semibold text-emerald-400 underline pt-2"
                >
                  Submit another institutional inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleCSRSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300 block">Company / Foundation Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tata Consultancy Services / Infosys"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300 block">Contact Person & Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen (Head of CSR)"
                      value={contactPerson}
                      onChange={e => setContactPerson(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300 block">Corporate Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="csr.initiatives@company.com"
                      value={workEmail}
                      onChange={e => setWorkEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300 block">Focus Sector Interest</label>
                    <select
                      value={sectorInterest}
                      onChange={e => setSectorInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Education & Girl Child">Quality Education & STEM Labs</option>
                      <option value="Healthcare & Mobile Clinics">Mobile Medical Vans & Malnutrition</option>
                      <option value="Women Empowerment & Tailoring">Women SHGs & Micro-Enterprise</option>
                      <option value="WASH Safe Water">Solar Clean Water Kiosks (WASH)</option>
                      <option value="Environment & Green Village">Afforestation & Renewable Energy</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Estimated Annual CSR Budget Allocation</label>
                  <select
                    value={budgetRange}
                    onChange={e => setBudgetRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs - ₹5 Lakhs (Pilot Village)</option>
                    <option value="₹5 Lakhs - ₹25 Lakhs">₹5 Lakhs - ₹25 Lakhs (Cluster of 10 Villages)</option>
                    <option value="₹25 Lakhs - ₹1 Crore">₹25 Lakhs - ₹1 Crore (Block Level Flagship Program)</option>
                    <option value="₹1 Crore+">₹1 Crore+ (Multi-Year Transformation Partnership)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Corporate CSR Proposal Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Volunteer & Citizen Action Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-slate-900 rounded-2xl p-6 sm:p-8 border border-emerald-500/30 text-left space-y-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {lang === 'en' ? 'Citizen Action' : lang === 'bn' ? 'নাগরিক সহভাগিতা' : 'नागरिक सहभागिता'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {lang === 'en' ? 'Volunteer Your Skills' : lang === 'bn' ? 'স্বেচ্ছাসেবক হিসেবে যোগ দিন' : 'स्वयंसेवक के रूप में जुड़ें'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'bn'
                  ? 'আপনি চিকিৎসক, শিক্ষক, সফটওয়্যার ইঞ্জিনিয়ার, আইনজীবী বা শিক্ষার্থী যেই হোন না কেন—আপনার সময় ও মেধা প্রান্তিক মানুষের জীবন বদলে দিতে পারে।'
                  : 'Whether you are a doctor, teacher, software engineer, lawyer, or college student—your time and knowledge can directly uplift rural lives.'}
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'সাপ্তাহিক ছুটির দিনে বিদ্যা কেন্দ্রে ইংরেজি/গণিত শিক্ষাদান' : 'Teach English / Math on weekends at Vidya Kendras'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'রবিবারের ফ্রি মেডিকেল ক্যাম্পে স্বেচ্ছাসেবী চিকিৎসক হিসেবে অংশগ্রহণ' : 'Join our volunteer doctors during Sunday health camps'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'ডিজিটাল প্রচার, সোশাল মিডিয়া ও অনলাইন তহবিল সংগ্রহ' : 'Digital storytelling, social media & remote fundraising'}</span>
              </div>
            </div>

            <button
              onClick={onOpenVolunteer}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Briefcase className="w-4 h-4" />
              <span>{lang === 'en' ? 'Apply to Volunteer with NSN' : lang === 'bn' ? 'স্বেচ্ছাসেবী হওয়ার আবেদন করুন' : 'स्वयंसेवा हेतु आवेदन करें'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-slate-400">
              <span>{lang === 'bn' ? 'সমাজসেবা সনদপত্র প্রদান করা হবে' : 'Certificate of Social Service awarded'}</span>
              <span>{lang === 'bn' ? 'দূরবর্তী / সরাসরি উভয় মাধ্যম' : 'Flexible remote / on-site'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
