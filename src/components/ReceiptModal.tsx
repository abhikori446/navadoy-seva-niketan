import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { DonationRecord } from '../types';
import { NSN_DETAILS, LOGO_CONFIG } from '../data/mockData';

interface ReceiptModalProps {
  donation: DonationRecord | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ donation, onClose }) => {
  if (!donation) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif font-bold text-base">
              Official 80G Donation & Tax Exemption Receipt
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 text-xs font-semibold px-2.5 transition-colors"
              title="Print Receipt"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Paper Container */}
        <div id="printable-receipt" className="p-6 sm:p-8 overflow-y-auto text-left space-y-6 text-slate-800 text-xs bg-stone-50/50">
          
          {/* Organization Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-white p-0.5 border border-stone-200 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
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
                />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-900 leading-tight">
                  NAVADOY SEVA NIKETAN
                </h2>
                <p className="text-[11px] text-slate-600 font-medium">
                  नवोदय सेवा निकेतन • Dedicated to Rural Community Upliftment
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Regd. under Societies Registration Act XXI of 1860 (Reg No: {NSN_DETAILS.registrationNo})
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right text-[11px] space-y-0.5 font-mono">
              <div className="font-bold text-emerald-800">
                Receipt No: {donation.receiptNumber}
              </div>
              <div className="text-slate-500">
                Date: {donation.date}
              </div>
              <div className="text-slate-500 text-[10px]">
                PAN: {NSN_DETAILS.panNo}
              </div>
            </div>
          </div>

          {/* Statutory Exemption Certification Notice */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 space-y-1">
            <div className="font-bold text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Section 80G Tax Exemption Certificate (Income Tax Act, 1961)</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Donations to Navadoy Seva Niketan are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961 vide Order No: <strong>{NSN_DETAILS.section80GReg}</strong> issued by Director of Income Tax (Exemption), Government of India.
            </p>
          </div>

          {/* Donor & Contribution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Donor Details (करदाता का विवरण)
              </span>
              <div className="text-sm font-bold text-slate-900">{donation.donorName}</div>
              <div className="text-slate-600">PAN Number: <strong className="font-mono text-slate-800">{donation.donorPan || 'PAN Not Provided'}</strong></div>
              <div className="text-slate-600">Email: {donation.donorEmail}</div>
              <div className="text-slate-600">Mobile: {donation.donorPhone}</div>
              <div className="text-slate-500 text-[11px]">{donation.donorAddress}</div>
            </div>

            <div className="space-y-1.5 sm:border-l sm:border-stone-100 sm:pl-4">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Donation Details (दान विवरण)
              </span>
              <div className="text-2xl font-serif font-bold text-emerald-700">
                ₹{donation.amount.toLocaleString('en-IN')}/-
              </div>
              <div className="text-slate-700 font-medium capitalize">
                Purpose: {donation.campaign}
              </div>
              <div className="text-slate-600">
                Payment Mode: <span className="font-bold uppercase">{donation.paymentMethod}</span>
              </div>
              <div className="text-slate-600">
                Frequency: {donation.frequency === 'monthly' ? 'Monthly Hope Partner' : 'One-Time Contribution'}
              </div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-1">
                Tax Deduction Claimable: ₹{(donation.amount * 0.5).toLocaleString('en-IN')} (50% under 80G)
              </div>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="pt-4 border-t border-stone-200 flex items-end justify-between">
            <div className="text-[10px] text-slate-500 space-y-1 max-w-xs">
              <p>This is an electronically generated official receipt. No physical signature is required under Indian IT Rules.</p>
              <p>Registered Office: {NSN_DETAILS.headOffice}</p>
            </div>

            <div className="text-center space-y-1">
              <div className="w-20 h-10 border-b border-slate-400 flex items-center justify-center font-serif text-emerald-800 italic text-sm">
                S. C. Mandal
              </div>
              <span className="text-[10px] font-bold text-slate-700 block">General Secretary</span>
              <span className="text-[9px] text-slate-500 block">Navadoy Seva Niketan</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Keep this receipt for filing your Annual Income Tax Return (ITR).
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
          >
            Close Receipt
          </button>
        </div>
      </div>
    </div>
  );
};
