import React, { useState } from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Send, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  Lock,
  X
} from 'lucide-react';
import { NSN_DETAILS, FOCUS_PROGRAMS, LOGO_CONFIG } from '../data/mockData';
import { Language } from '../types';

interface FooterProps {
  onOpenDonation: () => void;
  onOpenReceiptLookup: () => void;
  onOpenVolunteer: () => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonation,
  onOpenReceiptLookup,
  onOpenVolunteer,
  lang,
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: About & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-0.5 shadow-md border border-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={LOGO_CONFIG.url}
                  alt={LOGO_CONFIG.alt}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== LOGO_CONFIG.placeholderUrl) {
                      target.src = LOGO_CONFIG.placeholderUrl;
                    }
                  }}
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white leading-tight">
                  Navadoy Seva Niketan
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium">
                  {lang === 'en' ? 'नवोदय सेवा निकेतन • Regd. NGO' : lang === 'bn' ? 'নবোদয় সেবা নিকেতন • নিবন্ধিত এনজিও' : 'नवोदय सेवा निकेतन • पंजीकृत संस्था'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'bn'
                ? 'নবোদয় সেবা নিকেতন একটি নিবন্ধিত অলাভজনক সমাজকল্যাণমূলক সংস্থা, যা মানসম্মত শিক্ষা, প্রতিরোধমূলক গ্রামীণ স্বাস্থ্যসেবা, নারী স্বনির্ভরতা, নিরাপদ পানীয় জল এবং পরিবেশ সুরক্ষার মাধ্যমে প্রান্তিক মানুষের জীবনমান রূপান্তরে ব্রতী।'
                : 'Navadoy Seva Niketan is a non-governmental, non-profit society dedicated to transforming rural and tribal lives through quality education, preventive community healthcare, women self-help empowerment, safe water, and disaster resilience.'}
            </p>

            {/* Quick Badges */}
            <div className="space-y-1 text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>80G Exemption: {NSN_DETAILS.section80GReg}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>MCA CSR-1: {NSN_DETAILS.csrRegNo}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>NITI Aayog Darpan: {NSN_DETAILS.darpanId}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Focus Sectors Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'bn' ? 'প্রধান কার্যক্রম' : 'Core Interventions'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'মানসম্মত শিক্ষা ও বিদ্যা কেন্দ্র' : 'Quality Education & Vidya Kendras'}</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'ভ্রাম্যমাণ স্বাস্থ্যসেবা ও শিশু পুষ্টি' : 'Mobile Healthcare & Child Nutrition'}</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'মহিলা স্বনির্ভর দল ও সেলাই প্রশিক্ষণ' : 'Women Self-Help Groups & Tailoring'}</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'ওয়াশ: সৌর পানীয় জল কিয়স্ক' : 'WASH: Solar Drinking Water Kiosks'}</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'যুব কারিগরি দক্ষতা সনদপত্র' : 'Youth Technical Skill Certifications'}</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'ব্যাপক বৃক্ষরোপণ ও পরিবেশ সুরক্ষা' : 'Mass Afforestation & Climate Action'}</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'জরুরি দুর্যোগ ও ত্রাণ সহায়তা' : 'Emergency Humanitarian Relief'}</a></li>
            </ul>
          </div>

          {/* Col 3: Donor Services & Transparency (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'bn' ? 'স্বচ্ছতা ও সেবা' : 'Transparency'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'প্রতিষ্ঠাতা ও দৃষ্টিভঙ্গি' : 'About Founders & Vision'}</a></li>
              <li><a href="#impact" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'অডিট ব্যালেন্স শিট' : 'Audited Balance Sheets'}</a></li>
              <li><a href="#csr" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'শিডিউল ৭ সিএসআর প্রস্তাবনা' : 'Schedule VII CSR Proposals'}</a></li>
              <li><button onClick={onOpenReceiptLookup} className="hover:text-emerald-400 transition-colors text-left">{lang === 'bn' ? '৮০জি রসিদ ডাউনলোড' : 'Download 80G Receipt'}</button></li>
              <li><button onClick={onOpenVolunteer} className="hover:text-emerald-400 transition-colors text-left">{lang === 'bn' ? 'স্বেচ্ছাসেবী আবেদন' : 'Volunteer Application'}</button></li>
              <li><button onClick={() => setActivePolicy('child_protection')} className="hover:text-emerald-400 transition-colors text-left">{lang === 'bn' ? 'শিশু সুরক্ষা নীতিমালা' : 'Child Protection Policy'}</button></li>
              <li><button onClick={() => setActivePolicy('privacy')} className="hover:text-emerald-400 transition-colors text-left">{lang === 'bn' ? 'দাতা গোপনীয়তা নীতি' : 'Donor Privacy Policy'}</button></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'bn' ? 'সংযুক্ত থাকুন' : 'Stay Connected'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'bn'
                ? 'মাসিক মাঠপর্যায়ের প্রতিবেদন, শিশুদের অগ্রগতির চিত্র ও বার্ষিক অডিট রিপোর্ট পেতে সাবস্ক্রাইব করুন।'
                : 'Subscribe to receive bi-monthly ground reports, child progress letters, and audit disclosures.'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'ধন্যবাদ! আপনি নিউজলেটারে সফলভাবে যুক্ত হয়েছেন।' : 'Thank you! Subscribed to our monthly ground newsletter.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder={lang === 'bn' ? 'আপনার ইমেইল দিন' : 'Enter your email'}
                    value={subEmail}
                    onChange={e => setSubEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-l-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{NSN_DETAILS.phone1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{NSN_DETAILS.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bank Details & 80G Statutory Notice Bar */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <span className="font-bold text-white font-serif">
              {lang === 'bn' ? 'স্টেট ব্যাংক অফ ইন্ডিয়া প্রাতিষ্ঠানিক ব্যাংকিং বিবরণ' : 'State Bank of India Institutional Banking Details'}
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">
              UPI: {NSN_DETAILS.bankDetails.upiId}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-[11px] text-slate-300">
            <div>Beneficiary: {NSN_DETAILS.bankDetails.accountName}</div>
            <div>A/C No: {NSN_DETAILS.bankDetails.accountNumber}</div>
            <div>IFSC Code: {NSN_DETAILS.bankDetails.ifscCode}</div>
            <div>Branch: {NSN_DETAILS.bankDetails.branchName}</div>
          </div>
          <p className="text-[10px] text-slate-500 pt-1">
            {lang === 'bn'
              ? `* সকল অনুদান আয়কর আইন, ১৯৬১-এর ধারা ৮০জি এর অধীনে ৫০% কর ছাড় পাওয়ার যোগ্য। ইউনিক রেজিস্ট্রেশন নং: ${NSN_DETAILS.section80GReg}। বিধিবদ্ধ সীমার অতিরিক্ত কোনো নগদ অনুদান গ্রহণ করা হয় না।`
              : `* All donations are eligible for 50% tax exemption under Section 80G of the Income Tax Act, 1961. Unique Registration No: ${NSN_DETAILS.section80GReg}. No cash donations exceeding statutory limits are accepted.`}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Navadoy Seva Niketan (NSN). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => setActivePolicy('privacy')} className="hover:text-slate-300">{lang === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</button>
            <span>•</span>
            <button onClick={() => setActivePolicy('refund')} className="hover:text-slate-300">{lang === 'bn' ? 'অর্থ ফেরত নীতি' : 'Donation Refund Policy'}</button>
            <span>•</span>
            <button onClick={() => setActivePolicy('terms')} className="hover:text-slate-300">{lang === 'bn' ? 'শর্তাবলী' : 'Terms of Service'}</button>
          </div>
        </div>

      </div>

      {/* Policy Modal Viewer */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white text-slate-800 rounded-2xl shadow-2xl p-6 text-left space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {activePolicy === 'privacy' && 'Donor Privacy & Data Security Policy'}
                {activePolicy === 'refund' && 'Donation & Contribution Refund Policy'}
                {activePolicy === 'terms' && 'Statutory Terms of Service'}
                {activePolicy === 'child_protection' && 'Strict Child Protection & Safeguarding Policy'}
              </h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {activePolicy === 'privacy' && (
                <>
                  <p>Navadoy Seva Niketan (NSN) values your trust. We never sell, rent, trade, or share donor names, email addresses, phone numbers, or PAN credentials with any third-party marketing agency.</p>
                  <p>All donor information is maintained exclusively for statutory tax compliance under Section 80G of the Income Tax Act, 1961, and for sending verified program progress reports.</p>
                </>
              )}
              {activePolicy === 'refund' && (
                <>
                  <p>Donations made to Navadoy Seva Niketan are voluntary charitable contributions. In the rare event that an erroneous transaction or duplicate charge occurs, donors may request a cancellation within 7 working days by writing to <strong>{NSN_DETAILS.donationEmail}</strong> along with the bank transaction reference.</p>
                  <p>Refunds are processed after verification via original payment method in compliance with charitable banking regulations.</p>
                </>
              )}
              {activePolicy === 'child_protection' && (
                <>
                  <p>Navadoy Seva Niketan enforces a zero-tolerance policy against any form of child exploitation, abuse, physical punishment, or discrimination across all its learning centers, sports camps, and residential facilities.</p>
                  <p>All staff, field workers, and visiting volunteers undergo mandatory background checks, sign our Child Safeguarding Code of Conduct, and adhere to the Juvenile Justice (Care and Protection of Children) Act and POCSO Act guidelines.</p>
                </>
              )}
              {activePolicy === 'terms' && (
                <>
                  <p>Navadoy Seva Niketan is registered under the Societies Registration Act XXI of 1860. The contents of this portal are intended to provide accurate, transparent information regarding our charitable activities and verified impact.</p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-stone-200 text-right">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-4 py-2 bg-slate-900 text-white font-semibold text-xs rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
