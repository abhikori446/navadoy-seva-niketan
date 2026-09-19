import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { NSN_DETAILS } from '../data/mockData';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Project Visit',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-50 text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Get In Touch' : lang === 'bn' ? 'যোগাযোগ ও প্রধান কার্যালয়' : 'संपर्क एवं कार्यालय'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Visit Us, Call Our Team, or Write'
              : lang === 'bn'
              ? 'আমাদের সাথে দেখা করুন, কল করুন বা বার্তা পাঠান'
              : 'हमसे संपर्क करें या जमीनी केंद्रों पर पधारें'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'bn'
              ? 'আমাদের সহায়তাকারী, গবেষক, স্বেচ্ছাসেবক এবং শুভাকাঙ্ক্ষীদের আমাদের বিদ্যা কেন্দ্র ও স্বাস্থ্য ক্যাম্প পরিদর্শনের সাদর আমন্ত্রণ জানাচ্ছি।'
              : 'We welcome supporters, volunteers, researchers, and well-wishers to visit our learning centers and medical camps.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Head Office Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'bn' ? 'নিবন্ধিত প্রধান কার্যালয় ও ফিল্ড ক্যাম্পাস' : 'Registered Head Office & Field Campus'}</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {lang === 'bn' ? 'নবোদয় সেবা নিকেতন ভবন' : 'Navadoy Seva Niketan Bhawan'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {NSN_DETAILS.headOffice}
              </p>
              <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold text-slate-800">{NSN_DETAILS.phone1}</span>
                  <span className="text-slate-400">/</span>
                  <span className="font-semibold text-slate-800">{NSN_DETAILS.phone2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{NSN_DETAILS.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{NSN_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>

            {/* City Liaison Office */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>{lang === 'bn' ? 'কলকাতা যোগাযোগ ডেস্ক' : 'Kolkata Liaison & Coordination Desk'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {NSN_DETAILS.cityOffice}
              </p>
              <p className="text-xs text-slate-500 pt-1 border-t border-stone-100">
                {lang === 'bn' ? '(কর্পোরেট দাতা ও প্রাতিষ্ঠানিক সিএসআর বৈঠকের জন্য পূর্ব নির্ধারিত সময় অনুযায়ী)' : '(By Prior Appointment for Corporate Donors & Institutional CSR Meetings)'}
              </p>
            </div>

            {/* Quick Bank Details Card for Direct NEFT Donors */}
            <div className="bg-stone-900 text-white p-6 rounded-2xl border border-stone-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {lang === 'bn' ? 'সরাসরি ব্যাংক স্থানান্তর (NEFT / RTGS / UPI)' : 'Direct Bank Transfer (NEFT / RTGS)'}
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                  SBI Main
                </span>
              </div>
              <div className="space-y-1 text-xs text-slate-300 font-mono">
                <div>A/C Name: <strong className="text-white font-sans">{NSN_DETAILS.bankDetails.accountName}</strong></div>
                <div>Account No: <strong className="text-amber-300 text-sm">{NSN_DETAILS.bankDetails.accountNumber}</strong></div>
                <div>IFSC Code: <strong className="text-amber-300">{NSN_DETAILS.bankDetails.ifscCode}</strong></div>
                <div>Bank: {NSN_DETAILS.bankDetails.bankName}, {NSN_DETAILS.bankDetails.branchName}</div>
                <div>UPI VPA: <strong className="text-emerald-400">{NSN_DETAILS.bankDetails.upiId}</strong></div>
              </div>
              <p className="text-[11px] text-slate-400">
                {lang === 'bn'
                  ? `অনুগ্রহ করে ট্রান্সফার UTR ও আপনার প্যান কার্ড নম্বর ${NSN_DETAILS.donationEmail}-এ ইমেইল করে অবিলম্বে ৮০জি করছাড়ের রসিদ সংগ্রহ করুন।`
                  : `Please email transfer UTR to ${NSN_DETAILS.donationEmail} with your PAN to generate your 80G tax receipt immediately.`}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Send Message / Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-xl text-slate-900">
              {lang === 'en' ? 'Send a Message or Schedule a Field Visit' : lang === 'bn' ? 'বার্তা পাঠান অথবা সরাসরি ফিল্ড ভিজিট বুক করুন' : 'संदेश भेजें अथवा फील्ड विजिट बुक करें'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {lang === 'bn'
                ? 'আমাদের শিক্ষা প্রকল্প সম্পর্কে জানতে চান, বই/পোশাক সামগ্রী দান করতে চান, অথবা কোনো শিশুর জরুরি সহায়তার কথা জানাতে চান? নিচে লিখুন।'
                : 'Have a question about our educational projects, wish to donate supplies in-kind, or report a child requiring urgent support? Write to us below.'}
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-slate-900">
                  Message Received Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, {formData.name}. Our coordination team at Purulia will respond to {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra Das"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">Subject / Purpose</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Schedule a Village Visit">Schedule a Project / Village Visit</option>
                      <option value="80G Tax Receipt Help">80G Tax Receipt Assistance</option>
                      <option value="In-kind Donation (Books/Clothes)">In-kind Donation (Books/Clothes/Computers)</option>
                      <option value="Child Help Intervention">Child Protection / Emergency Intervention</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Your Message / Query *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please tell us how we can assist you or share details of your planned project visit..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Navadoy Seva Niketan</span>
                </button>
              </form>
            )}

            {/* Field Location Summary */}
            <div className="mt-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nearest Railway Station: Purulia Junction (PRR) • 28 km</span>
              </div>
              <span className="text-[11px] text-slate-400 hidden sm:inline">Daily Bus & Taxi Available</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
