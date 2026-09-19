import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Award, 
  ShieldCheck, 
  FileText, 
  Globe, 
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { NSN_DETAILS, LOGO_CONFIG } from '../data/mockData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onOpenDonation: (initialAmount?: number, campaignTitle?: string) => void;
  onOpenReceiptLookup: () => void;
  lang: Language;
  onToggleLang: () => void;
  onSelectLang: (lang: Language) => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDonation,
  onOpenReceiptLookup,
  lang,
  onToggleLang,
  onSelectLang,
  onOpenVolunteer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.programs, href: '#programs' },
    { name: t.nav.campaigns, href: '#campaigns' },
    { name: t.nav.impact, href: '#impact' },
    { name: t.nav.stories, href: '#stories' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.csr, href: '#csr' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Urgent Strip & Accreditation Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-medium border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {lang === 'en' ? '80G Tax Exemption (50% Deduction)' : lang === 'bn' ? '৮০জি করছাড় (৫০% আয়কর ছাড়)' : '80G आयकर छूट (50% कटौती उपलब्ध)'}
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              NITI Aayog Darpan: {NSN_DETAILS.darpanId}
            </span>
            <span className="hidden lg:inline text-slate-400">•</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              MCA CSR-1: {NSN_DETAILS.csrRegNo}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a 
              href={`tel:${NSN_DETAILS.phone1.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="hidden xs:inline">{NSN_DETAILS.phone1}</span>
            </a>
            <span className="text-slate-600">|</span>
            
            {/* 3-Language Switcher */}
            <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700 text-[11px] font-medium">
              <button
                id="lang-en-btn"
                onClick={() => onSelectLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'en' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-300 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                id="lang-hi-btn"
                onClick={() => onSelectLang('hi')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'hi' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-300 hover:text-white'
                }`}
                title="हिंदी (Hindi)"
              >
                हिन्दी
              </button>
              <button
                id="lang-bn-btn"
                onClick={() => onSelectLang('bn')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'bn' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-300 hover:text-white'
                }`}
                title="বাংলা (Bengali)"
              >
                বাংলা
              </button>
            </div>

            <span className="text-slate-600">|</span>
            <button
              id="header-receipt-lookup-btn"
              onClick={onOpenReceiptLookup}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              <span>{t.nav.taxReceipt}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white shadow-sm py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group text-left">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white p-0.5 shadow-sm border border-emerald-100 flex items-center justify-center shrink-0 overflow-hidden group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
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
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                  {lang === 'en' ? NSN_DETAILS.name : lang === 'bn' ? (NSN_DETAILS.bengaliName || 'নবোদয় সেবা নিকেতন') : NSN_DETAILS.hindiName}
                </span>
                <span className="hidden xl:inline text-[10px] uppercase tracking-wider font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  Govt Reg. NGO
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium line-clamp-1">
                {lang === 'en' 
                  ? 'Empowering Rural Lives • Regd. 1860 Act' 
                  : lang === 'bn'
                  ? 'গ্রামীণ জীবনের ক্ষমতায়ন • ১৮৬০ সোসাইটি নিবন্ধিত'
                  : 'ग्रामीण जीवन सशक्तिकरण • सोसायटी पंजीकरण'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="nav-volunteer-btn"
              onClick={onOpenVolunteer}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors"
            >
              {t.nav.volunteer}
            </button>
            <button
              id="nav-donate-btn"
              onClick={() => onOpenDonation()}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
              <span>{t.nav.donateNow}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              id="mobile-donate-quick-btn"
              onClick={() => onOpenDonation()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg flex items-center gap-1.5 shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>{lang === 'bn' ? 'দান' : lang === 'hi' ? 'दान' : 'Donate'}</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span>Language:</span>
              </span>
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-semibold">
                <button
                  onClick={() => onSelectLang('en')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    lang === 'en' ? 'bg-emerald-600 text-white' : 'text-slate-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => onSelectLang('hi')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    lang === 'hi' ? 'bg-emerald-600 text-white' : 'text-slate-700'
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => onSelectLang('bn')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    lang === 'bn' ? 'bg-emerald-600 text-white' : 'text-slate-700'
                  }`}
                >
                  বাংলা
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonation();
                }}
                className="w-full py-2.5 bg-emerald-600 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                {t.nav.donateNow}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full py-2.5 bg-slate-100 text-slate-800 font-semibold rounded-lg text-xs"
              >
                {t.nav.volunteer}
              </button>
            </div>

            <div className="divide-y divide-slate-100 font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-sm hover:text-emerald-700"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>NITI Aayog: {NSN_DETAILS.darpanId}</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReceiptLookup();
                }}
                className="text-emerald-700 font-semibold underline"
              >
                {t.nav.taxReceipt}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
