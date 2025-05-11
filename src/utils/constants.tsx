import {
  LuAward,
  LuBaggageClaim,
  LuCode2,
  LuHeartHandshake,
  LuLeaf,
  LuLightbulb,
  LuPrinter,
  LuStar,
  LuTrophy,
  LuUsers,
} from "react-icons/lu";

import type { Testimonial } from "@/components/customer-testimonials";
import type { LinkCard } from "@/components/link-card";
import type { Product, ProductsCategory } from "./tempt-types";

export const FOOTER_LINKS = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/GemprintGTA",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/gemprint_gta/",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/GemprintTheSix",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
  },
];

export const HEADER_MENU_ITEMS = [
  { href: "/", title: "Home" },
  { href: "/print-products", title: "Print Products" },
  { href: "/about", title: "About" },
  { href: "/faq", title: "FAQs" },
  { href: "/contact-us", title: "Contact Us", asButton: true },
];

export const FAQ_ITEMS = [
  {
    title: "I’m not sure if my artwork is correct, what should I do?",
    text: "That’s why we are here. If you are in any doubt or have any questions please contact us and we will be delighted to help you. Or, choose to email your artwork when ordering and tell us in the email what you are unsure about and we will check it out for you. We’re experts in digital printing, so you don’t have to be!",
  },
  {
    title: "What is Bleed?",
    text: "An ink that prints beyond the trim edge of the page to ensure it extends to the edge of the page after trimming. As there is a degree of movement when printing on any press, you should always create 3mm bleed on all edges where the bleed is needed. Supplying your job without bleed may result in white lines when we trim it.",
  },
  {
    title: "How do I supply my artwork?",
    text: "Please upload your artwork during a checkout process. On the checkout page, there is a filed where you can upload your files. However, if your files are bigger than 64 MB (each) please upload them to wetransfer.com and send us the links.",
  },
  {
    title: "Can I add items or make changes to an existing order?",
    text: "If your order is placed on hold or pending payment, you still can  make some changes to your artwork or the order itself. However, please contact us as soon as possible by phone, so we can make sure your changes will be included in the production.",
  },
  {
    title: "What are the methods of payment?",
    text: "You can pay by Credit Card using PayPal gateway or E-mail transfer. For returning customers we are also accepting cheques.",
  },
  {
    title: "Can you check my artwork to make sure it’s set up correctly?",
    text: " Of course! This is part our our process to make sure that all orders are produced properly, and we’ll do it for free! By the time we release your job to print our experts will have it checked. If you want to know more about our process or what we check, please follow our blog.",
  },
];

// TODO: add to links to all cards that needs it
export const LINK_CARD_ITEMS: LinkCard[] = [
  {
    title: "Trusted Partner",
    description:
      "With years of experience and numerous satisfied customers, we have established ourselves as a trusted partner for businesses requiring printing and design services since 2017. You can rely on our expertise to meet your needs.",
    icon: <LuHeartHandshake />,
    to: "",
  },
  {
    title: "Printing Services",
    description:
      "We offer a wide range of high quality printing services utilizing the best equipment and techniques to meet your business needs. Our experienced team will work with you to deliver materials you require, on time and on budget.",
    icon: <LuPrinter />,
    to: "./print-products",
  },
  {
    title: "Experts in Print",
    description:
      "With state-of-the-art equipment and decades of combined experience, our staff are true experts in the printing industry. We stay current on the latest techniques and technologies to deliver the highest quality printed products.",
    icon: <LuTrophy />,
    to: "./print-products",
  },
  {
    title: "Website Design",
    description:
      "Our talented website designers will create an effective online presence for your company. Coordinating technical stuff is not easy. We handle everything from planning to launch, delivering an affordable custom website that achieves your business goals.",
    icon: <LuCode2 />,
    to: "",
  },
  {
    title: "International Shipping",
    description:
      "In addition to serving the Canadian market, we also offer our printing and design services to customers in the US. We pride ourselves on providing fast, reliable international delivery at affordable cost to our valued customers both in Canada and USA.",
    icon: <LuBaggageClaim />,
    to: "",
  },
  {
    title: "Design Quality",
    description:
      "Our talented designers work closely with you to understand your brand and goals, turning your vision into reality. We are committed to providing high quality, effective designs that bring your ideas to life.",
    icon: <LuStar />,
    to: "",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michel Alsamad",
    role: "CEO, IT Engine",
    text: "Amazing friendly service. Helped me with my marketing material and provided very helpful advice when I needed it. highly recommended.",
  },
  {
    name: "Jibfou Telecome",
    role: "CEO, Saeed jibril",
    text: "It was a very positive experience working with Gemprint. The team was so helpful and great to work with; Maimuna and Greg at Gemprint - you're my new favorite printer! I look forward to doing business with you for years to come.",
  },
  {
    name: "Michael Cullen",
    role: "CEO, Novalte",
    text: "It was an awesome experience dealing with Gemprint, from submitting the designs, to explaining the quote and then getting the prints. Very fast turnaround time and super professional!\n\nHighly recommended!!!",
  },
  {
    name: "B N",
    role: "",
    text: "Gemprint services exceeded all my expectations! Their attention to detail and commitment to quality were exceptional. They delivered a stunning final product right on time. I highly recommend them for any printing needs!",
  },
  {
    name: "Matis Coffee",
    role: "",
    text: "Very fast service",
  },
  {
    name: "Svetlana Ratnikova",
    role: "CEO, IWB",
    text: "Thank you hard working millennial Maimuna Gabeyre! Fantastic printing services ...way better than other chain print shops! Great quality and pricing. Comes highly recommended...",
  },
  {
    name: "Sylvia Kozicka",
    role: "",
    text: "I really recommend their services! Quick to get in touch with and very kind and helpful staff. It was pleasure working with you Gemprint!",
  },
  {
    name: "Parampal Singh",
    role: "",
    text: "Working with Gemprint was an amazing experience as they are very quick and productive.",
  },
];

export const CATEGORIES: ProductsCategory[] = [
  {
    name: "Premium Business Cards",
    description:
      "Make a lasting impression with our high-quality, customizable business cards. Perfect for professionals, entrepreneurs, and small businesses.",
    category: "business-cards",
    keywords: [
      "business cards",
      "premium business cards",
      "custom business cards",
      "professional business cards",
      "high-quality business cards",
      "Toronto business cards",
      "GTA business cards",
      "business card printing",
      "UV business cards",
      "matte business cards",
      "glossy business cards",
    ],
    images: [
      {
        href: "/images/business-cards/business-cards_1.png",
        alt: "UV Business Cards",
      },
      {
        href: "/images/business-cards/business-cards_2.png",
        alt: "Standard Business Cards",
      },
      {
        href: "/images/business-cards/business-cards_3.png",
        alt: "Laminated Business Cards",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our business cards are printed on premium cardstock and come with a variety of finishes, including matte, glossy, and soft-touch. You can also add custom designs, logos, and information.",
      items: [
        {
          title: "Premium Cardstock",
          content:
            "Our business cards are printed on high-quality, durable cardstock that feels substantial and professional.",
        },
        {
          title: "Custom Finishes",
          content:
            "Choose from a variety of finishes to make your business cards stand out, including matte, glossy, and soft-touch.",
        },
        {
          title: "Custom Designs",
          content:
            "Add your own custom designs, logos, and information to create personalized and professional business cards.",
        },
      ],
    },
  },
  {
    name: "Flyers",
    description:
      "Promote your events, services, or products with our high-quality, eye-catching flyers. Perfect for marketing campaigns, announcements, and promotional materials.",
    category: "flyers",
    keywords: [
      "flyers",
      "promotional flyers",
      "marketing flyers",
      "event flyers",
      "flyer printing",
      "custom flyers",
      "Toronto flyers",
      "GTA flyer printing",
      "high-quality flyers",
      "business flyers",
      "advertising flyers",
      "color flyers",
    ],
    images: [
      {
        href: "/images/flyers/flyers_1.png",
        alt: "Standard Flyers",
      },
      {
        href: "/images/flyers/flyers_2.png",
        alt: "Premium Flyers",
      },
      {
        href: "/images/flyers/flyers_3.png",
        alt: "Promotional Flyers",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our flyers are printed on premium paper stock and come with a variety of finishes, including matte and glossy. Available in multiple sizes and perfect for any promotional needs.",
      items: [
        {
          title: "Premium Paper Stock",
          content:
            "Our flyers are printed on high-quality paper that ensures vibrant colors and sharp images for maximum impact.",
        },
        {
          title: "Multiple Sizes",
          content:
            "Choose from a variety of standard sizes including 8.5x11, 5.5x8.5, and 4x6 to suit your specific marketing needs.",
        },
        {
          title: "Custom Designs",
          content:
            "Our design team can help create eye-catching flyers that effectively communicate your message and drive customer engagement.",
        },
      ],
    },
  },
  {
    name: "Postcards",
    description:
      "Connect with customers through our high-quality, customizable postcards. Perfect for direct mail campaigns, announcements, invitations, and promotional offers.",
    category: "postcards",
    keywords: [
      "postcards",
      "direct mail postcards",
      "marketing postcards",
      "custom postcards",
      "postcard printing",
      "promotional postcards",
      "Toronto postcards",
      "GTA postcard printing",
      "business postcards",
      "invitation postcards",
      "announcement postcards",
      "EDDM postcards",
    ],
    images: [
      {
        href: "/images/postcards/postcards_1.png",
        alt: "Standard Postcards",
      },
      {
        href: "/images/postcards/postcards_2.png",
        alt: "Premium Postcards",
      },
      {
        href: "/images/postcards/postcards_3.png",
        alt: "Promotional Postcards",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our postcards are printed on premium cardstock with various coating options. Available in multiple sizes and perfect for any marketing campaign.",
      items: [
        {
          title: "Premium Cardstock",
          content:
            "Our postcards are printed on high-quality, durable cardstock that ensures vibrant colors and professional presentation.",
        },
        {
          title: "Multiple Sizes",
          content:
            "Choose from standard 4x6, 5x7, or 6x9 sizes, or request custom dimensions to suit your specific needs.",
        },
        {
          title: "Coating Options",
          content:
            "Select from gloss, matte, or UV coating to enhance durability and visual appeal of your postcards.",
        },
      ],
    },
  },
  {
    name: "Brochures",
    description:
      "Showcase your products and services with our professional brochures. Ideal for providing detailed information about your business, products, or events in an elegant, organized format.",
    category: "brochures",
    keywords: [
      "brochures",
      "tri-fold brochures",
      "bi-fold brochures",
      "marketing brochures",
      "product brochures",
      "company brochures",
      "brochure printing",
      "Toronto brochures",
      "GTA brochure printing",
      "custom brochures",
      "professional brochures",
      "Z-fold brochures",
    ],
    images: [
      {
        href: "/images/brochures/brochures_1.png",
        alt: "Standard Tri-fold Brochures",
      },
      {
        href: "/images/brochures/brochures_2.png",
        alt: "Bi-fold Brochures",
      },
      {
        href: "/images/brochures/brochures_3.png",
        alt: "Z-fold Brochures",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our brochures come in various fold styles and paper options to effectively communicate your message and represent your brand professionally.",
      items: [
        {
          title: "Multiple Fold Options",
          content:
            "Choose from tri-fold, bi-fold, Z-fold, and gate-fold designs to best present your content and meet your marketing objectives.",
        },
        {
          title: "Premium Paper",
          content:
            "Select from various paper weights and finishes including gloss, matte, and uncoated to achieve your desired look and feel.",
        },
        {
          title: "Full Color Printing",
          content:
            "Our high-resolution printing ensures your brochures feature vibrant colors, sharp images, and clear text for maximum impact.",
        },
      ],
    },
  },
  {
    name: "Real Estate Signs",
    description:
      "Boost your property visibility with our durable, eye-catching real estate signs. Designed to withstand the elements while effectively marketing your listings.",
    category: "real-estate-signs",
    keywords: [
      "real estate signs",
      "property signs",
      "for sale signs",
      "open house signs",
      "realtor signs",
      "custom real estate signs",
      "Toronto real estate signs",
      "GTA real estate signs",
      "durable real estate signs",
      "weather-resistant signs",
      "yard signs",
      "property marketing signs",
    ],
    images: [
      {
        href: "/images/real-estate-signs/real-estate-signs_1.png",
        alt: "For Sale Signs",
      },
      {
        href: "/images/real-estate-signs/real-estate-signs_2.png",
        alt: "Open House Signs",
      },
      {
        href: "/images/real-estate-signs/real-estate-signs_3.png",
        alt: "Custom Real Estate Signs",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our real estate signs are built to last with weather-resistant materials and vibrant, fade-resistant printing to ensure your properties get noticed.",
      items: [
        {
          title: "Weather-Resistant",
          content:
            "Made with durable materials designed to withstand sun, rain, and wind, ensuring your signs remain effective in all conditions.",
        },
        {
          title: "Customizable Designs",
          content:
            "Fully customizable with your branding, contact information, and property details to create a cohesive marketing presence.",
        },
        {
          title: "Various Mounting Options",
          content:
            "Available with stakes, frames, or hanging options to suit different property types and placement requirements.",
        },
      ],
    },
  },
  {
    name: "Election Signs",
    description:
      "Make your campaign stand out with our high-visibility election signs. Designed for maximum impact and durability throughout your entire campaign season.",
    category: "election-signs",
    keywords: [
      "election signs",
      "campaign signs",
      "political signs",
      "candidate signs",
      "lawn election signs",
      "coroplast election signs",
      "Toronto election signs",
      "GTA election signs",
      "durable campaign signs",
      "custom election signs",
      "voting signs",
      "political campaign materials",
    ],
    images: [
      {
        href: "/images/election-signs/election-signs_1.png",
        alt: "Lawn Election Signs",
      },
      {
        href: "/images/election-signs/election-signs_2.png",
        alt: "Large Format Election Signs",
      },
      {
        href: "/images/election-signs/election-signs_3.png",
        alt: "Custom Election Campaign Signs",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our election signs are designed to help you win with weather-resistant materials, bold colors, and quick turnaround times to meet campaign deadlines.",
      items: [
        {
          title: "Campaign-Ready Materials",
          content:
            "Constructed with durable corrugated plastic or aluminum that stands up to weather conditions throughout your campaign period.",
        },
        {
          title: "High Visibility Design",
          content:
            "Bold colors and clear typography ensure your message is easily readable from a distance, even for drivers passing by.",
        },
        {
          title: "Fast Turnaround",
          content:
            "Expedited production and delivery options available to meet tight campaign schedules and last-minute needs.",
        },
      ],
    },
  },
  {
    name: "Banners & Signage",
    description:
      "Create impactful visual communications with our custom banners and signage. Perfect for events, storefronts, trade shows, and promotional displays.",
    category: "banners-signage",
    keywords: [
      "banners",
      "signage",
      "vinyl banners",
      "retractable banners",
      "trade show banners",
      "custom signs",
      "Toronto banners",
      "GTA signage",
      "outdoor banners",
      "indoor signage",
      "event banners",
      "promotional displays",
      "banner stands",
      "business signage",
    ],
    images: [
      {
        href: "/images/banners/banners-and-signage_1.png",
        alt: "Vinyl Banners",
      },
      {
        href: "/images/banners/banners-and-signage_2.png",
        alt: "Retractable Banner Stands",
      },
      {
        href: "/images/banners/banners-and-signage_3.png",
        alt: "Custom Signage",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our banners and signs are printed on premium materials with vibrant, fade-resistant inks to ensure your message stands out in any environment.",
      items: [
        {
          title: "Durable Materials",
          content:
            "Choose from vinyl, fabric, aluminum, and other materials designed for indoor or outdoor use with excellent durability.",
        },
        {
          title: "Multiple Size Options",
          content:
            "Available in standard sizes or custom dimensions to fit your specific display needs and space requirements.",
        },
        {
          title: "Finishing Options",
          content:
            "Select from various finishing options including grommets, pole pockets, stands, and mounting hardware for easy installation.",
        },
      ],
    },
  },
  {
    name: "NCR Forms & Invoices",
    description:
      "Streamline your business operations with our professional NCR (No Carbon Required) forms and invoices. Perfect for receipts, purchase orders, work orders, and any business documentation requiring multiple copies.",
    category: "ncr-forms",
    keywords: [
      "NCR forms",
      "carbonless forms",
      "invoice forms",
      "receipt books",
      "business forms",
      "custom NCR forms",
      "Toronto NCR printing",
      "GTA business forms",
      "multi-part forms",
      "purchase order forms",
      "work order forms",
      "numbered forms",
      "sequential forms",
    ],
    images: [
      {
        href: "/images/ncr-forms/ncr-invoices_1.png",
        alt: "NCR Invoice Forms",
      },
      {
        href: "/images/ncr-forms/ncr-invoices_2.png",
        alt: "Custom NCR Forms",
      },
      {
        href: "/images/ncr-forms/ncr-invoices_3.png",
        alt: "Multi-part Business Forms",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our NCR forms provide clean, accurate copies without messy carbon paper. Available in various formats and customizable to meet your specific business requirements.",
      items: [
        {
          title: "Multiple Copy Options",
          content:
            "Available in 2-part, 3-part, or 4-part sets with different color sequences to easily distinguish between copies for different departments.",
        },
        {
          title: "Custom Numbering",
          content:
            "Sequential numbering available for tracking and record-keeping purposes, essential for invoices, receipts, and order forms.",
        },
        {
          title: "Customizable Design",
          content:
            "Fully customizable with your company logo, contact information, terms and conditions, and specific form fields to match your business processes.",
        },
      ],
    },
  },
  {
    name: "Promotional Products",
    description:
      "Extend your brand reach with our customizable promotional products. From branded merchandise to corporate gifts, we offer items that keep your business top-of-mind.",
    category: "promotional-products",
    keywords: [
      "promotional products",
      "branded merchandise",
      "corporate gifts",
      "promotional items",
      "custom promotional products",
      "branded giveaways",
      "Toronto promotional items",
      "GTA promotional products",
      "branded pens",
      "branded mugs",
      "custom apparel",
      "promotional bags",
      "trade show giveaways",
      "branded tech accessories",
      "business swag",
    ],
    images: [
      {
        href: "/images/promo/promotional-products_1.png",
        alt: "Promotional Products",
      },
      {
        href: "/images/promo/promotional-products_2.png",
        alt: "Corporate Gifts",
      },
      {
        href: "/images/promo/promotional-products_3.png",
        alt: "Custom Promotional Items",
      },
    ],
    features: {
      heading: "Features",
      subheading:
        "Our promotional products combine quality, functionality, and brand visibility to create effective marketing tools that recipients will actually use.",
      items: [
        {
          title: "Wide Product Selection",
          content:
            "Choose from pens, mugs, apparel, bags, tech accessories, and hundreds of other items to find the perfect match for your audience.",
        },
        {
          title: "Quality Branding",
          content:
            "High-quality imprinting, embroidery, and engraving options ensure your logo and message look professional on every item.",
        },
        {
          title: "Bulk Ordering",
          content:
            "Volume discounts available for larger orders, making promotional products a cost-effective marketing solution for events and campaigns.",
        },
      ],
    },
  },
];

// TODO: add the rest of the products
export const PRODUCTS: Product[] = [
  {
    name: "AQ Business Cards",
    category: "business-cards",
    image: {
      href: "/images/business-cards/business_cards_standard_01.jpg",
      alt: "AQ Business Cards",
    },
    href: "./aq-business-cards",
  },
  {
    name: "UV Business Cards",
    category: "business-cards",
    image: {
      href: "/images/business-cards/business_cards_color_01.jpg",
      alt: "UV Business Cards",
    },
    href: "./uv-business-cards",
  },
  {
    name: "Matte Laminated Business Cards",
    category: "business-cards",
    image: {
      href: "/images/business-cards/business_cards_laminated_01.jpg",
      alt: "Matte Laminated Business Cards",
    },
    href: "./matte-laminated-business-cards",
  },
  {
    name: "Gloss Laminated Business Cards",
    category: "business-cards",
    image: {
      href: "/images/business-cards/business_cards_laminated_02.jpg",
      alt: "Gloss Laminated Business Cards",
    },
    href: "./1matte-laminated-business-cards",
  },
];

export const OUR_VALUES = [
  {
    icon: <LuAward className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We strive for excellence in every project, no matter the size or complexity.",
  },
  {
    icon: <LuUsers className="h-8 w-8" />,
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their vision and bring it to life.",
  },
  {
    icon: <LuLightbulb className="h-8 w-8" />,
    title: "Innovation",
    description:
      "We constantly explore new technologies and techniques to stay ahead of industry trends.",
  },
  {
    icon: <LuLeaf className="h-8 w-8" />,
    title: "Sustainability",
    description:
      "We're committed to environmentally responsible printing practices and materials.",
  },
];

/* LD Schemas */
export const DEFAULT_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gemprint",
  url: "https://gemprint.ca",
  logo: "https://gemprint.ca/images/gemprint-logo.svg",
  sameAs: [
    "https://facebook.com/gemprint",
    "https://instagram.com/gemprint",
    "https://linkedin.com/company/gemprint",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-416-666-1676",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic", "Polish", "Somali"],
  },
};

export const CONTACT_US_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gemprint",
  description: "Professional printing services in Canada",
  url: "https://gemprint.ca",

  telephone: "+1-416-666-1676",
  email: "orders@gemprint.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "315-2 Lambertlodge Ave.",
    addressLocality: "Toronto",
    addressRegion: "Ontario",
    postalCode: "M6G 3Y9",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.67401",
    longitude: "-79.42263",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export const FAQ_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.text,
    },
  })),
};
