import { FocusProgram, Campaign, ImpactStory, GalleryItem, EventItem, FAQItem } from '../types';
import { LOGO_CONFIG } from '../config/branding';

export { LOGO_CONFIG };

export const NSN_DETAILS = {
  name: 'Navadoy Seva Niketan',
  shortName: 'NSN',
  logoUrl: LOGO_CONFIG.url,
  logoAlt: LOGO_CONFIG.alt,
  hindiName: 'नवोदय सेवा निकेतन',
  bengaliName: 'নবোদয় সেবা নিকেতন',
  tagline: 'Empowering Lives, Transforming Rural Communities',
  hindiTagline: 'जीवन सशक्तिकरण, ग्रामीण समुदाय परिवर्तन',
  bengaliTagline: 'জীবন ক্ষমতায়ন, গ্রামীণ সমাজের রূপান্তর',
  establishedYear: '2008',
  registrationNo: 'S/1L/74829 (Societies Registration Act XXI of 1860)',
  section12AReg: 'AACTN5892QE20214',
  section80GReg: 'AACTN5892QF20215 (50% Tax Exemption for Indian Donors)',
  csrRegNo: 'CSR00041285 (Ministry of Corporate Affairs, Govt of India)',
  darpanId: 'WB/2019/0239148 (NITI Aayog NGO-Darpan)',
  panNo: 'AACTN5892Q',
  tanNo: 'CALN03921B',
  headOffice: 'Navadoy Seva Niketan Bhawan, Village & Post: Balarampur, Block: Joypur, District: Purulia, West Bengal - 723201, India',
  cityOffice: 'Liaison Office: 42/B, Rashbehari Avenue, Gariahat, Kolkata - 700029, West Bengal',
  phone1: '+91 94342 18765',
  phone2: '+91 82501 99432',
  email: 'contact@navadoysevaniketan.org',
  donationEmail: 'donations@navadoysevaniketan.org',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
  bankDetails: {
    accountName: 'NAVADOY SEVA NIKETAN',
    bankName: 'State Bank of India (SBI)',
    accountNumber: '38294109842',
    ifscCode: 'SBIN0001847',
    branchName: 'Joypur Branch, Purulia',
    upiId: 'navadoyseva@sbi',
  }
};

export const IMPACT_METRICS = [
  { label: 'Children Educated', value: 18450, suffix: '+', icon: 'BookOpen', detail: 'From pre-primary through high school & computer literacy' },
  { label: 'Healthcare Beneficiaries', value: 42800, suffix: '+', icon: 'Stethoscope', detail: 'Free medical camps, cataract surgeries & medicine distributions' },
  { label: 'Women Empowered', value: 6250, suffix: '+', icon: 'Users', detail: 'Trained in SHGs, tailoring, poultry & financial independence' },
  { label: 'Safe Drinking Water Kiosks', value: 38, suffix: ' Units', icon: 'Droplets', detail: 'Serving over 22,000 villagers with fluoride-free water' },
  { label: 'Trees Planted & Protected', value: 92400, suffix: '+', icon: 'Sprout', detail: 'Indigenous fruit and forest trees in community groves' },
  { label: 'Rural Villages Reached', value: 124, suffix: ' Villages', icon: 'Home', detail: 'Across remote backward tribal and farming blocks' },
];

export const FOCUS_PROGRAMS: FocusProgram[] = [
  {
    id: 'education',
    title: 'Quality Education & Child Development',
    hindiTitle: 'गुणवत्तापूर्ण शिक्षा एवं बाल विकास',
    bengaliTitle: 'মানসম্মত শিক্ষা ও শিশু বিকাশ',
    category: 'Education',
    tagline: 'Bridging the rural learning divide with after-school tutoring, STEM labs & school kits.',
    description: 'We run 16 community-led remedial learning centers (Vidya Kendras) providing joyful foundational learning, free textbooks, school uniforms, and digital computer tablets to first-generation learners and tribal children.',
    keyHighlights: [
      '16 Vidya Learning Centers running across 32 villages',
      'Special girl-child scholarship to prevent early dropout',
      'Smart mobile tablet labs teaching coding basics and science experiments',
      'Daily wholesome nutritious midday snack to combat hunger during studies'
    ],
    beneficiariesServed: '18,450+ Children',
    activeVillages: 38,
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 1200,
    sponsorDescription: 'Sponsor one rural child’s complete monthly schooling, books, uniform and nutrition.'
  },
  {
    id: 'healthcare',
    title: 'Community Healthcare & Child Nutrition',
    hindiTitle: 'सामुदायिक स्वास्थ्य एवं पोषण सेवा',
    bengaliTitle: 'কমিউনিটি স্বাস্থ্য ও শিশু পুষ্টি সেবা',
    category: 'Healthcare',
    tagline: 'Doorstep mobile clinic care, free diagnostics, and combatting severe acute malnutrition.',
    description: 'Our two equipped Mobile Health Vans navigate rough terrain to deliver weekly diagnostic checkups, doctor consultations, prenatal maternal care, and free life-saving medicines to hamlets situated 30+ km away from any hospital.',
    keyHighlights: [
      'Weekly Mobile Clinic visits to 42 off-grid villages',
      'Over 1,200 cataract surgeries performed in partnership with eye hospitals',
      'Poshan Kendra: targeted high-protein dietary therapy for malnourished toddlers',
      'Free hemoglobin and blood sugar diagnostic tests for elderly and pregnant mothers'
    ],
    beneficiariesServed: '42,800+ Patients',
    activeVillages: 52,
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 2500,
    sponsorDescription: 'Fund 1 month of essential diagnostic tests, checkups & medicines for 5 elderly villagers.'
  },
  {
    id: 'women',
    title: 'Women Empowerment & Self-Help Groups (SHGs)',
    hindiTitle: 'महिला सशक्तिकरण एवं स्वावलंबन',
    bengaliTitle: 'নারী ক্ষমতায়ন ও স্বনির্ভর দল (SHG)',
    category: 'Empowerment',
    tagline: 'Building financial self-reliance through vocational crafts, tailoring & micro-enterprise.',
    description: 'We organize rural women into vibrant Self-Help Groups, training them in commercial tailoring, jute handicraft weaving, poultry farming, organic vermicomposting, and digital banking so they lead their households out of poverty.',
    keyHighlights: [
      '350+ Self-Help Groups mobilized and linked with banking institutions',
      'Navadoy Silai Kendra: 6-month certified sewing and garment manufacturing course',
      'Direct market linkages for rural artisans to sell festive bags & handlooms',
      'Legal literacy workshops on domestic violence, property rights & banking'
    ],
    beneficiariesServed: '6,250+ Women',
    activeVillages: 45,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 3000,
    sponsorDescription: 'Sponsor a vocational tailoring machine kit and 3-month stipend for a rural woman.'
  },
  {
    id: 'wash',
    title: 'Water, Sanitation & Hygiene (WASH)',
    hindiTitle: 'स्वच्छ जल, स्वच्छता एवं स्वास्थ्य रक्षा',
    bengaliTitle: 'বিশুদ্ধ পানীয় জল, স্বাস্থ্য ও পরিচ্ছন্নতা (WASH)',
    category: 'WASH',
    tagline: 'Safe arsenic & fluoride-free drinking water, clean toilets, and menstrual hygiene.',
    description: 'Combating water-borne diseases by drilling deep community borewells equipped with solar-powered filtration units, constructing private girl-friendly school sanitation blocks, and running widespread menstrual hygiene campaigns.',
    keyHighlights: [
      '38 Solar-powered fluoride & iron filtration water kiosks installed',
      '45 Village schools outfitted with segregated clean sanitation blocks',
      'Monthly biodegradable sanitary pad distribution and stigma-breaking workshops',
      'Trained Village Water Committees to ensure lifelong maintenance of water plants'
    ],
    beneficiariesServed: '26,000+ Villagers',
    activeVillages: 38,
    imageUrl: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 5000,
    sponsorDescription: 'Support the annual maintenance and clean filter replacements for 1 community water kiosk.'
  },
  {
    id: 'livelihood',
    title: 'Livelihood & Youth Vocational Training',
    hindiTitle: 'आजीविका एवं युवा व्यावसायिक प्रशिक्षण',
    bengaliTitle: 'জীবিকা ও যুব বৃত্তিমূলক প্রশিক্ষণ',
    category: 'Livelihoods',
    tagline: 'Industry-relevant job skills for rural dropouts, electricians, computer operators & farmers.',
    description: 'Empowering unemployed rural youth with government-certified vocational courses in electrical wiring, solar panel technician work, mobile repairing, computer typing, and modern organic horticulture.',
    keyHighlights: [
      '78% Placement and self-employment rate among certified graduates',
      'Dedicated computer hardware & basic accounting lab',
      'Sustainable agri-skills: drip irrigation, polyhouse farming, and beekeeping',
      'Mentorship for village youth to start local repair and service shops'
    ],
    beneficiariesServed: '3,800+ Youths',
    activeVillages: 28,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 4000,
    sponsorDescription: 'Cover tuition, practical toolkit and certification fee for 1 underprivileged youth.'
  },
  {
    id: 'environment',
    title: 'Environment & Climate Resilience',
    hindiTitle: 'पर्यावरण संरक्षण एवं हरित ग्राम अभियान',
    bengaliTitle: 'পরিবেশ সংরক্ষণ ও জলবায়ু সুরক্ষা',
    category: 'Environment',
    tagline: 'Mass afforestation, community solar lighting, and pond rejuvenation in drought-prone areas.',
    description: 'Addressing arid soil erosion and climate stress through community tree plantations of native fruit species, rainwater harvesting ponds (Hapa systems), and clean solar street lighting for un-electrified hamlets.',
    keyHighlights: [
      '92,400+ Saplings planted with 88% survival rate through Geo-tagging',
      '18 Rainwater harvesting check-dams and silted village ponds deepened',
      '120 Solar street lights installed in previously dark village roads',
      'Zero-plastic village drives with cloth-bag distribution'
    ],
    beneficiariesServed: '124 Villages',
    activeVillages: 60,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 1500,
    sponsorDescription: 'Plant and adopt 25 indigenous fruit-bearing trees with drip protective tree guards.'
  },
  {
    id: 'human_rights',
    title: 'Human Rights & Child Protection',
    hindiTitle: 'मानव अधिकार एवं बाल सुरक्षा',
    bengaliTitle: 'মানবাধিকার ও শিশু সুরক্ষা',
    category: 'Rights & Protection',
    tagline: 'Rescuing children from hazardous labor, stopping child marriage, and pro-bono legal aid.',
    description: 'Operating vigilant community vigilance groups (Bal Suraksha Samitis) in coordination with local law enforcement to intervene against early child marriages, child trafficking, and hazardous brick-kiln employment.',
    keyHighlights: [
      '142 Child marriages stopped successfully through dialogue and legal intervention',
      'Free legal counselling camp conducted every month by advocate volunteers',
      'Child helpline 1098 partnership for swift grassroots rescues',
      'Awareness rallies on Right to Education (RTE) and Pocso Act protections'
    ],
    beneficiariesServed: '8,400+ Community Members',
    activeVillages: 44,
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 2000,
    sponsorDescription: 'Fund 1 legal awareness clinic & rapid intervention emergency support fund.'
  },
  {
    id: 'disaster_relief',
    title: 'Disaster Relief & Humanitarian Response',
    hindiTitle: 'आपदा राहत एवं पुनर्वास सेवा',
    bengaliTitle: 'দুর্যোগ ত্রাণ ও মানবিক পুনর্বাসন',
    category: 'Disaster Relief',
    tagline: 'Rapid emergency survival kits, dry rations, flood rescue, and winter warmth blanket drives.',
    description: 'Whenever floods, cyclones, or severe cold waves strike vulnerable rural communities, our grassroots volunteer cadre mobilizes within 12 hours with cooked meals, dry grains, tarpaulins, medicines, and winter blankets.',
    keyHighlights: [
      'Over 14,000 emergency ration kits distributed during disaster events',
      '8,500 High-grade woollen blankets distributed to destitute elders each winter',
      'Temporary water chlorination and medical camps during post-flood epidemic threats',
      'Reconstruction support for straw and mud huts destroyed by heavy storms'
    ],
    beneficiariesServed: '14,000+ Families',
    activeVillages: 70,
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80',
    sponsorAmountMonthly: 3500,
    sponsorDescription: 'Provide a complete family disaster survival kit with dry rations, water filters & tarpaulin.'
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'project-kanya-shiksha',
    title: 'Project Kanya Shiksha: Keep 500 Rural Girls in School',
    category: 'Education & Child Welfare',
    description: 'Providing comprehensive annual schooling support—uniforms, notebooks, tuition fees, and bicycle transport—to prevent adolescent girls from dropping out due to poverty.',
    targetAmount: 1000000,
    raisedAmount: 765000,
    donorCount: 342,
    daysRemaining: 12,
    location: 'Purulia & Bankura Districts',
    isUrgent: true,
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mobile-health-van',
    title: 'Project Arogya: Mobile Medical Van for 40 Remote Villages',
    category: 'Community Healthcare',
    description: 'Equipping our second all-terrain medical van with an on-board ECG, blood analyzer, portable ultrasound, and a full pharmacy for remote forest settlements.',
    targetAmount: 1800000,
    raisedAmount: 1320000,
    donorCount: 512,
    daysRemaining: 24,
    location: 'Chhatna & Joypur Forest Blocks',
    isUrgent: false,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'solar-drinking-water',
    title: 'Project Nirmal Jal: 10 Solar Water Filtration Plants',
    category: 'WASH & Health',
    description: 'Installing solar-powered deep borewells with iron & fluoride elimination filters to eradicate crippling fluorosis and diarrhea among 6,000 tribal villagers.',
    targetAmount: 1200000,
    raisedAmount: 940000,
    donorCount: 289,
    daysRemaining: 18,
    location: 'Barabazar & Bandwan Tribal Belt',
    isUrgent: true,
    imageUrl: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-tailoring-hub',
    title: 'Project Swabhimaan: 100 Livelihood Sewing Machines',
    category: 'Women Empowerment',
    description: 'Providing professional heavy-duty stitching machines and 3-month garment master training to 100 marginalized widows and destitute mothers.',
    targetAmount: 850000,
    raisedAmount: 615000,
    donorCount: 198,
    daysRemaining: 30,
    location: 'Navadoy Skill Center, Balarampur',
    isUrgent: false,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80'
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-anjali',
    name: 'Anjali Soren',
    age: 19,
    village: 'Khatra, Purulia',
    program: 'Quality Education & Girl Child Scholarship',
    headline: 'From Brick Kiln Laborer to First Female College Student of Her Hamlet',
    quote: 'If Navadoy Seva Niketan hadn’t intervened when I was 11, I would have spent my life carrying wet bricks. Today, I study Political Science and teach 20 kids in the evening.',
    story: 'Anjali’s parents migrated every winter to work as bonded laborers in brick kilns. NSN’s field team counseled the family, enrolled Anjali in our residential bridge school, and funded her board exams. Last year, she scored 82% in Higher Secondary and became the first girl from her Santhal village to enter college.',
    beforeState: 'Out-of-school laborer working 10 hours daily; risk of child marriage at age 14',
    afterState: '2nd Year B.A. Scholar, Youth Mentor, leading village literacy classes',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    year: '2024'
  },
  {
    id: 'story-rekha',
    name: 'Rekha Mahato',
    age: 34,
    village: 'Sirjam, Joypur',
    program: 'Women Empowerment & Self-Help Groups',
    headline: 'Widowed at 28, Now Running an Apparel Micro-Enterprise Employing 8 Women',
    quote: 'People told me my life was over after my husband died in an accident. NSN gave me training, a sewing machine, and self-belief. Now I pay for both my sons’ English-medium schooling.',
    story: 'Rekha joined the Maa Durga Self-Help Group facilitated by NSN. After graduating from our advanced tailoring course, she received a micro-loan through our banking tie-up. Today, her tailoring unit manufactures school uniforms for 6 nearby schools and provides regular income to 8 village women.',
    beforeState: 'Severe financial distress, unable to feed two toddlers, dependent on erratic daily labor',
    afterState: 'Earns ₹18,000+ monthly profit, owns her workshop, mentors other destitute widows',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=700&q=80',
    year: '2023'
  },
  {
    id: 'story-bikram',
    name: 'Bikram Murmu',
    age: 8,
    village: 'Baghmundi Forest Range',
    program: 'Community Healthcare & Child Nutrition (Poshan Kendra)',
    headline: 'Defeating Severe Acute Malnutrition to Become an Energetic Class Topper',
    quote: 'We had lost all hope when our baby fell so weak he couldn’t even lift his head. The NSN health van doctors were God’s angels for us.',
    story: 'At age 3, Bikram weighed merely 7.8 kg and suffered from chronic respiratory infections. The NSN Mobile Health Clinic diagnosed Severe Acute Malnutrition (SAM) and placed him under our intensive 90-day Poshan nutritional rehabilitation program with medical eggs, fortified milk, and micronutrients. Today, Bikram is healthy, vigorous, and loves playing football.',
    beforeState: 'Severe Acute Malnutrition (Grade III), recurrent pneumonia, unable to stand',
    afterState: 'Normal BMI, enrolled in 3rd standard, won 1st prize in school running race',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=80',
    year: '2022'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Digital Learning at Vidya Kendra',
    category: 'education',
    location: 'Balarampur Center',
    date: 'February 2025',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    caption: 'Tribal children exploring interactive science modules on tablets at our Vidya Learning Center.'
  },
  {
    id: 'g-2',
    title: 'Free Cataract Eye Surgery Camp',
    category: 'healthcare',
    location: 'Joypur Community Hall',
    date: 'January 2025',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    caption: 'Volunteer ophthalmologists screening elderly villagers for free lens replacement surgeries.'
  },
  {
    id: 'g-3',
    title: 'Women Sewing Mastery Batch',
    category: 'women',
    location: 'Navadoy Skill Hub',
    date: 'March 2025',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    caption: 'Graduation day for 35 rural women completing their 6-month certified garment tailoring course.'
  },
  {
    id: 'g-4',
    title: 'Clean Water Borewell Inauguration',
    category: 'wash',
    location: 'Bandwan Village',
    date: 'December 2024',
    imageUrl: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=800&q=80',
    caption: 'Villagers celebrate the launch of their solar-powered safe drinking water filtration kiosk.'
  },
  {
    id: 'g-5',
    title: 'Afforestation Drive: 5,000 Saplings',
    category: 'environment',
    location: 'Baghmundi Hills',
    date: 'August 2024',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    caption: 'School students and volunteers planting native fruit trees to revive eroded soil.'
  },
  {
    id: 'g-6',
    title: 'Winter Blanket & Ration Relief',
    category: 'relief',
    location: 'Ayodhya Pahar Foothills',
    date: 'January 2025',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    caption: 'Distributing warm woollen blankets and dry ration packages to destitute elderly villagers.'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'Mega Health & Multi-Speciality Screening Camp',
    date: 'Sunday, April 6, 2025',
    time: '8:30 AM - 4:00 PM IST',
    location: 'NSN Balarampur Campus, Purulia',
    category: 'Healthcare',
    description: 'Free consultations with general physicians, pediatricians, gynecologists, and on-spot medicine distribution.',
    expectedBeneficiaries: '1,500+ Villagers',
    coordinator: 'Dr. S. Chatterjee (Lead Medical Volunteer)'
  },
  {
    id: 'event-2',
    title: 'Annual Vidya Medha Scholarship Awards',
    date: 'Saturday, April 19, 2025',
    time: '10:00 AM - 2:00 PM IST',
    location: 'Joypur Town Hall',
    category: 'Education',
    description: 'Felicitating 250 girl students with bicycle keys, school kits, and college fee grants.',
    expectedBeneficiaries: '250 Students & Families',
    coordinator: 'Mrs. M. Roy (Education Director)'
  },
  {
    id: 'event-3',
    title: 'Monsoon Green Belt Plantation Kick-off',
    date: 'Thursday, June 5, 2025 (World Environment Day)',
    time: '7:00 AM - 1:00 PM IST',
    location: 'Along Subarnarekha River Basin',
    category: 'Environment',
    description: 'Community drive to plant 10,000 neem, mahua, mango, and peepal saplings with geo-tagged trackers.',
    expectedBeneficiaries: '14 Village Panchayats',
    coordinator: 'B. Sen (Environmental Officer)'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'tax80g',
    question: 'Are donations to Navadoy Seva Niketan eligible for tax exemption in India?',
    hindiQuestion: 'क्या नवोदय सेवा निकेतन को दिया गया दान भारत में कर छूट के लिए मान्य है?',
    bengaliQuestion: 'নবোদয় সেবা নিকেতনে দেওয়া অনুদান কি ভারতে আয়কর ছাড়ের যোগ্য?',
    answer: 'Yes, 100%! All donations made to Navadoy Seva Niketan are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961 (Registration No: AACTN5892QF20215). You will receive an official, digitally signed 80G receipt immediately containing our registration credentials and your PAN details for filing your ITR.',
    bengaliAnswer: 'হ্যাঁ, ১০০%! নবোদয় সেবা নিকেতনে প্রদত্ত সমস্ত অনুদান আয়কর আইনের ধারা ৮০জি অনুসারে ৫০% করছাড়ের যোগ্য (নিবন্ধন নং: AACTN5892QF20215)। অনুদানের সঙ্গে সঙ্গেই আইটিআর ফাইলিংয়ের উপযোগী প্রাতিষ্ঠানিক ডিজিটাল ৮০জি রসিদ প্রদান করা হয়।'
  },
  {
    category: 'donation',
    question: 'How do I know my donation is actually reaching the beneficiaries?',
    hindiQuestion: 'मुझे कैसे पता चलेगा कि मेरा दान वास्तव में जरूरतमंदों तक पहुंच रहा है?',
    bengaliQuestion: 'আমার অনুদান যে প্রকৃত অর্থে অভাবীদের কাছে পৌঁছাচ্ছে তা কীভাবে জানব?',
    answer: 'Transparency is our cornerstone. We maintain a 87.4% program efficiency ratio where the vast majority of funds directly fuel grassroots medicine, nutrition, books, and water filtration. Every donor receives bi-monthly impact reports with photo verifications, geo-tagged project updates, and annual audited financial statements.',
    bengaliAnswer: 'স্বচ্ছতাই আমাদের ভিত্তি। আমরা ৮৭.৪% ফিল্ড প্রোগ্রাম দক্ষতা বজায় রাখি, যার ফলে তহবিলের সিংহভাগ সরাসরি ওষুধ, খাদ্য, বই ও জল পরিশোধনে ব্যয় হয়। দাতারা নিয়মিত ছবিসহ অগ্রগতি রিপোর্ট ও বার্ষিক নিরীক্ষিত আর্থিক বিবরণী পেয়ে থাকেন।'
  },
  {
    category: 'donation',
    question: 'Can I donate via UPI, Google Pay, PhonePe, or Net Banking?',
    hindiQuestion: 'क्या मैं यूपीआई, गूगल पे, फोनपे या नेट बैंकिंग से दान कर सकता हूं?',
    bengaliQuestion: 'আমি কি ইউপিআই (UPI), গুগল পে, ফোনপে বা নেট ব্যাংকিংয়ের মাধ্যমে দান করতে পারি?',
    answer: 'Yes. We support all Indian digital payment methods including Instant UPI (Google Pay, PhonePe, Paytm, BHIM via direct QR scan or UPI ID: navadoyseva@sbi), Debit/Credit Cards, Net Banking, as well as direct RTGS/NEFT transfers to our State Bank of India operational account.',
    bengaliAnswer: 'হ্যাঁ। আমরা তাত্ক্ষণিক ইউপিআই (গুগল পে, ফোনপে, পেটিএম, ভিম কিউআর স্ক্যান বা UPI ID: navadoyseva@sbi), ডেবিট/ক্রেডিট কার্ড, নেট ব্যাংকিং এবং ভারতীয় স্টেট ব্যাংকের অ্যাকাউন্টে সরাসরি RTGS/NEFT ট্রান্সফার সমর্থন করি।'
  },
  {
    category: 'volunteer',
    question: 'Can I visit the field centers or volunteer in person?',
    hindiQuestion: 'क्या मैं जमीनी केंद्रों का दौरा कर सकता हूं या व्यक्तिगत रूप से स्वयंसेवा कर सकता हूं?',
    bengaliQuestion: 'আমি কি ফিল্ড কেন্দ্রগুলি পরিদর্শন করতে পারি বা সরাসরি স্বেচ্ছাসেবক হতে পারি?',
    answer: 'Absolutely! We encourage donors, students, and professionals to visit our learning centers, water kiosks, and medical camps in Purulia, West Bengal. We also offer 2-week to 6-month structured on-site volunteer internships as well as remote volunteering in social media, teaching, and curriculum design.',
    bengaliAnswer: 'অবশ্যই! আমরা শুভানুধ্যায়ী, শিক্ষার্থী ও পেশাজীবীদের পুরুলিয়ায় আমাদের শিক্ষাকেন্দ্র, জল কিয়স্ক ও স্বাস্থ্যশিবির পরিদর্শনে উৎসাহিত করি। এছাড়াও সরাসরি ফিল্ড ইন্টার্নশিপ ও দূরবর্তী অনলাইন স্বেচ্ছাসেবক হওয়ার সুযোগ রয়েছে।'
  },
  {
    category: 'programs',
    question: 'How is Navadoy Seva Niketan registered and governed?',
    hindiQuestion: 'नवोदय सेवा निकेतन किस प्रकार पंजीकृत और संचालित है?',
    bengaliQuestion: 'নবোদয় সেবা নিকেতন কীভাবে নিবন্ধিত ও পরিচালিত হয়?',
    answer: 'Navadoy Seva Niketan is registered under the West Bengal Societies Registration Act XXI of 1860 (Reg No. S/1L/74829). We are registered with NITI Aayog NGO-Darpan (WB/2019/0239148), certified under 12A & 80G of the IT Act, and registered for Corporate Social Responsibility (CSR-1: CSR00041285) with the Ministry of Corporate Affairs, Government of India.',
    bengaliAnswer: 'নবোদয় সেবা নিকেতন পশ্চিমবঙ্গ সোসাইটি রেজিস্ট্রেশন আইন ১৮৬০ (রেজিস্ট্রেশন নং S/1L/74829) এর অধীনে নিবন্ধিত। আমরা নীতি আয়োগ এনজিও-দর্পণ (WB/2019/0239148), আয়কর ১২এ ও ৮০জি এবং কেন্দ্রীয় কর্পোরেট বিষয়ক মন্ত্রকের সিএসআর-১ (CSR00041285) প্রত্যয়িত।'
  }
];

export const FINANCIAL_ALLOCATION = [
  { label: 'Direct Field Programs & Beneficiary Welfare', percentage: 87.4, color: '#059669', amount: '₹2,48,20,000' },
  { label: 'Field Staff, Logistics & Medical Operations', percentage: 7.2, color: '#2563eb', amount: '₹20,44,800' },
  { label: 'Auditing, Statutory Compliance & Legal Filings', percentage: 3.1, color: '#d97706', amount: '₹8,80,400' },
  { label: 'Donor Communication & Transparency Reporting', percentage: 2.3, color: '#9333ea', amount: '₹6,53,200' },
];

export const GOVERNING_BODY = [
  {
    name: 'Dr. Manoranjan Sengupta',
    role: 'President & Senior Social Worker',
    qualification: 'Retd. Professor & Human Rights Researcher',
    experience: '35+ years in rural socio-economic development and grassroots tribal mobilization.'
  },
  {
    name: 'Sri Subhash Chandra Mandal',
    role: 'General Secretary & Founder',
    qualification: 'M.S.W. (Social Work), Visva-Bharati',
    experience: 'Dedicated 22 years to establishing after-school education and clean water access across western Bengal.'
  },
  {
    name: 'Dr. Suniti Mukherjee',
    role: 'Health Director & Chief Medical Officer',
    qualification: 'M.B.B.S., D.C.H. (Pediatrics)',
    experience: 'Former Govt Medical Officer spearheading our mobile clinic reach and maternal health programs.'
  },
  {
    name: 'Smt. Pratima Mahato',
    role: 'Head of Women Empowerment & SHGs',
    qualification: 'Community Organiser & Artisan Mentor',
    experience: 'Pioneered micro-finance self-help groups for over 6,000 rural women artisans and weavers.'
  }
];
