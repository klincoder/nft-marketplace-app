// Import resources
import routes from "../screens/routes";
import logoImage from "../assets/logo.png";
import badge from "../assets/icons/badge.png";
import eth from "../assets/icons/eth.png";
import heart from "../assets/icons/heart.png";
import left from "../assets/icons/left.png";
import search from "../assets/icons/search.png";
import logo from "../assets/images/logo.png";
import nft01 from "../assets/images/nft01.png";
import nft02 from "../assets/images/nft02.jpeg";
import nft03 from "../assets/images/nft03.jpeg";
import nft04 from "../assets/images/nft04.jpeg";
import nft05 from "../assets/images/nft05.jpeg";
import nft06 from "../assets/images/nft06.jpeg";
import nft07 from "../assets/images/nft07.jpeg";
import person01 from "../assets/images/person01.png";
import person02 from "../assets/images/person02.png";
import person03 from "../assets/images/person03.png";
import person04 from "../assets/images/person04.png";

// BASE URL
export const baseUrl = "https://klincoder.netlify.app";
//https://klincoder.com

// CURRENCY SYMBOL
export const currSymbol = { ngn: "₦", btc: "₿", usd: "$" };

// APP COLORS
export const appColors = {
  primary: "#001F2D",
  secondary: "#4D626C",
  danger: "#ff5252",
  success: "#198754",
  error: "#dc3545",
  info: "#0dcaf0",
  warning: "#FFC107",
  white: "#ffffff",
  black: "#000000",
  lightBlack: "#333333",
  grey: "#74858C",
  lightGrey: "#f5f5f5",
};

// APP FONTS
export const appFonts = {
  regular: "Inter-Regular",
  medium: "Inter-Medium",
  light: "Inter-Light",
  bold: "Inter-Bold",
  semiBold: "Inter-SemiBold",
  regular2: "Inter-Regular",
  medium2: "Inter-Medium",
  light2: "Inter-Light",
  bold2: "Inter-Bold",
  semiBold2: "Inter-SemiBold",
};

// APP IMAGES
export const appImages = {
  general: "https://placehold.co/600x400.png",
  bankTransfer:
    "https://firebasestorage.googleapis.com/v0/b/bulkahia-dev.appspot.com/o/bank-transfer.png?alt=media&token=47cb143a-8909-46d4-9123-9004eb09efbf",
  creditCard:
    "https://firebasestorage.googleapis.com/v0/b/bulkahia-dev.appspot.com/o/credit-card.png?alt=media&token=aa6bbc9b-37ee-413d-8150-649de975edef",
  onboarding:
    "https://firebasestorage.googleapis.com/v0/b/klincoder-dev.appspot.com/o/app-onboarding-default.png?alt=media&token=c51ac96f-cdec-47a6-bc21-1a9b0c989fb2",
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/klincoder-dev.appspot.com/o/avatar-default.png?alt=media&token=589b5b52-2bf3-42e1-994c-e89d1d203f9f",
  logoImage,
  badge,
  eth,
  heart,
  left,
  search,
  logo,
  nft01,
  nft02,
  nft03,
  nft04,
  nft05,
  nft06,
  nft07,
  person01,
  person02,
  person03,
  person04,
};

// APP SIZES
export const appSizes = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

// APP SHADOWS
export const appShadows = {
  light: {
    shadowColor: appColors?.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: appColors?.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: appColors?.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};

// PHONE REGEX - 11 DIGITS
export const phoneRegex = /^(?:\d{11})$/;

// WHOLE & DECIMAL NUMBERS ONLY
export const numberDecimalRegex = /^\d*(\.\d+)?$/;

// FIXED DECIMAL PLACES REGEX - 5
export const fixedDecimalRegex5 = /^\d*(\.\d{1,5})?$/;

// DIGITS REGEX
export const digitsOnlyRegex = /^[0-9]+$/;

// CANNOT START ZERO REGEX - BUT CAN CONTAIN 0
export const cantStartWithZeroRegex = /^(?:[1-9]\d*|0)$/;

// GLOBAL SCREEN OPTIONS
export const globalScreenOptions = {
  headerStyle: { backgroundColor: `${appColors?.primary}` },
  headerTitleStyle: { color: "white", fontFamily: appFonts?.medium },
  headerTintColor: "white",
  headerTitleAlign: "center",
};

// ALERT MESSAGE
export const alertMsg = {
  generalErr: "Internal error. Please contact support.",
  generalSucc: "Action successful",
  loginSucc: "Login successful",
  loginErr: "Invalid credentials. Check & try again",
  regSucc: "Registration successful",
  isRequired: "All fields are required",
  isValidUser: "User already exist",
  inValidUser: "User not found",
  otpSent: "Otp sent successfully",
  otpErr: "Invalid code",
  profileSucc: "Profile updated",
  passRecoverySucc: "Password recovery successful",
  logoutConfirm: "Confirm logout",
  logoutSucc: "Logout successful",
  paymentSucc: "Payment successful",
  paymentErr: "Payment failed",
  emailExistErr: "Email address already exist",
  usernameExistErr: "Username not available",
};

// API ROUTES
export const apiRoutes = {
  otp: "mailjet-otp",
  welcome: "mailjet-welcome",
  login: "mailjet-login",
  newUser: "mailjet-new-user",
  passChange: "mailjet-pass-change",
  profileChange: "mailjet-profile-change",
  broadcast: "mailjet-broadcast",
  contactForm: "mailjet-contact-form",
  userTranx: "mailjet-user-tranx",
  adminTranx: "mailjet-admin-tranx",
};

// LISTS
// PROFILE LIST
export const profileList = [
  {
    id: "123",
    title: "Edit Profile",
    leftIconType: "antDesign",
    leftIconName: "edit",
    slug: "edit-profile",
    isLink: true,
    screenLink: routes.EDIT_PROFILE,
  },
  {
    id: "456",
    title: "Notifications",
    leftIconType: "feather",
    leftIconName: "bell",
    slug: "notifications",
    isSwitch: true,
  },
];

// NFT LIST
export const nftList = [
  {
    id: "NFT-01",
    name: "Abstracto #312",
    creator: "Putri Intan",
    price: 4.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: appImages?.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: appImages?.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: appImages?.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: appImages?.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Green Coins",
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: appImages?.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: appImages?.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "NFT coins race",
    creator: "Elisabeth aho",
    price: 95.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: appImages?.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: appImages?.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: appImages?.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Nifty NFT",
    creator: "Putri Intan",
    price: 54.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: appImages?.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: appImages?.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: appImages?.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: appImages?.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: appImages?.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Colorful circles",
    creator: "David doe",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: appImages?.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: appImages?.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "Black box model",
    creator: "Leo Messi",
    price: 20.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: appImages?.nft06,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: appImages?.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: appImages?.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: appImages?.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: appImages?.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: appImages?.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Abstracto soulful art",
    creator: "Victor de la Cruz",
    price: 18.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    image: appImages?.nft07,
    bids: [],
  },
];
