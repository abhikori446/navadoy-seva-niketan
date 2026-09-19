import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Users, 
  HeartHandshake, 
  Compass, 
  Eye, 
  ExternalLink,
  Building2,
  X,
  Target
} from 'lucide-react';
import { NSN_DETAILS, GOVERNING_BODY } from '../data/mockData';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Societies Registration Act XXI of 1860',
      regNo: NSN_DETAILS.registrationNo,
      authority: 'Government of West Bengal, Registrar of Societies',
      purpose: 'Legal registration as an authentic non-profit humanitarian society.'
    },
    {
      title: 'Income Tax Act Section 80G Exemption',
      regNo: NSN_DETAILS.section80GReg,
      authority: 'Directorate of Income Tax (Exemptions), Govt of India',
      purpose: '50% income tax deduction for all Indian individual and corporate donors.'
    },
    {
      title: 'Income Tax Act Section 12A Registration',
      regNo: NSN_DETAILS.section12AReg,
      authority: 'Directorate of Income Tax (Exemptions), Govt of India',
      purpose: 'Perpetual non-profit charitable status with zero profit distribution.'
    },
    {
      title: 'Ministry of Corporate Affairs CSR-1',
      regNo: NSN_DETAILS.csrRegNo,
      authority: 'Ministry of Corporate Affairs (MCA), Govt of India',
      purpose: 'Authorized to implement Corporate Social Responsibility (CSR) projects.'
    },
    {
      title: 'NITI Aayog NGO-Darpan Unique ID',
      regNo: NSN_DETAILS.darpanId,
      authority: 'NITI Aayog, Government of India',
      purpose: 'Public transparency registry for central government coordination.'
    },
    {
      title: 'PAN & TAN Statutory Filings',
      regNo: `PAN: ${NSN_DETAILS.panNo} | TAN: ${NSN_DETAILS.tanNo}`,
      authority: 'Income Tax Department of India',
      purpose: 'Annual audited returns filed punctually with audited balance sheets.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-50 text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'About Navadoy Seva Niketan' : lang === 'bn' ? 'নবোদয় সেবা নিকেতন সম্পর্কে' : 'नवोदय सेवा निकेतन परिचय'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' 
              ? 'Serving with Compassion, Rooted in Grassroots Truth' 
              : lang === 'bn'
              ? 'সহমর্মিতার সাথে সেবা, তৃণমূল সত্যে প্রোথিত'
              : 'करुणा से सेवा, जमीनी यथार्थ से जुड़ी संस्था'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'en'
              ? 'Established in 2008, Navadoy Seva Niketan has grown from a humble evening study circle under a banyan tree into a registered rural development organization impacting 120+ backward hamlets.'
              : lang === 'bn'
              ? '২০০৮ সালে একটি বটবৃক্ষের নিচে সান্ধ্য পাঠশালা হিসেবে যাত্রা শুরু করে, নবোদয় সেবা নিকেতন আজ ১২০টিরও বেশি পিছিয়ে পড়া আদিবাসী গ্রামে উন্নয়নমূলক কর্মকাণ্ড পরিচালনাকারী এক বিশ্বস্ত রেজিস্টার্ড সংস্থায় পরিণত হয়েছে।'
              : '2008 में एक बरगद के पेड़ के नीचे संध्याकालीन अध्ययन से शुरू हुआ नवोदय सेवा निकेतन आज 120 से अधिक पिछड़े गांवों में जीवन बदलने वाला पंजीकृत संगठन बन चुका है।'}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Our Vision' : lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি (Vision)' : 'हमारा दृष्टिकोण'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'An equitable, self-reliant rural society where every child attains quality education, families have access to preventive healthcare, and women live with economic independence and dignity.'
                : lang === 'bn'
                ? 'একটি বৈষম্যহীন, আত্মনির্ভরশীল গ্রামীণ সমাজ গড়ে তোলা যেখানে প্রতিটি শিশু মানসম্মত শিক্ষা পায়, পরিবারগুলো প্রতিরোধমূলক স্বাস্থ্যসেবার সুযোগ পায় এবং নারীরা আত্মসম্মান ও অর্থনৈতিক স্বাধীনতার সাথে বাঁচে।'
                : 'एक समतामूलक, आत्मनिर्भर ग्रामीण समाज जहां प्रत्येक बच्चे को गुणवत्तापूर्ण शिक्षा मिले, परिवारों को स्वास्थ्य सुविधाएं उपलब्ध हों और महिलाएं गरिमा के साथ स्वावलंबी बनें।'}
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Our Mission' : lang === 'bn' ? 'আমাদের লক্ষ্য (Mission)' : 'हमारा लक्ष्य'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'To implement sustainable community-driven interventions in learning centers, mobile medical vans, clean drinking water filtration kiosks, and women self-help micro-enterprises.'
                : lang === 'bn'
                ? 'শিক্ষা কেন্দ্র, ভ্রাম্যমাণ চিকিৎসা যান, বিশুদ্ধ পানীয় জলের পরিস্রাবণ কিয়স্ক এবং নারী স্বনির্ভর ক্ষুদ্র-উদ্যোগের মাধ্যমে স্থায়ী ও সম্প্রদায়-চালিত উন্নয়ন নিশ্চিত করা।'
                : 'शिक्षा केंद्रों, मोबाइल चिकित्सा वैनों, स्वच्छ पेयजल संयंत्रों और महिला स्वयं-सहायता समूहों के माध्यम से समुदाय-संचालित स्थायी विकास परियोजनाओं को क्रियान्वित करना।'}
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Core Values' : lang === 'bn' ? 'মূল আদর্শ ও মূল্যবোধ' : 'आधारभूत मूल्य'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Integrity in every rupee, empathy for the marginalized, radical financial transparency, non-discrimination across caste/faith, and lifelong commitment to rural transformation.'
                : lang === 'bn'
                ? 'প্রতিটি টাকার পূর্ণ সততা, প্রান্তিক মানুষের প্রতি সহমর্মিতা, ১০০% আর্থিক স্বচ্ছতা, জাতি ও ধর্ম নির্বিশেষে সমমর্যাদা এবং গ্রামীণ রূপান্তরের প্রতি আজীবন দায়বদ্ধতা।'
                : 'प्रत्येक पाई की सत्यनिष्ठा, वंचितों के प्रति गहरी सहानुभूति, संपूर्ण वित्तीय पारदर्शिता, जाति एवं धर्म से परे समभाव और ग्रामीण पुनरुत्थान के प्रति अटूट निष्ठा।'}
            </p>
          </div>
        </div>

        {/* General Secretary's Desk Message */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-emerald-400/40 shadow-lg mb-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Sri Subhash Chandra Mandal, General Secretary"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">Sri Subhash Chandra Mandal</h4>
              <p className="text-xs text-emerald-300 font-medium">Founder & General Secretary</p>
              <p className="text-[11px] text-slate-400 mt-0.5">M.S.W. (Visva-Bharati, Shantiniketan)</p>
            </div>

            <div className="lg:col-span-8 space-y-3.5 text-left border-t lg:border-t-0 lg:border-l border-slate-700/80 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                {lang === 'en' ? 'Founder’s Message' : lang === 'bn' ? 'সাধারণ সম্পাদকের বার্তা' : 'संस्थापक का संदेश'}
              </span>
              <p className="font-serif text-lg sm:text-xl text-slate-100 italic leading-snug">
                {lang === 'bn'
                  ? '"প্রকৃত পরিবর্তন কোনো বাতানুকূল কনফারেন্স রুমে আসে না। পরিবর্তন আসে তখনই, যখন প্রত্যন্ত বনাঞ্চলের একটি খালি পায়ের কন্যাশিশু তার জীবনের প্রথম অঙ্কের বইটি হাতে পায়, অথবা যখন একটি খরাক্লান্ত গ্রামে প্রথম নিরাপদ বিশুদ্ধ পানীয় জলের কলটি চালু হয়।"'
                  : '"Real change does not happen in air-conditioned conference rooms. It happens when a barefoot child in a forest hamlet receives her first math book, or when an arid village turns on its first clean fluoride-free tap."'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'bn'
                  ? '১৭ বছর আগে যখন আমরা নবোদয় সেবা নিকেতন শুরু করেছিলাম, তখন পশ্চিম মেদিনীপুর ও পুরুলিয়ার অনেক প্রত্যন্ত আদিবাসী গ্রামে বিদ্যুৎ ছিল না, নিরাপদ পানীয় জল ছিল না এবং শিশুরা কম বয়সেই ইটভাটায় শ্রমে যুক্ত হতো। আমরা প্রতিজ্ঞা করেছিলাম তাদের পাশে চিরকাল থাকব। আজ হাজার হাজার সহৃদয় মানুষের সমর্থনে আমরা গর্বিত যে আমাদের কাছে অর্পিত প্রতিটি পয়সার চুলচেরা হিসাব বজায় রাখা হয়।'
                  : 'When we began Navadoy Seva Niketan 17 years ago, many remote tribal hamlets in western Bengal had no electricity, no clean water, and children were routinely sent to brick kilns. We made a pledge to never leave. Today, with thousands of supporters across India and the globe, we are proud that every single rupee entrusted to us is accounted for down to the last pencil and medicine bottle.'}
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span>Purulia, West Bengal</span>
                <span>•</span>
                <span>Subhash Chandra Mandal (General Secretary)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Credentials & Accreditations Box */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {lang === 'en' ? 'Accreditations & Legal Registrations' : lang === 'bn' ? 'স্বীকৃতি ও আইনি রেজিস্ট্রেশন' : 'वैधानिक मान्यताएं एवं पंजीकरण'}
              </h3>
              <p className="text-sm text-slate-600">
                {lang === 'bn' ? 'ভারতীয় অলাভজনক সমাজসেবা আইন, আয়কর বিভাগ ও কর্পোরেট বিষয়ক মন্ত্রণালয়ের সম্পূর্ণ নিয়ম মেনে পরিচালিত।' : '100% compliant with Indian charity laws, Income Tax Department, and Ministry of Corporate Affairs.'}
              </p>
            </div>
            <button
              onClick={() => setActiveCertModal('all')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-lg border border-emerald-200 self-start sm:self-auto"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'bn' ? 'অফিসিয়াল সার্টিফিকেট যাচাই করুন' : 'Verify Official Certificates'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-emerald-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-xs font-bold text-slate-900 font-serif">
                    {cert.title}
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
                <div className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200/60 mb-2 break-all">
                  {cert.regNo}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-2">
                  {cert.purpose}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governing Body & Executive Committee */}
        <div className="mt-14 space-y-6 text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              {lang === 'en' ? 'Leadership & Governing Council' : lang === 'bn' ? 'পরিচালন পর্ষদ ও প্রশাসনিক পরিষদ' : 'प्रबंध समिति एवं नेतृत्व'}
            </h3>
            <p className="text-sm text-slate-600">
              {lang === 'bn' ? 'বিশিষ্ট সমাজবিজ্ঞানী, অবসরপ্রাপ্ত অধ্যাপক, শিশুরোগ বিশেষজ্ঞ এবং গ্রামীণ নারী নেতৃত্বের সার্বক্ষণিক তত্ত্বাবধানে পরিচালিত।' : 'Eminent social scientists, retired professors, pediatricians, and women grassroots leaders overseeing governance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GOVERNING_BODY.map((member, i) => (
              <div 
                key={i} 
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow text-left space-y-2"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm font-serif">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-slate-900 leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {member.qualification}
                  </p>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3 pt-1 border-t border-stone-100">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certification Verification Modal */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 text-left space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Statutory Registrations & Verification Dossier
                </h3>
              </div>
              <button
                onClick={() => setActiveCertModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Navadoy Seva Niketan maintains an open-door policy for all institutional donors, individuals, and CSR audit bodies. Below are the verified identification credentials:
            </p>

            <div className="space-y-3">
              {certifications.map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-slate-900">{c.title}</span>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-900">{c.regNo}</div>
                  <div className="text-[11px] text-slate-500">Issuing Authority: {c.authority}</div>
                  <div className="text-[11px] text-slate-600">{c.purpose}</div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">Official registered address: Purulia, West Bengal</span>
              <button
                onClick={() => setActiveCertModal(null)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
