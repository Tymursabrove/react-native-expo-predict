import { TeamAbregsType } from "./types";

export const Genders = ["Male", "Female", "Prefer Not to Say"];
export const Positions = ["Overall", "QB", "RB", "WR", "TE", "Flex"];
export const Scorings = ["PPR", "Half-PPR", "Full-PPR"];
export const TeamAbregs: TeamAbregsType = {
  "Arizona Cardinals": "ARI",
  "Atlanta Falcons": "ATL",
  "Baltimore Ravens": "BAL",
  "Buffalo Bills": "BUF",
  "Carolina Panthers": "CAR",
  "Chicago Bears": "CHI",
  "Cincinnati Bengals": "CIN",
  "Cleveland Browns": "CLE",
  "Dallas Cowboys": "DAL",
  "Denver Broncos": "DEN",
  "Detroit Lions": "DET",
  "Green Bay Packers": "GB",
  "Houston Texans": "HOU",
  "Indianapolis Colts": "IND",
  "Jacksonville Jaguars": "JAX",
  "Kansas City Chiefs": "KC",
  "Las Vegas Raiders": "LV",
  "Los Angeles Chargers": "LAC",
  "Los Angeles Rams": "LAR",
  "Miami Dolphins": "MIA",
  "Minnesota Vikings": "MIN",
  "New England Patriots": "NE",
  "New Orleans Saints": "NO",
  "New York Giants": "NYG",
  "New York Jets": "NYJ",
  "Philadelphia Eagles": "PHI",
  "Pittsburgh Steelers": "PIT",
  "San Francisco 49ers": "SF",
  "Seattle Seahawks": "SEA",
  "Tampa Bay Buccaneers": "TB",
  "Tennessee Titans": "TEN",
  "Washington Commanders": "WAS",
};

export const HomeCardContents = [
  {
    name: "Rankings",
    desc: "Check to see what our AI has put together for projections",
  },
  {
    name: `Invite 
Friends`,
    desc: "Invite your buddies for more chatbot credits!",
  },
  {
    name: "My Team",
    desc: "Sync your fantasy teams from other apps and have the chatbot consult your team directly ",
  },
  {
    name: "Trade Tools",
    desc: "Evaluate trades and generate AI suggested trades for the ultimate competitive edge",
  },
];

export const AccountMenus = [
  { type: "group", title: "General" },
  {
    type: "item",
    title: "Personal Info",
    icon: require("@src/assets/img/account/personal-info.png"),
    stackName: "PersonalInfo",
  },
  {
    type: "item",
    title: "Settings",
    icon: require("@src/assets/img/account/settings.png"),
    stackName: "Settings",
  },
  { type: "group", title: "About" },
  {
    type: "item",
    title: "Help Center",
    icon: require("@src/assets/img/account/help-center.png"),
    stackName: "HelpCenter",
  },
  {
    type: "item",
    title: "About RotoBot AI",
    icon: require("@src/assets/img/account/about-rotobot-ai.png"),
    stackName: "AboutRotoBotAI",
  },
  {
    type: "item",
    title: "Privacy Policy",
    icon: require("@src/assets/img/account/privacy-policy.png"),
    stackName: "PrivacyPolicy",
  },
  {
    type: "logout",
    title: "Logout",
    icon: require("@src/assets/img/account/logout.png"),
    stackName: "Logout",
  },
];

export const HelpList = [
  {
    title:"What is RotoBot AI?",
    content:"Lorem ipsom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title:"Is the Rotobot App free?",
    content:"Lorem ipsom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title:"How can I use RotoBot AI?",
    content:"Lorem ipsom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title:"How can I log out from RotoBot AI?",
    content:"Lorem ipsom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title:"How to close RotoBot AI account?",
    content:"Lorem ipsom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

export const PrivacyList = [
{
  header: "Information We Collect",
  title: "When you use our app, we may collect the following types of personal information:",
  data:["Device Information: We may collect information about the type of device you use, its operating system, and other technical details to help us improve our app.", 
    "Usage Information: We may collect information about how you use our app, such as which features you use and how often you use them.", 
    "Usage Information: We may collect information about how you use our app, such as which features you use and how often you use them.",
    "Personal Information: We may collect personal information, such as your name, email address, or phone number, if you choose to provide it to us."
  ]
},
{
  header: "How We Use Your Information",
  title: "We use your information for the following purposes:",
  data:["To provide and improve our app: We use your information to provide and improve our app, including to personalize your experience and to analyze how our app is used.",
  "To communicate with you: We may use your information to communicate with you about our app, including to provide you with updates and news about our app.",
  "To protect our rights and the rights of others: We may use your information to protect our rights and the rights of others, such as to investigate and prevent fraud or other illegal activity."]
}






];
