export interface NavItem {
  name: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export const STATS_GRID = [
  {
    id: "stat-1",
    label: "Case Success Rate",
    value: "99%",
    desc: "Unwavering commitment to client victories across complex cases.",
    bgClass: "bg-[#F5F1E8] text-[#2C261E]",
    badgeClass: "bg-[#E6DEC9] text-[#7A6642]",
    icon: "award",
  },
  {
    id: "stat-2",
    label: "Years Experience",
    value: "25+",
    desc: "Decades of proven leadership in state, federal & appellate courts.",
    bgClass: "bg-[#E9F0EC] text-[#1E2D26]",
    badgeClass: "bg-[#D2E2D7] text-[#34624D]",
    icon: "briefcase",
  },
  {
    id: "stat-3",
    label: "Satisfied Clients",
    value: "1,500+",
    desc: "Trusted by high-growth startups, executives, and individuals.",
    bgClass: "bg-[#F9ECE7] text-[#3A221C]",
    badgeClass: "bg-[#F1D7CE] text-[#8C4F40]",
    icon: "users",
  },
  {
    id: "stat-4",
    label: "Legal Experts",
    value: "50+",
    desc: "Specialized attorneys delivering comprehensive representation.",
    bgClass: "bg-[#F8F5EE] text-[#2A2B24]",
    badgeClass: "bg-[#EAE4D2] text-[#696144]",
    icon: "shield",
  },
];

export const OVERLAPPING_CARDS = [
  {
    title: "Navigating Complex Corporate Law with Confidence and Expertise",
    category: "Corporate & M&A Advisory",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    desc: "Providing strategic guidance on corporate governance, restructuring, and cross-border transactions for enterprise leaders.",
    author: "Elena Vance, Esq.",
  },
  {
    title: "Proven Track Record in Courtroom Representation & High-Stakes Cases",
    category: "Commercial Litigation",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    desc: "Fierce advocacy backed by deep empirical preparation, defending client interests with resolute determination.",
    author: "Marcus Sterling, Lead Trial Counsel",
  },
];

export const LEGAL_FIELDS = [
  {
    id: "corporate-law",
    title: "Corporate and Business Law",
    shortDesc: "Comprehensive counsel for business formations, mergers, acquisitions, regulatory compliance, and strategic contracts.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    badge: "Enterprise",
    features: [
      "Mergers & Acquisitions",
      "Corporate Governance & Compliance",
      "Joint Ventures & Equity Structuring",
      "Commercial Dispute Mitigation",
    ],
  },
  {
    id: "family-law",
    title: "Family Law & Private Wealth",
    shortDesc: "Compassionate resolution of high-asset divorces, custody agreements, prenuptial agreements, and private estate trusts.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    badge: "Client Focused",
    features: [
      "High Net-Worth Dissolution",
      "Child Custody & Parental Rights",
      "Postnuptial & Asset Protection",
      "Family Mediation Services",
    ],
  },
  {
    id: "civil-rights",
    title: "Civil Litigation & Defense",
    shortDesc: "Tenacious defense in complex civil lawsuits, constitutional protections, class actions, and fiduciary liability claims.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    badge: "High Stakes",
    features: [
      "Breach of Fiduciary Duty",
      "Defamation & Whistleblower Claims",
      "Appellate Representation",
      "Civil Rights Enforcement",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Estate Planning",
    shortDesc: "Safeguarding valuable properties, navigating zoning regulations, commercial leases, and generational wealth preservation.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    badge: "Asset Security",
    features: [
      "Commercial Acquisitions & Leases",
      "Zoning & Land Use Disputes",
      "Revocable Trusts & Will Execution",
      "Tax Efficient Estate Structuring",
    ],
  },
  {
    id: "ip-cyber",
    title: "Intellectual Property & Cyber Law",
    shortDesc: "Protecting proprietary algorithms, patent filings, trademark defense, and digital privacy compliance across international jurisdictions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    badge: "Innovation",
    features: [
      "Patent & Trademark Portfolio Defense",
      "SaaS Licensing & Data Security",
      "Trade Secret Enforcement",
      "AI & Intellectual Property Advisory",
    ],
  },
];

export const PORTFOLIO_CASES = [
  {
    id: "case-1",
    title: "Cross-Border Acquisition Defense",
    category: "M&A Advisory",
    result: "$140M Acquisition Approved",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    desc: "Successfully navigated complex antitrust audits and regulatory clearance for a major transatlantic tech merger.",
    tag: "High Profile",
  },
  {
    id: "case-2",
    title: "Corporate Restructuring & Acquisition",
    category: "Corporate Restructure",
    result: "100% Asset Preservation",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    desc: "Led strategic debt consolidation and equity recapitalization for an international logistics syndicate under strict court deadlines.",
    tag: "Featured Case",
    featured: true,
  },
  {
    id: "case-3",
    title: "Commercial Intellectual Property Dispute",
    category: "IP Litigation",
    result: "$48M Settlement Secured",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    desc: "Defended key patent rights for a clean energy pioneer against multi-national infringement claims in federal district court.",
    tag: "Federal Trial",
  },
];

export const EXPERT_TEAM = [
  {
    name: "Eleanor Vance",
    role: "Managing Partner & Senior Counsel",
    experience: "18+ Years Experience",
    bio: "Harvard Law alumna with unmatched expertise in complex corporate mergers and international business governance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    specialty: "Corporate M&A, Governance",
  },
  {
    name: "Marcus Sterling",
    role: "Lead Trial Counsel & Advocate",
    experience: "22+ Years Experience",
    bio: "Renowned litigator known for courtroom precision, strategic cross-examinations, and precedent-setting verdicts.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
    specialty: "High-Stakes Commercial Litigation",
    featured: true,
  },
  {
    name: "Sophia Chen",
    role: "Partner, IP & Tech Regulations",
    experience: "14+ Years Experience",
    bio: "Former federal advisory attorney specializing in frontier technologies, digital privacy, and multinational trademark protection.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
    specialty: "Intellectual Property & Cybersecurity",
  },
];

export const PRICING_PACKAGES = [
  {
    name: "Advisory Starter",
    priceMonthly: 199,
    priceAnnual: 159,
    caseFee: "$2,500 retainer",
    description: "Ideal for individuals and early-stage entrepreneurs needing ongoing legal compliance & routine document reviews.",
    features: [
      "2 Monthly 1-on-1 Consultation Sessions",
      "Standard Contract Drafting & Revisions",
      "Corporate Entity Annual Filings",
      "Priority Email Response within 24h",
      "Secure Digital Client Portal Access",
    ],
    popular: false,
    cta: "Select Starter",
  },
  {
    name: "Corporate Growth",
    priceMonthly: 799,
    priceAnnual: 649,
    caseFee: "$6,500 retainer",
    description: "Our most popular comprehensive legal suite for scaling businesses, joint ventures, and dynamic operations.",
    features: [
      "Unlimited Monthly Consultations",
      "Full Commercial Contract Governance",
      "Employment & IP Protection Safeguards",
      "Proactive Regulatory Compliance Audits",
      "Dedicated Senior Associate Attorney",
      "Direct Emergency Hotline Support",
    ],
    popular: true,
    cta: "Choose Growth Plan",
  },
  {
    name: "Enterprise Counsel",
    priceMonthly: 1599,
    priceAnnual: 1299,
    caseFee: "$15,000 retainer",
    description: "Complete fractional General Counsel representation with trial-ready litigation readiness and round-the-clock advisory.",
    features: [
      "Full Fractional General Counsel Suite",
      "High-Stakes M&A & Due Diligence",
      "Active Courtroom & Arbitration Defense",
      "Bespoke Cross-Border Tax Strategies",
      "24/7 Direct Partner Access",
      "White-Glove Boardroom Attendance",
    ],
    popular: false,
    cta: "Select Enterprise",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Clario's legal team provided unparalleled guidance during our international restructuring. Their attention to detail, proactive communication, and strategic mastery made all the difference in preserving our shareholder equity.",
    author: "David Harrison",
    title: "Chief Executive Officer",
    company: "Apex Global Holdings",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseType: "Corporate Merger",
  },
  {
    quote: "When facing a high-stakes patent dispute against a conglomerate, Marcus Sterling and the Clario team dismantled the opposition's claims step-by-step. They secured a complete victory that preserved our technology leadership.",
    author: "Sarah Montgomery",
    title: "Founder & CTO",
    company: "Aetheria BioSystems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseType: "Patent Defense",
  },
  {
    quote: "The level of empathy combined with razor-sharp legal acumen was unlike any firm I've ever retained. They resolved our complex family estate settlement amicably, saving years of court delays.",
    author: "Robert Kowalski",
    title: "Private Client & Trustee",
    company: "Kowalski Heritage Trust",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseType: "Private Wealth",
  },
];

export const BLOG_POSTS = [
  {
    title: "Key Legal Considerations for Tech Startups Navigating Series A Financing",
    date: "October 14, 2026",
    category: "Venture Capital",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    summary: "Essential guidelines on protective provisions, liquidation preferences, and IP assignments before closing your institutional round.",
  },
  {
    title: "The Shifting Landscape of Artificial Intelligence & Copyright Protections",
    date: "September 28, 2026",
    category: "IP & Technology",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    summary: "How recent federal court rulings are defining generative AI model training rights and commercial authorship boundaries.",
  },
  {
    title: "Strategic Contract Clauses That Mitigate Supply Chain Disruption Risks",
    date: "September 12, 2026",
    category: "Commercial Contracts",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    summary: "Re-evaluating force majeure, price escalation, and allocation covenants to shield manufacturing clients from global volatility.",
  },
];
