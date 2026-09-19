import React, { useState } from 'react';
import { 
  X, 
  Users, 
  CheckCircle2, 
  Send, 
  Briefcase, 
  Sparkles,
  Calendar,
  Award
} from 'lucide-react';
import { NSN_DETAILS } from '../data/mockData';
import { Language } from '../types';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    profession: 'College Student',
    areaOfInterest: 'Teaching & Mentoring Children',
    timeCommitment: 'Weekend (4-8 hours/week)',
    preferredMode: 'Hybrid (Remote & On-site field visits)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg">
                {lang === 'en' ? 'Join as a Volunteer / Intern' : lang === 'bn' ? 'স্বেচ্ছাসেবী / ইন্টার্ন হিসেবে যোগ দিন' : 'स्वयंसेवक के रूप में जुड़ें'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {lang === 'bn' ? 'বাংলার প্রত্যন্ত তৃণমূল স্তরে ইতিবাচক পরিবর্তন আনুন' : 'Make a tangible grassroots difference in rural Bengal'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-left space-y-4 text-xs text-slate-800">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'আবেদন সফলভাবে জমা হয়েছে!' : 'Application Submitted!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {lang === 'bn' ? (
                  <>ধন্যবাদ, <strong>{formData.fullName}</strong>। আমাদের ভলান্টিয়ার কোঅর্ডিনেটর আপনার আবেদন পর্যালোচনা করে ৩ কার্যদিবসের মধ্যে <strong>{formData.email}</strong> এ ওরিয়েন্টেশনের জন্য যোগাযোগ করবেন।</>
                ) : (
                  <>Thank you, <strong>{formData.fullName}</strong>. Our volunteer engagement coordinator will review your profile and contact you on <strong>{formData.email}</strong> within 3 business days for an introductory orientation.</>
                )}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl"
              >
                {lang === 'bn' ? 'সমাপ্ত' : 'Done'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">{lang === 'bn' ? 'কেন নবোদয় সেবা নিকেতনে কাজ করবেন?' : 'Why Volunteer with NSN?'}</span>
                <p className="text-[11px]">
                  {lang === 'bn'
                    ? 'বাস্তব তৃণমূল অভিজ্ঞতা অর্জন করুন, শিশুদের শিক্ষাদান করুন, স্বাস্থ্য শিবিরে সহায়তা করুন এবং সমাজসেবার সরকারি প্রত্যয়নপত্র লাভ করুন।'
                    : 'Gain authentic grassroots exposure, mentor rural kids, assist clinical doctors, and earn an official Certificate of Social Service.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'সম্পূর্ণ নাম *' : 'Full Name *'}</label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'bn' ? 'উদাঃ সুমন সেন' : 'e.g. Suman Sen'}
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'ইমেইল ঠিকানা *' : 'Email Address *'}</label>
                  <input
                    type="email"
                    required
                    placeholder="suman@gmail.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'ফোন / হোয়াটসঅ্যাপ *' : 'Phone / WhatsApp *'}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98300 00000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'বর্তমান শহর / জেলা *' : 'Current City / Town *'}</label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'bn' ? 'উদাঃ কলকাতা / বাঁকুড়া / পুরুলিয়া' : 'e.g. Kolkata / Bankura / Purulia'}
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'দক্ষতা / আগ্রহের ক্ষেত্র' : 'Primary Skill / Focus Area'}</label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={e => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Teaching & Mentoring Children">{lang === 'bn' ? 'শিশুদের শিক্ষাদান ও পরামর্শ (বিদ্যা কেন্দ্র)' : 'Teaching & Tutoring Kids (Vidya Kendra)'}</option>
                    <option value="Medical & Health Camp Support">{lang === 'bn' ? 'স্বাস্থ্য ক্যাম্প সহকারী / চিকিৎসা সহায়তা' : 'Health Camp Assistant / Medical Doctor'}</option>
                    <option value="Women Skills & Tailoring">{lang === 'bn' ? 'নারী কর্মসংস্থান ও হস্তশিল্প প্রশিক্ষণ' : 'Women Livelihood & Craft Training'}</option>
                    <option value="Social Media & Storytelling">{lang === 'bn' ? 'ফটোগ্রাফি ও সোশ্যাল মিডিয়া স্টোরিটেলিং' : 'Photography & Social Media Storyteller'}</option>
                    <option value="Environment & Plantation">{lang === 'bn' ? 'বৃক্ষরোপণ ও জল সংরক্ষণ' : 'Tree Plantation & Water Conservation'}</option>
                    <option value="Legal Aid & Child Rights">{lang === 'bn' ? 'আইনি সহায়তা ও বাল্যবিবাহ রোধ' : 'Legal Aid & Anti-Child Marriage Advocacy'}</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'সময় প্রাপ্যতা' : 'Time Availability'}</label>
                  <select
                    value={formData.timeCommitment}
                    onChange={e => setFormData({ ...formData, timeCommitment: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Weekend (4-8 hours/week)">{lang === 'bn' ? 'সাপ্তাহিক ছুটির দিন (৪-৮ ঘণ্টা/সপ্তাহ)' : 'Weekend (4-8 hours/week)'}</option>
                    <option value="Weekday Evenings (2-3 hrs)">{lang === 'bn' ? 'কাজের দিনের সন্ধ্যা (২-৩ ঘণ্টা)' : 'Weekday Evenings (2-3 hrs)'}</option>
                    <option value="Full-Time 1 Month Field Internship">{lang === 'bn' ? 'পূর্ণকালীন ১ মাসের ফিল্ড ইন্টার্নশিপ' : 'Full-Time 1 Month Field Internship'}</option>
                    <option value="Event-Based / On Call">{lang === 'bn' ? 'ইভেন্ট বা ক্যাম্প ভিত্তিক অন-কল' : 'Event-Based / On Call for Mega Camps'}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">{lang === 'bn' ? 'কেন নবোদয় সেবা নিকেতনে যোগ দিতে চান?' : 'Why do you wish to join Navadoy Seva Niketan?'}</label>
                <textarea
                  rows={3}
                  placeholder={lang === 'bn' ? 'আপনার পটভূমি, উদ্দেশ্য বা অতীত কাজের অভিজ্ঞতা সম্পর্কে সংক্ষেপে লিখুন...' : 'Share a brief note about your background, motivation or past volunteer experience...'}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'bn' ? 'স্বেচ্ছাসেবী আবেদন জমা দিন' : 'Submit Volunteer Application'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
