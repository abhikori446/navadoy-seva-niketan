import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  FileText, 
  Phone,
  MessageCircle
} from 'lucide-react';
import { FAQ_LIST, NSN_DETAILS } from '../data/mockData';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            {lang === 'en' ? 'Frequently Asked Questions' : lang === 'bn' ? 'সাধারণ জিজ্ঞাসা (FAQ)' : 'अक्सर पूछे जाने वाले प्रश्न'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Donor Trust & Transparency Answers'
              : lang === 'bn'
              ? 'অনুদান ও পরিচালন সংক্রান্ত প্রয়োজনীয় তথ্য'
              : 'दान, कर-छूट एवं संचालन संबंधी सामान्य प्रश्न'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'bn'
              ? 'আপনার ৮০জি করছাড়ের রসিদ, অনুদান ব্যবহারের পদ্ধতি এবং আমাদের ফিল্ড সেন্টার পরিদর্শনের সকল বিবরণ।'
              : 'Everything you need to know about your 80G tax certificate, donation utilization, and visiting our projects.'}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 text-left">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 overflow-hidden transition-all bg-stone-50"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-slate-900 hover:text-emerald-800 transition-colors"
                >
                  <span className="leading-snug">
                    {lang === 'en' ? faq.question : lang === 'bn' ? (faq.bengaliQuestion || faq.question) : (faq.hindiQuestion || faq.question)}
                  </span>
                  <div className="p-1 rounded-full bg-white border border-stone-200 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-stone-200/60 bg-white">
                    {lang === 'bn' ? (faq.bengaliAnswer || faq.answer) : faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="font-serif font-bold text-sm text-emerald-950">
              {lang === 'bn' ? '৮০জি রসিদ বা ব্যাংক ট্রান্সফার নিয়ে কোনো প্রশ্ন আছে?' : 'Have a specific question about 80G receipts or bank transfers?'}
            </h4>
            <p className="text-xs text-emerald-800">
              {lang === 'bn' ? 'আমাদের দাতা সহায়তা ডেস্ক সোমবার থেকে শনিবার (সকাল ৯টা - সন্ধ্যা ৬টা) সর্বদা প্রস্তুত।' : 'Our donor relations desk is available Monday to Saturday (9 AM - 6 PM IST).'}
            </p>
          </div>
          <a
            href={`tel:${NSN_DETAILS.phone1.replace(/\s+/g, '')}`}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-sm flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'কল করুন' : 'Call'} {NSN_DETAILS.phone1}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
