import React, { useState } from "react";
import './App.css';
const mcqsByUnit = {
  1: [
    {
      question: "What does IPR stand for?",
      options: [
        "A) Intellectual Property Rights",
        "B) International Public Relations",
        "C) Internal Proprietary Regulation",
        "D) International Policy Review",
      ],
      answer: 0,
    },
    {
      question: "Which of the following can be considered a trade secret?",
      options: [
        "A) A recipe",
        "B) Company's logo",
        "C) Published book",
        "D) A Registered Trademark",
      ],
      answer: 0,
    },
    {
      question: "The Trade Secrets ensure ………",
      options: [
        "A) Competitive Advantage",
        "B) Production and Marketing monopoly",
        "C) Business Ethics",
        "D) Employee Invention",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP right is often used to protect the unique appearance or structure of a product?",
      options: [
        "A) Design Patent",
        "B) Trademark",
        "C) Copyright",
        "D) Patent",
      ],
      answer: 0,
    },
    {
      question:
        "Which organization is responsible for granting patents in the United States?",
      options: [
        "A) USPTO (United States Patent and Trademark Office)",
        "B) African Patent Office",
        "C) WIPO (World Intellectual Property Organization)",
        "D) EPO (European Patent Office)",
      ],
      answer: 0,
    },
    {
      question:
        "Which term refers to the exclusive right to reproduce, distribute, and display an original work?",
      options: ["A) Copyright", "B) Trademark", "C) Patent", "D) Trade Secret"],
      answer: 0,
    },
    {
      question: "What is the main purpose of intellectual property law?",
      options: [
        "A) To encourage innovation and creativity",
        "B) To promote competition",
        "C) To regulate international trade",
        "D) To manage public resources",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a requirement for obtaining a patent?",
      options: [
        "A) Commercial success",
        "B) Utility",
        "C) Non-obviousness",
        "D) Novelty",
      ],
      answer: 0,
    },
    {
      question:
        "What does the term 'public domain' refer to in intellectual property?",
      options: [
        "A) Works that are free to use without IP restrictions",
        "B) Works that are protected by IP laws",
        "C) IP rights that are in litigation",
        "D) IP rights that are pending approval",
      ],
      answer: 0,
    },
    {
      question:
        "Which type of intellectual property is concerned with the protection of distinctive symbols, designs, or words?",
      options: ["A) Trademark", "B) Patent", "C) Copyright", "D) Trade Secret"],
      answer: 0,
    },
    {
      question: "Which of the following is protected by copyright law?",
      options: [
        "A) Literary works",
        "B) Industrial designs",
        "C) Business ideas",
        "D) Scientific discoveries",
      ],
      answer: 0,
    },
    {
      question: "What is 'fair use' in copyright law?",
      options: [
        "A) Limited use of copyrighted material without permission",
        "B) Unauthorized copying of material",
        "C) Exclusive rights granted to the creator",
        "D) Protection for brand names",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a form of IP protection under copyright law?",
      options: [
        "A) Scientific discoveries",
        "B) Art works",
        "C) Literary works",
        "D) Software",
      ],
      answer: 0,
    },
    {
      question:
        "What is the term for copying and using someone else’s copyrighted work without permission?",
      options: [
        "A) Copyright infringement",
        "B) Trade secret misappropriation",
        "C) Patent infringement",
        "D) Trademark dilution",
      ],
      answer: 0,
    },
    {
      question: "Which type of intellectual property protects inventions?",
      options: ["A) Patent", "B) Trademark", "C) Copyright", "D) Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which organization deals with international IP disputes and policy development?",
      options: [
        "A) WIPO (World Intellectual Property Organization)",
        "B) WTO (World Trade Organization)",
        "C) ICC (International Chamber of Commerce)",
        "D) UN (United Nations)",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is NOT eligible for patent protection?",
      options: [
        "A) Scientific theories",
        "B) Business Method",
        "C) Physical Invention",
        "D) Industrial Design",
      ],
      answer: 0,
    },
    {
      question: "What is the primary role of the USPTO?",
      options: [
        "A) To grant Patent and Trademark",
        "B) To enforce copyright laws",
        "C) To protect trade secrets",
        "D) To manage international IP treaties",
      ],
      answer: 0,
    },
    {
      question: "Which of the following best describes a 'trademark'?",
      options: [
        "A) A symbol used to distinguish goods or services",
        "B) A written work that is original and creative",
        "C) An invention that is useful and novel",
        "D) A confidential business strategy",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP protection is most likely to be used for a new software program?",
      options: ["A) Copyright", "B) Trademark", "C) Patent", "D) Trade Secret"],
      answer: 0,
    },
    {
      question: "Which of the following is a feature of a design patent?",
      options: [
        "A) Protects the ornamental design of an object",
        "B) Protects the function of an invention",
        "C) Protects a company’s brand name",
        "D) Protects original written content",
      ],
      answer: 0,
    },
    {
      question: "Which IP right is generally not disclosed to the public?",
      options: [
        "A) Trade Secret",
        "B) Patent",
        "C) Trademark",
        "D) None of these",
      ],
      answer: 0,
    },
    {
      question: "What is 'patentable' subject matter?",
      options: [
        "A) Human-made inventions",
        "B) Artistic creations",
        "C) Abstract ideas",
        "D) Natural phenomena",
      ],
      answer: 0,
    },
    {
      question:
        "What is the term for the exclusive rights granted to the creator of an original work for a limited time?",
      options: ["A) Copyright", "B) Trademark", "C) Patent", "D) Trade Secret"],
      answer: 0,
    },
    {
      question: "How can a trademark be registered in the United States?",
      options: [
        "A) By applying to the USPTO",
        "B) By publishing it in a journal",
        "C) By obtaining a patent",
        "D) By using it in commerce",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is protected by copyright?",
      options: ["A) Novel", "B) Logo", "C) Invention", "D) Company Name"],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a requirement for copyright protection?",
      options: [
        "A) Novelty",
        "B) Originality",
        "C) Creativity",
        "D) Fixed in a tangible medium",
      ],
      answer: 0,
    },
    {
      question:
        "Which term refers to the unauthorized use of a patented invention?",
      options: [
        "A) Patent infringement",
        "B) Copyright piracy",
        "C) Trade secret violation",
        "D) Trademark counterfeiting",
      ],
      answer: 0,
    },
    {
      question: "What does 'fair use' refer to in copyright law?",
      options: [
        "A) Limited use of copyrighted material without permission",
        "B) Unauthorized use of copyrighted material",
        "C) The process of obtaining a copyright",
        "D) A type of trademark protection",
      ],
      answer: 0,
    },
    {
      question:
        "What is the term for a brand’s name or logo that has become so well-known it is considered generic?",
      options: [
        "A) Genericide",
        "B) Trademark dilution",
        "C) Trade secret misappropriation",
        "D) Trademark infringement",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following types of intellectual property protection typically requires the inventor to disclose details about the invention?",
      options: ["A) Patent", "B) Trademark", "C) Copyright", "D) Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which year marked the adoption of the Indian Patents Act, which significantly reformed patent laws in India?",
      options: ["A) 1970", "B) 1999", "C) 2005", "D) 1978"],
      answer: 0,
    },
    {
      question:
        "Which organization is responsible for the registration and enforcement of intellectual property rights in India?",
      options: ["IPO", "ICC", "ICICI", "WIPO"],
      answer: 0,
    },
    {
      question: "The Copyright Act of India was first enacted in which year?",
      options: ["1957", "1999", "1970", "2005"],
      answer: 0,
    },
    {
      question:
        "Which international agreement, to which India is a signatory, governs patents and is administered by the WIPO?",
      options: [
        "TRIPS Agreement",
        "Madrid Protocol",
        "Berne Convention",
        "Paris Convention",
      ],
      answer: 0,
    },
    {
      question:
        "When was the Trade Marks Act, which governs trademarks in India, enacted?",
      options: ["1999", "1970", "2005", "1957"],
      answer: 0,
    },
    {
      question: "What is a trademark used to protect?",
      options: [
        "Brand Name and Logo",
        "Business Method",
        "Chemical Formula",
        "Literary Work",
      ],
      answer: 0,
    },
    {
      question:
        "Which act regulates the protection of industrial designs in India?",
      options: ["Designs Act", "Patent Act", "Trademark Act", "Copyright Act"],
      answer: 0,
    },
    {
      question:
        "In which year did India join the World Trade Organization (WTO), committing to comply with the TRIPS Agreement?",
      options: ["1995", "2000", "2002", "2004"],
      answer: 0,
    },
    {
      question:
        "Which of the following has a geographical indications tag in India?",
      options: ["Darjeeling Tea", "Raspuri Mango", "BT Brinjal", "Red Rose"],
      answer: 0,
    },
    {
      question:
        "What was the primary focus of the 2005 amendment to the Patents Act in India?",
      options: [
        "Introducing product patents in pharmaceuticals",
        "Strengthening copyright laws",
        "Enhancing protection for traditional knowledge",
        "Simplifying trademark registration processes",
      ],
      answer: 0,
    },
    {
      question:
        "Which Indian body oversees the enforcement of intellectual property rights and provides a platform for dispute resolution?",
      options: [
        "Intellectual Property Appellate Board (IPAB)",
        "Competition Commission of India (CCI)",
        "Indian Patent Office",
        "Reserve Bank of India (RBI)",
      ],
      answer: 0,
    },
    {
      question:
        "When did the Indian Parliament pass the National Intellectual Property Rights Policy?",
      options: ["2016", "1956", "2005", "1970"],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT covered by the Copyright Act in India?",
      options: [
        "Industrial processes",
        "Literary works",
        "Music",
        "Artistic works",
      ],
      answer: 0,
    },
    {
      question: "The Trade Marks Act, 1999, replaced which earlier act?",
      options: [
        "Trade Marks Act, 1940",
        "Trade Marks Act, 1976",
        "Trade Marks Act, 1984",
        "Trade Marks Act, 1958",
      ],
      answer: 0,
    },
    {
      question:
        "Which amendment to the Patents Act, 1970, introduced the concept of compulsory licensing?",
      options: [
        "2002 Amendment",
        "1999 Amendment",
        "2005 Amendment",
        "2010 Amendment",
      ],
      answer: 0,
    },
    {
      question: "What is the primary purpose of the Designs Act, 2000?",
      options: [
        "To protect industrial designs",
        "To sell designs",
        "To Import designs",
        "To manage trade marks",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP right provides protection for a new, original, and useful process or machine?",
      options: ["Patent", "Trademark", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question: "Which Indian law provides protection for plant varieties?",
      options: [
        "Plant Varieties Protection and Farmers' Rights Act",
        "Trade Marks Act",
        "Patents Act",
        "Farmer’s Association Act",
      ],
      answer: 0,
    },
    {
      question:
        "The Geographical Indications of Goods (Registration and Protection) Act was enacted in which year?",
      options: ["2002", "2005", "1999", "2006"],
      answer: 0,
    },
    {
      question:
        "Which of the following is a key objective of the National IPR Policy in India?",
      options: [
        "To promote and protect IP rights effectively",
        "To eliminate all forms of IP protection",
        "To restrict foreign IP investments",
        "To decentralize IP administration",
      ],
      answer: 0,
    },
    {
      question:
        "Which Indian agency is responsible for examining patent applications and granting patents?",
      options: [
        "Indian Patent Office",
        "Central Board of Indirect Taxes and Customs",
        "Indian Council of Scientific and Industrial Research",
        "Directorate General of Foreign Trade",
      ],
      answer: 0,
    },
    {
      question:
        "What is the main objective of the Copyright Act, 1957, in India?",
      options: [
        "To provide exclusive rights to authors and creators",
        "To protect trademarks",
        "To manage industrial designs",
        "To regulate patent applications",
      ],
      answer: 0,
    },
    {
      question:
        "Which international agreement sets minimum standards for intellectual property protection and is administered by the World Trade Organization (WTO)?",
      options: [
        "TRIPS Agreement",
        "Berne Convention",
        "Paris Convention",
        "Madrid Protocol",
      ],
      answer: 0,
    },
    {
      question:
        "The Berne Convention for the Protection of Literary and Artistic Works primarily deals with which type of intellectual property?",
      options: ["Copyrights", "Trademarks", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which international agreement provides for the protection of trademarks and service marks across member countries?",
      options: [
        "Madrid Protocol",
        "Berne Convention",
        "Paris Convention",
        "TRIPS Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "The Paris Convention for the Protection of Industrial Property focuses on which types of intellectual property?",
      options: [
        "Patents and trademarks",
        "Copyrights and patents",
        "Trademarks and designs",
        "Copyrights and trade secrets",
      ],
      answer: 0,
    },
    {
      question:
        "Which organization administers the Patent Cooperation Treaty (PCT), which facilitates international patent filings?",
      options: [
        "World Intellectual Property Organization (WIPO)",
        "World Trade Organization (WTO)",
        "International Chamber of Commerce (ICC)",
        "United Nations (UN)",
      ],
      answer: 0,
    },
    {
      question: "Which type of intellectual property includes No registration?",
      options: ["Trade Secret", "Patent", "Trademark", "Copyright"],
      answer: 0,
    },
    {
      question:
        "What is the primary objective of the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
      options: [
        "To establish minimum standards for IP protection and enforcement",
        "To eliminate intellectual property rights globally",
        "To restrict international trade in IP-related goods",
        "To harmonize copyright laws only",
      ],
      answer: 0,
    },
    {
      question:
        "Which international treaty provides protection for the geographical indications of goods?",
      options: [
        "Lisbon Agreement",
        "Berne Convention",
        "TRIPS Agreement",
        "Madrid Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "Which agreement facilitates the international registration of trademarks and service marks?",
      options: [
        "Madrid Protocol",
        "Paris Convention",
        "Berne Convention",
        "Hague Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "The Hague Agreement pertains to the international registration of which type of intellectual property?",
      options: ["Industrial designs", "Patents", "Copyrights", "Trademarks"],
      answer: 0,
    },
    {
      question:
        "Which international convention is designed to protect new plant varieties and promote plant breeding?",
      options: [
        "UPOV Convention",
        "TRIPS Agreement",
        "Paris Convention",
        "Berne Convention",
      ],
      answer: 0,
    },
    {
      question:
        "What does the TRIPS Agreement require member countries to establish regarding enforcement of IP rights?",
      options: [
        "Effective measures to enforce IP rights and prevent infringements",
        "Harmonized IP court procedures",
        "Minimum penalties for IP violations",
        "Uniform international IP laws",
      ],
      answer: 0,
    },
    {
      question:
        "Which international organization is responsible for promoting the development and use of international patent laws?",
      options: [
        "World Intellectual Property Organization (WIPO)",
        "World Trade Organization (WTO)",
        "International Court of Justice (ICJ)",
        "World Bank",
      ],
      answer: 0,
    },
    {
      question:
        "Which agreement provides a framework for the international protection of industrial designs, including their registration and enforcement?",
      options: [
        "Hague Agreement",
        "Lisbon Agreement",
        "Madrid Protocol",
        "TRIPS Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "Which treaty requires its members to protect traditional knowledge, folklore, and cultural expressions?",
      options: [
        "No specific international treaty exists for this purpose",
        "TRIPS Agreement",
        "Berne Convention",
        "Paris Convention",
      ],
      answer: 0,
    },
    {
      question:
        "Which treaty governs the protection of performances and phonograms?",
      options: [
        "Rome Convention",
        "Paris Convention",
        "Berne Convention",
        "Madrid Protocol",
      ],
      answer: 0,
    },
    {
      question:
        "Which type of IP right is granted for a creative work, such as a book or a song?",
      options: ["Copyright", "Trademark", "Trade Secret", "Patent"],
      answer: 0,
    },
    {
      question:
        "What is the purpose of the World Trade Organization’s (WTO) Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
      options: [
        "To standardize IP protection and enforcement across member countries",
        "To eliminate trade barriers related to intellectual property",
        "To encourage countries to avoid IP enforcement",
        "To create an international IP court",
      ],
      answer: 0,
    },
    {
      question:
        "Which international body deals with disputes related to the TRIPS Agreement?",
      options: [
        "World Trade Organization Dispute Settlement Body",
        "International Court of Justice",
        "World Intellectual Property Organization",
        "International Trade Centre",
      ],
      answer: 0,
    },
    {
      question:
        "Which treaty addresses the protection of plant varieties and promotes the rights of plant breeders?",
      options: [
        "UPOV Convention",
        "Hague Agreement",
        "Lisbon Agreement",
        "Paris Convention",
      ],
      answer: 0,
    },
    {
      question:
        "The TRIPS Agreement is part of which larger international organization’s agreements?",
      options: [
        "World Trade Organization (WTO)",
        "United Nations (UN)",
        "World Intellectual Property Organization (WIPO)",
        "International Monetary Fund (IMF)",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following agreements is designed to harmonize international copyright laws?",
      options: [
        "Berne Convention",
        "Paris Convention",
        "Rome Convention",
        "Hague Agreement",
      ],
      answer: 0,
    },
    {
      question: "What is the primary goal of IP management within a company?",
      options: [
        "To maximize the value and strategic use of intellectual property",
        "To reduce the number of patents",
        "To avoid IP litigation",
        "To register all IP globally",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP management strategy involves using IP assets to generate revenue through licensing agreements?",
      options: [
        "IP Monetization",
        "IP Protection",
        "IP Enforcement",
        "IP Valuation",
      ],
      answer: 0,
    },
    {
      question: "How can trademarks be used effectively in marketing?",
      options: [
        "By creating brand recognition and differentiation",
        "By registering them in only one country",
        "By keeping them confidential",
        "By avoiding any use in advertising",
      ],
      answer: 0,
    },
    {
      question: "What is a common way to use patents in marketing?",
      options: [
        "By showcasing patented technology in promotional materials",
        "By keeping the invention details secret",
        "By avoiding patent registration",
        "By using patents only for internal R&D purposes",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is a benefit of using IP in marketing strategies?",
      options: [
        "Enhanced competitive advantage",
        "Limited market reach",
        "Increased legal costs",
        "Reduced brand value",
      ],
      answer: 0,
    },
    {
      question: "How long does a typical patent last?",
      options: [
        "20 years",
        "14 years",
        "25 years",
        "Life of the author and 50 years after death",
      ],
      answer: 0,
    },
    {
      question: "What role does IP management play in the branding process?",
      options: [
        "It ensures the protection and strategic use of brand assets",
        "It focuses solely on legal issues",
        "It eliminates the need for branding",
        "It restricts the use of brand names",
      ],
      answer: 0,
    },
    {
      question: "How can trade secrets be utilized in marketing?",
      options: [
        "By keeping them confidential to maintain competitive advantage",
        "By publicly disclosing them to competitors",
        "By registering them as patents",
        "By using them only in internal communications",
      ],
      answer: 0,
    },
    {
      question:
        "What is the impact of IP management on a company's market position?",
      options: [
        "It can strengthen market position through effective IP use",
        "It weakens the market position by increasing costs",
        "It reduces market opportunities",
        "It has no impact",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP asset is crucial for creating a unique brand identity?",
      options: ["Trademark", "Patent", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question: "How can IP management assist in entering new markets?",
      options: [
        "By ensuring IP protection and compliance in new regions",
        "By ignoring local IP laws",
        "By avoiding IP registrations in new markets",
        "By relying solely on existing IP protections",
      ],
      answer: 0,
    },
    {
      question:
        "Which strategy involves leveraging IP to form strategic partnerships and collaborations?",
      options: [
        "IP Licensing",
        "IP Enforcement",
        "IP Auditing",
        "IP Dispute Resolution",
      ],
      answer: 0,
    },
    {
      question: "What is the role of IP valuation in marketing?",
      options: [
        "It helps in determining the financial worth of IP assets for investment or sale",
        "It avoids any financial assessment of IP assets",
        "It restricts IP use to internal purposes",
        "It focuses on legal compliance only",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP type can be used to protect original content such as literature and art?",
      options: ["Copyright", "Patent", "Trademark", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "How can companies use IP portfolios to enhance their market strategy?",
      options: [
        "By leveraging them to attract investors and partners",
        "By keeping IP portfolios undisclosed",
        "By avoiding IP portfolio management",
        "By reducing the number of IP assets",
      ],
      answer: 0,
    },
    {
      question:
        "What is a key consideration in managing IP for global marketing?",
      options: [
        "Ensuring IP protection in each target market",
        "Ignoring international IP laws",
        "Limiting IP registration to domestic markets",
        "Avoiding any IP protection measures",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP right can last indefinitely as long as it is in use and renewed?",
      options: ["Trademark", "Copyright", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question: "How can IP management contribute to brand loyalty?",
      options: [
        "By creating and maintaining a strong and recognizable brand",
        "By reducing the visibility of IP assets",
        "By solely focusing on internal IP management",
        "By ignoring brand-related IP issues",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP management activity helps in protecting a company’s market share?",
      options: [
        "IP Enforcement",
        "IP Infringement",
        "IP Abandonment",
        "IP Violation",
      ],
      answer: 0,
    },
    {
      question:
        "What is a strategic use of IP in product development and marketing?",
      options: [
        "Using IP to differentiate products and enhance market appeal",
        "Avoiding IP registrations to reduce costs",
        "Keeping IP assets undisclosed to competitors",
        "Reducing R&D investments",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP management tool can help track and manage IP assets effectively?",
      options: [
        "IP Dashboard",
        "IP Compliance Checklist",
        "IP Enforcement Handbook",
        "IP Litigation Report",
      ],
      answer: 0,
    },
    {
      question:
        "How can companies use IP to create competitive barriers in the market?",
      options: [
        "By enforcing IP rights and protecting key assets",
        "By avoiding IP registrations",
        "By sharing IP with competitors",
        "By reducing IP protection efforts",
      ],
      answer: 0,
    },
    {
      question:
        "If you write an original story, what type of intellectual property gives you the right to decide who can make and sell copies of your work?",
      options: ["Copyright", "Patent", "Trademark", "Trade Secret"],
      answer: 0,
    },
    {
      question: "What does a trademark protect?",
      options: [
        "Logos, Names and Brands",
        "An invention",
        "A work of Art",
        "Look and Feel of the Product",
      ],
      answer: 0,
    },
    {
      question: "Which of these is a Geographical Indication?",
      options: ["Havana Cigars", "BMW", "Play Station", "World Wide Web"],
      answer: 0,
    },
    {
      question:
        "Under which type of agreement royalty is paid on the basis of total sale price?",
      options: ["Copyright", "Traditional Knowledge", "Trademark", "Patent"],
      answer: 0,
    },
    {
      question:
        "Intellectual Property Rights protect the use of the information and expression of ideas that are of....",
      options: [
        "Commercial Value",
        "Moral Value",
        "Ethical Value",
        "Social Value",
      ],
      answer: 0,
    },
  ],
  2: [
    {
      question: "What is the origin of the word 'Patent'?",
      options: [
        "Latin word 'Patene'",
        "French word 'Patente'",
        "Old English word 'Pætent'",
        "Greek word 'Patentas'",
      ],
      answer: 0,
    },
    {
      question: "What does 'non-obviousness' in a patent requirement mean?",
      options: [
        "The invention is not easily deduced by someone skilled in the field",
        "The invention is simple to understand",
        "The invention is legally protected",
        "The invention is hidden from public view",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is an example of an arbitrary mark?",
      options: [
        "'Apple' for computers",
        "'Kodak' for cameras",
        "'Sunny' for heaters",
        "'Sweet' for chocolates",
      ],
      answer: 0,
    },
    {
      question: "What is a certification mark?",
      options: [
        "A mark indicating compliance with standards",
        "A mark used to distinguish services",
        "A mark used by a specific group of enterprises",
        "A well-known mark",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following can be considered a non-traditional trademark?",
      options: ["A sound", "A word", "A logo", "A phrase"],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a function of a trademark?",
      options: [
        "Reducing the cost of production",
        "Advertising the product",
        "Identifying the product's origin",
        "Guaranteeing the product's quality",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a reason for rejecting a trademark application?",
      options: [
        "The mark is fanciful",
        "The mark is descriptive",
        "The mark is generic",
        "The mark is deceptive",
      ],
      answer: 0,
    },
    {
      question: "What is an example of a suggestive mark?",
      options: [
        "'Sunny' for heaters",
        "'Sweet' for chocolates",
        "'Kodak' for cameras",
        "'Apple' for computers",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is true about the registration of non-traditional trademarks?",
      options: [
        "They are often difficult to register",
        "They are easy to graphically represent",
        "They are more valuable than traditional trademarks",
        "They are not recognized by most countries",
      ],
      answer: 0,
    },
    {
      question:
        "What must be authorized under Form TM-48 in the trademark registration process?",
      options: [
        "The appointment of an attorney or agent",
        "The registration of the trademark",
        "The use of the trademark",
        "The payment of the registration fee",
      ],
      answer: 0,
    },
    {
      question: "What is copyright primarily available for?",
      options: [
        "Original literary, dramatic, musical, artistic work",
        "Unpublished works",
        "Scientific discoveries",
        "Ideas",
      ],
      answer: 0,
    },
    {
      question:
        "Under the Indian Copyright Act, how long is the term of protection for literary works?",
      options: [
        "The author’s life plus 60 years",
        "100 years after the author's death",
        "50 years from the date of publication",
        "The author’s life plus 70 years",
      ],
      answer: 0,
    },
    {
      question:
        "What is a key requirement for an invention to be considered 'new' or 'novel'?",
      options: [
        "It must not be part of the prior art",
        "It must be based on existing technology",
        "It must have a practical application",
        "It must be easy to understand",
      ],
      answer: 0,
    },
    {
      question: "What does copyright protect?",
      options: [
        "The expression of an idea",
        "The idea itself",
        "Methods and processes",
        "Scientific principles",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is included under the definition of a computer program in the Copyright Act?",
      options: [
        "Source codes and object codes",
        "Hardware configurations",
        "Software installation manuals",
        "User interface designs",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is an example of moral rights under copyright?",
      options: [
        "Right to claim authorship",
        "Right to sell the work",
        "Right to license the work",
        "Right to modify the work",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following categories is not protected by copyright?",
      options: [
        "Titles and short phrases",
        "Dramatic works",
        "Musical works",
        "Pantomimes",
      ],
      answer: 0,
    },
    {
      question: "What is true about Public Domain software?",
      options: [
        "It allows free modification and distribution",
        "It has strict copyright restrictions",
        "It requires a license for use",
        "It cannot be used commercially",
      ],
      answer: 0,
    },
    {
      question:
        "What is the primary difference between Freeware and Public Domain software?",
      options: [
        "Public Domain software has no copyright protection",
        "Public Domain software requires payment for use",
        "Freeware allows modification only with restrictions",
        "Freeware is not protected by copyright",
      ],
      answer: 0,
    },
    {
      question:
        "Which software category explicitly allows reverse engineering (decompiling) without permission?",
      options: [
        "Freeware",
        "Public Domain",
        "Commercial Software",
        "Shareware",
      ],
      answer: 0,
    },
    {
      question:
        "Under copyright law, what is an author’s 'right of integrity'?",
      options: [
        "The right to prevent alteration of the work",
        "The right to sell the work",
        "The right to modify the work",
        "The right to publish the work",
      ],
      answer: 0,
    },
    {
      question: "What does industrial design primarily refer to?",
      options: [
        "The ornamental or aesthetic aspects of a product",
        "The technical aspects of a product",
        "The functional features of a product",
        "The marketing strategy of a product",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is not typically included in industrial design protection?",
      options: [
        "The technical function of a product",
        "The colour of a product",
        "The shape of a product",
        "The pattern of a product",
      ],
      answer: 0,
    },
    {
      question: "What is meant by 'capable of industrial application'?",
      options: [
        "The invention must be useful and provide a practical benefit",
        "The invention must only be used in manufacturing",
        "The invention must be theoretical",
        "The invention must be aesthetically pleasing",
      ],
      answer: 0,
    },
    {
      question:
        "Industrial design can be applied to which of the following products?",
      options: ["All of these", "Medical instruments", "Jewelry", "Furniture"],
      answer: 0,
    },
    {
      question:
        "Which feature of a design is considered a three-dimensional feature?",
      options: ["Shape", "Colour", "Pattern", "Ornamentation"],
      answer: 0,
    },
    {
      question: "What is required for a design to be considered 'new'?",
      options: [
        "It must not have been made available to the public before the filing date",
        "It must have been published in a magazine",
        "It must be a copy of an existing design",
        "It must be patented",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is a reason businesses invest in new and original designs?",
      options: [
        "To customize products for specific market segments",
        "To reduce the cost of production",
        "To increase the number of employees",
        "To simplify the manufacturing process",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following cannot be protected as an industrial design?",
      options: [
        "A technical drawing of a machine",
        "A new shape for a chair",
        "A pattern on fabric",
        "A book cover design",
      ],
      answer: 0,
    },
    {
      question: "How long does industrial design protection typically last?",
      options: ["10 years", "5 years", "15 years", "20 years"],
      answer: 0,
    },
    {
      question:
        "What is a common grace period for registering an industrial design after it has been made public?",
      options: ["6 months", "12 months", "3 months", "18 months"],
      answer: 0,
    },
    {
      question: "What does 'industrial design' not typically include?",
      options: [
        "Architectural structures",
        "Product packaging",
        "Buildings and structures",
        "Furniture design",
      ],
      answer: 0,
    },
    {
      question:
        "What does the term 'get-up' of products refer to in industrial design?",
      options: [
        "The ornamental or aesthetic design of the product",
        "The technical features of a product",
        "The packaging of the product",
        "The functionality of the product",
      ],
      answer: 0,
    },
    {
      question:
        "Which approach to protecting traditional knowledge emphasizes cultural heritage?",
      options: [
        "Cultural heritage protection",
        "Collective human rights",
        "Use of existing intellectual property laws",
        "Commercial rights",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT an example of patentable subject matter?",
      options: [
        "A scientific theory",
        "A new machine",
        "A new chemical process",
        "A new method of manufacture",
      ],
      answer: 0,
    },
    {
      question:
        "What does 'design protection' primarily allows a holder to do?",
      options: [
        "Control the aesthetic aspects of a product and prevent copying",
        "Develop new technological features",
        "Obtain patents for scientific processes",
        "License or sell trademarks",
      ],
      answer: 0,
    },
    {
      question:
        "Which factor is crucial in deciding whether to file a patent application?",
      options: [
        "The probability of obtaining commercially useful protection",
        "The cost of the application",
        "The inventor's personal preferences",
        "The ease of drafting the application",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is excluded from patentability according to most national laws?",
      options: [
        "Discoveries of natural substances",
        "New and useful products",
        "Inventive processes",
        "Chemical compositions",
      ],
      answer: 0,
    },
    {
      question:
        "What is the main benefit of disclosing an invention through the patent system?",
      options: [
        "Gaining legal protection and potential financial returns",
        "Keeping the invention secret",
        "Avoiding the need for commercialization",
        "Transferring ownership to the government",
      ],
      answer: 0,
    },
    {
      question:
        "What is the consequence of not paying the required maintenance fees for a patent?",
      options: [
        "The patent expires",
        "The patent is automatically renewed",
        "The patent is transferred to the government",
        "The patent is reassigned to another inventor",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is an advantage of a strong patent portfolio?",
      options: [
        "It enhances the company's economic health",
        "It reduces competition",
        "It hinders technological progress",
        "It increases the cost of innovation",
      ],
      answer: 0,
    },
    {
      question:
        "Who is considered the inventor in the context of a patent application?",
      options: [
        "The person who conceived the invention",
        "The person who filed the patent application",
        "The government authority granting the patent",
        "The company that funded the research",
      ],
      answer: 0,
    },
    {
      question: 'What does the word "Patene" mean in Latin?',
      options: ["To open", "To protect", "To invent", "To disclose"],
      answer: 0,
    },
    {
      question: 'What is "prior art" in the context of patent law?',
      options: [
        "All relevant technical knowledge available to the public before the filing date",
        "Artistic work related to the invention",
        "Previous patents filed by the same inventor",
        "Any invention made in the same field",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is a possible alternative to filing a patent application?",
      options: [
        "Keeping the invention as a trade secret",
        "Filing a copyright application instead",
        "Assigning the invention to another inventor",
        "Publicly disclosing the invention",
      ],
      answer: 0,
    },
    {
      question:
        'What is the significance of the "disclosure requirement" in a patent application?',
      options: [
        "It provides enough detail for someone skilled in the field to carry out the invention",
        "It ensures the invention is kept secret",
        "It limits the scope of the patent",
        "It allows others to replicate the invention",
      ],
      answer: 0,
    },
    {
      question: "What is the effect of joint ownership on a patent?",
      options: [
        "Each co-owner must consent to any licensing or enforcement of the patent",
        "One co-owner can license the patent without the consent of others",
        "The patent is automatically revoked",
        "The government takes over ownership",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT typically covered under patent law?",
      options: [
        "A method of performing a mental act",
        "A machine used in agriculture",
        "A process for manufacturing a new product",
        "A novel chemical composition",
      ],
      answer: 0,
    },
    {
      question:
        "In most countries, patents are granted to which of the following?",
      options: [
        "The first person to file a patent application",
        "The company funding the research",
        "The government",
        "The first inventor",
      ],
      answer: 0,
    },
    {
      question: "What is an Ordinary Application?",
      options: [
        "A patent application without claiming priority from any other application",
        "A patent application claiming priority from another country",
        "A patent application with multiple inventions",
        "A patent application for a provisional patent",
      ],
      answer: 0,
    },
    {
      question: "What is a Convention Application?",
      options: [
        "An application claiming priority from a previously filed application in a convention country",
        "An application claiming priority from a previously filed application in a non-convention country",
        "An application for a new invention without priority",
        "An application for minor modifications of an existing patent",
      ],
      answer: 0,
    },
    {
      question:
        "What is required when filing a Convention Application in India?",
      options: [
        "A priority document and its English translation, if required",
        "Only a complete specification",
        "A detailed technical report",
        "Only a provisional specification",
      ],
      answer: 0,
    },
    {
      question: "What does PCT stand for?",
      options: [
        "Patent Cooperation Treaty",
        "Patent Convention Treaty",
        "Priority Country Treaty",
        "Patent Cooperation Transaction",
      ],
      answer: 0,
    },
    {
      question: "What is the primary purpose of Patent System?",
      options: [
        "To promote technological innovation and transfer",
        "To keep inventions secret",
        "To limit the use of inventions",
        "To grant exclusive rights to the inventor",
      ],
      answer: 0,
    },
    {
      question:
        "How many countries can a PCT International Application are validated in?",
      options: [
        "Up to 142 countries",
        "Up to 100 countries",
        "Up to 120 countries",
        "Up to 160 countries",
      ],
      answer: 0,
    },
    {
      question:
        "What is the main advantage of filing a PCT International Application?",
      options: [
        "Single international application seeking protection in multiple countries",
        "Faster patent processing",
        "Immediate grant of a global patent",
        "Exemption from national phase entry",
      ],
      answer: 0,
    },
    {
      question: "What is provided by a PCT International Search Report?",
      options: [
        "Prior art citations and assessment of novelty",
        "Final grant of the patent",
        "Legal status of the invention",
        "Commercial viability of the invention",
      ],
      answer: 0,
    },
    {
      question:
        "What happens if the applicant does not enter the national phase within the prescribed time limit?",
      options: [
        "The international application becomes void",
        "The patent is granted automatically",
        "The application is transferred to another country",
        "The application is put on hold indefinitely",
      ],
      answer: 0,
    },
    {
      question: "What is a Patent of Addition?",
      options: [
        "A patent for an improvement or modification of an existing patent",
        "A patent for a completely new invention",
        "A patent for a similar invention filed in another country",
        "A patent for a group of related inventions",
      ],
      answer: 0,
    },
    {
      question: "When does a Patent of Addition expire?",
      options: [
        "When the main patent expires",
        "10 years after filing",
        "20 years after filing",
        "After the inventor's death",
      ],
      answer: 0,
    },
    {
      question: "What is a Divisional Application?",
      options: [
        "An application divided out of an existing application claiming more than one invention",
        "An application for patent protection in a specific industry",
        "An application for the same invention in multiple countries",
        "An application for a completely new invention",
      ],
      answer: 0,
    },
    {
      question: "What is the priority date for Divisional Applications?",
      options: [
        "The same as the parent application's priority date",
        "The date of filing of the divisional application",
        "The date of publication of the main patent",
        "The date of grant of the main patent",
      ],
      answer: 0,
    },
    {
      question: "What is a Patent Specification?",
      options: [
        "A document describing the invention and setting out the scope of protection",
        "A legal contract between the inventor and the patent office",
        "A document listing the countries where the patent is valid",
        "A summary of patent laws",
      ],
      answer: 0,
    },
    {
      question:
        "Which document filed to establish only the earliest ownership of an invention?",
      options: [
        "Provisional Specification",
        "National Phase Application",
        "Complete Specification",
        "Patent Cooperation Treaty",
      ],
      answer: 0,
    },
    {
      question: "What type of right is a patent?",
      options: ["Territorial", "Global", "International", "Universal"],
      answer: 0,
    },
    {
      question:
        "What must be filed within 12 months of a Provisional Specification to obtain a patent?",
      options: [
        "A Complete Specification",
        "Another Provisional Specification",
        "A Convention Application",
        "A Patent of Addition",
      ],
      answer: 0,
    },
    {
      question: "What is the significance of the Complete Specification?",
      options: [
        "It describes the invention in detail, enabling others to replicate it",
        "It grants the patent automatically",
        "It provides an abstract of the invention",
        "It is used only in international patent applications",
      ],
      answer: 0,
    },
    {
      question:
        "What part of the Complete Specification defines the monopoly right of the patentee?",
      options: ["Claim", "Title", "Abstract", "Background of the Invention"],
      answer: 0,
    },
    {
      question:
        "Which section of the Indian Patents Act deals with Provisional and Complete Specification?",
      options: ["Section 9", "Section 11", "Section 8", "Section 10"],
      answer: 0,
    },
    {
      question: "What is an Abstract in a Complete Specification?",
      options: [
        "A brief summary of the invention within 150 words",
        "A legal clause defining the scope of the patent",
        "A detailed description of the invention",
        "A list of prior art references",
      ],
      answer: 0,
    },
    {
      question:
        "Who is entitled to apply for a patent in the National Filing Procedure?",
      options: [
        "Any person who is a true and first inventor or their assignee or legal representative",
        "Any person who works in the Patent Office",
        "Any person who is an inventor",
        "Any person who purchases the invention",
      ],
      answer: 0,
    },
    {
      question:
        "What is the maximum period allowed for filing the complete specification after the provisional specification?",
      options: ["12 months", "6 months", "18 months", "24 months"],
      answer: 0,
    },
    {
      question:
        "When is a patent application published under the National Filing Procedure?",
      options: [
        "After 18 months from the filing date or priority date, whichever is earlier",
        "Immediately after filing",
        "After 24 months from the filing date",
        "After 12 months from the filing date",
      ],
      answer: 0,
    },
    {
      question:
        "What happens if the Request for Examination is not made within the prescribed period?",
      options: [
        "The application is treated as withdrawn",
        "The patent is automatically granted",
        "The applicant is fined",
        "The application is published without examination",
      ],
      answer: 0,
    },
    {
      question:
        "What is the purpose of the International Search Report (ISR) in the PCT filing procedure?",
      options: [
        "To provide a list of prior art documents relevant to the invention",
        "To determine the renewal fee for the patent",
        "To grant the patent in all PCT member countries",
        "To translate the patent application into different languages",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a feature of a patent right?",
      options: [
        "It is granted for an unlimited period",
        "It is territorial in nature",
        "It can be enforced only in the country where it is granted.",
        "It provides exclusivity to the patent holder.",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following documents analyzes the potential patentability of an invention in the PCT filing procedure?",
      options: [
        "A) Written Opinion of the International Searching Authority (ISA)",
        "B) International Preliminary Examination Report (IPER)",
        "C) PCT Filing Certificate",
        "D) Patent Grant Report (PGR)",
      ],
      answer: 0,
    },
    {
      question:
        "How long is the additional period provided by the PCT on top of the 12 months priority period?",
      options: ["A) 18 months", "B) 12 months", "C) 24 months", "D) 6 months"],
      answer: 0,
    },
    {
      question:
        "What does a single PCT application provide in terms of legal effect?",
      options: [
        "A) Legal effect in all PCT member countries",
        "B) No legal effect until the patent is granted",
        "C) Legal effect in the country of filing only",
        "D) Legal effect in a single country of the applicant’s choice",
      ],
      answer: 0,
    },
    {
      question: "What is the first major step in the patent procedure?",
      options: [
        "A) Application for the patent",
        "B) Examination of the patent",
        "C) Grant and sealing of the patent",
        "D) Opposition to the patent",
      ],
      answer: 0,
    },
    {
      question:
        "Who can file an application for a patent under the Indian Patent Act, 1970?",
      options: [
        "A) The true and first inventor or their legal representative",
        "B) Any person with an idea",
        "C) Only legal entities",
        "D) Any employee of a company",
      ],
      answer: 0,
    },
    {
      question: "Where is the publication of a patent application notified?",
      options: [
        "A) In the Official Gazette or Patent Office Journals",
        "B) In a local newspaper",
        "C) On the company’s website",
        "D) In a scientific journal",
      ],
      answer: 0,
    },
    {
      question:
        "What happens if no request for examination is made within the prescribed period?",
      options: [
        "A) The application is treated as withdrawn",
        "B) The patent is automatically granted",
        "C) The patent is published without examination",
        "D) The applicant is fined",
      ],
      answer: 0,
    },
    {
      question:
        "Within how many months must the First Examination Report (FER) be responded to by the applicant?",
      options: ["A) 6 months", "B) 3 months", "C) 9 months", "D) 12 months"],
      answer: 0,
    },
    {
      question:
        "What is the maximum period within which a request for examination must be filed from the date of priority or filing?",
      options: ["A) 48 months", "B) 24 months", "C) 36 months", "D) 60 months"],
      answer: 0,
    },
    {
      question: "Who can file a pre-grant opposition to a patent?",
      options: [
        "A) Any interested person",
        "B) Only the inventor",
        "C) Only the government",
        "D) Only the patent examiner",
      ],
      answer: 0,
    },
    {
      question:
        "What happens to a patented invention after the patent expires?",
      options: [
        "A) It becomes open to the public for free use",
        "B) It remains the property of the patent holder",
        "C) It can only be used with the government’s permission",
        "D) It is automatically renewed for another 20 years",
      ],
      answer: 0,
    },
    {
      question:
        "Within how many months from the advertisement date can a pre-grant opposition be filed?",
      options: ["A) 4 months", "B) 2 months", "C) 6 months", "D) 3 months"],
      answer: 0,
    },
    {
      question: "What must be included in a post-grant opposition notice?",
      options: [
        "A) Written statement and evidence",
        "B) A simple objection",
        "C) Only the applicant’s name",
        "D) Only the patent number",
      ],
      answer: 0,
    },
    {
      question:
        "Under which section of the Act is the grant and sealing of a patent handled?",
      options: [
        "A) Section 43",
        "B) Section 11A",
        "C) Section 25",
        "D) Section 9",
      ],
      answer: 0,
    },
    {
      question: "When is the renewal fee is payable after the grant of patent?",
      options: [
        "A) Third year",
        "B) First year",
        "C) Second year",
        "D) Fifth year",
      ],
      answer: 0,
    },
    {
      question:
        "What is the maximum period for applying to restore a lapsed patent due to non-payment of renewal fees?",
      options: ["A) 18 months", "B) 24 months", "C) 6 months", "D) 12 months"],
      answer: 0,
    },
    {
      question:
        "Which system is employed in patent law that prioritizes the first person to file a patent application?",
      options: [
        "A) First to file",
        "B) First to invent",
        "C) First to publish",
        "D) First to market",
      ],
      answer: 0,
    },
    {
      question: "What could jeopardize the chance of obtaining a patent?",
      options: [
        "A) Publishing the invention before applying for a patent",
        "B) Consulting a patent agent",
        "C) Filing the application early",
        "D) Keeping the invention secret",
      ],
      answer: 0,
    },
    {
      question:
        "What is advisable for inventors to file as soon as their idea takes a definite shape?",
      options: [
        "A) Provisional Specification",
        "B) Complete Specification",
        "C) Final Examination Report",
        "D) Renewal Application",
      ],
      answer: 0,
    },
    {
      question:
        "Which form is used for requesting early publication of a patent application?",
      options: ["A) Form 9", "B) Form 1", "C) Form 5", "D) Form 18"],
      answer: 0,
    },
    {
      question:
        "Which document must be submitted if the priority date is claimed in a convention application?",
      options: [
        "A) Priority document",
        "B) Declaration of inventorship",
        "C) Abstract of the invention",
        "D) Power of attorney",
      ],
      answer: 0,
    },
    {
      question: "Which of the following cannot be patented?",
      options: [
        "A) Aesthetic creations",
        "B) A new and useful machine",
        "C) A new substance produced by manufacture",
        "D) A process to improve a known apparatus",
      ],
      answer: 0,
    },
    {
      question:
        "How many copies of the application form are required for filing a patent application?",
      options: ["A) Three", "B) Four", "C) One", "D) Two"],
      answer: 0,
    },
    {
      question:
        "What is the penalty for not meeting the objections in the First Examination Report (FER) within 12 months?",
      options: [
        "A) The application is deemed abandoned",
        "B) Fine is imposed",
        "C) Patent is granted automatically",
        "D) The application is sent for re-examination",
      ],
      answer: 0,
    },
    {
      question:
        "What section of the Patent Act outlines the grounds for opposition?",
      options: [
        "A) Section 25",
        "B) Section 43",
        "C) Section 7",
        "D) Section 9",
      ],
      answer: 0,
    },
    {
      question: "Which form is required for filing a post-grant opposition?",
      options: ["A) Form 7", "B) Form 18", "C) Form 5", "D) Form 9"],
      answer: 0,
    },
    {
      question:
        "What is one common mistake made by inventors that could harm their patent application?",
      options: [
        "A) Publicly disclosing the invention before filing for a patent",
        "B) Hiring a patent agent",
        "C) Filing the patent too early",
        "D) Filing without a power of attorney",
      ],
      answer: 0,
    },
    {
      question:
        "What is a key consideration when deciding where to patent an invention?",
      options: [
        "A) Where the product is likely to be commercialized",
        "B) Where the inventor's family lives",
        "C) Where the inventor vacations",
        "D) Where the inventor's competitors are located",
      ],
      answer: 0,
    },
    {
      question:
        "Which route involves filing a patent application in each country individually?",
      options: [
        "A) National route",
        "B) International route",
        "C) Regional route",
        "D) Global route",
      ],
      answer: 0,
    },
    {
      question: "What does licensing a patent involve?",
      options: [
        "A) Granting permission to another party to use the patented invention",
        "B) Filing a patent in multiple countries",
        "C) Selling the patent outright",
        "D) Manufacturing the product yourself",
      ],
      answer: 0,
    },
    {
      question: "What is an advantage of licensing a patent?",
      options: [
        "A) It provides an additional source of revenue",
        "B) It reduces legal costs",
        "C) It simplifies the patent process",
        "D) It limits the market reach of the invention",
      ],
      answer: 0,
    },
    {
      question: "What is an exclusive license?",
      options: [
        "A) A single licensee has the right to use the patented technology",
        "B) Multiple licensees share the rights",
        "C) The patent owner retains full rights",
        "D) The patent owner cannot use the technology",
      ],
      answer: 0,
    },
    {
      question: "In which of the following cases is a patent not advisable?",
      options: [
        "A) When the invention is easy to reverse engineer",
        "B) When there is a high market potential",
        "C) When investors are interested in the invention",
        "D) When the invention aligns with business strategy",
      ],
      answer: 0,
    },
    {
      question: "What is cross-licensing?",
      options: [
        "A) Two competitors exchange rights to each other's patents",
        "B) Selling the patent to the highest bidder",
        "C) Licensing to multiple companies",
        "D) Licensing without any fees",
      ],
      answer: 0,
    },
    {
      question: "What is a compulsory license?",
      options: [
        "A) A government-mandated license when public interest is involved",
        "B) A license that is automatically granted after three years",
        "C) A license that is required in every country",
        "D) A license granted by the patent owner under pressure",
      ],
      answer: 0,
    },
    {
      question: "When can a compulsory license be terminated under Indian law?",
      options: [
        "A) If the circumstances that led to its grant no longer exist",
        "B) Only after the patent expires",
        "C) When the patent owner demands it",
        "D) After five years of the license being in effect",
      ],
      answer: 0,
    },
    {
      question: "What is considered an infringement of a patent?",
      options: [
        "A) Unauthorized use of the patented invention",
        "B) Improving upon the patented invention",
        "C) Filing a patent in another country",
        "D) Using the invention with the owner's consent",
      ],
      answer: 0,
    },
    {
      question:
        "What must an inventor provide to a patent attorney for effective patent drafting?",
      options: [
        "A) Complete details of the invention, including failures",
        "B) Only the successful parts of the invention",
        "C) Only the final product",
        "D) A summary of the invention",
      ],
      answer: 0,
    },
    {
      question: "What does Section 107A of the Indian Patent Act state?",
      options: [
        "A) Certain acts related to development and submission of information are not considered infringement",
        "B) All uses of a patented invention are considered infringement",
        "C) Infringement can only occur in the country of the patent holder",
        "D) Importing patented products is illegal",
      ],
      answer: 0,
    },
    {
      question:
        "What relief can a patentee seek in case of infringement under Indian law?",
      options: [
        "A) Injunction and damages",
        "B) License cancellation",
        "C) Public apology from the infringer",
        "D) Patent revocation",
      ],
      answer: 0,
    },
    {
      question: "What is one advantage of arbitration in patent disputes?",
      options: [
        "A) It is less formal and shorter than court proceedings",
        "B) It allows public scrutiny",
        "C) It is always free of charge",
        "D) It guarantees a favourable outcome for the patentee",
      ],
      answer: 0,
    },
    {
      question:
        "Why might a company choose to send a ‘cease and desist letter’?",
      options: [
        "A) To inform the alleged infringer of a potential patent conflict",
        "B) To revoke the infringer's patent",
        "C) To license the patent to the infringer",
        "D) To initiate a criminal case",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of a ‘cease and desist letter’?",
      options: [
        "A) To stop infringing activities",
        "B) To terminate a patent",
        "C) To grant a license",
        "D) To enforce a compulsory license",
      ],
      answer: 0,
    },
    {
      question:
        "Who typically owns the rights to a patent in the case of an employee invention?",
      options: [
        "A) The employer",
        "B) Both the employee and employer jointly",
        "C) The employee",
        "D) The government",
      ],
      answer: 0,
    },
    {
      question:
        "Which organization provides services for alternative dispute resolution?",
      options: [
        "World Intellectual Property Organization (WIPO)",
        "World Trade Organization (WTO)",
        "European Patent Office (EPO)",
        "International Monetary Fund (IMF)",
      ],
      answer: 0,
    },
    {
      question:
        "What is the role of the WIPO Arbitration and Mediation Centre?",
      options: [
        "To provide alternative dispute resolution services",
        "To file patents internationally",
        "To enforce patent laws",
        "To draft patent agreements",
      ],
      answer: 0,
    },
    {
      question:
        "Which article of the TRIPS agreement provides for the right to information in infringement cases?",
      options: ["Article 47", "Article 45", "Article 46", "Article 44"],
      answer: 0,
    },
    {
      question: "What is the primary function of a trademark?",
      options: [
        "To identify the source of goods or services",
        "To increase product prices",
        "To protect intellectual property",
        "To advertise a company",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following can be registered as a trademark in some countries?",
      options: [
        "Shapes of products",
        "Generic terms",
        "Flags of nations",
        "Personal names",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a characteristic of a trademark?",
      options: [
        "It should be descriptive of the product and its basic component/ingredients",
        "It must be distinctive",
        "It should be easy to spell and pronounce",
        "It should be easy to register",
      ],
      answer: 0,
    },
    {
      question: "What is a service mark?",
      options: [
        "A mark used to distinguish services",
        "A trademark used for products",
        "A certification mark",
        "A well-known mark",
      ],
      answer: 0,
    },
    {
      question: "What is the validity period of a registered trademark?",
      options: [
        "10 years and renewable",
        "5 years and renewable",
        "15 years and non-renewable",
        "20 years and then expires",
      ],
      answer: 0,
    },
    {
      question:
        "Which type of mark is a coined or invented word with no intrinsic meaning?",
      options: [
        "Fanciful mark",
        "Descriptive mark",
        "Suggestive mark",
        "Arbitrary mark",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT allowed for trademark registration in most jurisdictions?",
      options: [
        "A generic term",
        "A suggestive word",
        "A coined word",
        "A three-dimensional shape",
      ],
      answer: 0,
    },
    {
      question: "What does IPR stand for?",
      options: [
        "Intellectual Property Rights",
        "International Public Relations",
        "Internal Proprietary Regulation",
        "International Policy Review",
      ],
      answer: 0,
    },
    {
      question: "Which of the following can be considered a trade secret?",
      options: [
        "A recipe",
        "Company's logo",
        "Published book",
        "A Registered Trademark",
      ],
      answer: 0,
    },
    {
      question: "The Trade Secrets ensure ……….",
      options: [
        "Competitive Advantage",
        "Production and Marketing monopoly",
        "Business Ethics",
        "Employee Invention",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP right is often used to protect the unique appearance or structure of a product?",
      options: ["Design Patent", "Trademark", "Copyright", "Patent"],
      answer: 0,
    },
    {
      question:
        "Which organization is responsible for granting patents in the United States?",
      options: [
        "USPTO (United States Patent and Trademark Office)",
        "African Patent Office",
        "WIPO (World Intellectual Property Organization)",
        "EPO (European Patent Office)",
      ],
      answer: 0,
    },
    {
      question:
        "Which term refers to the exclusive right to reproduce, distribute, and display an original work?",
      options: ["Copyright", "Trademark", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question: "What is the main purpose of intellectual property law?",
      options: [
        "To encourage innovation and creativity",
        "To promote competition",
        "To regulate international trade",
        "To manage public resources",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a requirement for obtaining a patent?",
      options: ["Commercial success", "Utility", "Non-obviousness", "Novelty"],
      answer: 0,
    },
    {
      question:
        "What does the term 'public domain' refer to in intellectual property?",
      options: [
        "Works that are free to use without IP restrictions",
        "Works that are protected by IP laws",
        "IP rights that are in litigation",
        "IP rights that are pending approval",
      ],
      answer: 0,
    },
    {
      question:
        "Which type of intellectual property is concerned with the protection of distinctive symbols, designs, or words?",
      options: ["Trademark", "Patent", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a form of IP protection under copyright law?",
      options: [
        "Scientific discoveries",
        "Art works",
        "Literary works",
        "Software",
      ],
      answer: 0,
    },
    {
      question:
        "What is the term for copying and using someone else’s copyrighted work without permission?",
      options: [
        "Copyright infringement",
        "Trade secret misappropriation",
        "Patent infringement",
        "Trademark dilution",
      ],
      answer: 0,
    },
    {
      question: "Which type of intellectual property protects inventions?",
      options: ["Patent", "Trademark", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which organization deals with international IP disputes and policy development?",
      options: [
        "WIPO (World Intellectual Property Organization)",
        "WTO (World Trade Organization)",
        "ICC (International Chamber of Commerce)",
        "UN (United Nations)",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is NOT eligible for patent protection?",
      options: [
        "Scientific theories",
        "Business Method",
        "Physical Invention",
        "Industrial Design",
      ],
      answer: 0,
    },
    {
      question: "What is the primary role of the USPTO?",
      options: [
        "To grant Patent and Trademark",
        "To enforce copyright laws",
        "To protect trade secrets",
        "To manage international IP treaties",
      ],
      answer: 0,
    },
    {
      question: "Which of the following best describes a 'trademark'?",
      options: [
        "A symbol used to distinguish goods or services",
        "A written work that is original and creative",
        "An invention that is useful and novel",
        "A confidential business strategy",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP protection is most likely to be used for a new software program?",
      options: ["Copyright", "Trademark", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question: "Which of the following is a feature of a design patent?",
      options: [
        "Protects the ornamental design of an object",
        "Protects the function of an invention",
        "Protects a company’s brand name",
        "Protects original written content",
      ],
      answer: 0,
    },
    {
      question: "Which IP right is generally not disclosed to the public?",
      options: ["Trade Secret", "Patent", "Trademark", "None of these"],
      answer: 0,
    },
    {
      question: "What is 'patentable' subject matter?",
      options: [
        "Human-made inventions",
        "Artistic creations",
        "Abstract ideas",
        "Natural phenomena",
      ],
      answer: 0,
    },
    {
      question:
        "What is the term for the exclusive rights granted to the creator of an original work for a limited time?",
      options: ["Copyright", "Trademark", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question: "How can a trademark be registered in the United States?",
      options: [
        "By applying to the USPTO",
        "By publishing it in a journal",
        "By obtaining a patent",
        "By using it in commerce",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is protected by copyright?",
      options: ["Novel", "Logo", "Invention", "Company Name"],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT a requirement for copyright protection?",
      options: [
        "Novelty",
        "Originality",
        "Creativity",
        "Fixed in a tangible medium",
      ],
      answer: 0,
    },
    {
      question:
        "Which term refers to the unauthorized use of a patented invention?",
      options: [
        "Patent infringement",
        "Copyright piracy",
        "Trade secret violation",
        "Trademark counterfeiting",
      ],
      answer: 0,
    },
    {
      question: "What does 'fair use' refer to in copyright law?",
      options: [
        "Limited use of copyrighted material without permission",
        "Unauthorized use of copyrighted material",
        "The process of obtaining a copyright",
        "A type of trademark protection",
      ],
      answer: 0,
    },
    {
      question:
        "What is the term for a brand’s name or logo that has become so well-known it is considered generic?",
      options: [
        "Genericide",
        "Trademark dilution",
        "Trade secret misappropriation",
        "Trademark infringement",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following types of intellectual property protection typically requires the inventor to disclose details about the invention?",
      options: ["Patent", "Trademark", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which year marked the adoption of the Indian Patents Act, which significantly reformed patent laws in India?",
      options: ["1970", "1999", "2005", "1978"],
      answer: 0,
    },
    {
      question:
        "Which organization is responsible for the registration and enforcement of intellectual property rights in India?",
      options: ["IPO", "ICC", "ICICI", "WIPO"],
      answer: 0,
    },
    {
      question: "The Copyright Act of India was first enacted in which year?",
      options: ["1957", "1999", "1970", "2005"],
      answer: 0,
    },
    {
      question:
        "Which international agreement, to which India is a signatory, governs patents and is administered by the WIPO?",
      options: [
        "TRIPS Agreement",
        "Madrid Protocol",
        "Berne Convention",
        "Paris Convention",
      ],
      answer: 0,
    },
    {
      question:
        "When was the Trade Marks Act, which governs trademarks in India, enacted?",
      options: ["1999", "1970", "2005", "1957"],
      answer: 0,
    },
    {
      question: "What is a trademark used to protect?",
      options: [
        "Brand Name and Logo",
        "Business Method",
        "Chemical Formula",
        "Literary Work",
      ],
      answer: 0,
    },
    {
      question:
        "Which act regulates the protection of industrial designs in India?",
      options: ["Designs Act", "Patent Act", "Trademark Act", "Copyright Act"],
      answer: 0,
    },
    {
      question:
        "In which year did India join the World Trade Organization (WTO), committing to comply with the TRIPS Agreement?",
      options: ["1995", "2000", "2002", "2004"],
      answer: 0,
    },
    {
      question:
        "Which of the following has geographical indications tag in India?",
      options: ["Darjeeling Tea", "Raspuri Mango", "BT Brinjal", "Red Rose"],
      answer: 0,
    },
    {
      question:
        "What was the primary focus of the 2005 amendment to the Patents Act in India?",
      options: [
        "Introducing product patents in pharmaceuticals",
        "Strengthening copyright laws",
        "Enhancing protection for traditional knowledge",
        "Simplifying trademark registration processes",
      ],
      answer: 0,
    },
    {
      question:
        "Which Indian body oversees the enforcement of intellectual property rights and provides a platform for dispute resolution?",
      options: [
        "Intellectual Property Appellate Board (IPAB)",
        "Competition Commission of India (CCI)",
        "Indian Patent Office",
        "Reserve Bank of India (RBI)",
      ],
      answer: 0,
    },
    {
      question:
        "When did the Indian Parliament pass the National Intellectual Property Rights Policy?",
      options: ["2016", "1956", "2005", "1970"],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT covered by the Copyright Act in India?",
      options: [
        "Industrial processes",
        "Literary works",
        "Music",
        "Artistic works",
      ],
      answer: 0,
    },
    {
      question: "The Trade Marks Act, 1999, replaced which earlier act?",
      options: [
        "Trade Marks Act, 1940",
        "Trade Marks Act, 1976",
        "Trade Marks Act, 1984",
        "Trade Marks Act, 1958",
      ],
      answer: 0,
    },
    {
      question:
        "Which amendment to the Patents Act, 1970, introduced the concept of compulsory licensing?",
      options: [
        "2002 Amendment",
        "1999 Amendment",
        "2005 Amendment",
        "2010 Amendment",
      ],
      answer: 0,
    },
    {
      question: "What is the primary purpose of the Designs Act, 2000?",
      options: [
        "To protect industrial designs",
        "To sell designs",
        "To Import designs",
        "To manage trademarks",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP right provides protection for a new, original, and useful process or machine?",
      options: ["Patent", "Trademark", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question: "Which Indian law provides protection for plant varieties?",
      options: [
        "Plant Varieties Protection and Farmers' Rights Act",
        "Trade Marks Act",
        "Patents Act",
        "Farmer’s Association Act",
      ],
      answer: 0,
    },
    {
      question:
        "The Geographical Indications of Goods (Registration and Protection) Act was enacted in which year?",
      options: ["2002", "2005", "1999", "2006"],
      answer: 0,
    },
    {
      question:
        "Which of the following is a key objective of the National IPR Policy in India?",
      options: [
        "To promote and protect IP rights effectively",
        "To eliminate all forms of IP protection",
        "To restrict foreign IP investments",
        "To decentralize IP administration",
      ],
      answer: 0,
    },
    {
      question:
        "Which Indian agency is responsible for examining patent applications and granting patents?",
      options: [
        "Indian Patent Office",
        "Central Board of Indirect Taxes and Customs",
        "Indian Council of Scientific and Industrial Research",
        "Directorate General of Foreign Trade",
      ],
      answer: 0,
    },
    {
      question:
        "What is the main objective of the Copyright Act, 1957, in India?",
      options: [
        "To provide exclusive rights to authors and creators",
        "To protect trademarks",
        "To manage industrial designs",
        "To regulate patent applications",
      ],
      answer: 0,
    },
    {
      question:
        "Which international agreement sets minimum standards for intellectual property protection and is administered by the World Trade Organization (WTO)?",
      options: [
        "TRIPS Agreement",
        "Berne Convention",
        "Paris Convention",
        "Madrid Protocol",
      ],
      answer: 0,
    },
    {
      question:
        "The Berne Convention for the Protection of Literary and Artistic Works primarily deals with which type of intellectual property?",
      options: ["Copyrights", "Trademarks", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which international agreement provides for the protection of trademarks and service marks across member countries?",
      options: [
        "Madrid Protocol",
        "Berne Convention",
        "Paris Convention",
        "TRIPS Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "The Paris Convention for the Protection of Industrial Property focuses on which types of intellectual property?",
      options: [
        "Patents and trademarks",
        "Copyrights and patents",
        "Trademarks and designs",
        "Copyrights and trade secrets",
      ],
      answer: 0,
    },
    {
      question:
        "Which organization administers the Patent Cooperation Treaty (PCT), which facilitates international patent filings?",
      options: [
        "World Intellectual Property Organization (WIPO)",
        "World Trade Organization (WTO)",
        "International Chamber of Commerce (ICC)",
        "United Nations (UN)",
      ],
      answer: 0,
    },
    {
      question: "Which type of intellectual property includes No registration?",
      options: ["Trade Secret", "Patent", "Trademark", "Copyright"],
      answer: 0,
    },
    {
      question:
        "What is the primary objective of the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
      options: [
        "To establish minimum standards for IP protection and enforcement",
        "To eliminate intellectual property rights globally",
        "To restrict international trade in IP-related goods",
        "To harmonize copyright laws only",
      ],
      answer: 0,
    },
    {
      question:
        "Which international treaty provides protection for the geographical indications of goods?",
      options: [
        "Lisbon Agreement",
        "Berne Convention",
        "TRIPS Agreement",
        "Madrid Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "Which agreement facilitates the international registration of trademarks and service marks?",
      options: [
        "Madrid Protocol",
        "Paris Convention",
        "Berne Convention",
        "Hague Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "The Hague Agreement pertains to the international registration of which type of intellectual property?",
      options: ["Industrial designs", "Patents", "Copyrights", "Trademarks"],
      answer: 0,
    },
    {
      question:
        "Which international convention is designed to protect new plant varieties and promote plant breeding?",
      options: [
        "UPOV Convention",
        "TRIPS Agreement",
        "Paris Convention",
        "Berne Convention",
      ],
      answer: 0,
    },
    {
      question:
        "What does the TRIPS Agreement require member countries to establish regarding enforcement of IP rights?",
      options: [
        "Effective measures to enforce IP rights and prevent infringements",
        "Harmonized IP court procedures",
        "Minimum penalties for IP violations",
        "Uniform international IP laws",
      ],
      answer: 0,
    },
    {
      question:
        "Which international organization is responsible for promoting the development and use of international patent laws?",
      options: [
        "World Intellectual Property Organization (WIPO)",
        "World Trade Organization (WTO)",
        "International Court of Justice (ICJ)",
        "World Bank",
      ],
      answer: 0,
    },
    {
      question:
        "Which agreement provides a framework for the international protection of industrial designs, including their registration and enforcement?",
      options: [
        "Hague Agreement",
        "Lisbon Agreement",
        "Madrid Protocol",
        "TRIPS Agreement",
      ],
      answer: 0,
    },
    {
      question:
        "Which treaty requires its members to protect traditional knowledge, folklore, and cultural expressions?",
      options: [
        "No specific international treaty exists for this purpose",
        "TRIPS Agreement",
        "Berne Convention",
        "Paris Convention",
      ],
      answer: 0,
    },
    {
      question:
        "Which treaty governs the protection of performances and phonograms?",
      options: [
        "Rome Convention",
        "Paris Convention",
        "Berne Convention",
        "Madrid Protocol",
      ],
      answer: 0,
    },
    {
      question:
        "Which type of IP right is granted for a creative work, such as a book or a song?",
      options: ["Copyright", "Trademark", "Trade Secret", "Patent"],
      answer: 0,
    },
    {
      question:
        "What is the purpose of the World Trade Organization’s (WTO) Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
      options: [
        "To standardize IP protection and enforcement across member countries",
        "To eliminate trade barriers related to intellectual property",
        "To encourage countries to avoid IP enforcement",
        "To create an international IP court",
      ],
      answer: 0,
    },
    {
      question:
        "Which international body deals with disputes related to the TRIPS Agreement?",
      options: [
        "World Trade Organization Dispute Settlement Body",
        "International Court of Justice",
        "World Intellectual Property Organization",
        "International Trade Centre",
      ],
      answer: 0,
    },
    {
      question:
        "Which treaty addresses the protection of plant varieties and promotes the rights of plant breeders?",
      options: [
        "UPOV Convention",
        "Hague Agreement",
        "Lisbon Agreement",
        "Paris Convention",
      ],
      answer: 0,
    },
    {
      question:
        "The TRIPS Agreement is part of which larger international organization’s agreements?",
      options: [
        "World Trade Organization (WTO)",
        "United Nations (UN)",
        "World Intellectual Property Organization (WIPO)",
        "International Monetary Fund (IMF)",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following agreements is designed to harmonize international copyright laws?",
      options: [
        "Berne Convention",
        "Paris Convention",
        "Rome Convention",
        "Hague Agreement",
      ],
      answer: 0,
    },
    {
      question: "What is the primary goal of IP management within a company?",
      options: [
        "To maximize the value and strategic use of intellectual property",
        "To reduce the number of patents",
        "To avoid IP litigation",
        "To register all IP globally",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP management strategy involves using IP assets to generate revenue through licensing agreements?",
      options: [
        "IP Monetization",
        "IP Protection",
        "IP Enforcement",
        "IP Valuation",
      ],
      answer: 0,
    },
    {
      question: "How can trademarks be used effectively in marketing?",
      options: [
        "By creating brand recognition and differentiation",
        "By registering them in only one country",
        "By keeping them confidential",
        "By avoiding any use in advertising",
      ],
      answer: 0,
    },
    {
      question: "What is a common way to use patents in marketing?",
      options: [
        "By showcasing patented technology in promotional materials",
        "By keeping the invention details secret",
        "By avoiding patent registration",
        "By using patents only for internal R&D purposes",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is a benefit of using IP in marketing strategies?",
      options: [
        "Enhanced competitive advantage",
        "Limited market reach",
        "Increased legal costs",
        "Reduced brand value",
      ],
      answer: 0,
    },
    {
      question: "How long does a typical patent last?",
      options: [
        "20 years",
        "14 years",
        "25 years",
        "Life of the author and 50 years after death",
      ],
      answer: 0,
    },
    {
      question: "What role does IP management play in the branding process?",
      options: [
        "It ensures the protection and strategic use of brand assets",
        "It focuses solely on legal issues",
        "It eliminates the need for branding",
        "It restricts the use of brand names",
      ],
      answer: 0,
    },
    {
      question: "How can trade secrets be utilized in marketing?",
      options: [
        "By keeping them confidential to maintain competitive advantage",
        "By publicly disclosing them to competitors",
        "By registering them as patents",
        "By using them only in internal communications",
      ],
      answer: 0,
    },
    {
      question:
        "What is the impact of IP management on a company's market position?",
      options: [
        "It can strengthen market position through effective IP use",
        "It weakens the market position by increasing costs",
        "It reduces market opportunities",
        "It has no impact",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP asset is crucial for creating a unique brand identity?",
      options: ["Trademark", "Patent", "Copyright", "Trade Secret"],
      answer: 0,
    },
    {
      question: "How can IP management assist in entering new markets?",
      options: [
        "By ensuring IP protection and compliance in new regions",
        "By ignoring local IP laws",
        "By avoiding IP registrations in new markets",
        "By relying solely on existing IP protections",
      ],
      answer: 0,
    },
    {
      question:
        "Which strategy involves leveraging IP to form strategic partnerships and collaborations?",
      options: [
        "IP Licensing",
        "IP Enforcement",
        "IP Auditing",
        "IP Dispute Resolution",
      ],
      answer: 0,
    },
    {
      question: "What is the role of IP valuation in marketing?",
      options: [
        "It helps in determining the financial worth of IP assets for investment or sale",
        "It avoids any financial assessment of IP assets",
        "It restricts IP use to internal purposes",
        "It focuses on legal compliance only",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP type can be used to protect original content such as literature and art?",
      options: ["Copyright", "Patent", "Trademark", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "How can companies use IP portfolios to enhance their market strategy?",
      options: [
        "By leveraging them to attract investors and partners",
        "By keeping IP portfolios undisclosed",
        "By avoiding IP portfolio management",
        "By reducing the number of IP assets",
      ],
      answer: 0,
    },
    {
      question:
        "What is a key consideration in managing IP for global marketing?",
      options: [
        "Ensuring IP protection in each target market",
        "Ignoring international IP laws",
        "Limiting IP registration to domestic markets",
        "Avoiding any IP protection measures",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP right can last indefinitely as long as it is in use and renewed?",
      options: ["Trademark", "Copyright", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question: "How can IP management contribute to brand loyalty?",
      options: [
        "By creating and maintaining a strong and recognizable brand",
        "By reducing the visibility of IP assets",
        "By solely focusing on internal IP management",
        "By ignoring brand-related IP issues",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP management activity helps in protecting a company’s market share?",
      options: [
        "IP Enforcement",
        "IP Infringement",
        "IP Abandonment",
        "IP Violation",
      ],
      answer: 0,
    },
    {
      question:
        "What is a strategic use of IP in product development and marketing?",
      options: [
        "Using IP to differentiate products and enhance market appeal",
        "Avoiding IP registrations to reduce costs",
        "Keeping IP assets undisclosed to competitors",
        "Reducing R&D investments",
      ],
      answer: 0,
    },
    {
      question:
        "Which IP management tool can help track and manage IP assets effectively?",
      options: [
        "IP Dashboard",
        "IP Compliance Checklist",
        "IP Enforcement Handbook",
        "IP Litigation Report",
      ],
      answer: 0,
    },
    {
      question:
        "How can companies use IP to create competitive barriers in the market?",
      options: [
        "By enforcing IP rights and protecting key assets",
        "By avoiding IP registrations",
        "By sharing IP with competitors",
        "By reducing IP protection efforts",
      ],
      answer: 0,
    },
    {
      question:
        "If you write an original story, what type of intellectual property gives you the right to decide who can make and sell copies of your work?",
      options: ["Copyright", "Patent", "Trademark", "Trade Secret"],
      answer: 0,
    },
    {
      question: "What does a trademark protect?",
      options: [
        "Logos, Names and Brands",
        "An invention",
        "A work of Art",
        "Look and Feel of the Product",
      ],
      answer: 0,
    },
    {
      question: "Which of these is a Geographical Indication?",
      options: ["Havana Cigars", "BMW", "Play Station", "World Wide Web"],
      answer: 0,
    },
    {
      question:
        "Under which type of agreement royalty is paid on the basis of total sale price?",
      options: ["Copyright", "Traditional Knowledge", "Trademark", "Patent"],
      answer: 0,
    },
    {
      question:
        "In which of the following IP rights do creators, authors, and other creators get the benefit for a fixed period?",
      options: ["Copyright", "Trademark", "Patent", "Trade Secret"],
      answer: 0,
    },
    {
      question:
        "Which of the following is NOT considered a type of Intellectual Property?",
      options: ["Human Resources", "Trade Secrets", "Trademarks", "Copyrights"],
      answer: 0,
    },
  ],
  3: [
      {
        question: "What is the primary objective of the Information Technology Act, 2000 (IT Act)?",
        options: [
          "To provide legal recognition to electronic transactions",
          "To regulate internet content",
          "To regulate telecom services",
          "To control computer hardware imports"
        ],
        answer: 0
      },
      {
        question: "What does Section 66 of the IT Act, 2000 pertain to?",
        options: [
          "Punishment for hacking",
          "Punishment for sending offensive messages",
          "Punishment for cyber terrorism",
          "Punishment for identity theft"
        ],
        answer: 0
      },
      {
        question: "What is 'cyber espionage'?",
        options: [
          "Unauthorized access and theft of confidential information for political or financial gain",
          "Attacking websites for fun",
          "Sending spam emails",
          "Creating malware for profit"
        ],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000 deals with the ‘Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011’?",
        options: ["Section 43A", "Section 44A", "Section 45A", "Section 46A"],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, who can be considered as an ‘Intermediary’?",
        options: ["Internet Service Providers", "Government Agencies", "Banks", "All of these"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000 deals with ‘Cyber Appellate Tribunal’?",
        options: ["Section 49", "Section 48", "Section 50", "Section 51"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000 defines ‘Digital Signature’?",
        options: ["Section 2(p)", "Section 2(r)", "Section 2(s)", "Section 2(q)"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000 provides for ‘Power to Issue Directions’?",
        options: ["Section 69", "Section 70", "Section 67", "Section 68"],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, which section addresses the ‘Cyber Terrorism’?",
        options: ["Section 66F", "Section 66E", "Section 66D", "Section 66E"],
        answer: 0
      },
      {
        question: "What is the primary purpose of the ‘Digital Signature’ under the IT Act, 2000?",
        options: [
          "To authenticate the identity of the sender",
          "To provide encryption services",
          "To secure network connections",
          "To prevent unauthorized access"
        ],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000 provides for ‘Compensation for Failure to Protect Data’?",
        options: ["Section 43A", "Section 45A", "Section 46A", "Section 44A"],
        answer: 0
      },
      {
        question: "Which authority is responsible for the oversight of the implementation of the IT Act, 2000?",
        options: [
          "Ministry of Electronics and Information Technology (MeitY)",
          "Reserve Bank of India (RBI)",
          "Department of Telecommunications (DoT)",
          "Central Bureau of Investigation (CBI)"
        ],
        answer: 0
      },
      {
        question: "The IT Act, 2000 was enacted in India to address issues related to:",
        options: [
          "Cybercrime and electronic commerce",
          "Intellectual property rights",
          "Telecommunication services",
          "Data privacy regulations"
        ],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, which section provides for the ‘Penalty for Failure to Furnish Information’?",
        options: ["Section 77", "Section 78", "Section 79", "Section 76"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000, deals with the legal recognition of electronic records?",
        options: ["Section 4", "Section 6", "Section 6", "Section 7"],
        answer: 0
      },
      {
        question: "The IT Act, 2000, provides legal recognition to electronic contracts through which section?",
        options: ["Section 10A", "Section 14A", "Section 12A", "Section 13A"],
        answer: 0
      },
      {
        question: "What does Section 2(w) of the IT Act, 2000 define?",
        options: ["Electronic record", "Digital signature", "Electronic commerce", "Intermediary"],
        answer: 0
      },
      {
        question: "Which rule under the IT Act, 2000, pertains to the ‘Information Technology (Intermediaries Guidelines) Rules, 2011’?",
        options: ["Rule 3", "Rule 4", "Rule 5", "Rule 6"],
        answer: 0
      },
      {
        question: "What does Section 79 of the IT Act, 2000, primarily address?",
        options: ["Liability of intermediaries", "Cyber crimes", "Electronic contracts", "Digital signatures"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000, mandates that electronic records must be maintained for a minimum period?",
        options: ["Section 11", "Section 10A", "Section 12", "Section 13"],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, what is the primary legal requirement for digital signatures?",
        options: [
          "Must be certified by a Certifying Authority",
          "Must be encrypted",
          "Must be registered with the government",
          "Must be stored on a secure server"
        ],
        answer: 0
      },
      {
        question: "What does Section 66E of the IT Act, 2000, address?",
        options: [
          "Punishment for capturing, publishing, or transmitting obscene material",
          "Identity theft",
          "Cyber terrorism",
          "Hacking"
        ],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000, provides guidelines for the formation and implementation of electronic contracts?",
        options: ["Section 10", "Section 11", "Section 12", "Section 13"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000 deals with the definition of ‘computer’ and ‘computer system’?",
        options: ["Section 2", "Section 3", "Section 4", "Section 5"],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, what must a company do to comply with regulations on privacy and security of data?",
        options: [
          "Implement reasonable security practices",
          "Appoint a Data Protection Officer",
          "Obtain consent for data sharing",
          "Regularly audit IT infrastructure"
        ],
        answer: 0
      },
      {
        question: "Which section deals with the power to issue directions for the interception, monitoring, and decryption of information?",
        options: ["Section 69", "Section 66F", "Section 72", "Section 78"],
        answer: 0
      },
      {
        question: "What does Section 43A of the IT Act, 2000, provide for?",
        options: [
          "Protection of personal data",
          "Penalties for cyber crimes",
          "Compensation for damages",
          "Regulation of digital certificates"
        ],
        answer: 0
      },
      {
        question: "The ‘Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011’ are framed under which section of the IT Act, 2000?",
        options: ["Section 43A", "Section 45", "Section 46", "Section 44"],
        answer: 0
      },
      {
        question: "Which authority is responsible for setting standards for digital signatures and certifying authorities?",
        options: [
          "Controller of Certifying Authorities (CCA)",
          "Reserve Bank of India (RBI)",
          "Cyber Appellate Tribunal",
          "Ministry of Electronics and Information Technology (MeitY)"
        ],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, which section addresses the liability of online platforms for user-generated content?",
        options: ["Section 79", "Section 82", "Section 80", "Section 81"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000, deals with the 'Adjudication of disputes'?",
        options: ["Section 48", "Section 46", "Section 47", "Section 49"],
        answer: 0
      },
      {
        question: "What is the focus of Section 66D of the IT Act, 2000?",
        options: ["Phishing", "Identity theft", "Cyber terrorism", "Cyber harassment"],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000, is concerned with the offense of sending offensive messages through communication service, etc.?",
        options: ["Section 66A", "Section 66B", "Section 66C", "Section 66D"],
        answer: 0
      },
      {
        question: "Under the IT Act, 2000, what is required for the validity of an electronic record?",
        options: [
          "It must be authenticated using a digital signature",
          "It must be signed by a physical signature",
          "It must be printed on paper",
          "It must be verified by a government agency"
        ],
        answer: 0
      },
      {
        question: "What does Section 43 of the IT Act, 2000 pertain to?",
        options: [
          "Compensation for damages to the computer system",
          "Penalties for contraventions",
          "Definition of cybercrime",
          "Power to investigate cybercrimes"
        ],
        answer: 0
      },
      {
        question: "Which section of the IT Act, 2000, empowers the Central Government to prescribe additional rules and regulations for e-commerce?",
        options: ["Section 74", "Section 72", "Section 73", "Section 70"],
        answer: 0
      },
      {
        question: "What is the primary goal of e-Governance?",
        options: [
          "To enhance transparency, efficiency, and accessibility in government services",
          "To improve public sector profits",
          "To reduce government employee count",
          "To regulate private sector businesses"
        ],
        answer: 0
      },
      {
        question: "Which of the following is a key component of e-Governance?",
        options: ["Digital literacy", "Financial audits", "Print media", "Telephone services"],
        answer: 0
      },
      {
        question: "Which Indian government initiative is aimed at providing a common electronic platform for various services and information?",
        options: [
          "Digital India",
          "National Digital Library",
          "Public Service Delivery System",
          "Smart Cities Mission"
        ],
        answer: 0
      },
      {
        question: "What is the primary focus of the National e-Governance Plan (NeGP) in India?",
        options: [
          "To provide seamless delivery of services through IT",
          "To enhance educational standards",
          "To regulate financial markets",
          "To improve road infrastructure"
        ],
        answer: 0
      },
      {
        question: "Which of the following is NOT a benefit of e-Governance?",
        options: [
          "Higher government spending",
          "Increased transparency",
          "Reduced bureaucratic delays",
          "Improved public access to services"
        ],
        answer: 0
      },
      {
        question: "Which of the following is a common tool used in e-Governance for citizen interaction?",
        options: ["E-mail", "Television", "Radio", "Print Newspapers"],
        answer: 0
      },
      {
        question: "What does the term 'e-Governance' primarily refer to?",
        options: [
          "The use of technology to provide government services and information",
          "Electronic communication within the government",
          "Electronic voting systems",
          "Online advertising by the government"
        ],
        answer: 0
      },
      {
        question: "Which initiative aims to provide a single-window clearance system for various government services in India?",
        options: ["e-District", "e-Tendering", "e-Procurement", "e-Citizen"],
        answer: 0
      },
      {
        question: "What is the purpose of the e-Governance initiative known as 'Aadhaar'?",
        options: [
          "To create a national digital identity system",
          "To regulate agricultural subsidies",
          "To promote tourism",
          "To improve road safety"
        ],
        answer: 0
      },
      {
        question: "Which body is responsible for adjudicating cybercrimes and disputes under the IT Act?",
        options: [
          "Cyber Appellate Tribunal",
          "Supreme Court",
          "High Court",
          "District Court"
        ],
        answer: 0
      },
      {
        question: "Which system is designed to enhance government efficiency and service delivery through a digital interface?",
        options: [
          "ERP (Enterprise Resource Planning)",
          "GIS (Geographic Information System)",
          "CRM (Customer Relationship Management)",
          "MIS (Management Information System)"
        ],
        answer: 0
      },
      {
        question: "Which of the following is a major challenge in implementing e-Governance?",
        options: [
          "Limited availability of IT infrastructure",
          "Absence of government support",
          "High cost of technology",
          "Lack of interest from the public"
        ],
        answer: 0
      },
      {
        question: "What does the term 'e-Government' often encompass?",
        options: [
          "All government-related operations and services managed electronically",
          "Only online services for citizens",
          "The creation of government websites",
          "The use of social media for government announcements"
        ],
        answer: 0
      },
      {
        question: "Which of the following is an example of a citizen-centric e-Governance service?",
        options: [
          "Online tax filing",
          "Internal staff training programs",
          "Government research projects",
          "Government procurement processes"
        ],
        answer: 0
      },
      {
        question: "The implementation of e-Governance typically requires which of the following?",
        options: [
          "Advanced hardware and software infrastructure",
          "Decrease in public involvement",
          "More paperwork",
          "Removal of all traditional government services"
        ],
        answer: 0
      },
      {
        question: "Which of the following frameworks supports the integration of various e-Governance services and applications?",
        options: [
          "SOA (Service-Oriented Architecture)",
          "ERP (Enterprise Resource Planning)",
          "BPR (Business Process Reengineering)",
          "CRM (Customer Relationship Management)"
        ],
        answer: 0
      },
      {
        question: "Which term refers to the process of ensuring that e-Governance systems are accessible and usable by people with disabilities?",
        options: ["E-Accessibility", "Digital inclusion", "Data privacy", "IT compliance"],
        answer: 0,
      },
      {
        question: "What role does cloud computing play in e-Governance?",
        options: ["It provides scalable and cost-effective infrastructure for government services", "It increases government expenditure", "It eliminates the need for data security", "It reduces the need for digital literacy"],
        answer: 0,
      },
      {
        question: "Which of the following is an e-Governance initiative aimed at improving public service delivery in rural areas of India?",
        options: ["Common Service Centers (CSCs)", "Digital India Hub", "E-Governance Gateway", "E-Village Program"],
        answer: 0,
      },
      {
        question: "Which concept involves using data collected from e-Governance systems to make informed policy decisions?",
        options: ["Data analytics", "Traditional governance", "Document management", "Paper-based surveys"],
        answer: 0,
      },
      {
        question: "What is the role of the Controller of Certifying Authorities (CCA) under the IT Act?",
        options: ["To issue digital certificates", "To regulate internet service providers", "To certify electronic documents", "To investigate cybercrime"],
        answer: 0,
      },
      {
        question: "What is the primary benefit of integrating e-Governance with mobile technology?",
        options: ["Increased access to government services for people on the go", "Reduced internet speed", "Higher operational costs", "Decreased security"],
        answer: 0,
      },
      {
        question: "What is the primary purpose of a digital signature?",
        options: ["To verify the authenticity of a digital message or document", "To encrypt data", "To create a digital document", "To modify digital content"],
        answer: 0,
      },
      {
        question: "Which section of the IT Act, 2000 deals with digital signatures in India?",
        options: ["Section 5", "Section 10", "Section 6", "Section 3"],
        answer: 0,
      },
      {
        question: "What technology is commonly used to create digital signatures?",
        options: ["Public Key Infrastructure (PKI)", "Blockchain", "Symmetric Encryption", "File Compression"],
        answer: 0,
      },
      {
        question: "What is an electronic signature?",
        options: ["Any form of signature used in electronic communication", "A physical signature scanned into a digital format", "An encrypted code used for signing digital documents", "A signature created with a stylus or mouse on a digital device"],
        answer: 0,
      },
      {
        question: "Which of the following is a characteristic of a digital signature?",
        options: ["It uses a private key to sign and a public key to verify", "It is typically used for physical documents", "It can be easily forged", "It does not require encryption"],
        answer: 0,
      },
      {
        question: "Which component of a digital signature is kept secret?",
        options: ["Private key", "Public key", "Certificate Authority (CA)", "Hash value"],
        answer: 0,
      },
      {
        question: "What role does a Certificate Authority (CA) play in digital signatures?",
        options: ["It validates and issues digital certificates", "It generates private keys", "It encrypts documents", "It stores digital signatures"],
        answer: 0,
      },
      {
        question: "Which standard is commonly used for digital signatures in the context of the IT Act, 2000 in India?",
        options: ["X.509", "SHA-256", "ISO 27001", "RSA"],
        answer: 0,
      },
      {
        question: "Which of the following statements is true about electronic signatures under the IT Act, 2000?",
        options: ["Electronic signatures are equivalent to handwritten signatures", "Electronic signatures must be encrypted for security", "Electronic signatures require physical presence for verification", "Electronic signatures are not legally recognized"],
        answer: 0,
      },
      {
        question: "Which section of the IT Act, 2000 deals with the appointment of the Controller of Certifying Authorities?",
        options: ["Section 18", "Section 20", "Section 21", "Section 19"],
        answer: 0,
      },
      {
        question: "Which of the following is an example of an electronic signature?",
        options: ["A typed name at the end of an email", "A digital certificate", "A handwritten signature scanned into a PDF", "An encrypted hash value"],
        answer: 0,
      },
      {
        question: "What is the primary advantage of using digital signatures over traditional handwritten signatures?",
        options: ["They provide a higher level of security and verification", "They are easier to forge", "They can be used for physical documents", "They require no encryption"],
        answer: 0,
      },
      {
        question: "Which of the following is NOT a common use of digital signatures?",
        options: ["Encrypting email content", "Verifying the authenticity of digital documents", "Ensuring data integrity", "Providing proof of identity"],
        answer: 0,
      },
      {
        question: "Which law or regulation governs the use of digital signatures in India?",
        options: ["The IT Act, 2000", "The Digital Signature Act", "The Cybersecurity Act", "The Data Protection Act"],
        answer: 0,
      },
      {
        question: "In the context of digital signatures, what does the term 'hash function' refer to?",
        options: ["A method to create a unique fingerprint of data", "A type of digital certificate", "A technique to encrypt data", "A service provided by Certificate Authorities"],
        answer: 0,
      },
      {
        question: "What is the purpose of the public key in digital signatures?",
        options: ["To verify the signature", "To store the signature", "To encrypt the signature", "To generate the signature"],
        answer: 0,
      },
      {
        question: "Which document format commonly supports digital signatures?",
        options: ["PDF", "HTML", "JPEG", "TXT"],
        answer: 0,
      },
      {
        question: "What does the term 'non-repudiation' mean in the context of digital signatures?",
        options: ["The signer cannot deny having signed the document", "The signature can be easily removed", "The document can be altered after signing", "The signature can be replicated without authorization"],
        answer: 0,
      },
      {
        question: "Which technology ensures that a digital signature is associated with a specific document and signer?",
        options: ["Time stamping", "Encryption", "Hashing", "Watermarking"],
        answer: 0,
      },
      {
        question: "What is an essential feature of a digital signature that makes it different from a simple electronic signature?",
        options: ["Digital signatures use cryptographic techniques", "Digital signatures require a physical pen", "Digital signatures are less secure", "Digital signatures are used only for email communications"],
        answer: 0,
      },
      {
        question: "The IT Act, 2000 was amended by which act to include provisions related to cyber terrorism?",
        options: ["IT (Amendment) Act, 2006", "IT (Amendment) Act, 2010", "IT (Amendment) Act, 2013", "IT (Amendment) Act, 2015"],
        answer: 0,
      },
      {
        question: "What does the term 'digital certificate' refer to in the context of digital signatures?",
        options: ["A file containing the public key and identity of the certificate holder", "A document signed with a digital signature", "A type of encryption algorithm", "A digital representation of a handwritten signature"],
        answer: 0,
      },
      {
        question: "Which of the following is an example of a cybercrime?",
        options: ["Identity theft", "Physical theft", "Vandalism of property", "Bank robbery"],
        answer: 0,
      },
      {
        question: "What does the term 'phishing' refer to in the context of cybercrimes?",
        options: ["Fraudulent attempts to obtain sensitive information through deceptive emails or websites", "Hacking into networks", "Stealing physical hardware", "Planting malware on a device"],
        answer: 0,
      },
      {
        question: "Which law addresses cybercrimes in India?",
        options: ["The IT Act, 2000", "The Indian Penal Code (IPC)", "The Cybersecurity Act", "The Data Protection Act"],
        answer: 0,
      },
      {
        question: "What is 'ransomware'?",
        options: ["Payment for decryption", "Software that improves system performance", "A type of firewall", "An anti-virus program"],
        answer: 0,
      },
      {
        question: "Which section of the IT Act, 2000 deals with 'punishment for identity theft'?",
        options: ["Section 66C", "Section 66D", "Section 66A", "Section 66B"],
        answer: 0,
      },
      {
        question: "What is 'DDoS' an acronym for in cybercrimes?",
        options: ["Distributed Denial of Service", "Direct Denial of Service", "Distributed Data Service", "Direct Data Service"],
        answer: 0,
      },
      {
        question: "Which of the following is a common method used in 'social engineering' attacks?",
        options: ["Manipulating individuals to divulge confidential information", "Installing malware", "Exploiting vulnerabilities in software", "Cracking encryption codes"],
        answer: 0,
      },
      {
        question: "Which type of malware is designed to gain unauthorized access to a system and monitor user activities?",
        options: ["Spyware", "Trojan horse", "Virus", "Worm"],
        answer: 0,
      },
      {
        question: "What is the primary objective of 'SQL injection' attacks?",
        options: ["To exploit vulnerabilities in web applications", "To bypass firewalls", "To encrypt user files", "To steal user passwords"],
        answer: 0,
      },
      {
        question: "Which section of the IT Act, 2000 addresses ‘Intermediary Liability’?",
        options: ["Section 79", "Section 80", "Section 81", "Section 82"],
        answer: 0,
      },
      {
        question: "What is 'cyberstalking'?",
        options: ["Using electronic communication to harass or intimidate someone", "Tracking online purchases", "Unauthorized access to social media accounts", "Hacking into government databases"],
        answer: 0,
      },
      {
        question: "Which section of the IT Act, 2000 deals with the 'punishment for sending offensive messages'?",
        options: ["Section 66A", "Section 66B", "Section 66", "Section 66C"],
        answer: 0,
      },
      
    

  ],
};
export default function App() {
  const [unit, setUnit] = useState(1);
  const mcqs = mcqsByUnit[unit];
  const [selectedAnswers, setSelectedAnswers] = useState(Array(mcqs.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((acc, selected, i) => {
      const correctAnswer = mcqs[i].answer;
      const correctIndex = typeof correctAnswer === 'string'
        ? ['A', 'B', 'C', 'D'].indexOf(correctAnswer.trim().toUpperCase())
        : correctAnswer;
      return selected === correctIndex ? acc + 1 : acc;
    }, 0);
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restartQuiz = () => {
    setSelectedAnswers(Array(mcqs.length).fill(null));
    setShowResults(false);
  };

  const switchUnit = (u) => {
    setUnit(u);
    setSelectedAnswers(Array(mcqsByUnit[u].length).fill(null));
    setShowResults(false);
  };

  return (
    <div className="container">
      <h1 className="title">📘 IPR MCQ Practice</h1>

      <div className="unit-buttons">
        {[1, 2, 3].map((u) => (
          <button
            key={u}
            className={`unit-button ${unit === u ? 'active' : ''}`}
            onClick={() => switchUnit(u)}
          >
            Unit {u}
          </button>
        ))}
      </div>

      <div className="card-container">
        {mcqs.map((mcq, index) => (
          <div key={index} className="card">
            <h2 className="question">{index + 1}. {mcq.question}</h2>
            <div className="options">
              {mcq.options.map((option, i) => {
                const correctIndex = ['A','B','C','D'].indexOf(mcq.answer);
                const isCorrect = showResults && i === correctIndex;
                const isIncorrect = showResults && selectedAnswers[index] === i && i !== correctIndex;
                return (
                  <div key={i} className={`option ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      checked={selectedAnswers[index] === i}
                      disabled={showResults}
                      onChange={() => handleOptionChange(index, i)}
                    />
                    <label>{option}</label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {mcqs.length > 0 && (
        <div className="result-section">
          {!showResults ? (
            <button className="submit-btn" onClick={handleSubmit}>
              ✅ Submit Quiz
            </button>
          ) : (
            <div>
              <p className="score">🎉 Your score: {calculateScore()} / {mcqs.length}</p>
              <button className="restart-btn" onClick={restartQuiz}>
                🔄 Restart Quiz
              </button>
            </div>
          )}
        </div>
      )}

      {mcqs.length === 0 && (
        <p className="no-questions">No questions available for Unit {unit} yet.</p>
      )}
    </div>
  );
}
