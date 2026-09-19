import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  PieChart as PieChartIcon, 
  ShieldCheck, 
  Award, 
  TrendingUp,
  Building2,
  ExternalLink,
  Eye,
  X
} from 'lucide-react';
import { FINANCIAL_ALLOCATION, IMPACT_METRICS, NSN_DETAILS } from '../data/mockData';
import { Language } from '../types';

interface ImpactDashboardProps {
  lang: Language;
}

export const ImpactDashboard: React.FC<ImpactDashboardProps> = ({ lang }) => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const auditReports = [
    {
      id: 'report-24-25',
      title: lang === 'bn' ? 'বার্ষিক নিরীক্ষিত আর্থিক বিবরণী ২০২৪-২৫' : 'Annual Audited Financial Statement FY 2024-25',
      year: 'FY 2024-2025',
      auditor: 'M/s S. K. Mukherjee & Associates, Chartered Accountants',
      pages: lang === 'bn' ? '২৮ পৃষ্ঠা (সম্পূর্ণ ব্যালেন্স শিট, লাভ-ক্ষতি হিসাব ও অডিটর মন্তব্য)' : '28 Pages (Full Balance Sheet, P&L, Auditor Notes)',
      status: lang === 'bn' ? 'নিরীক্ষিত ও রিটার্ন দাখিলকৃত' : 'Audited & IT Return Filed'
    },
    {
      id: 'report-23-24',
      title: lang === 'bn' ? 'সংবিধিবদ্ধ অডিট ও বার্ষিক কর্মকাণ্ড প্রতিবেদন ২০২৩-২৪' : 'Statutory Audit & Annual Activity Report FY 2023-24',
      year: 'FY 2023-2024',
      auditor: 'M/s S. K. Mukherjee & Associates, Chartered Accountants',
      pages: lang === 'bn' ? '২৪ পৃষ্ঠা (ফর্ম ১০বি ও অডিট সার্টিফিকেট)' : '24 Pages (Form 10B & Audit Certificate)',
      status: 'Submitted to Registrar & IT Dept'
    },
    {
      id: 'cert-80g',
      title: lang === 'bn' ? 'আয়কর ফর্ম ১০এসি (৮০জি স্থায়ী করছাড়ের ছাড়পত্র)' : 'Official Income Tax Form 10AC (80G Perpetual Exemption)',
      year: 'Approved 2021-2026',
      auditor: 'Income Tax Department (Exemptions), New Delhi',
      pages: 'Official Govt Letter with Unique Reg No: AACTN5892QF20215',
      status: 'Active & Verified'
    },
    {
      id: 'csr-1',
      title: lang === 'bn' ? 'এমসিএ CSR-১ রেজিস্ট্রেশন অনুমোদন পত্র' : 'MCA CSR-1 Registration Approval Certificate',
      year: 'Corporate Affairs',
      auditor: 'Ministry of Corporate Affairs, Govt of India',
      pages: 'Registration CSR00041285 under Companies Act 2013',
      status: 'MCA Approved'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <PieChartIcon className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Impact & Governance' : lang === 'bn' ? 'প্রভাব ও আর্থিক স্বচ্ছতা' : 'वित्तीय पारदर्शिता एवं प्रभाव'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Uncompromising Financial Accountability'
              : lang === 'bn'
              ? 'আপসহীন আর্থিক স্বচ্ছতা ও জবাবদিহিতা'
              : 'हर एक पाई का पूर्ण हिसाब एवं पारदर्शिता'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'bn'
              ? 'আমরা বিশ্বাস করি প্রতিটি দাতার অধিকার রয়েছে জানার যে তাদের অনুদান কোথায় খরচ হচ্ছে। নবোদয় সেবা নিকেতনে সংগৃহীত প্রতিটি টাকা চার্টার্ড অ্যাকাউন্ট্যান্ট দ্বারা নিয়মিত অডিট করা হয় এবং তা সর্বসাধারণের পরিদর্শনের জন্য উন্মুক্ত।'
              : 'We believe donors have the absolute right to know where their money goes. Every rupee received by Navadoy Seva Niketan is audited by certified Chartered Accountants and publicly disclosed.'}
          </p>
        </div>

        {/* Top 4 Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-serif">
              87.4%
            </div>
            <div className="text-xs font-bold text-slate-800 mt-1">
              {lang === 'bn' ? 'সরাসরি তৃণমূল কর্মসূচিতে ব্যয়' : 'Program Spend Efficiency'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'bn' ? 'আন্তর্জাতিক অলাভজনক মানদণ্ড (৭৫%) থেকে অনেক বেশি' : 'Far exceeds the global non-profit benchmark of 75%'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              100%
            </div>
            <div className="text-xs font-bold text-slate-800 mt-1">
              {lang === 'bn' ? '৮০জি করছাড় প্রযোজ্য' : 'Tax Exemption under 80G'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'bn' ? 'অনুদানের সাথে সাথে ডিজিটাল রসিদ প্রস্তুত' : 'Instant digital receipt issued with donor PAN verification'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-serif">
              124
            </div>
            <div className="text-xs font-bold text-slate-800 mt-1">
              {lang === 'bn' ? 'উন্নত গ্রামে রূপান্তর' : 'Villages Transformed'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'bn' ? 'আদিবাসী ও পিছিয়ে পড়া প্রত্যন্ত ব্লকে' : 'In tribal, drought-prone & economically backward blocks'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-serif">
              17+ Yrs
            </div>
            <div className="text-xs font-bold text-slate-800 mt-1">
              {lang === 'bn' ? 'ধারাবাহিক সমাজসেবা' : 'Continuous Service'}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'bn' ? '২০০৮ সাল থেকে অবিচল আস্থার সাথে সেবায় নিবেদিত' : 'Founded in 2008 with unwavering community trust'}
            </div>
          </div>
        </div>

        {/* Financial Breakdown Section */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50 rounded-2xl p-6 sm:p-10 border border-stone-200 text-left">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
              {lang === 'bn' ? 'নিরীক্ষিত তহবিল বণ্টন (অর্থবর্ষ ২০২৪-২৫)' : 'Audited Fund Utilization (FY 2024-25)'}
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              {lang === 'bn' ? 'আপনার অনুদান যেভাবে কাজে লাগানো হয়' : 'Where Your Donation Actually Goes'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'bn'
                ? 'আমরা প্রশাসনিক খরচ সর্বনিম্ন রাখি, যাতে সর্বাধিক অর্থ সরাসরি শিশুর পড়াশোনা, রোগী ও গ্রামীণ মায়েদের কল্যাণে ব্যয় হয়।'
                : 'We keep administrative expenses lean so maximum resources reach children, patients, and rural women on the ground.'}
            </p>

            <div className="space-y-3.5 pt-1">
              {FINANCIAL_ALLOCATION.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.label}
                    </span>
                    <span className="text-slate-900 font-bold">{item.percentage}% ({item.amount})</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <h4 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              {lang === 'bn' ? 'সংবিধিবদ্ধ আইনি বিবরণ' : 'Statutory Compliance Dossier'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-slate-500">{lang === 'bn' ? 'নিরীক্ষক (Auditor):' : 'Statutory Auditor:'}</span>
                <span className="font-medium text-slate-800 text-right">S. K. Mukherjee & Associates, CA</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-slate-500">{lang === 'bn' ? 'নীতি আয়োগ দর্পণ আইডি:' : 'NITI Aayog Darpan ID:'}</span>
                <span className="font-mono font-medium text-slate-800">{NSN_DETAILS.darpanId}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-slate-500">{lang === 'bn' ? 'এমসিএ CSR-১ আইডি:' : 'MCA CSR-1 Unique ID:'}</span>
                <span className="font-mono font-medium text-slate-800">{NSN_DETAILS.csrRegNo}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-slate-500">{lang === 'bn' ? '৮০জি রেজিস্ট্রেশন:' : 'Section 80G Approval:'}</span>
                <span className="font-mono font-medium text-slate-800">{NSN_DETAILS.section80GReg}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">{lang === 'bn' ? 'ব্যাংকিং স্বচ্ছতা:' : 'Bank Transparency:'}</span>
                <span className="font-medium text-slate-800">State Bank of India (Public Sector)</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg text-emerald-800 text-[11px] leading-relaxed border border-emerald-100">
              {lang === 'bn' 
                ? '✓ সমস্ত অনুদান সরাসরি জাতীয়কৃত ব্যাংকে জমা হয় এবং প্রতি বছর নিয়মিত সংবিধিবদ্ধ অডিট সম্পন্ন হয়।' 
                : '✓ All donations are strictly received in public sector institutional accounts and audited annually.'}
            </div>
          </div>
        </div>

        {/* Public Audit Download Links */}
        <div className="mt-14 space-y-5 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {lang === 'en' ? 'Public Financial Disclosures & Audits' : lang === 'bn' ? 'সর্বসাধারণের পরিদর্শনের জন্য অডিট রিপোর্ট' : 'सार्वजनिक ऑडिट एवं वार्षिक वित्तीय विवरण'}
              </h3>
              <p className="text-sm text-slate-600">
                {lang === 'bn' ? 'যাচাইকৃত অডিট রিপোর্ট, ফর্ম ১০বি রিটার্ন ও সরকারি অনুমোদনপত্র ডাউনলোড ও পরিদর্শন করুন।' : 'Download verified audit reports, Form 10B filings, and statutory recognition orders.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {auditReports.map(rep => (
              <div 
                key={rep.id}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase bg-stone-100 text-slate-700 px-2 py-0.5 rounded">
                      {rep.year}
                    </span>
                    <FileText className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                    {rep.title}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {rep.auditor}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    {rep.pages}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedReport(rep.title)}
                  className="w-full py-2 bg-stone-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs font-semibold rounded-lg border border-stone-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'অডিট রিপোর্ট দেখুন' : 'Inspect Audit Document'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Audit Viewer Modal Representation */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 text-left space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  {selectedReport}
                </h3>
              </div>
              <button
                onClick={() => setSelectedReport(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document preview header */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-2 text-slate-700">
              <div className="text-center font-bold text-slate-900 border-b pb-2">
                NAVADOY SEVA NIKETAN<br />
                <span className="font-normal text-[11px] text-slate-500">Registration No: S/1L/74829 • Section 80G Certified</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Document: Official Audit Filing</span>
                <span className="text-emerald-700 font-semibold">VERIFIED STATUTORY COPY</span>
              </div>
              <div className="p-3 bg-white rounded border text-slate-600 text-[11px] leading-relaxed">
                "We have examined the Balance Sheet of NAVADOY SEVA NIKETAN as at 31st March 2025 and the Income & Expenditure Account for the year ended on that date. In our opinion, proper books of account have been kept by the head office. The said accounts give a true and fair view of the state of affairs of the society."
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 pt-2 border-t">
                <span>Auditor: S. K. Mukherjee, FCA (M.No 054129)</span>
                <span>Date: 12th July 2025</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-xs text-slate-500">
                Official document authorized for public stakeholder inspection.
              </span>
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save Copy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
