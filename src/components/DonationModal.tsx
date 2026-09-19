import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  CreditCard, 
  Building2, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  Copy,
  Check,
  FileText
} from 'lucide-react';
import { NSN_DETAILS, FOCUS_PROGRAMS, CAMPAIGNS } from '../data/mockData';
import { DonationRecord, Language } from '../types';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialCampaign?: string;
  onDonationSuccess: (donation: DonationRecord) => void;
  lang: Language;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 1200,
  initialCampaign = 'Project Kanya Shiksha & Rural Education',
  onDonationSuccess,
  lang
}) => {
  if (!isOpen) return null;

  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCampaign, setSelectedCampaign] = useState<string>(initialCampaign);
  const [paymentTab, setPaymentTab] = useState<'upi' | 'card' | 'bank'>('upi');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Donor form
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [donorAddress, setDonorAddress] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [donorPincode, setDonorPincode] = useState('');

  const currentAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;
  const taxSavings = Math.round(currentAmount * 0.5 * 0.312); // approx 30% slab rate on 50% deduction

  const presetTiers = [
    { 
      amt: 500, 
      label: '₹500', 
      impact: lang === 'bn' ? '৫ জন শিশুর ১ সপ্তাহের পুষ্টিকর খাদ্য' : '1 Week Balanced Meals for 5 Kids' 
    },
    { 
      amt: 1200, 
      label: '₹1,200', 
      impact: lang === 'bn' ? '১ মাসের সম্পূর্ণ স্কুল শিক্ষা ও বইপত্র' : '1 Month Full Schooling & Books' 
    },
    { 
      amt: 2500, 
      label: '₹2,500', 
      impact: lang === 'bn' ? 'ফ্রি স্বাস্থ্য ক্যাম্প ও প্রয়োজনীয় ওষুধ' : 'Free Health Clinic & Medicines' 
    },
    { 
      amt: 5000, 
      label: '₹5,000', 
      impact: lang === 'bn' ? 'নারীদের জন্য সেলাই মেশিন কিট' : 'Sewing Machine Toolkit for Woman' 
    },
    { 
      amt: 15000, 
      label: '₹15,000', 
      impact: lang === 'bn' ? '১ বছরের সম্পূর্ণ শিশু স্পনসরশিপ' : '1 Year Child Holistic Sponsorship' 
    },
  ];

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(NSN_DETAILS.bankDetails.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleCompleteDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentAmount || currentAmount < 100) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে অন্তত ১০০ টাকার অনুদান লিখুন।' : 'Please enter a donation amount of at least ₹100.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const record: DonationRecord = {
        donorName: donorName || (lang === 'bn' ? 'উদার হৃদয় সুহৃদ' : 'Generous Friend of NSN'),
        donorEmail: donorEmail || 'donor@community.org',
        donorPhone: donorPhone || '+91 98765 00000',
        donorPan: donorPan.toUpperCase() || 'AAAPA1234F',
        donorAddress: `${donorAddress || 'Rural Support Drive'}, ${donorCity || 'India'} - ${donorPincode || '700001'}`,
        amount: currentAmount,
        frequency,
        campaign: selectedCampaign,
        paymentMethod: paymentTab === 'upi' ? 'upi' : paymentTab === 'card' ? 'card' : 'bank_transfer',
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        receiptNumber: `NSN/80G/2025/${randomNum}`,
        taxExemptionClaimed: true
      };

      onDonationSuccess(record);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg leading-tight">
                {lang === 'en' ? 'Support Navadoy Seva Niketan' : lang === 'bn' ? 'নবোদয় সেবা নিকেতনে অনুদান দিন' : 'नवोदय सेवा निकेतन में सहयोग दें'}
              </h3>
              <p className="text-[11px] text-emerald-300 font-medium">
                {lang === 'bn' ? 'আয়কর ধারা ৮০জি এর আওতায় করমুক্ত • নিবন্ধিত সমাজকল্যাণ সংস্থা' : '100% Tax Exempt under Section 80G • Regd. Society'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-left text-slate-800">
          
          {/* Step 1: Frequency Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              {lang === 'bn' ? '১. অনুদানের পুনরাবৃত্তি' : '1. Donation Frequency'}
            </label>
            <div className="grid grid-cols-2 gap-2 bg-stone-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  frequency === 'once'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lang === 'bn' ? 'এককালীন অনুদান' : 'One-Time Contribution'}
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${
                  frequency === 'monthly'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'মাসিক নিয়মিত সুহৃদ' : 'Monthly Hope Partner'}</span>
              </button>
            </div>
          </div>

          {/* Step 2: Amount Selector & Tiers */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                {lang === 'bn' ? '২. অনুদানের পরিমাণ নির্বাচন করুন (টাকা)' : '2. Select or Enter Amount (INR)'}
              </label>
              {currentAmount > 0 && (
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {lang === 'bn' ? `ITR-এ প্রায় ₹${taxSavings.toLocaleString('en-IN')} কর বাঁচান` : `Save ~₹${taxSavings.toLocaleString('en-IN')} on ITR`}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {presetTiers.map(tier => (
                <button
                  type="button"
                  key={tier.amt}
                  onClick={() => {
                    setSelectedAmount(tier.amt);
                    setCustomAmount('');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedAmount === tier.amt && !customAmount
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-sm ring-1 ring-emerald-600'
                      : 'border-stone-200 bg-white hover:border-stone-300 text-slate-700'
                  }`}
                >
                  <div className="text-base font-serif font-bold">
                    {tier.label}
                  </div>
                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                    {tier.impact}
                  </div>
                </button>
              ))}

              {/* Custom Input */}
              <div className="relative">
                <input
                  type="number"
                  placeholder={lang === 'bn' ? 'অন্য পরিমাণ ₹' : 'Custom ₹'}
                  value={customAmount}
                  onChange={e => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className={`w-full h-full min-h-[58px] p-3 rounded-xl border text-sm font-semibold focus:outline-none ${
                    customAmount
                      ? 'border-emerald-600 bg-emerald-50/70 text-slate-900 ring-1 ring-emerald-600'
                      : 'border-stone-200 bg-white'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Specific Campaign/Program Allocation */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              {lang === 'bn' ? '৩. আপনার অনুদানের উদ্দেশ্য বা প্রকল্প নির্বাচন করুন' : '3. Direct My Donation To'}
            </label>
            <select
              value={selectedCampaign}
              onChange={e => setSelectedCampaign(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-medium focus:outline-none focus:border-emerald-600"
            >
              <option value="Project Kanya Shiksha & Rural Education">
                {lang === 'bn' ? 'প্রকল্প কন্যা শিক্ষা: ৫০০ প্রান্তিক কন্যার স্কুলে শিক্ষা নিশ্চিতকরণ' : 'Project Kanya Shiksha: Keep 500 Rural Girls in School'}
              </option>
              <option value="Mobile Medical Clinic & Malnutrition Rehab">
                {lang === 'bn' ? 'প্রকল্প আরোগ্য: ভ্রাম্যমাণ স্বাস্থ্য ক্লিনিক ও বিনামূল্যে ওষুধ' : 'Project Arogya: Mobile Health Clinic & Medicine'}
              </option>
              <option value="Project Nirmal Jal: Solar Drinking Water">
                {lang === 'bn' ? 'প্রকল্প নির্মল জল: সৌরচালিত বিশুদ্ধ পানীয় জল কিওস্ক' : 'Project Nirmal Jal: Solar Clean Drinking Water Kiosks'}
              </option>
              <option value="Project Swabhimaan: Women Tailoring Hub">
                {lang === 'bn' ? 'প্রকল্প স্বাভিমান: গ্রামীণ নারীদের সেলাই মেশিন ও স্বনির্ভরতা' : 'Project Swabhimaan: Women Self-Help Sewing Machines'}
              </option>
              <option value="General Grassroots Community Fund">
                {lang === 'bn' ? 'যেখানে সবচেয়ে বেশি প্রয়োজন (তৃণমূল অগ্রাধিকার তহবিল)' : "Where It's Needed Most (Highest Grassroots Priority)"}
              </option>
            </select>
          </div>

          {/* Step 4: Donor Details for 80G Receipt */}
          <form onSubmit={handleCompleteDonation} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  {lang === 'bn' ? '৪. ৮০জি কর ছাড়ের রসিদের জন্য দাতার তথ্য' : '4. Donor Details for 80G Tax Exemption'}
                </label>
                <span className="text-[10px] text-slate-500">
                  {lang === 'bn' ? '৮০জি বৈধতার জন্য প্যান নম্বর আবশ্যক' : 'PAN required by IT Dept for 80G validity'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <input
                  type="text"
                  required
                  placeholder={lang === 'bn' ? 'পুরো নাম *' : 'Full Legal Name *'}
                  value={donorName}
                  onChange={e => setDonorName(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="email"
                  required
                  placeholder={lang === 'bn' ? 'ইমেইল (এখানে রসিদ পাঠানো হবে) *' : 'Email (Receipt will be sent here) *'}
                  value={donorEmail}
                  onChange={e => setDonorEmail(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="tel"
                  required
                  placeholder={lang === 'bn' ? 'মোবাইল / হোয়াটসঅ্যাপ নম্বর *' : 'Mobile / WhatsApp Number *'}
                  value={donorPhone}
                  onChange={e => setDonorPhone(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  required
                  placeholder={lang === 'bn' ? 'প্যান কার্ড নম্বর (যেমন ABCDE1234F) *' : 'PAN Card No. (e.g. ABCDE1234F) *'}
                  value={donorPan}
                  onChange={e => setDonorPan(e.target.value)}
                  maxLength={10}
                  className="px-3 py-2 rounded-lg border border-stone-300 font-mono uppercase focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'ঠিকানা' : 'Address Line'}
                  value={donorAddress}
                  onChange={e => setDonorAddress(e.target.value)}
                  className="sm:col-span-2 px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'শহর / জেলা' : 'City'}
                  value={donorCity}
                  onChange={e => setDonorCity(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'পিন কোড' : 'Pin Code'}
                  value={donorPincode}
                  onChange={e => setDonorPincode(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Step 5: Payment Gateway Tabs */}
            <div className="space-y-2.5 pt-2 border-t border-stone-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                {lang === 'bn' ? '৫. পেমেন্টের মাধ্যম নির্বাচন করুন' : '5. Select Indian Payment Mode'}
              </label>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentTab('upi')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    paymentTab === 'upi'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                      : 'bg-stone-50 border-stone-200 text-slate-600'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'তাত্ক্ষণিক UPI / QR' : 'Instant UPI / QR'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab('card')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    paymentTab === 'card'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                      : 'bg-stone-50 border-stone-200 text-slate-600'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'কার্ড / নেটব্যাংকিং' : 'Card / NetBanking'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab('bank')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    paymentTab === 'bank'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                      : 'bg-stone-50 border-stone-200 text-slate-600'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ব্যাংক স্থানান্তর (NEFT)' : 'NEFT / RTGS Transfer'}</span>
                </button>
              </div>

              {/* UPI Tab View */}
              {paymentTab === 'upi' && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center gap-4">
                  {/* Generated QR Code Representation */}
                  <div className="w-32 h-32 bg-white p-2 rounded-xl border border-stone-300 shadow-sm flex flex-col items-center justify-center shrink-0">
                    <div className="grid grid-cols-4 gap-1 p-1 bg-slate-900 rounded">
                      <div className="w-5 h-5 bg-white rounded-sm" />
                      <div className="w-5 h-5 bg-emerald-400 rounded-sm" />
                      <div className="w-5 h-5 bg-white rounded-sm" />
                      <div className="w-5 h-5 bg-white rounded-sm" />
                      <div className="w-5 h-5 bg-white rounded-sm" />
                      <div className="w-5 h-5 bg-slate-900 rounded-sm" />
                      <div className="w-5 h-5 bg-white rounded-sm" />
                      <div className="w-5 h-5 bg-emerald-400 rounded-sm" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 mt-2">{lang === 'bn' ? `স্ক্যান করে প্রদান করুন ₹${currentAmount}` : `Scan & Pay ₹${currentAmount}`}</span>
                  </div>

                  <div className="space-y-2 text-xs flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-slate-500">{lang === 'bn' ? 'অফিসিয়াল ইউপিআই আইডি:' : 'Official UPI VPA:'}</span>
                      <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-stone-300 font-mono font-bold text-emerald-900">
                        <span>{NSN_DETAILS.bankDetails.upiId}</span>
                        <button
                          type="button"
                          onClick={handleCopyUpi}
                          className="text-slate-500 hover:text-emerald-700 ml-1"
                          title="Copy UPI ID"
                        >
                          {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {lang === 'bn' ? 'Google Pay, PhonePe, Paytm, BHIM বা যেকোনো ইউপিআই অ্যাপ দিয়ে স্ক্যান করুন।' : 'Scan with Google Pay, PhonePe, Paytm, BHIM, or any banking app.'}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{lang === 'bn' ? 'কোনো অতিরিক্ত চার্জ নেই • সরাসরি এসবিআই অ্যাকাউন্টে জমা' : 'Zero processing fees • Directly credited to SBI account'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Tab View */}
              {paymentTab === 'card' && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-semibold">Secure Payment Gateway</span>
                    <span className="text-emerald-700 font-bold">256-Bit SSL Encrypted</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Supports all major RuPay, Visa, Mastercard debit/credit cards and Net Banking across 50+ Indian banks.
                  </p>
                </div>
              )}

              {/* Bank Transfer View */}
              {paymentTab === 'bank' && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-1 text-slate-700">
                  <div>Account Name: <strong className="font-sans text-slate-900">{NSN_DETAILS.bankDetails.accountName}</strong></div>
                  <div>Account No: <strong className="text-emerald-900">{NSN_DETAILS.bankDetails.accountNumber}</strong></div>
                  <div>IFSC Code: <strong className="text-emerald-900">{NSN_DETAILS.bankDetails.ifscCode}</strong></div>
                  <div>Bank: {NSN_DETAILS.bankDetails.bankName}, {NSN_DETAILS.bankDetails.branchName}</div>
                </div>
              )}
            </div>

            {/* Submission CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>
                {isSubmitting 
                  ? (lang === 'bn' ? 'অফিসিয়াল ৮০জি রসিদ তৈরি হচ্ছে...' : 'Generating Official 80G Receipt...') 
                  : (lang === 'bn' 
                      ? `₹${currentAmount.toLocaleString('en-IN')} অনুদান সম্পন্ন করুন এবং ৮০জি রসিদ পান` 
                      : `Complete Donation of ₹${currentAmount.toLocaleString('en-IN')} & Get 80G Receipt`)}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>

        {/* Footer info */}
        <div className="bg-stone-100 px-6 py-2.5 border-t border-stone-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            NITI Aayog NGO-Darpan: WB/2019/0239148
          </span>
          <span>Sec 80G: AACTN5892QF20215</span>
        </div>

      </div>
    </div>
  );
};
