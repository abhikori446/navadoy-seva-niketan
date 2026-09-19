import React, { useState } from 'react';
import { 
  X, 
  Search, 
  FileText, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { DonationRecord, Language } from '../types';
import { NSN_DETAILS } from '../data/mockData';

interface ReceiptLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewReceipt: (record: DonationRecord) => void;
  lang?: Language;
}

export const ReceiptLookupModal: React.FC<ReceiptLookupModalProps> = ({
  isOpen,
  onClose,
  onViewReceipt,
  lang = 'en'
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [foundRecord, setFoundRecord] = useState<DonationRecord | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);

    // Provide an authentic found record based on query or sample donor
    const cleanQuery = query.trim().toUpperCase();
    if (cleanQuery) {
      setFoundRecord({
        donorName: 'Dr. Debabrata Roy',
        donorEmail: cleanQuery.includes('@') ? cleanQuery.toLowerCase() : 'dr.roy.kol@gmail.com',
        donorPhone: cleanQuery.match(/^\d+$/) ? cleanQuery : '+91 94331 45892',
        donorPan: cleanQuery.length === 10 ? cleanQuery : 'AABCR8492K',
        donorAddress: 'Flat 4B, South City Towers, Prince Anwar Shah Road, Kolkata - 700068',
        amount: 5000,
        frequency: 'once',
        campaign: 'Project Kanya Shiksha & Rural Schooling',
        paymentMethod: 'upi',
        date: '14 January 2025',
        receiptNumber: 'NSN/80G/2025/4819',
        taxExemptionClaimed: true
      });
    } else {
      setFoundRecord(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base">
                {lang === 'bn' ? 'পূর্ববর্তী ৮০জি ট্যাক্স রসিদ ডাউনলোড' : 'Download Past 80G Tax Receipt'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {lang === 'bn' ? 'আইটিআর ফাইলিংয়ের জন্য ডিজিটাল রসিদ' : 'Instant digital receipt retrieval for ITR filing'}
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
        <div className="p-6 text-left space-y-5 text-xs text-slate-800">
          <p className="text-slate-600 leading-relaxed">
            {lang === 'bn'
              ? 'আপনার অনুদানের সময় ব্যবহৃত ১০ অঙ্কের প্যান নম্বর, মোবাইল নম্বর বা ইমেইল লিখুন এবং আপনার ৮০জি কর ছাড় সার্টিফিকেট সংগ্রহ করুন।'
              : 'Enter your 10-digit PAN number, Mobile number, or Email used during your donation to retrieve your verified 80G Tax Exemption Certificate.'}
          </p>

          <form onSubmit={handleSearch} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder={lang === 'bn' ? 'প্যান নম্বর / মোবাইল / ইমেইল লিখুন' : 'Enter PAN No. / Mobile / Email'}
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600 text-sm font-medium"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>{lang === 'bn' ? 'অনুসন্ধান' : 'Search'}</span>
              </button>
            </div>
            <span className="text-[11px] text-slate-400 block">
              {lang === 'bn' ? 'পরামর্শ: আপনি যেকোনো পরীক্ষামূলক প্যান (যেমন AABCR8492K) বা মোবাইল দিয়ে অনুসন্ধান করতে পারেন।' : 'Tip: You can search with any test PAN (e.g. AABCR8492K) or mobile number.'}
            </span>
          </form>

          {searched && foundRecord && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="font-bold text-slate-900 font-serif text-sm">
                  {lang === 'bn' ? 'যাচাইকৃত অনুদান পাওয়া গেছে' : 'Verified Donation Found'}
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                  80G Certified
                </span>
              </div>

              <div className="space-y-1 text-slate-600">
                <div>{lang === 'bn' ? 'দাতার নাম' : 'Donor'}: <strong className="text-slate-900">{foundRecord.donorName}</strong></div>
                <div>PAN: <strong className="font-mono text-emerald-800">{foundRecord.donorPan}</strong></div>
                <div>{lang === 'bn' ? 'পরিমাণ' : 'Amount'}: <strong className="text-emerald-700 text-sm font-serif">₹{foundRecord.amount.toLocaleString('en-IN')}</strong></div>
                <div>{lang === 'bn' ? 'রসিদ নং' : 'Receipt No'}: <span className="font-mono text-slate-700">{foundRecord.receiptNumber}</span></div>
                <div>{lang === 'bn' ? 'তারিখ' : 'Date'}: {foundRecord.date}</div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onViewReceipt(foundRecord);
                }}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'bn' ? 'অফিসিয়াল ৮০জি রসিদ দেখুন ও প্রিন্ট করুন' : 'View & Print Official 80G Receipt'}</span>
              </button>
            </div>
          )}

          {searched && !foundRecord && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{lang === 'bn' ? `কোনো রেকর্ড পাওয়া যায়নি। অনুগ্রহ করে আপনার প্যান পরীক্ষা করুন বা ${NSN_DETAILS.donationEmail}-এ যোগাযোগ করুন।` : `No record found. Please verify your PAN or contact ${NSN_DETAILS.donationEmail}.`}</span>
            </div>
          )}

          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>{lang === 'bn' ? 'সরাসরি হেল্পলাইন' : 'Direct helpline'}: {NSN_DETAILS.phone1}</span>
            <span>Sec 80G: AACTN5892QF20215</span>
          </div>
        </div>

      </div>
    </div>
  );
};
