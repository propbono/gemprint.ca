import {
  LuBaggageClaim,
  LuCode2,
  LuHeartHandshake,
  LuPrinter,
  LuStar,
  LuTrophy,
} from "react-icons/lu";

import { LinkCard } from "@/components/link-card";

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
    to: "",
  },
  {
    title: "Experts in Print",
    description:
      "With state-of-the-art equipment and decades of combined experience, our staff are true experts in the printing industry. We stay current on the latest techniques and technologies to deliver the highest quality printed products.",
    icon: <LuTrophy />,
    to: "",
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
