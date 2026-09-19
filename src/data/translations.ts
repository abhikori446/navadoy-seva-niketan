import { Language } from '../types';

export interface TranslationDict {
  nav: {
    home: string;
    about: string;
    programs: string;
    campaigns: string;
    impact: string;
    stories: string;
    gallery: string;
    csr: string;
    contact: string;
    donateNow: string;
    taxReceipt: string;
    volunteer: string;
  };
  hero: {
    regBadge: string;
    title: string;
    subtitle: string;
    donateBtn: string;
    exploreBtn: string;
    videoBtn: string;
    stats: {
      children: string;
      healthcare: string;
      women: string;
      water: string;
      trees: string;
      villages: string;
    };
  };
  urgent: {
    badge: string;
    urgentAppeal: string;
    criticalNeed: string;
    raised: string;
    goal: string;
    donors: string;
    daysLeft: string;
    cta: string;
    share: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    historyTitle: string;
    historyText: string;
    leadershipTitle: string;
    leadershipSubtitle: string;
  };
  programs: {
    badge: string;
    title: string;
    subtitle: string;
    allPrograms: string;
    sponsorMonthly: string;
    beneficiaries: string;
    villages: string;
    highlights: string;
  };
  campaigns: {
    badge: string;
    title: string;
    subtitle: string;
    supportThisCause: string;
    daysLeft: string;
    taxExempt: string;
  };
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    fundAllocation: string;
    auditedReports: string;
    downloadAudit: string;
    efficiencyNotice: string;
  };
  stories: {
    badge: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    sponsorSimilar: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      education: string;
      healthcare: string;
      women: string;
      wash: string;
      environment: string;
      relief: string;
    };
  };
  csr: {
    badge: string;
    title: string;
    subtitle: string;
    requestProposal: string;
    volunteerTitle: string;
    volunteerSubtitle: string;
    volunteerBtn: string;
  };
  events: {
    badge: string;
    title: string;
    subtitle: string;
    expectedBeneficiaries: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    calloutTitle: string;
    calloutSubtitle: string;
    callBtn: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    headOffice: string;
    cityOffice: string;
    directTransfer: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendBtn: string;
  };
  footer: {
    tagline: string;
    aboutText: string;
    interventions: string;
    transparency: string;
    stayConnected: string;
    newsletterText: string;
    subscribeBtn: string;
    rights: string;
  };
  modal: {
    donateTitle: string;
    donateSubtitle: string;
    frequencyOnce: string;
    frequencyMonthly: string;
    selectAmount: string;
    taxSaveNote: string;
    directTo: string;
    donorDetails: string;
    fullName: string;
    email: string;
    phone: string;
    pan: string;
    address: string;
    city: string;
    pincode: string;
    paymentMode: string;
    completeDonation: string;
    volunteerTitle: string;
    volunteerSubtitle: string;
    volunteerSubmit: string;
    receiptSearchTitle: string;
    receiptSearchSubtitle: string;
    searchBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      programs: 'Programmes',
      campaigns: 'Active Campaigns',
      impact: 'Our Impact',
      stories: 'Success Stories',
      gallery: 'Gallery',
      csr: 'CSR & Partnerships',
      contact: 'Contact Us',
      donateNow: 'Donate Now (80G)',
      taxReceipt: '80G Receipt',
      volunteer: 'Volunteer',
    },
    hero: {
      regBadge: 'Regd. Society 1860 • 80G & 12A Certified • NITI Aayog Darpan',
      title: 'Dedicated to Transforming Rural & Tribal Communities in Bengal',
      subtitle: 'Navadoy Seva Niketan empowers marginalized children, women, and families through quality education, healthcare, vocational livelihoods, and safe water.',
      donateBtn: 'Donate to Empower (50% Tax Exemption)',
      exploreBtn: 'Explore Our 10 Programmes',
      videoBtn: 'Watch Ground Documentary',
      stats: {
        children: 'Children Educated',
        healthcare: 'Healthcare Beneficiaries',
        women: 'Women Empowered',
        water: 'Safe Water Kiosks',
        trees: 'Trees Planted & Protected',
        villages: 'Rural Villages Reached',
      },
    },
    urgent: {
      badge: 'Immediate Ground Assistance',
      urgentAppeal: 'Urgent Humanitarian Appeal: Flood Protection & Nutrition Kits',
      criticalNeed: 'Monsoon flooding and crop disruption have left over 1,400 tribal families in backward blocks without dry food staples and clean potable water.',
      raised: 'Raised so far',
      goal: 'Goal Needed',
      donors: 'Generous Donors',
      daysLeft: 'Days Remaining',
      cta: 'Provide Emergency Ration Kit (₹1,500)',
      share: 'Share Appeal',
    },
    about: {
      badge: 'About Navadoy Seva Niketan',
      title: 'Roots in the Soil, Eyes on Human Dignity',
      subtitle: 'Founded by local educators, grassroot activists and doctors in Purulia, Navadoy Seva Niketan (NSN) has spent 17+ years walking alongside underserved rural families.',
      missionTitle: 'Our Mission',
      missionText: 'To uplift marginalized rural, Dalit, and tribal communities by fostering equitable access to quality education, universal primary healthcare, economic self-reliance for women, and resilient environmental sustainability.',
      visionTitle: 'Our Vision',
      visionText: 'A just, self-sustaining, and compassionate society where every rural child thrives in school, every family has safe water and health security, and no woman is held back by poverty.',
      historyTitle: 'Our 17-Year Journey',
      historyText: 'From a single village evening tutoring room in 2008 to supporting 124 rural villages with schools, mobile clinics, solar water plants, and women clusters.',
      leadershipTitle: 'Governing Body & Grassroots Leadership',
      leadershipSubtitle: 'Guided by eminent social workers, medical doctors, and community organizers.',
    },
    programs: {
      badge: '10 Core Focus Sectors',
      title: 'Comprehensive Grassroots Interventions',
      subtitle: 'We implement holistic programs tailored to root-level challenges across remote rural and tribal regions.',
      allPrograms: 'All 10 Sectors',
      sponsorMonthly: 'Sponsor Monthly',
      beneficiaries: 'Beneficiaries Served',
      villages: 'Active Villages',
      highlights: 'Key Program Milestones:',
    },
    campaigns: {
      badge: 'Give Hope Today',
      title: 'Active Fundraising Campaigns',
      subtitle: 'Directly fund a specific grassroots cause. Every rupee goes directly to verified field operations.',
      supportThisCause: 'Support This Cause',
      daysLeft: 'days left',
      taxExempt: 'Eligible for 50% Tax Exemption under Sec 80G',
    },
    impact: {
      badge: 'Financial Accountability & Transparency',
      title: 'Real Impact, Rigorously Audited',
      subtitle: 'Every donation is accounted for with utmost transparency. 87.4% of every rupee goes directly into grassroots field programs.',
      fundAllocation: 'Audited Fund Utilization (FY 2024-25)',
      auditedReports: 'Annual Disclosures & Audit Reports',
      downloadAudit: 'View & Download Report',
      efficiencyNotice: 'Navadoy Seva Niketan is subject to rigorous annual statutory audit by independent Chartered Accountants and adheres to NITI Aayog transparency norms.',
    },
    stories: {
      badge: 'Transformations in Action',
      title: 'Stories of Dignity & Hope',
      subtitle: 'Behind every statistic is a human life renewed. Meet some of the children and women who transformed their future through our programs.',
      beforeLabel: 'Before Intervention:',
      afterLabel: 'Present Impact:',
      sponsorSimilar: 'Support a Similar Life',
    },
    gallery: {
      badge: 'Grassroots In Action',
      title: 'Glimpses of Ground Realities & Impact',
      subtitle: 'Direct visual evidence from our field centers, mobile medical camps, and tribal village gatherings.',
      filters: {
        all: 'All Activities',
        education: 'Education',
        healthcare: 'Healthcare',
        women: 'Women Livelihood',
        wash: 'Clean Water',
        environment: 'Plantation',
        relief: 'Relief Work',
      },
    },
    csr: {
      badge: 'Institutional & CSR Partnerships',
      title: 'Partner with Us for High-Impact CSR Programs',
      subtitle: 'Navadoy Seva Niketan is registered with the Ministry of Corporate Affairs (MCA Form CSR-1). We execute turnkey, audited CSR projects aligned with Schedule VII of the Companies Act, 2013.',
      requestProposal: 'Request a Customized CSR Proposal',
      volunteerTitle: 'Volunteer Your Skills',
      volunteerSubtitle: 'Whether you are a doctor, teacher, software engineer, lawyer, or student—your time can directly uplift rural lives.',
      volunteerBtn: 'Apply to Volunteer with NSN',
    },
    events: {
      badge: 'Community Calendar',
      title: 'Upcoming Grassroots Events & Drives',
      subtitle: 'Witness our ground operations firsthand. All events are open for community participation, donor visits, and volunteer assistance.',
      expectedBeneficiaries: 'Beneficiaries',
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Donor Trust & Transparency Answers',
      subtitle: 'Everything you need to know about your 80G tax certificate, donation utilization, and visiting our projects.',
      calloutTitle: 'Have a specific question about 80G receipts or bank transfers?',
      calloutSubtitle: 'Our donor relations desk is available Monday to Saturday (9 AM - 6 PM IST).',
      callBtn: 'Call Helpline',
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Visit Us, Call Our Team, or Write',
      subtitle: 'We welcome supporters, volunteers, researchers, and well-wishers to visit our learning centers and medical camps.',
      headOffice: 'Registered Head Office & Field Campus',
      cityOffice: 'Kolkata Liaison Desk',
      directTransfer: 'Direct Bank Transfer (NEFT / RTGS)',
      formTitle: 'Send a Message or Schedule a Field Visit',
      formSubtitle: 'Have a question about our educational projects or wish to donate supplies? Write to us below.',
      nameLabel: 'Your Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / Mobile Number',
      subjectLabel: 'Subject / Purpose',
      messageLabel: 'Your Message / Query',
      sendBtn: 'Send Message to Navadoy Seva Niketan',
    },
    footer: {
      tagline: 'Regd. NGO • Dedicated to Rural Community Upliftment',
      aboutText: 'Navadoy Seva Niketan is a non-governmental, non-profit society dedicated to transforming rural and tribal lives through quality education, healthcare, women empowerment, safe water, and disaster resilience.',
      interventions: 'Core Interventions',
      transparency: 'Transparency',
      stayConnected: 'Stay Connected',
      newsletterText: 'Subscribe to receive bi-monthly ground reports, child progress letters, and audit disclosures.',
      subscribeBtn: 'Subscribe',
      rights: 'Navadoy Seva Niketan (NSN). All Rights Reserved.',
    },
    modal: {
      donateTitle: 'Support Navadoy Seva Niketan',
      donateSubtitle: '100% Tax Exempt under Section 80G • Regd. Society',
      frequencyOnce: 'One-Time Contribution',
      frequencyMonthly: 'Monthly Hope Partner',
      selectAmount: 'Select or Enter Amount (INR)',
      taxSaveNote: 'Save ~50% on ITR under Section 80G',
      directTo: 'Direct My Donation To',
      donorDetails: 'Donor Details for 80G Tax Exemption',
      fullName: 'Full Legal Name',
      email: 'Email (Receipt will be sent here)',
      phone: 'Mobile / WhatsApp Number',
      pan: 'PAN Card No. (e.g. ABCDE1234F)',
      address: 'Address Line',
      city: 'City',
      pincode: 'Pin Code',
      paymentMode: 'Select Indian Payment Mode',
      completeDonation: 'Complete Donation & Get 80G Receipt',
      volunteerTitle: 'Join as a Volunteer / Intern',
      volunteerSubtitle: 'Make a tangible grassroots difference in rural Bengal',
      volunteerSubmit: 'Submit Volunteer Application',
      receiptSearchTitle: 'Download Past 80G Tax Receipt',
      receiptSearchSubtitle: 'Instant digital receipt retrieval for ITR filing',
      searchBtn: 'Search Receipt',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      programs: 'कार्यक्रम',
      campaigns: 'सक्रिय अभियान',
      impact: 'हमारा प्रभाव',
      stories: 'सफलता की कहानियां',
      gallery: 'गैलरी',
      csr: 'सीएसआर साझेदारी',
      contact: 'संपर्क करें',
      donateNow: 'दान करें (80G)',
      taxReceipt: '80G रसीद',
      volunteer: 'स्वयंसेवक बनें',
    },
    hero: {
      regBadge: 'सोसायटी अधिनियम 1860 पंजीकृत • 80G एवं 12A मान्य • नीति आयोग दर्पण',
      title: 'बंगाल के ग्रामीण एवं जनजातीय समुदायों के उत्थान हेतु समर्पित',
      subtitle: 'नवोदय सेवा निकेतन गुणवत्तापूर्ण शिक्षा, प्राथमिक स्वास्थ्य, महिला स्वावलंबन और स्वच्छ पेयजल के माध्यम से वंचित परिवारों को सशक्त बना रहा है।',
      donateBtn: 'सहयोग करें (80G के तहत 50% आयकर छूट)',
      exploreBtn: 'हमारे 10 मुख्य कार्यक्रम देखें',
      videoBtn: 'जमीनी वृत्तचित्र देखें',
      stats: {
        children: 'शिक्षारत बच्चे',
        healthcare: 'स्वास्थ्य लाभार्थी',
        women: 'स्वावलंबी महिलाएं',
        water: 'शुद्ध पेयजल संयंत्र',
        trees: 'रोपित एवं सुरक्षित वृक्ष',
        villages: 'लाभान्वित गांव',
      },
    },
    urgent: {
      badge: 'तत्काल जमीनी सहायता',
      urgentAppeal: 'अत्यावश्यक मानवीय अपील: बाढ़ राहत एवं पोषण आहार किट',
      criticalNeed: 'अतिवृष्टि और आजीविका संकट के कारण 1,400 से अधिक जनजातीय परिवारों को तत्काल सूखे राशन और स्वच्छ पेयजल की आवश्यकता है।',
      raised: 'अब तक संकलित',
      goal: 'आवश्यक लक्ष्य',
      donors: 'उदार दानदाता',
      daysLeft: 'दिन शेष',
      cta: 'आपातकालीन राशन किट प्रदान करें (₹1,500)',
      share: 'अपील साझा करें',
    },
    about: {
      badge: 'नवोदय सेवा निकेतन का परिचय',
      title: 'जमीन से जुड़ाव, मानवीय गरिमा का संकल्प',
      subtitle: 'पुरुलिया के स्थानीय शिक्षकों, डॉक्टरों और सामाजिक कार्यकर्ताओं द्वारा स्थापित नवोदय सेवा निकेतन 17 वर्षों से ग्रामीण परिवारों की सेवा में सेवारत है।',
      missionTitle: 'हमारा मिशन',
      missionText: 'ग्रामीण, दलित और जनजातीय समुदायों को गुणवत्तापूर्ण शिक्षा, सुलभ प्राथमिक स्वास्थ्य सेवा, महिलाओं की आर्थिक आत्मनिर्भरता और पर्यावरण सुरक्षा उपलब्ध कराना।',
      visionTitle: 'हमारा विजन',
      visionText: 'एक ऐसा न्यायसंगत और आत्मनिर्भर समाज जहां प्रत्येक बच्चा स्कूल जाए, हर परिवार को स्वच्छ जल व स्वास्थ्य मिले और कोई भी महिला गरीबी से बेबस न रहे।',
      historyTitle: 'हमारी 17 वर्षों की सेवा यात्रा',
      historyText: '2008 में एक छोटे से अध्ययन केंद्र से शुरू होकर आज 124 गांवों तक शिक्षा, मोबाइल स्वास्थ्य वैन, पेयजल और महिला समूहों का व्यापक विस्तार।',
      leadershipTitle: 'प्रबंध समिति एवं जमीनी नेतृत्व',
      leadershipSubtitle: 'प्रतिष्ठित समाजसेवियों, डॉक्टरों और अनुभवी शिक्षाविदों के कुशल मार्गदर्शन में संचालित।',
    },
    programs: {
      badge: '10 मुख्य सेवा क्षेत्र',
      title: 'समग्र ग्रामीण विकास कार्यक्रम',
      subtitle: 'हम सुदूरवर्ती ग्रामीण और आदिवासी अंचलों की वास्तविक समस्याओं के समाधान हेतु व्यापक कार्यक्रम संचालित करते हैं।',
      allPrograms: 'सभी 10 कार्यक्रम',
      sponsorMonthly: 'मासिक प्रायोजन करें',
      beneficiaries: 'कुल लाभार्थी',
      villages: 'सक्रिय गांव',
      highlights: 'मुख्य उपलब्धियां:',
    },
    campaigns: {
      badge: 'आशा का संबल बनें',
      title: 'सक्रिय सहयोग अभियान',
      subtitle: 'किसी विशिष्ट जमीनी सेवा कार्य में सीधा योगदान दें। आपका प्रत्येक रुपया सीधे लाभार्थियों तक पहुंचता है।',
      supportThisCause: 'इस अभियान में सहयोग दें',
      daysLeft: 'दिन शेष',
      taxExempt: 'धारा 80G के तहत 50% आयकर छूट प्राप्त',
    },
    impact: {
      badge: 'वित्तीय पारदर्शिता एवं सत्यनिष्ठा',
      title: 'प्रमाणित प्रभाव, पूर्णतया संपरीक्षित',
      subtitle: 'प्रत्येक दान का पाई-पाई हिसाब रखा जाता है। आपके दान का 87.4% भाग सीधे धरातल पर सेवा कार्यों में प्रयुक्त होता है।',
      fundAllocation: 'संपरीक्षित निधि उपयोग (वित्त वर्ष 2024-25)',
      auditedReports: 'वार्षिक लेखा परीक्षण एवं रिपोर्ट',
      downloadAudit: 'रिपोर्ट देखें एवं डाउनलोड करें',
      efficiencyNotice: 'नवोदय सेवा निकेतन का वार्षिक लेखा परीक्षण चार्टर्ड अकाउंटेंट्स द्वारा विधिवत संपन्न किया जाता है।',
    },
    stories: {
      badge: 'सफलता की वास्तविक कहानियां',
      title: 'गरिमा और उम्मीद की दास्तान',
      subtitle: 'हर आंकड़े के पीछे एक संवरती हुई जिंदगी है। जानिए कैसे हमारे कार्यक्रमों ने इन बच्चों और महिलाओं का भविष्य बदला।',
      beforeLabel: 'हस्तक्षेप से पहले:',
      afterLabel: 'वर्तमान स्थिति:',
      sponsorSimilar: 'एक और जीवन संवारें',
    },
    gallery: {
      badge: 'जमीनी कार्य दृश्य',
      title: 'सेवा, संकल्प और परिवर्तन की कुछ झलकियां',
      subtitle: 'हमारे शिक्षा केंद्रों, मोबाइल स्वास्थ्य शिविरों और महिला सशक्तिकरण कार्यक्रमों के वास्तविक दृश्य।',
      filters: {
        all: 'सभी गतिविधियां',
        education: 'शिक्षा',
        healthcare: 'स्वास्थ्य',
        women: 'महिला आजीविका',
        wash: 'स्वच्छ जल',
        environment: 'वृक्षारोपण',
        relief: 'राहत सेवा',
      },
    },
    csr: {
      badge: 'संस्थागत एवं सीएसआर साझेदारी',
      title: 'सार्थक कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) साझेदारी',
      subtitle: 'नवोदय सेवा निकेतन कॉर्पोरेट मामलों के मंत्रालय (MCA CSR-1) में पंजीकृत है। हम कंपनी अधिनियम 2013 की अनुसूची VII के अनुरूप परियोजनाएं संचालित करते हैं।',
      requestProposal: 'अनुकूलित सीएसआर प्रस्ताव का अनुरोध करें',
      volunteerTitle: 'स्वयंसेवक के रूप में जुड़ें',
      volunteerSubtitle: 'चाहे आप शिक्षक हों, डॉक्टर हों, इंजीनियर हों या छात्र—आपका थोड़ा सा समय ग्रामीण जीवन संवार सकता है।',
      volunteerBtn: 'स्वयंसेवा हेतु आवेदन करें',
    },
    events: {
      badge: 'आगामी जमीनी कार्यक्रम',
      title: 'निकट भविष्य के सेवा शिविर एवं आयोजन',
      subtitle: 'हमारे जमीनी कार्यों का स्वयं अवलोकन करें। सभी कार्यक्रम समुदाय और स्वयंसेवकों के लिए खुले हैं।',
      expectedBeneficiaries: 'लाभार्थी संख्या',
    },
    faq: {
      badge: 'अक्सर पूछे जाने वाले प्रश्न',
      title: 'दान, कर-छूट एवं संचालन संबंधी सामान्य प्रश्न',
      subtitle: '80G कर छूट रसीद, दान के सदुपयोग और केंद्रों के भ्रमण संबंधी संपूर्ण जानकारी।',
      calloutTitle: '80G रसीद अथवा बैंक ट्रांसफर संबंधी कोई प्रश्न है?',
      calloutSubtitle: 'हमारा दानदाता सहायता केंद्र सोमवार से शनिवार (प्रातः 9 से सायं 6 बजे) उपलब्ध है।',
      callBtn: 'हेल्पलाइन पर कॉल करें',
    },
    contact: {
      badge: 'संपर्क एवं कार्यालय',
      title: 'हमसे संपर्क करें या जमीनी केंद्रों पर पधारें',
      subtitle: 'हम समर्थकों, स्वयंसेवकों और शोधकर्ताओं का हमारे शिक्षा केंद्रों और स्वास्थ्य शिविरों में सहर्ष स्वागत करते हैं।',
      headOffice: 'पंजीकृत प्रधान कार्यालय एवं फील्ड परिसर',
      cityOffice: 'कोलकाता समन्वय केंद्र',
      directTransfer: 'प्रत्यक्ष बैंक ट्रांसफर (NEFT / RTGS)',
      formTitle: 'संदेश भेजें अथवा फील्ड विजिट बुक करें',
      formSubtitle: 'हमारे सेवा कार्यों के विषय में कोई भी प्रश्न हो तो कृपया नीचे दिया गया फॉर्म भरें।',
      nameLabel: 'आपका पूरा नाम',
      emailLabel: 'ईमेल पता',
      phoneLabel: 'फोन / मोबाइल नंबर',
      subjectLabel: 'विषय / प्रयोजन',
      messageLabel: 'आपका संदेश / प्रश्न',
      sendBtn: 'नवोदय सेवा निकेतन को संदेश भेजें',
    },
    footer: {
      tagline: 'पंजीकृत संस्था • ग्रामीण समुदाय के उत्थान हेतु समर्पित',
      aboutText: 'नवोदय सेवा निकेतन एक गैर-सरकारी, गैर-लाभकारी संस्था है जो शिक्षा, स्वास्थ्य, महिला सशक्तिकरण और स्वच्छ जल के माध्यम से ग्रामीण जीवन को संवारने हेतु प्रतिबद्ध है।',
      interventions: 'मुख्य सेवा क्षेत्र',
      transparency: 'पारदर्शिता',
      stayConnected: 'हमसे जुड़े रहें',
      newsletterText: 'मासिक प्रगति रिपोर्ट एवं समाचार प्राप्त करने के लिए अपना ईमेल दर्ज करें।',
      subscribeBtn: 'सदस्यता लें',
      rights: 'नवोदय सेवा निकेतन (NSN). सर्वाधिकार सुरक्षित।',
    },
    modal: {
      donateTitle: 'नवोदय सेवा निकेतन में सहयोग दें',
      donateSubtitle: 'आयकर धारा 80G के अंतर्गत 50% कर छूट प्राप्त • पंजीकृत संस्था',
      frequencyOnce: 'एकमुश्त योगदान',
      frequencyMonthly: 'मासिक उम्मीद साथी',
      selectAmount: 'राशि चुनें अथवा प्रविष्ट करें (INR)',
      taxSaveNote: 'धारा 80G के तहत 50% कर बचत का लाभ लें',
      directTo: 'मेरा दान इस कार्य में लगाएं',
      donorDetails: '80G कर छूट रसीद हेतु दानदाता का विवरण',
      fullName: 'पूरा कानूनी नाम',
      email: 'ईमेल (रसीद इस पते पर भेजी जाएगी)',
      phone: 'मोबाइल / व्हाट्सएप नंबर',
      pan: 'पैन कार्ड नंबर (उदा. ABCDE1234F)',
      address: 'पता',
      city: 'शहर',
      pincode: 'पिन कोड',
      paymentMode: 'भुगतान का माध्यम चुनें',
      completeDonation: 'दान पूर्ण करें एवं 80G रसीद प्राप्त करें',
      volunteerTitle: 'स्वयंसेवक / इंटर्न के रूप में जुड़ें',
      volunteerSubtitle: 'ग्रामीण बंगाल के विकास में प्रत्यक्ष भागीदारी निभाएं',
      volunteerSubmit: 'स्वयंसेवक आवेदन जमा करें',
      receiptSearchTitle: 'पुरानी 80G रसीद डाउनलोड करें',
      receiptSearchSubtitle: 'आयकर रिटर्न हेतु तत्काल डिजिटल रसीद प्राप्त करें',
      searchBtn: 'रसीद खोजें',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      programs: 'কার্যক্রম',
      campaigns: 'চলমান কর্মসূচি',
      impact: 'আমাদের প্রভাব',
      stories: 'সাফল্যের গল্প',
      gallery: 'গ্যালারি',
      csr: 'সিএসআর পার্টনারশিপ',
      contact: 'যোগাযোগ',
      donateNow: 'দান করুন (৮০জি)',
      taxReceipt: '৮০জি রসিদ',
      volunteer: 'স্বেচ্ছাসেবক',
    },
    hero: {
      regBadge: 'সোসাইটি রেজিস্ট্রেশন ১৮৬০ নিবন্ধিত • ৮০জি ও ১২এ প্রত্যয়িত • নীতি আয়োগ দর্পণ',
      title: 'বাংলার গ্রামীণ ও প্রান্তিক জনগোষ্ঠীর ক্ষমতায়নে নিবেদিত',
      subtitle: 'নভোদয় সেবা নিকেতন গুণগত শিক্ষা, সুস্বাস্থ্য, জীবিকা উন্নয়ন এবং বিশুদ্ধ পানীয় জলের মাধ্যমে পশ্চাৎপদ শিশুদের ও গ্রামীণ পরিবারের স্বনির্ভরতা গড়ে তোলে।',
      donateBtn: 'সহায়তা করুন (৮০জি ধারায় ৫০% আয়কর ছাড়)',
      exploreBtn: 'আমাদের ১০টি মূল কার্যক্রম দেখুন',
      videoBtn: 'গ্রাউন্ড ডকুমেন্টারি দেখুন',
      stats: {
        children: 'শিক্ষাপ্রাপ্ত শিশু',
        healthcare: 'চিকিৎসাসেবা প্রাপ্ত',
        women: 'স্বাবলম্বী নারী',
        water: 'বিশুদ্ধ পানীয় জল কিয়স্ক',
        trees: 'রোপিত ও সংরক্ষিত বৃক্ষ',
        villages: 'আওতাভুক্ত গ্রাম',
      },
    },
    urgent: {
      badge: 'জরুরি গ্রাউন্ড সহায়তা',
      urgentAppeal: 'জরুরি মানবিক আবেদন: বন্যা সুরক্ষা ও পুষ্টিকর খাদ্য সামগ্রী',
      criticalNeed: 'বন্যা ও জীবিকা সংকটের কারণে সুদূর পশ্চাৎপদ প্রান্তের ১৪০০-র বেশি জনজাতি পরিবারকে জরুরি শুকনো খাদ্যসামগ্রী ও বিশুদ্ধ পানীয় জল পৌঁছে দেওয়া হচ্ছে।',
      raised: 'এখনও পর্যন্ত সংগৃহীত',
      goal: 'প্রয়োজনীয় লক্ষ্য',
      donors: 'উদার দাতা',
      daysLeft: 'দিন বাকি',
      cta: 'জরুরি রেশন কিট প্রদান করুন (₹১,৫০০)',
      share: 'আবেদন শেয়ার করুন',
    },
    about: {
      badge: 'নবোদয় সেবা নিকেতন পরিচিতি',
      title: 'মাটির সাথে নিবিড় যোগ, মানবিক মর্যাদার অঙ্গীকার',
      subtitle: 'পুরুলিয়ার স্থানীয় শিক্ষাবিদ, ডাক্তার ও সমাজকর্মীদের উদ্যোগে প্রতিষ্ঠিত নবোদয় সেবা নিকেতন (NSN) দীর্ঘ ১৭ বছর ধরে গ্রামীণ পিছিয়ে পড়া পরিবারগুলির পাশে রয়েছে।',
      missionTitle: 'আমাদের লক্ষ্য (Mission)',
      missionText: 'প্রান্তিক গ্রামীণ, দলিত ও আদিবাসী জনগোষ্ঠীর জন্য মানসম্মত শিক্ষা, প্রাথমিক স্বাস্থ্য পরিষেবা, নারীদের অর্থনৈতিক স্বনির্ভরতা এবং টেকসই পরিবেশ সুরক্ষা নিশ্চিত করা।',
      visionTitle: 'আমাদের স্বপ্ন (Vision)',
      visionText: 'একটি ন্যায়পরায়ণ ও আত্মমর্যাদাশীল সমাজ যেখানে প্রতিটি শিশু স্কুলে যাবে, প্রতিটি পরিবার বিশুদ্ধ জল ও স্বাস্থ্য পাবে এবং কোনও নারী দারিদ্র্যের কারণে পিছিয়ে থাকবে না।',
      historyTitle: 'আমাদের ১৭ বছরের সেবাযাত্রা',
      historyText: '২০০৮ সালে একটি সাধারণ নৈশ পাঠশালা থেকে শুরু করে আজ ১২৪টি প্রত্যন্ত গ্রামে শিক্ষা কেন্দ্র, ভ্রাম্যমাণ স্বাস্থ্য ভ্যান, সৌর পানীয় জল ও স্বনির্ভর মহিলা দল বিস্তার লাভ করেছে।',
      leadershipTitle: 'পরিচালন সমিতি ও গ্রামীণ নেতৃত্ব',
      leadershipSubtitle: 'বিশিষ্ট শিক্ষাবিদ, চিকিৎসক ও অভিজ্ঞ সমাজকর্মীদের সুচিন্তিত দিকনির্দেশনায় পরিচালিত।',
    },
    programs: {
      badge: '১০টি মূল সেবা ক্ষেত্র',
      title: 'সামগ্রিক তৃণমূল কর্মসূচি',
      subtitle: 'আমরা দূরবর্তী গ্রামীণ ও জনজাতি অঞ্চলের মূল সমস্যাগুলি দূর করতে বাস্তবসম্মত ও কার্যকর প্রকল্প পরিচালনা করি।',
      allPrograms: 'সবকটি ১০টি ক্ষেত্র',
      sponsorMonthly: 'মাসিক পৃষ্ঠপোষকতা করুন',
      beneficiaries: 'উপকৃত মানুষ',
      villages: 'সক্রিয় গ্রাম',
      highlights: 'প্রধান সাফল্যসমূহ:',
    },
    campaigns: {
      badge: 'আশার হাত বাড়ান',
      title: 'চলমান অর্থসংগ্রহ কর্মসূচি',
      subtitle: 'একটি নির্দিষ্ট গ্রামীণ উদ্যোগে সরাসরি অর্থসাহায্য করুন। আপনার প্রতিটি পয়সা সরাসরি মাঠপর্যায়ের সেবাকাজে ব্যবহৃত হয়।',
      supportThisCause: 'এই উদ্যোগে সহায়তা করুন',
      daysLeft: 'দিন বাকি',
      taxExempt: '৮০জি ধারার অধীনে ৫০% আয়কর ছাড়ের সুবিধা',
    },
    impact: {
      badge: 'আর্থিক স্বচ্ছতা ও দায়বদ্ধতা',
      title: 'প্রমাণিত প্রভাব, যথাযথ নিরীক্ষিত',
      subtitle: 'প্রতিটি দানের হিসাব শতভাগ স্বচ্ছতায় রক্ষিত হয়। প্রতিটি টাকার ৮৭.৪% অংশ সরাসরি মাঠপর্যায়ের কার্যক্রমে ব্যয় করা হয়।',
      fundAllocation: 'নিরীক্ষিত তহবিল বরাদ্দ (২০২৪-২৫ অর্থবর্ষ)',
      auditedReports: 'বার্ষিক হিসাব ও অডিট রিপোর্ট',
      downloadAudit: 'রিপোর্ট দেখুন ও ডাউনলোড করুন',
      efficiencyNotice: 'নবোদয় সেবা নিকেতনের সমস্ত আয়-ব্যয়ের হিসাব স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্ট দ্বারা যথাযথভাবে নিরীক্ষিত ও নীতি আয়োগের নিয়মানুযায়ী প্রকাশিত।',
    },
    stories: {
      badge: 'বাস্তব জীবনের রূপান্তর',
      title: 'মর্যাদা ও আত্মবিশ্বাসের কাহিনী',
      subtitle: 'প্রতিটি সংখ্যার পেছনে রয়েছে এক একটি মানুষের জীবনের নবজাগরণ। দেখুন কীভাবে আমাদের কার্যক্রমের মাধ্যমে বদলেছে তাদের ভবিষ্যৎ।',
      beforeLabel: 'সহায়তার পূর্বে:',
      afterLabel: 'বর্তমান অগ্রগতি:',
      sponsorSimilar: 'আরেকটি শিশুর পাশে দাঁড়ান',
    },
    gallery: {
      badge: 'মাঠপর্যায়ের চিত্রশালা',
      title: 'সেবা, কর্মযজ্ঞ ও পরিবর্তনের স্থিরচিত্র',
      subtitle: 'আমাদের শিক্ষাকেন্দ্র, ভ্রাম্যমাণ স্বাস্থ্যশিবির ও প্রত্যন্ত জনজাতির জীবনযাত্রার বাস্তব দৃশ্যপট।',
      filters: {
        all: 'সকল কার্যক্রম',
        education: 'শিক্ষা',
        healthcare: 'স্বাস্থ্য',
        women: 'নারী স্বনির্ভরতা',
        wash: 'বিশুদ্ধ জল',
        environment: 'বৃক্ষরোপণ',
        relief: 'ত্রাণ বিতরণ',
      },
    },
    csr: {
      badge: 'প্রাতিষ্ঠানিক ও সিএসআর পার্টনারশিপ',
      title: 'অর্থবহ সিএসআর (CSR) প্রকল্পের জন্য আমাদের সাথে যুক্ত হন',
      subtitle: 'নবোদয় সেবা নিকেতন কর্পোরেট বিষয়ক মন্ত্রকে (MCA Form CSR-1) নিবন্ধিত। আমরা কোম্পানি আইন ২০১৩-র Schedule VII অনুযায়ী প্রত্যয়িত প্রকল্প পরিচালনা করি।',
      requestProposal: 'কাস্টমাইজড সিএসআর প্রস্তাবনার অনুরোধ করুন',
      volunteerTitle: 'আপনার দক্ষতা দিয়ে পাশে থাকুন',
      volunteerSubtitle: 'আপনি শিক্ষক, চিকিৎসক, ইঞ্জিনিয়ার বা শিক্ষার্থী যাই হোন না কেন—আপনার মূল্যবান সময় গ্রামীন সমাজের জীবনে নতুন দিশা দেখাতে পারে।',
      volunteerBtn: 'স্বেচ্ছাসেবক হিসেবে আবেদন করুন',
    },
    events: {
      badge: 'কমিউনিটি ক্যালেন্ডার',
      title: 'আসন্ন সেবা শিবির ও কর্মসূচির তালিকা',
      subtitle: 'আমাদের গ্রামীণ কার্যক্রম সরাসরি পরিদর্শন করুন। প্রতিটি অনুষ্ঠান সাধারণ মানুষ, দাতা ও স্বেচ্ছাসেবকদের জন্য উন্মুক্ত।',
      expectedBeneficiaries: 'উপকৃত মানুষ',
    },
    faq: {
      badge: 'সাধারণ প্রশ্নোত্তর (FAQ)',
      title: 'দান, আয়কর ছাড় ও কার্যক্রম সম্পর্কিত তথ্য',
      subtitle: '৮০জি সার্টিফিকেট, তহবিলের সঠিক ব্যবহার ও কেন্দ্র পরিদর্শনের সকল বিবরণ এখানে জেনে নিন।',
      calloutTitle: '৮০জি রসিদ বা ব্যাংক ট্রান্সফার নিয়ে কোনো প্রশ্ন আছে?',
      calloutSubtitle: 'আমাদের দাতা সহায়তা ডেস্ক সোমবার থেকে শনিবার (সকাল ৯টা - সন্ধ্যা ৬টা) সেবা প্রদান করে।',
      callBtn: 'হেল্পলাইনে কল করুন',
    },
    contact: {
      badge: 'যোগাযোগ করুন',
      title: 'আমাদের কেন্দ্রে আসুন, ফোন করুন অথবা লিখুন',
      subtitle: 'শুভানুধ্যায়ী, স্বেচ্ছাসেবক ও গবেষকদের আমাদের আনন্দ পাঠশালা ও স্বাস্থ্য শিবিরে সাদর আমন্ত্রণ জানাই।',
      headOffice: 'নিবন্ধিত প্রধান কার্যালয় ও ফিল্ড ক্যাম্পাস',
      cityOffice: 'কলকাতা সমন্বয় ডেস্ক',
      directTransfer: 'সরাসরি ব্যাংক ট্রান্সফার (NEFT / RTGS)',
      formTitle: 'বার্তা পাঠান বা ফিল্ড পরিদর্শনের তারিখ ঠিক করুন',
      formSubtitle: 'আমাদের শিক্ষামূলক প্রকল্প সম্পর্কে জানতে বা কোনো বিষয়ে আলোচনা করতে নিচের ফর্মে লিখুন।',
      nameLabel: 'আপনার পুরো নাম',
      emailLabel: 'ইমেইল অ্যাড্রেস',
      phoneLabel: 'ফোন / মোবাইল নম্বর',
      subjectLabel: 'বিষয় / কারণ',
      messageLabel: 'আপনার বার্তা / প্রশ্ন',
      sendBtn: 'নবোদয় সেবা নিকেতনে বার্তা পাঠান',
    },
    footer: {
      tagline: 'নিবন্ধিত সংস্থা • গ্রামীণ সমাজের সার্বিক উন্নয়নে নিবেদিত',
      aboutText: 'নবোদয় সেবা নিকেতন একটি অলাভজনক সমাজকল্যাণমূলক সংস্থা যা গুণগত শিক্ষা, স্বাস্থ্যসেবা, নারী ক্ষমতায়ন, বিশুদ্ধ জল এবং দুর্যোগ সুরক্ষার মাধ্যমে গ্রামীণ জীবনের রূপান্তরে প্রতিশ্রুতিবদ্ধ।',
      interventions: 'প্রধান কার্যক্রম',
      transparency: 'স্বচ্ছতা',
      stayConnected: 'যুক্ত থাকুন',
      newsletterText: 'নিয়মিত মাঠপর্যায়ের রিপোর্ট ও শিশুদের অগ্রগতির খবর পেতে আপনার ইমেইল দিন।',
      subscribeBtn: 'সাবস্ক্রাইব',
      rights: 'নবোদয় সেবা নিকেতন (NSN)। সর্বস্বত্ব সংরক্ষিত।',
    },
    modal: {
      donateTitle: 'নবোদয় সেবা নিকেতনে অনুদান দিন',
      donateSubtitle: 'আয়কর আইনের ধারা ৮০জি অনুসারে ৫০% করছাড় প্রাপ্ত • নিবন্ধিত সংস্থা',
      frequencyOnce: 'এককালীন অনুদান',
      frequencyMonthly: 'মাসিক আশা সারথী',
      selectAmount: 'পরিমাণ নির্বাচন বা লিখুন (INR)',
      taxSaveNote: '৮০জি ধারার মাধ্যমে ৫০% পর্যন্ত করছাড়ের সুবিধা নিন',
      directTo: 'আমার অনুদান যে খাতে যাবে',
      donorDetails: '৮০জি করছাড় রসিদের জন্য দাতার বিবরণ',
      fullName: 'পুরো আইনি নাম',
      email: 'ইমেইল (এই ঠিকানায় রসিদ পাঠানো হবে)',
      phone: 'মোবাইল / হোয়াটসঅ্যাপ নম্বর',
      pan: 'প্যান কার্ড নম্বর (যেমন: ABCDE1234F)',
      address: 'ঠিকানা',
      city: 'শহর',
      pincode: 'পিন কোড',
      paymentMode: 'পেমেন্ট মাধ্যম বেছে নিন',
      completeDonation: 'অনুদান সম্পন্ন করুন ও ৮০জি রসিদ পান',
      volunteerTitle: 'স্বেচ্ছাসেবক বা ইন্টার্ন হিসেবে যোগ দিন',
      volunteerSubtitle: 'গ্রামীণ বাংলায় পরিবর্তনের অংশীদার হয়ে উঠুন',
      volunteerSubmit: 'আবেদনপত্র জমা দিন',
      receiptSearchTitle: 'পূর্ববর্তী ৮০জি রসিদ ডাউনলোড করুন',
      receiptSearchSubtitle: 'আয়কর রিটার্ন জমার জন্য ডিজিটাল রসিদ তৎক্ষণাৎ সংগ্রহ করুন',
      searchBtn: 'রসিদ খুঁজুন',
    },
  },
};
