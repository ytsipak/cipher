import { symbols } from "../assets";
import { user01, user02, user03, user04, user05, user06 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "whatsnew",
    title: "Whats new?",
  },
];

// Hero Section
export const onlineUsersData = [
  {
    totalCount: "168K +",
    category: "Realtime Users",
    usersList: [
      {
        id: "user-1",
        avatar: user01,
      },
      {
        id: "user-2",
        avatar: user02,
      },
      {
        id: "user-3",
        avatar: user03,
      },
      {
        id: "user-4",
        avatar: user04,
      },
      {
        id: "user-5",
        avatar: user05,
      },
      {
        id: "user-6",
        avatar: user06,
      },
    ],
  },
];

// Services Section
export const services = [
  {
    id: "service-1",
    number: "01.",
    title: "Service for Any Level of Expertise.",
    content:
      "Seamless speed and ironclad protection: ensuring swift, secure transactions every time",
  },
  {
    id: "service-2",
    number: "02.",
    title: "Industry best practises.",
    content:
      "Our commitment lies in implementing security measures and transparent operations.",
  },
  {
    id: "service-3",
    number: "03.",
    title: "Protected by Insurance.",
    content:
      "effortless financial navigation: empowering manage your money with ease, confidence",
  },
];

// About Platform Section
export const starIcons = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  link: `${symbols}#icon-star`,
}));

// Crypto Portfolio Section
export const functionality = [
  {
    id: "functionality-1",
    title: "Fund your account",
    content:
      "Add funds to your crypto account to start trading. You can add funds with a variety of payment methods.",
  },
  {
    id: "functionality-2",
    title: "Verify your identity",
    content:
      "Complete the identity verification process to secure your account and transactions.",
  },
  {
    id: "functionality-3",
    title: "Start trading",
    content:
      "You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Cipher has to offer.",
  },
];

// What's new Section
export const latestFeatures = [
  {
    title: "Advanced Security",
    description:
      "We use state of the art storage technology to protect your assets.",
  },
  {
    title: "Recurring Buys",
    description: "Empower your investments with automated recurring purchases.",
  },
  {
    title: "More On-Ramps",
    description: "Expand your options with an array of new on-ramps.",
  },
  {
    title: "Trading API",
    description: "Seamlessly connect your trading strategies to our ecosystem.",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: `${symbols}#icon-instagram`,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: `${symbols}#icon-facebook`,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: `${symbols}#icon-twitter`,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: `${symbols}#icon-linkedin`,
    link: "https://www.linkedin.com/",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      {
        name: "IRIS",
        linkUrl: "iris/",
      },
      {
        name: "CLI Client",
        linkUrl: "cli-client/",
      },
      {
        name: "Rainbow Wallet",
        linkUrl: "rainbow-wallet/",
      },
      {
        name: "Endpoints & SDKs",
        linkUrl: "endpoints/",
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        name: "Main Option",
        linkUrl: "main-option/",
      },
      {
        name: "Ready Token",
        linkUrl: "ready-token/",
      },
      {
        name: "File Checking",
        linkUrl: "file-checking/",
      },
      {
        name: "Market Explore",
        linkUrl: "market-explore/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "FAQ",
        linkUrl: "faq/",
      },
      {
        name: "Blog",
        linkUrl: "blog/",
      },
      {
        name: "Docs",
        linkUrl: "docs/",
      },
      {
        name: "Press Kit",
        linkUrl: "press-kit/",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        name: "Support",
        linkUrl: "support/",
      },
      {
        name: "Tutorials",
        linkUrl: "tutorials/",
      },
      {
        name: "Contact Us",
        linkUrl: "Contact-us/",
      },
      {
        name: "Downloads",
        linkUrl: "downloads/",
      },
    ],
  },
];
