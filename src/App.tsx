import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UrgentAppeal } from './components/UrgentAppeal';
import { AboutSection } from './components/AboutSection';
import { FocusAreas } from './components/FocusAreas';
import { ActiveCampaigns } from './components/ActiveCampaigns';
import { ImpactDashboard } from './components/ImpactDashboard';
import { SuccessStories } from './components/SuccessStories';
import { GallerySection } from './components/GallerySection';
import { CSRSection } from './components/CSRSection';
import { EventsSection } from './components/EventsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ReceiptModal } from './components/ReceiptModal';
import { VolunteerModal } from './components/VolunteerModal';
import { ReceiptLookupModal } from './components/ReceiptLookupModal';
import { DonationRecord, Language } from './types';
import { CheckCircle2, Heart, Sparkles, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState<number>(1200);
  const [donationCampaign, setDonationCampaign] = useState<string>('Project Kanya Shiksha & Rural Education');
  const [activeReceipt, setActiveReceipt] = useState<DonationRecord | null>(null);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isReceiptLookupOpen, setIsReceiptLookupOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL pathname on load (/bn, /hi, /)
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const searchParams = new URLSearchParams(window.location.search);
    const langParam = searchParams.get('lang');

    if (langParam === 'bn' || path.startsWith('/bn')) {
      setLang('bn');
    } else if (langParam === 'hi' || path.startsWith('/hi')) {
      setLang('hi');
    }
  }, []);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    const targetPath = newLang === 'en' ? '/' : `/${newLang}`;
    if (window.location.pathname !== targetPath) {
      window.history.replaceState(null, '', targetPath + window.location.hash);
    }
  };

  const toggleLanguage = () => {
    setLang(prev => {
      const nextLang: Language = prev === 'en' ? 'hi' : prev === 'hi' ? 'bn' : 'en';
      const targetPath = nextLang === 'en' ? '/' : `/${nextLang}`;
      window.history.replaceState(null, '', targetPath + window.location.hash);
      return nextLang;
    });
  };

  const handleOpenDonation = (amount?: number, campaignTitle?: string) => {
    if (amount) setDonationAmount(amount);
    if (campaignTitle) setDonationCampaign(campaignTitle);
    setIsDonationOpen(true);
  };

  const handleDonationSuccess = (record: DonationRecord) => {
    setActiveReceipt(record);
    setToastMessage(`Donation of ₹${record.amount.toLocaleString('en-IN')} successful! Your 80G Tax Exemption Receipt is ready.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 max-w-md p-4 bg-emerald-900 text-white rounded-2xl shadow-2xl border border-emerald-500/50 flex items-start gap-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1 text-xs leading-relaxed">
            <span className="font-bold text-white block">Thank You for Your Generosity!</span>
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-300 hover:text-white p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        onOpenDonation={handleOpenDonation}
        onOpenReceiptLookup={() => setIsReceiptLookupOpen(true)}
        lang={lang}
        onToggleLang={toggleLanguage}
        onSelectLang={handleSelectLang}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onOpenDonation={handleOpenDonation}
          lang={lang}
        />

        {/* Urgent Humanitarian Appeal Card */}
        <UrgentAppeal
          onOpenDonation={handleOpenDonation}
          lang={lang}
        />

        {/* About Navadoy Seva Niketan */}
        <AboutSection
          lang={lang}
        />

        {/* 10 Core Focus Programs */}
        <FocusAreas
          onOpenDonation={handleOpenDonation}
          lang={lang}
        />

        {/* Active Fundraising Campaigns */}
        <ActiveCampaigns
          onOpenDonation={handleOpenDonation}
          lang={lang}
        />

        {/* Impact & Financial Transparency Dashboard */}
        <ImpactDashboard
          lang={lang}
        />

        {/* Real Transformation Stories */}
        <SuccessStories
          onOpenDonation={handleOpenDonation}
          lang={lang}
        />

        {/* Grassroots Photo Gallery */}
        <GallerySection
          lang={lang}
        />

        {/* Institutional CSR Partnerships & Volunteer Desk */}
        <CSRSection
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
          lang={lang}
        />

        {/* Community Events Calendar */}
        <EventsSection
          lang={lang}
        />

        {/* FAQ Section */}
        <FAQSection
          lang={lang}
        />

        {/* Contact & Field Campus Details */}
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonation={() => handleOpenDonation()}
        onOpenReceiptLookup={() => setIsReceiptLookupOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        lang={lang}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        initialAmount={donationAmount}
        initialCampaign={donationCampaign}
        onDonationSuccess={handleDonationSuccess}
        lang={lang}
      />

      <ReceiptModal
        donation={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
        lang={lang}
      />

      <ReceiptLookupModal
        isOpen={isReceiptLookupOpen}
        onClose={() => setIsReceiptLookupOpen(false)}
        onViewReceipt={(record) => setActiveReceipt(record)}
        lang={lang}
      />

    </div>
  );
}
