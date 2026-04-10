import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/userAuth";
import { workerUrl } from "../util/workerRequest";
import { WebflowAPI } from "../types/webflowtypes";
import "../styles/publish.css";
import "../styles/payment.css";


declare const webflow: WebflowAPI;

function getStoredSiteId(): string | null {
  try {
    const raw = localStorage.getItem('accessbit-userinfo');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.siteId || null;
  } catch {
    return null;
  }
}

function getStoredCustomDomain(): string | null {
  try {
    const raw = localStorage.getItem('accessbit-userinfo');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const customDomain = parsed?.customDomain;
    if (!customDomain) return null;
    return String(customDomain)
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '')
      .split('/')[0];
  } catch {
    return null;
  }
}

const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
// Accessibility icon as data URL (Font Awesome 5 style: ring + figure)
const icon1 = new URL("../assets/Accessibility.webp", import.meta.url).href;
const icon2 = new URL("../assets/icon2.svg", import.meta.url).href;
const icon3 = new URL("../assets/icon3.svg", import.meta.url).href;
const icon4 = new URL("../assets/icon4.svg", import.meta.url).href;
const icon5 = new URL("../assets/icon5.svg", import.meta.url).href;
const icon6 = new URL("../assets/icon6.svg", import.meta.url).href;
const icon7 = new URL("../assets/icon7.svg", import.meta.url).href;
const icon8 = new URL("../assets/icon8.svg", import.meta.url).href;

// Icon options matching CustomizationScreen
const iconOptions = [
  { id: "accessibility", label: icon1, name: "Accessibility" },
  { id: "person", label: icon2, name: "Person" },
  { id: "wheelchair", label: icon3, name: "Wheelchair" },
  { id: "ad", label: icon4, name: "AD" },
  { id: "eye", label: icon5, name: "Eye" },
  { id: "ramp", label: icon6, name: "Ramp" },
  { id: "gear", label: icon7, name: "Gear" },
  { id: "ad-triple", label: icon8, name: "AD)))" },
];

/** Exact Stripe URLs opened from this screen — only these may be passed to `window.open`. */
const STRIPE_PORTAL_URL = "https://billing.stripe.com/p/login/3cI8wRgGjaLt0MY3x64Ni00";
const STRIPE_BUY_ANNUAL_URL = "https://buy.stripe.com/3cI8wRgGjaLt0MY3x64Ni00";
const STRIPE_BUY_MONTHLY_URL = "https://buy.stripe.com/8x23cx9dRaLt2V6ffO4Ni01";
const TRUSTED_STRIPE_URLS = new Set<string>([
  STRIPE_PORTAL_URL,
  STRIPE_BUY_ANNUAL_URL,
  STRIPE_BUY_MONTHLY_URL,
]);

function openTrustedStripeUrl(url: string): void {
  if (!TRUSTED_STRIPE_URLS.has(url)) return;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Preview footer SVGs copied from widget UI (links removed for preview)
const PREVIEW_FOOTER_BRAND_SVG = `<svg width="97" height="15" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M18.6187 14.94C17.6214 14.94 16.7333 14.705 15.9546 14.235C15.1758 13.7508 14.561 13.0885 14.1102 12.2482C13.673 11.4079 13.4544 10.4323 13.4544 9.32136C13.4544 8.19621 13.673 7.21349 14.1102 6.37318C14.561 5.51864 15.1758 4.85636 15.9546 4.38636C16.7333 3.90212 17.6214 3.66 18.6187 3.66C19.8756 3.66 20.9276 4.00182 21.7747 4.68545C22.6217 5.36909 23.1614 6.29485 23.3937 7.46273H23.0499C22.0069 7.46273 21.1733 6.60327 20.3197 6.01C19.8415 5.66818 19.2677 5.49727 18.5982 5.49727C18.0517 5.49727 17.5462 5.64682 17.0817 5.94591C16.6172 6.23076 16.2415 6.65803 15.9546 7.22773C15.6813 7.78318 15.5447 8.47394 15.5447 9.3C15.5447 9.91242 15.6267 10.4608 15.7906 10.945C15.9546 11.415 16.1732 11.8138 16.4464 12.1414C16.7333 12.4689 17.0612 12.7182 17.4301 12.8891C17.799 13.0458 18.1884 13.1241 18.5982 13.1241C19.0491 13.1241 19.4521 13.0529 19.8073 12.9105C20.1762 12.7538 20.4836 12.5259 20.7295 12.2268C21.193 11.6928 21.7666 11.1586 22.4778 11.1586H23.3937C23.1614 12.298 22.6217 13.2167 21.7747 13.9145C20.9276 14.5982 19.8756 14.94 18.6187 14.94Z" fill="black"/><path d="M29.7701 15C28.7728 15 27.8847 14.765 27.106 14.295C26.3272 13.8108 25.7124 13.1485 25.2616 12.3082C24.8244 11.4679 24.6058 10.4923 24.6058 9.38136C24.6058 8.25621 24.8244 7.27349 25.2616 6.43318C25.7124 5.57864 26.3272 4.91636 27.106 4.44636C27.8847 3.96212 28.7728 3.72 29.7701 3.72C31.027 3.72 32.079 4.06182 32.9261 4.74545C33.7731 5.42909 34.3128 6.35485 34.545 7.52273H34.2013C33.1583 7.52273 32.3247 6.66327 31.471 6.07C30.9929 5.72818 30.419 5.55727 29.7496 5.55727C29.2031 5.55727 28.6976 5.70682 28.2331 6.00591C27.7686 6.29076 27.3929 6.71803 27.106 7.28773C26.8327 7.84318 26.6961 8.53394 26.6961 9.36C26.6961 9.97242 26.7781 10.5208 26.942 11.005C27.106 11.475 27.3246 11.8738 27.5978 12.2014C27.8847 12.5289 28.2126 12.7782 28.5815 12.9491C28.9504 13.1058 29.3397 13.1841 29.7496 13.1841C30.2005 13.1841 30.6035 13.1129 30.9587 12.9705C31.3276 12.8138 31.635 12.5859 31.8809 12.2868C32.3444 11.7528 32.9179 11.2186 33.6292 11.2186H34.545C34.3128 12.358 33.7731 13.2767 32.9261 13.9745C32.079 14.6582 31.027 15 29.7701 15Z" fill="black"/><path d="M40.7017 14.94C39.6982 14.94 38.8061 14.705 38.0256 14.235C37.2451 13.765 36.6318 13.1098 36.1858 12.2695C35.7537 11.4292 35.5377 10.4536 35.5377 9.34273C35.5377 8.20333 35.7537 7.21349 36.1858 6.37318C36.6318 5.51864 37.2451 4.85636 38.0256 4.38636C38.8061 3.90212 39.7121 3.66 40.7435 3.66C41.7749 3.66 42.66 3.895 43.3987 4.365C44.1374 4.835 44.7089 5.46167 45.1131 6.245C45.5173 7.01409 45.7194 7.86864 45.7194 8.80864C45.7194 8.95106 45.7124 9.10773 45.6985 9.27864C45.6985 9.4353 45.6915 9.61333 45.6776 9.81273H40.1649C39.3187 9.81273 38.6328 9.13363 38.6328 8.29591H43.6287C43.5869 7.39864 43.2942 6.70076 42.7506 6.20227C42.207 5.68955 41.531 5.43318 40.7226 5.43318C40.1512 5.43318 39.6285 5.56848 39.1546 5.83909C38.6807 6.09545 38.2974 6.48 38.0047 6.99273C37.7259 7.49121 37.5866 8.125 37.5866 8.89409V9.49227C37.5866 10.2898 37.7259 10.9664 38.0047 11.5218C38.2974 12.063 38.6807 12.4761 39.1546 12.7609C39.6285 13.0315 40.1442 13.1668 40.7017 13.1668C41.3707 13.1668 41.9213 13.0173 42.3534 12.7182C43.1378 12.1752 43.9418 11.5005 44.899 11.5005H45.4058C45.2246 12.1556 44.9179 12.7467 44.4859 13.2736C44.0538 13.7864 43.5172 14.1923 42.876 14.4914C42.2488 14.7905 41.5241 14.94 40.7017 14.94Z" fill="black"/><path d="M51.8712 14.94C50.8985 14.94 50.0475 14.7905 49.318 14.4914C48.5884 14.1923 48.0109 13.7721 47.5854 13.2309C47.1598 12.6897 46.9015 12.0559 46.8103 11.3295H48.0841C48.6982 11.3295 49.2036 11.7807 49.5687 12.2695C49.7967 12.5544 50.1007 12.7823 50.4806 12.9532C50.8758 13.1241 51.3393 13.2095 51.8712 13.2095C52.3728 13.2095 52.7831 13.1455 53.1023 13.0173C53.4366 12.8748 53.6798 12.6897 53.8318 12.4618C53.9837 12.2197 54.0597 11.9633 54.0597 11.6927C54.0597 11.2939 53.9534 10.9949 53.7406 10.7955C53.543 10.5818 53.239 10.418 52.8287 10.3041C52.4336 10.1759 51.9548 10.062 51.3925 9.96227C50.8606 9.87682 50.3438 9.76288 49.8423 9.62045C49.3559 9.46379 48.9152 9.27151 48.5201 9.04364C48.1401 8.81576 47.8361 8.53091 47.6082 8.18909C47.3802 7.83303 47.2662 7.39864 47.2662 6.88591C47.2662 6.27349 47.441 5.72515 47.7905 5.24091C48.1401 4.74242 48.634 4.35788 49.2724 4.08727C49.9259 3.80242 50.6934 3.66 51.5749 3.66C52.8515 3.66 53.8774 3.94485 54.6525 4.51455C55.4276 5.08424 55.8835 5.88894 56.0203 6.92864H55.1685C54.392 6.92864 53.7746 6.23912 53.1251 5.81773C52.7299 5.54712 52.2056 5.41182 51.5521 5.41182C50.8986 5.41182 50.397 5.53288 50.0475 5.775C49.6979 6.01712 49.5231 6.33758 49.5231 6.73636C49.5231 6.99273 49.6219 7.22061 49.8195 7.42C50.0171 7.61939 50.3058 7.7903 50.6858 7.93273C51.0809 8.06091 51.5597 8.18197 52.122 8.29591C52.9275 8.43833 53.6494 8.61636 54.2877 8.83C54.926 9.04364 55.4352 9.35697 55.8151 9.77C56.1951 10.183 56.385 10.7741 56.385 11.5432C56.4002 12.2126 56.2179 12.8036 55.8379 13.3164C55.4732 13.8291 54.9488 14.2279 54.2649 14.5127C53.5962 14.7976 52.7983 14.94 51.8712 14.94Z" fill="black"/><path d="M62.2815 14.94C61.3581 14.94 60.5501 14.7905 59.8575 14.4914C59.165 14.1923 58.6167 13.7721 58.2127 13.2309C57.8087 12.6897 57.5634 12.0559 57.4768 11.3295H58.6424C59.2495 11.3295 59.7468 11.7777 60.0956 12.2695C60.312 12.5544 60.6006 12.7823 60.9613 12.9532C61.3364 13.1241 61.7765 13.2095 62.2815 13.2095C62.7576 13.2095 63.1472 13.1455 63.4502 13.0173C63.7676 12.8748 63.9985 12.6897 64.1428 12.4618C64.2871 12.2197 64.3592 11.9633 64.3592 11.6927C64.3592 11.2939 64.2582 10.9949 64.0562 10.7955C63.8686 10.5818 63.5801 10.418 63.1905 10.3041C62.8154 10.1759 62.3609 10.062 61.827 9.96227C61.322 9.87682 60.8314 9.76288 60.3553 9.62045C59.8936 9.46379 59.4752 9.27151 59.1 9.04364C58.7393 8.81576 58.4507 8.53091 58.2343 8.18909C58.0179 7.83303 57.9097 7.39864 57.9097 6.88591C57.9097 6.27349 58.0756 5.72515 58.4074 5.24091C58.7393 4.74242 59.2082 4.35788 59.8142 4.08727C60.4347 3.80242 61.1633 3.66 62.0002 3.66C63.2121 3.66 64.1861 3.94485 64.9219 4.51455C65.6578 5.08424 66.0906 5.88894 66.2205 6.92864H65.4603C64.6966 6.92864 64.1004 6.24725 63.4719 5.81773C63.0967 5.54712 62.5989 5.41182 61.9785 5.41182C61.3581 5.41182 60.8819 5.53288 60.5501 5.775C60.2182 6.01712 60.0523 6.33758 60.0523 6.73636C60.0523 6.99273 60.1461 7.22061 60.3337 7.42C60.5212 7.61939 60.7954 7.7903 61.1561 7.93273C61.5312 8.06091 61.9857 8.18197 62.5196 8.29591C63.2843 8.43833 63.9696 8.61636 64.5756 8.83C65.1816 9.04364 65.665 9.35697 66.0257 9.77C66.3864 10.183 66.5668 10.7741 66.5668 11.5432C66.5812 12.2126 66.4081 12.8036 66.0473 13.3164C65.7011 13.8291 65.2033 14.2279 64.554 14.5127C63.9191 14.7976 63.1616 14.94 62.2815 14.94Z" fill="black"/><path d="M92.4444 14.9998C91.418 14.9998 90.6025 14.7562 89.9979 14.269C89.3933 13.7679 89.091 12.8839 89.091 11.6172V6.52251H86.4547V4.64331H88.0154C88.7325 4.64331 89.1543 3.93531 89.2808 3.23931C89.4643 2.27076 90.3312 1.56891 91.3266 1.56891V4.64331H95.4604C95.4604 4.64331 94.619 6.52251 93.5812 6.52251H91.3266V11.5755C91.3266 12.1183 91.4461 12.5011 91.6852 12.7239C91.9382 12.9327 92.3671 13.0371 92.9717 13.0371H97C97 13.0371 96.1213 14.9998 95.0373 14.9998H84.9341H92.4444Z" fill="black"/><path d="M81.6182 14.9997C81.0157 14.9997 80.5273 14.5162 80.5273 13.9197V13.0788H82.5405V7.25326C82.5405 6.7939 82.3156 6.56422 81.8656 6.56422H81.486C80.4144 6.56422 79.5457 5.70418 79.5457 4.64326H82.2664C83.1381 4.64326 83.7708 4.8451 84.1645 5.24878C84.5723 5.63854 84.7762 6.26494 84.7762 7.12798V13.0788H86.2719C87.3435 13.0788 88.2122 13.9388 88.2122 14.9997H81.6182Z" fill="black"/><path d="M9.78042 5.4C9.78042 3.67687 8.36946 2.28 6.62894 2.28C4.88843 2.28 3.47747 3.67687 3.47747 5.4V9.06293C3.47747 9.98148 3.35845 10.8963 3.1233 11.7848L2.39083 14.5911H0L0.895467 11.207C1.08069 10.5071 1.17446 9.78648 1.17446 9.06293V5.4C1.17446 2.41766 3.61652 0 6.62894 0C9.64137 0 12.0834 2.41766 12.0834 5.4V14.58C10.8115 14.58 9.78042 13.5592 9.78042 12.3V5.4Z" fill="black"/><path d="M11.7241 9.06H7.05745C5.85248 9.06 4.87566 8.09294 4.87566 6.9H11.7241V9.06Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M73.186 0.06C74.2466 0.06 75.1329 0.230013 75.8448 0.570117C76.5568 0.89606 77.087 1.34964 77.4357 1.93066C77.799 2.49752 77.9806 3.14234 77.9806 3.86508C77.9806 4.61614 77.8136 5.24679 77.4794 5.75695C77.1452 6.26712 76.7021 6.66392 76.15 6.94734C76.1015 6.97165 76.0544 6.99473 76.0088 7.01719C76.7036 7.23969 77.4378 7.53877 77.7544 7.73379C78.3065 8.05973 78.7424 8.49911 79.062 9.0518C79.3816 9.60447 79.5414 10.2139 79.5414 10.8799C79.5414 11.6452 79.3525 12.3395 78.9748 12.963C78.597 13.5724 78.0376 14.0543 77.2966 14.4086C76.5557 14.7628 75.6476 14.94 74.5725 14.94H68.7537V0.06H73.186ZM70.933 6.47965H70.9355V8.11629L70.933 8.11641V13.1756H74.2892C75.2481 13.1756 75.9891 12.963 76.5121 12.5379C77.0497 12.0986 77.3184 11.4822 77.3184 10.6886C77.3184 9.90913 77.0424 9.28554 76.4903 8.81789C75.9641 8.36017 75.2582 8.11084 74.3294 8.10047V6.26836C74.6032 6.1686 74.8396 6.0337 75.0385 5.86324C75.518 5.4381 75.7577 4.85699 75.7577 4.12008C75.7577 3.41152 75.518 2.85175 75.0385 2.44078C74.5591 2.01565 73.8399 1.80305 72.881 1.80305H70.933V6.47965Z" fill="black"/><path d="M75.9093 8.1H74.3336C73.2625 8.1 72.3942 7.24039 72.3942 6.18H76.3941L74.6972 6.96L75.9093 8.1Z" fill="black"/><path d="M75.602 5.10001C75.2141 5.86801 74.2325 6.2 73.8487 6.24L74.2687 6.66L74.3899 6.78L75.4202 6.66L76.3293 5.88001C76.2485 5.3 75.9899 4.33201 75.602 5.10001Z" fill="black"/><path d="M81.8172 0.12H83.3323C84.1022 0.12 84.7262 0.737847 84.7262 1.5C84.7262 2.26215 84.1022 2.88 83.3323 2.88H83.2111C82.4413 2.88 81.8172 2.26215 81.8172 1.5V0.12Z" fill="black"/></g></svg>`;

const PREVIEW_FOOTER_POWERED_SVG = `<svg width="77" height="22" viewBox="0 0 77 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M74.3028 8.09633C75.3439 8.09633 76.1879 7.25235 76.1879 6.21125C76.1879 5.17015 75.3439 4.32617 74.3028 4.32617C73.2617 4.32617 72.4177 5.17015 72.4177 6.21125C72.4177 7.25235 73.2617 8.09633 74.3028 8.09633Z" fill="black"/><path d="M71.1608 11.8782C71.9349 11.8782 72.5625 11.2506 72.5625 10.4764C72.5625 9.70228 71.9349 9.07471 71.1608 9.07471C70.3866 9.07471 69.759 9.70228 69.759 10.4764C69.759 11.2506 70.3866 11.8782 71.1608 11.8782Z" fill="black"/><path d="M76.574 13.1726C76.574 13.5444 76.4263 13.9009 76.1635 14.1638C75.9006 14.4267 75.5441 14.5743 75.1723 14.5743H75.0959C74.842 14.5605 74.5966 14.4779 74.3861 14.3354C74.1755 14.1928 74.0077 13.9956 73.9006 13.765C73.7935 13.5344 73.7512 13.279 73.7782 13.0261C73.8051 12.7733 73.9003 12.5325 74.0536 12.3296C74.2069 12.1268 74.4125 11.9694 74.6484 11.8744C74.8843 11.7794 75.1415 11.7504 75.3926 11.7904C75.6437 11.8305 75.8792 11.938 76.0739 12.1016C76.2685 12.2653 76.415 12.4787 76.4976 12.7192C76.5003 12.7265 76.5026 12.7339 76.5044 12.7415C76.5507 12.8805 76.5742 13.0261 76.574 13.1726Z" fill="black"/><path d="M12.165 12.8496C14.6628 12.8497 16.1582 14.4436 16.1582 17.04C16.1582 17.3522 16.126 17.6809 16.126 17.7168H10.3408C10.3902 18.7801 11.2943 19.5537 12.3789 19.5537C13.3976 19.5536 13.9568 19.0433 14.2158 18.3203L16.0439 18.8613C15.6331 20.2581 14.3506 21.4247 12.3623 21.4248C10.1389 21.4247 8.18848 19.8305 8.18848 17.1025C8.18859 14.5226 10.0945 12.8497 12.165 12.8496ZM59.3467 19.7158C59.3467 20.2581 59.3792 20.85 59.4121 21.1787H57.3252C57.2715 20.8695 57.2442 20.5561 57.2432 20.2422C56.8816 20.883 56.059 21.3759 54.9746 21.376C52.8649 21.3758 51.3092 19.8551 51.0654 17.7168H45.5918C45.6412 18.7801 46.5453 19.5537 47.6299 19.5537C48.6477 19.5536 49.2068 19.0433 49.4668 18.3203L51.2959 18.8613C50.885 20.2581 49.6026 21.4247 47.6143 21.4248C45.3958 21.4247 43.4414 19.8305 43.4414 17.1025C43.4415 14.5226 45.3474 12.8498 47.418 12.8496C49.4353 12.8497 50.7994 13.8901 51.249 15.6592C51.7594 14.0335 53.1236 12.8985 54.9092 12.8984C56.3059 12.8985 56.9633 13.4789 57.1934 13.9014V9.28027H59.3467V19.7158ZM66.375 12.8428C68.9385 12.8429 69.8926 14.293 69.8926 15.916V19.9014C69.8944 20.3304 69.9267 20.7591 69.9893 21.1836H67.9922C67.9363 20.8645 67.9079 20.5408 67.9092 20.2168C67.4983 20.8575 66.7257 21.4159 65.5264 21.416C63.8011 21.4159 62.7492 20.2496 62.749 18.9844C62.749 17.5305 63.8175 16.7246 65.165 16.5273L67.1494 16.2275C67.6094 16.1618 67.7578 15.9317 67.7578 15.6523C67.7576 15.0726 67.3134 14.6007 66.3936 14.6006C65.4406 14.6007 64.9144 15.2094 64.8467 15.916L62.9082 15.5049C63.0397 14.2396 64.2061 12.843 66.375 12.8428ZM40.4004 12.8633C41.8957 12.8634 43.3241 13.7675 43.3242 15.9365V21.1787H41.2061V16.3809C41.206 15.5111 40.7783 14.8529 39.7764 14.8525C38.8396 14.8525 38.2803 15.5753 38.2803 16.4463V21.1826H36.1113V16.3809C36.1113 15.511 35.6673 14.8528 34.6816 14.8525C33.7285 14.8525 33.169 15.5589 33.1689 16.4463V21.1826L30.9834 21.1787V13.0938H33.0703V14.0801C33.5141 13.2913 34.5501 12.8633 35.4375 12.8633C36.5383 12.8634 37.4261 13.3401 37.8369 14.2109C38.4778 13.2252 39.3323 12.8633 40.4004 12.8633ZM5.14844 12.8799C7.15315 12.88 8.07418 14.3092 8.07422 16.084V21.1787H5.88867V16.4619C5.88861 15.5582 5.44409 14.8517 4.39258 14.8516C3.43979 14.8517 2.88105 15.591 2.88086 16.5273V21.1787H0.695312V13.0928H2.81543V14.0957C3.30839 13.2578 4.2776 12.88 5.14844 12.8799ZM19.0859 18.2861L20.8457 13.0928H23.1455L24.8848 18.3027L26.3809 13.0928H28.5498L26.0195 21.1787H23.835L21.9453 15.6562L20.0889 21.1787H17.8701L15.29 13.0928H17.5908L19.0859 18.2861ZM62.4043 21.1787H60.2188V13.0928H62.4043V21.1787ZM65.9375 17.8262C65.3788 17.9084 64.9356 18.2204 64.9355 18.8447C64.9355 19.3213 65.2806 19.7812 65.9873 19.7812C66.9073 19.781 67.7617 19.3375 67.7617 17.9082V17.5469L65.9375 17.8262ZM55.2383 14.8467C54.1199 14.8467 53.2335 15.6682 53.2334 17.1143C53.2334 18.5605 54.0879 19.418 55.2383 19.418C56.3555 19.4177 57.2266 18.563 57.2266 17.0977C57.2264 15.6481 56.3564 14.8469 55.2383 14.8467ZM12.1982 14.6211C11.0646 14.6211 10.4402 15.4754 10.3906 16.2148H14.0059C13.9728 15.4098 13.4467 14.6213 12.1982 14.6211ZM47.4502 14.6211C46.3165 14.6211 45.6931 15.4754 45.6436 16.2148H49.2578C49.2248 15.4098 48.6987 14.6212 47.4502 14.6211ZM10.9482 3.56934C13.4462 3.56934 14.9414 5.16319 14.9414 7.75977C14.9414 8.07196 14.9092 8.40076 14.9092 8.43652H9.12402C9.17344 9.49978 10.0775 10.2734 11.1621 10.2734C12.1809 10.2734 12.74 9.76309 12.999 9.04004L14.8271 9.58105C14.4163 10.9779 13.134 12.1445 11.1455 12.1445C8.92691 12.1445 6.97168 10.5503 6.97168 7.82227C6.97176 5.24223 8.87761 3.56935 10.9482 3.56934ZM41.9922 3.56934C44.49 3.56946 45.9854 5.16329 45.9854 7.75977C45.9853 8.07196 45.9521 8.40076 45.9521 8.43652H40.168C40.2174 9.49963 41.1207 10.2732 42.2051 10.2734C43.224 10.2734 43.7829 9.76314 44.042 9.04004L45.8701 9.58105C45.4592 10.9778 44.1777 12.1444 42.1895 12.1445C39.9709 12.1445 38.0146 10.5503 38.0146 7.82227C38.0147 5.24222 39.9215 3.56934 41.9922 3.56934ZM3.2373 3.56445C5.53805 3.56445 6.31056 5.02743 6.40918 5.89844L4.58496 6.30957C4.51922 5.83298 4.17421 5.22461 3.25391 5.22461C2.6739 5.22462 2.21875 5.57013 2.21875 6.03027C2.21893 6.42445 2.51449 6.67076 2.95801 6.75293L4.1084 7C5.7025 7.32868 6.50781 8.2982 6.50781 9.48145C6.50762 10.796 5.48882 12.1435 3.36914 12.1436C0.936995 12.1436 0.0986557 10.5658 0 9.64551L1.87695 9.23535C1.92626 9.87628 2.40327 10.4678 3.35645 10.4678C4.07936 10.4678 4.41978 10.0903 4.41992 9.66309C4.41992 9.30155 4.17329 9.0055 3.5498 8.87402L2.48145 8.62793C0.920324 8.28284 0.213968 7.34574 0.213867 6.21094C0.213867 4.76093 1.4954 3.56454 3.2373 3.56445ZM19.1494 3.56445C21.7131 3.56447 22.666 5.0146 22.666 6.6377V10.6211C22.6678 11.0501 22.7001 11.4789 22.7627 11.9033H20.7598C20.7038 11.5842 20.6765 11.2605 20.6777 10.9365C20.2669 11.5774 19.4945 12.1357 18.2949 12.1357C16.5695 12.1357 15.5177 10.9694 15.5176 9.7041C15.5176 8.25017 16.5899 7.44428 17.9336 7.24707L19.9219 6.94824C20.3817 6.88253 20.5301 6.65221 20.5303 6.37305C20.5303 5.79307 20.0862 5.32136 19.166 5.32129C18.2128 5.32129 17.6868 5.92908 17.6191 6.63574L15.6797 6.22461C15.816 4.96307 16.9763 3.56445 19.1494 3.56445ZM26.8574 3.8125H28.4805V5.75098H26.8574V9.13477C26.8574 9.84128 27.1863 10.0712 27.8105 10.0713C28.0377 10.0737 28.2648 10.0519 28.4873 10.0059V11.8135C28.2939 11.8956 27.8956 12.0068 27.2549 12.0068C25.6773 12.0068 24.6914 11.07 24.6914 9.50879V5.75098H23.2256V3.8125H23.6367C24.4912 3.81244 24.8857 3.25328 24.8857 2.53027V1.39648H26.8574V3.8125ZM32.3291 3.8125H33.9561V5.75098H32.3291V9.13477C32.3291 9.84136 32.6578 10.0713 33.2832 10.0713C33.5105 10.0738 33.7374 10.052 33.96 10.0059V11.8135C33.7666 11.8956 33.3693 12.0068 32.7275 12.0068C31.1508 12.0068 30.165 11.07 30.165 9.50879V5.75098H28.6982V3.8125H29.1094C29.9637 3.81235 30.3584 3.25322 30.3584 2.53027V1.39648H32.3291V3.8125ZM36.9502 11.8984H34.7646V0H36.9502V11.8984ZM18.7061 8.5459C18.1474 8.62806 17.7032 8.9401 17.7031 9.56445C17.7031 10.041 18.0483 10.5009 18.7549 10.501C19.6752 10.501 20.5303 10.0577 20.5303 8.62793V8.2666L18.7061 8.5459ZM10.9814 5.34082C9.84773 5.34082 9.22335 6.19514 9.17383 6.93457H12.7891C12.756 6.12951 12.23 5.34095 10.9814 5.34082ZM42.0244 5.34082C40.8909 5.34099 40.2663 6.19521 40.2168 6.93457H43.832C43.799 6.12946 43.2732 5.34082 42.0244 5.34082Z" fill="black"/></svg>`;

type CustomizationData = {
  selectedIcon: string;
  triggerButtonColor: string;
  triggerButtonShape: string;
  triggerHorizontalPosition: string;
  triggerVerticalPosition: string;
  triggerButtonSize: string;
};

type PublishScreenProps = {
  onBack: () => void;
  customizationData?: any;
};

const PublishScreen: React.FC<PublishScreenProps> = ({ onBack, customizationData }) => {
  const { publishSettings, user, registerAccessibilityScript, applyAccessibilityScript, makeAuthenticatedRequest } = useAuth();
  const [showModal, setShowModal] = useState(true);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishError, setPublishError] = useState<string | null>(null);
  const [publishSuccess, setPublishSuccess] = useState<string | false>(false);
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(true);
  const [isAnnual, setIsAnnual] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [accessibilityProfiles, setAccessibilityProfiles] = useState({
    seizureSafe: false,
    visionImpaired: false,
    adhdFriendly: false,
    cognitiveDisability: false,
    keyboardNavigation: false,
    blindUsers: false,
  });

  const handleToggle = (profile: keyof typeof accessibilityProfiles) => {
    setAccessibilityProfiles((prev: typeof accessibilityProfiles) => {
      const nextValue = !prev[profile];

      // Keep Keyboard Navigation + Blind Users in sync
      if (profile === "keyboardNavigation" || profile === "blindUsers") {
        return {
          ...prev,
          keyboardNavigation: nextValue,
          blindUsers: nextValue,
        };
      }

      return {
        ...prev,
        [profile]: nextValue,
      };
    });
  };


  const handlePublish = () => {
    setPublishSuccess(false);
    setPublishError(null);
    setShowPublishModal(true);
  };
const handleConfirmPublish = async () => {

  setIsPublishing(true);
  setPublishError(null);
  setPublishSuccess(false);
  
  try {

    
    // Step 1: Publish settings to KV store

    const publishResult = await publishSettings(customizationData, accessibilityProfiles);

    // Step 2: Handle script registration

    const registerResult = await registerAccessibilityScript();
   
    
    // Determine success message based on result
    let successMessage = '';
    
    if (registerResult.success) {
      // Always attempt to apply to head to repair manual deletions
      const applyData = {
        targetType: 'site' as const,
        scriptId: registerResult.result?.id || 'accessbit',
        location: 'header' as const,
        version: '1.0.0'
      };
      const applyResult = await applyAccessibilityScript(applyData);
      if (applyResult.success) {
        successMessage = applyResult.alreadyApplied
          ? 'Settings published! Script was already active in head.'
          : 'Settings published! Script has been registered and applied to your site.';
      } else {
        setPublishError('Settings published, but failed to apply script. Please try again.');
        return;
      }
    } else {
      setPublishError('Settings published, but failed to register script. Please try again.');
      return;
    }
    
    
    
    // Set success message immediately
    setPublishSuccess(successMessage);
    
    setShowPublishModal(false);
    
    // Clear success message after 8 seconds
    setTimeout(() => {
    
      setPublishSuccess(false);
    }, 8000);
    
  } catch (error) {
   
    const errorMessage = error instanceof Error ? error.message : "Failed to publish settings";
    setPublishError(errorMessage);
  } finally {
    setIsPublishing(false);
    
  }
};

  const handleCancelPublish = () => {
    setShowPublishModal(false);
  };


  const handleReset = () => {
    setAccessibilityProfiles({
      seizureSafe: false,
      visionImpaired: false,
      adhdFriendly: false,
      cognitiveDisability: false,
      keyboardNavigation: false,
      blindUsers: false,
    });
  };

  const handleHideInference = () => {
    setShowModal(false);
  };


  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        setIsCheckingSubscription(true);
        
        
        let customDomain = getStoredCustomDomain();
        
       
        if (!customDomain) {
          try {
            
            const siteId = getStoredSiteId();
            
            if (siteId) {
              // Use backend proxy endpoint instead of calling Webflow API directly
              // This prevents idToken leakage and uses accessToken stored during OAuth
              const data = await makeAuthenticatedRequest(
                workerUrl(`/api/accessibility/custom-domains?siteId=${encodeURIComponent(siteId)}`),
                { method: 'GET' }
              );
              
              // makeAuthenticatedRequest returns JSON directly (not Response object)
              if (data && data.customDomains && Array.isArray(data.customDomains)) {
                // Find the default/primary custom domain
                const defaultDomain = data.customDomains.find((d: any) => d.default === true) || data.customDomains[0];
                if (defaultDomain?.domain) {
                  customDomain = defaultDomain.domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
                }
              }
            }
          } catch (error) {
            
            // Fallback to publishSite API if REST API fails
            try {
              const publishInfo = await webflow.publishSite();
              if (publishInfo?.customDomains && Array.isArray(publishInfo.customDomains) && publishInfo.customDomains.length > 0) {
                customDomain = publishInfo.customDomains[0].url.replace(/^https?:\/\//, '').replace(/\/$/, '');
              }
            } catch (fallbackError) {
             
            }
          }
        }
        
        // Step 2: Check if it's a staging domain (always allow, no payment check needed)
        if (customDomain) {
          const isStaging = (
            customDomain.includes('.webflow.io') ||
            customDomain.includes('.webflow.com') ||
            customDomain.includes('localhost') ||
            customDomain.includes('127.0.0.1') ||
            customDomain.includes('staging')
          );
          
          if (isStaging) {
            // Staging domain = no payment required
            setHasSubscription(false);
            setIsCheckingSubscription(false);
            return;
          }
        }
        
       
        if (customDomain) {
          // Normalize domain (remove protocol, www, trailing slash)
          const normalizedDomain = customDomain
            .replace(/^https?:\/\//, '')
            .replace(/^www\./, '')
            .replace(/\/$/, '')
            .split('/')[0];
          
          // Call backend to check payment status
        
          const response = await makeAuthenticatedRequest(
            workerUrl(`/api/accessibility/check-payment-status?domain=${encodeURIComponent(normalizedDomain)}`),
            { method: 'GET' }
          );
          
          
          if (response?.hasAccess === true && response?.isStaging !== true) {
            setHasSubscription(true);
          } else {
            setHasSubscription(false);
          }
        } else {
          // No custom domain = no subscription
          setHasSubscription(false);
        }
      } catch (error) {
        
        setHasSubscription(false);
      } finally {
        setIsCheckingSubscription(false);
      }
    };
    
    checkSubscriptionStatus();
  }, []); // Only run on mount

  const handlePublishClick = () => {
    handlePublish();
  };

  const handleCancelSubscription = () => {
    openTrustedStripeUrl(STRIPE_PORTAL_URL);
  };

  const handlePurchaseNow = () => {
    openTrustedStripeUrl(isAnnual ? STRIPE_BUY_ANNUAL_URL : STRIPE_BUY_MONTHLY_URL);
  };

  return (
    <div className="publish-screen" style={{ paddingTop: '0' }}>
      {/* Publish Confirmation Modal */}
      {showPublishModal && (
        <div className="publish-modal-overlay">
          <div className="publish-modal">
            <div className="publish-modal-content">
              <p>We are installing the script in your site custom code.</p>
              <p>Click confirm to proceed.</p>
              <div className="publish-modal-buttons">
                <button 
                  className="confirm-btn" 
                  onClick={handleConfirmPublish}
                  disabled={isPublishing}
                >
                  {isPublishing ? "Publishing..." : "Confirm"}
                </button>
                <button 
                  className="cancel-btn" 
                  onClick={handleCancelPublish}
                  disabled={isPublishing}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="publish-header">
          <div className="app-logo">
            <span className="app-name"></span>
          </div>
          <div className="header-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <button className="back-btn" onClick={onBack}>
              <img src={whitearrow} alt="" style={{ transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' }} />
              Back
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isCheckingSubscription && (
                <span style={{ 
                  color: '#a3a3a3', 
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Checking subscription...
                </span>
              )}
              {hasSubscription === true && (
                <span 
                  className="cancel-subscription-link" 
                  onClick={handleCancelSubscription}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCancelSubscription(); } }}
                >
                  Cancel Subscription
                </span>
              )}
              <button 
                className="publish-btn" 
                onClick={handlePublishClick}
              >
                {hasSubscription === true ? 'Publish to live domain' : 'Publish to Staging'}
                <img src={whitearrow} alt="" style={{ width: '14px', height: '15px', marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>

      {/* Success Toast Notification - Top Right */}
      {publishSuccess && (
        <div className="success-toast" style={{ 
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(10, 8, 27, 1)',
          color: '#ffffff',
          padding: '16px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
          maxWidth: '400px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#10b981',
              flexShrink: 0
            }}></div>
            <span style={{ fontSize: '14px', lineHeight: '1.5' }}>
              {typeof publishSuccess === 'string' ? publishSuccess : 'Accessibility settings published successfully!'}
            </span>
          </div>
        </div>
      )}

      


      {/* Step Navigation */}
      <div className="step-navigation">
        <div className="step completed">
          <span className="step-number">STEP 1</span>
          <span className="step-name">Customization</span>
        </div>
        <div className="step active">
          <span className="step-number">STEP 2</span>
          <span className="step-name">Publish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Panel - Preview */}
        <div className="preview-panel">
          <div className="panel-header">
            <h3>Preview</h3>
          </div>
          <div className="preview-window1">
            <div className="browser-window">
              <div className="browser-controls">
                <div className="traffic-lights">
                  <div className="traffic-light red"></div>
                  <div className="traffic-light yellow"></div>
                  <div className="traffic-light green"></div>
                </div>
              </div>
              <div className="browser-content">
                {/* Accessibility Modal */}
                {showModal && (
                  <div
                    className={`accessibility-modal ${customizationData?.triggerHorizontalPosition === 'Left' ? 'position-left' :
                      customizationData?.triggerHorizontalPosition === 'Right' ? 'position-right' : 'position-center'
                      }`}
                  >
                    <div className="ab-preview-header">
                      <div className="ab-preview-close-container" aria-hidden="true">
                        <button
                          className="ab-preview-close-btn"
                          onClick={() => setShowModal(false)}
                          aria-label="Close accessibility panel"
                          type="button"
                        >
                          ×
                        </button>
                      </div>

                      <div className="ab-preview-lang" aria-label="Select language">
                        <span className="ab-preview-flag" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="12">
                            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                          </svg>
                        </span>

                        <span className="ab-preview-lang-text">English</span>

                        <span className="ab-preview-lang-arrow" aria-hidden="true">
                          <svg width="6" height="4" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0.666748 0.666666L4.66675 4.66667L8.66675 0.666666"
                              stroke="white"
                              strokeWidth="1.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      <h2>Accessibility Controls</h2>

                      <div className="ab-preview-actions">
                        <div className="ab-preview-actions-row">
                          <button
                            className="action-btn reset-settings-btn"
                            onClick={handleReset}
                            aria-label="Reset all accessibility settings"
                            type="button"
                          >
                            <span className="reset-settings-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M2 8C2 9.18669 2.35189 10.3467 3.01118 11.3334C3.67047 12.3201 4.60754 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.32263 2.00631 4.71265 2.66082 3.50667 3.82667L2 5.33333"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 2V5.33333H5.33333"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Reset Settings
                          </button>

                          <button className="action-btn statement-btn" type="button" aria-label="View accessibility statement">
                            <span className="statement-btn-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0001 1.33334H4.00008C3.64646 1.33334 3.30732 1.47381 3.05727 1.72386C2.80722 1.97391 2.66675 2.31305 2.66675 2.66667V13.3333C2.66675 13.687 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V4.66667L10.0001 1.33334Z"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.33325 1.33334V4C9.33325 4.35362 9.47373 4.69276 9.72378 4.94281C9.97383 5.19286 10.313 5.33334 10.6666 5.33334H13.3333"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path d="M6.66659 6H5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6666 8.66667H5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6666 11.3333H5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            Statement
                          </button>
                        </div>

                        <div className="ab-preview-actions-row ab-preview-actions-row--center">
                          <button
                            className="action-btn hide-interface-btn"
                            onClick={handleHideInference}
                            aria-label="Hide accessibility interface"
                            type="button"
                          >
                            <span className="hide-interface-btn-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.15527 3.384C8.7082 3.19894 10.279 3.52721 11.6279 4.3187C12.9767 5.11019 14.0294 6.32138 14.6253 7.76733C14.6808 7.91701 14.6808 8.08166 14.6253 8.23133C14.3803 8.82533 14.0565 9.38367 13.6626 9.89133"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.38942 9.43866C9.01222 9.80298 8.50702 10.0046 7.98262 10C7.45823 9.99546 6.9566 9.78512 6.58579 9.4143C6.21497 9.04349 6.00463 8.54186 6.00008 8.01747C5.99552 7.49307 6.19711 6.98787 6.56142 6.61066"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.6527 11.666C10.7683 12.1899 9.78165 12.5173 8.75959 12.6263C7.73752 12.7352 6.70398 12.623 5.7291 12.2973C4.75422 11.9715 3.86081 11.4399 3.10949 10.7385C2.35816 10.0371 1.76651 9.18224 1.37468 8.232C1.31912 8.08232 1.31912 7.91768 1.37468 7.768C1.96577 6.33457 3.00579 5.1315 4.33868 4.33933"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1.33325 1.33334L14.6666 14.6667"
                                  stroke="white"
                                  strokeWidth="1.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Hide Interface
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ab-preview-content">
                      <h3 className="ab-preview-title">Accessibility Adjustments</h3>

                      <div className="profile-list">
                        <div className={`profile-item ${accessibilityProfiles.seizureSafe ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path
                                d="M6.5 1.5L2.5 8H7L5.5 14.5L13 6.5H8.5L10 1.5H6.5Z"
                                stroke="black"
                                strokeWidth="1.2"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Seizure Safe Profile</h4>
                            <p>Clear flashes &amp; reduces color</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="seizureSafe">
                            <input
                              type="checkbox"
                              id="seizureSafe"
                              checked={accessibilityProfiles.seizureSafe}
                              onChange={() => handleToggle("seizureSafe")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${reduceMotion ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 43 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <circle cx="21.5" cy="21.5" r="21.5" fill="#ECEDED" />
                              <circle cx="21.5" cy="21.5" r="21" stroke="black" strokeOpacity="0.1" />
                              <path
                                d="M13.2854 27.1478C13.2854 27.0302 13.2816 26.9164 13.2863 26.8028C13.2955 26.5779 13.2888 26.3497 13.3263 26.1292C13.3875 25.7694 13.5787 25.4669 13.8327 25.2114C14.0382 25.0049 14.2636 24.8183 14.4802 24.6228C14.5003 24.6047 14.5269 24.5903 14.5398 24.5681C14.6089 24.4485 14.7169 24.4422 14.8398 24.4443C15.1889 24.4502 15.5382 24.446 15.8874 24.4458C15.9172 24.4457 15.9469 24.4458 15.9935 24.4458C15.9715 25.0389 15.6353 25.4367 15.1876 25.8002C15.2828 25.8002 15.3502 25.8006 15.4176 25.8001C15.7757 25.7976 16.1342 25.8048 16.4917 25.7888C16.7545 25.7771 16.9501 25.6262 17.1057 25.4214C17.1111 25.4142 17.1163 25.4068 17.1211 25.3992C17.1784 25.3079 17.2159 25.1811 17.2984 25.1352C17.3815 25.0889 17.5093 25.1221 17.6175 25.122C18.5387 25.1218 19.4599 25.1261 20.3811 25.1207C21.3076 25.1152 22.2015 24.9396 23.0498 24.5621C23.2987 24.4513 23.5332 24.3078 23.7743 24.1794C23.8032 24.164 23.8326 24.1498 23.8699 24.1309C23.9464 24.401 24.0149 24.6668 24.0976 24.928C24.1853 25.2051 24.3188 25.4598 24.5148 25.6783C24.5897 25.7617 24.6828 25.8016 24.7943 25.8015C25.3422 25.801 25.8901 25.8007 26.4379 25.8002C26.4549 25.8002 26.472 25.7977 26.5141 25.7943C26.4531 25.7388 26.4101 25.6948 26.3622 25.6569C26.1358 25.4773 25.9069 25.3003 25.7456 25.0542C25.5911 24.8186 25.4896 24.5632 25.484 24.279C25.4697 23.5618 25.5651 22.8645 25.8861 22.2125C26.1467 21.6832 26.5433 21.2757 27.0306 20.9516C27.4775 20.6544 27.9702 20.444 28.4496 20.2087C28.8878 19.9937 29.3203 19.7681 29.6779 19.4292C29.8299 19.2851 29.9604 19.118 30.099 18.96C30.1752 18.8733 30.2051 18.7795 30.1879 18.6561C30.1391 18.306 30.0514 17.9727 29.8361 17.6854C29.5986 17.3683 29.2703 17.1878 28.8954 17.088C28.5435 16.9943 28.1848 16.9661 27.8224 17.0121C27.5032 17.0526 27.2586 17.2265 27.0833 17.4818C26.7976 17.8975 26.5231 18.3216 26.2593 18.7517C25.7986 19.503 25.2968 20.2208 24.6563 20.8331C24.0339 21.4282 23.3306 21.9063 22.5613 22.2902C21.5394 22.8002 20.4574 23.1264 19.3416 23.3521C18.5782 23.5065 17.8079 23.616 17.0319 23.6692C16.2969 23.7196 15.5596 23.7552 14.8231 23.7587C14.3896 23.7608 14.0353 23.9032 13.7317 24.1895C13.5596 24.3517 13.4101 24.5378 13.2508 24.7135C13.2328 24.7333 13.2168 24.7548 13.1964 24.7797C12.8035 24.5552 12.4131 24.3322 12 24.0961C12.1492 23.8959 12.2851 23.6985 12.4365 23.5139C12.6689 23.2304 12.9464 22.9956 13.2564 22.7989C13.2834 22.7818 13.3066 22.7411 13.3109 22.7086C13.3676 22.2833 13.4871 21.8808 13.7404 21.5282C13.7845 21.4669 13.8548 21.4252 13.9071 21.3689C13.9317 21.3425 13.9601 21.3008 13.9564 21.2698C13.9006 20.8039 13.9101 20.3381 13.965 19.8739C14.086 18.8511 14.4386 17.9232 15.1164 17.1337C15.5667 16.6091 16.1061 16.1963 16.7153 15.8729C17.4298 15.4937 18.1934 15.2609 18.986 15.118C19.5264 15.0206 20.0728 14.9799 20.6208 15.0095C21.6714 15.0661 22.6389 15.3654 23.4739 16.0294C23.8254 16.309 24.1217 16.6386 24.3639 17.0172C24.3814 17.0446 24.4106 17.0766 24.4395 17.0828C24.7989 17.1608 25.1309 17.3004 25.4357 17.5224C25.4732 17.462 25.5082 17.407 25.5419 17.3512C25.8063 16.9126 26.117 16.5141 26.5248 16.1969C27.0721 15.7713 27.6926 15.5968 28.3805 15.6431C28.8295 15.6733 29.2676 15.751 29.6862 15.9236C30.5268 16.27 31.0829 16.8808 31.3756 17.7367C31.531 18.1912 31.5838 18.6608 31.5728 19.1387C31.5718 19.181 31.5546 19.2262 31.5341 19.2643C31.0809 20.1107 30.4076 20.7345 29.5668 21.1805C29.148 21.4027 28.7161 21.6001 28.2912 21.8108C27.9752 21.9675 27.6689 22.1398 27.4157 22.3913C27.0971 22.7076 26.9382 23.101 26.8805 23.5373C26.8522 23.7513 26.8439 23.9685 26.8364 24.1846C26.8347 24.2339 26.8605 24.2994 26.8966 24.3321C27.0747 24.4937 27.2682 24.6388 27.4421 24.8045C27.8489 25.1922 28.1144 25.6624 28.1697 26.2258C28.1995 26.529 28.175 26.8374 28.175 27.1548C28.1395 27.1548 28.1041 27.1548 28.0687 27.1548C27.012 27.1548 25.9552 27.143 24.8987 27.1586C24.0997 27.1705 23.5604 26.7747 23.1572 26.1328C23.1275 26.0855 23.1108 26.03 23.0861 25.9739C22.9026 26.0353 22.7225 26.0984 22.5407 26.1559C21.8566 26.3723 21.1537 26.4707 20.4379 26.4748C19.6341 26.4794 18.8303 26.4754 18.0265 26.4776C17.9861 26.4777 17.9324 26.4899 17.9073 26.5171C17.4934 26.9654 16.9758 27.1568 16.3741 27.1552C15.3717 27.1526 14.3692 27.1546 13.3667 27.1544C13.3432 27.1544 13.3198 27.1507 13.2854 27.1478Z"
                                fill="black"
                              />
                              <path
                                d="M29.1583 18.1889C29.1503 18.5743 28.8483 18.8597 28.4552 18.8533C28.1043 18.8477 27.7993 18.5291 27.807 18.1762C27.8153 17.794 28.1203 17.494 28.4947 17.4998C28.8671 17.5055 29.1661 17.816 29.1583 18.1889Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Reduce Motion</h4>
                            <p>Disable animations and transitions</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="reduceMotion">
                            <input
                              type="checkbox"
                              id="reduceMotion"
                              checked={reduceMotion}
                              onChange={() => setReduceMotion((v: boolean) => !v)}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.visionImpaired ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon vision-impaired-icon">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path
                                d="M1 8C2.7 5.5 5 4 8 4C11 4 13.3 5.5 15 8C13.3 10.5 11 12 8 12C5 12 2.7 10.5 1 8Z"
                                fill="none"
                                stroke="black"
                                strokeWidth="1.2"
                              />
                              <circle className="vision-impaired-pupil" cx="8" cy="8" r="2.2" fill="black" />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Vision Impaired Profile</h4>
                            <p>Enhances text readability and visual clarity</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="visionImpaired">
                            <input
                              type="checkbox"
                              id="visionImpaired"
                              checked={accessibilityProfiles.visionImpaired}
                              onChange={() => handleToggle("visionImpaired")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.adhdFriendly ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon ab-icon-adhd">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <rect x="2" y="3" width="12" height="10" rx="2" stroke="black" strokeWidth="1.2" />
                              <path d="M2 8H14" stroke="black" strokeWidth="1.2" />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>ADHD Friendly Profile</h4>
                            <p>More focus &amp; fewer distractions</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="adhdFriendly">
                            <input
                              type="checkbox"
                              id="adhdFriendly"
                              checked={accessibilityProfiles.adhdFriendly}
                              onChange={() => handleToggle("adhdFriendly")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.cognitiveDisability ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 43 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <circle cx="21.5" cy="21.5" r="21.5" fill="#ECEDED" />
                              <circle cx="21.5" cy="21.5" r="21" stroke="black" strokeOpacity="0.1" />
                              <path
                                d="M22.0001 24.5C23.3808 24.5 24.5001 23.3807 24.5001 22C24.5001 20.6193 23.3808 19.5 22.0001 19.5C20.6194 19.5 19.5001 20.6193 19.5001 22C19.5001 23.3807 20.6194 24.5 22.0001 24.5Z"
                                fill="black"
                              />
                              <path
                                d="M22.8334 15.3909V13.6667H21.1667V15.3909C19.7002 15.5778 18.3373 16.2465 17.2919 17.2919C16.2465 18.3372 15.5779 19.7002 15.3909 21.1667H13.6667V22.8334H15.3909C15.5777 24.2999 16.2463 25.6629 17.2918 26.7083C18.3372 27.7538 19.7002 28.4224 21.1667 28.6092V30.3334H22.8334V28.6092C24.3 28.4224 25.663 27.7538 26.7084 26.7083C27.7538 25.6629 28.4224 24.2999 28.6092 22.8334H30.3334V21.1667H28.6092C28.4223 19.7002 27.7536 18.3372 26.7083 17.2919C25.6629 16.2465 24.2999 15.5778 22.8334 15.3909ZM22.0001 27C19.2426 27 17.0001 24.7575 17.0001 22C17.0001 19.2425 19.2426 17 22.0001 17C24.7576 17 27.0001 19.2425 27.0001 22C27.0001 24.7575 24.7576 27 22.0001 27Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Cognitive Disability Profile</h4>
                            <p>Assists with reading &amp; focusing</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="cognitiveDisability">
                            <input
                              type="checkbox"
                              id="cognitiveDisability"
                              checked={accessibilityProfiles.cognitiveDisability}
                              onChange={() => handleToggle("cognitiveDisability")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.keyboardNavigation ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon keyboard-icon" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle className="kb-ring-off" cx="21.5" cy="21.5" r="20.5" fill="#ECEDED" />
                              <circle className="kb-ring-off" cx="21.5" cy="21.5" r="20" stroke="black" strokeOpacity="0.1" />
                              <circle className="kb-ring-on" cx="21.5" cy="21.5" r="19.5" fill="#D9F8F0" stroke="#01CE9C" strokeWidth="2" />
                              <g transform="translate(15,15)">
                                <path
                                  className="kb-path"
                                  d="M8 7L2 7L2 0H0L0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H8V12L13 8L8 4L8 7Z"
                                  fill="black"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Keyboard Navigation (Motor)</h4>
                            <p>This profile prompts automatically for keyboard users.</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="keyboardNavigation">
                            <input
                              type="checkbox"
                              id="keyboardNavigation"
                              checked={accessibilityProfiles.keyboardNavigation}
                              onChange={() => handleToggle("keyboardNavigation")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>

                        <div className={`profile-item ${accessibilityProfiles.blindUsers ? "is-on" : ""}`}>
                          <div className="ab-profile-item-icon blind-icon" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle className="blind-ring-off" cx="21.5" cy="21.5" r="20.5" fill="#ECEDED" />
                              <circle className="blind-ring-off" cx="21.5" cy="21.5" r="20" stroke="black" strokeOpacity="0.1" />
                              <circle className="blind-ring-on" cx="21.5" cy="21.5" r="19.5" fill="#D9F8F0" stroke="#01CE9C" strokeWidth="2" />
                              <g transform="translate(15,15)">
                                <path
                                  className="blind-path"
                                  d="M8 7L2 7L2 0H0L0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H8V12L13 8L8 4L8 7Z"
                                  fill="black"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="profile-info">
                            <h4>Blind Users (Screen Reader)</h4>
                            <p>Optimize website for screen-readers</p>
                          </div>
                          <label className="ab-toggle-switch" htmlFor="blindUsers">
                            <input
                              type="checkbox"
                              id="blindUsers"
                              checked={accessibilityProfiles.blindUsers}
                              onChange={() => handleToggle("blindUsers")}
                            />
                            <span className="ab-slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Preview footer (copied from widget UI; links removed for preview) */}
                    <div className="panel-footer" aria-hidden="true">
                      <span
                        className="panel-footer-link panel-footer-link--brand"
                        dangerouslySetInnerHTML={{ __html: PREVIEW_FOOTER_BRAND_SVG }}
                      />

                      <span
                        className="panel-footer-link panel-footer-link--powered"
                        dangerouslySetInnerHTML={{ __html: PREVIEW_FOOTER_POWERED_SVG }}
                      />
                    </div>
                  </div>
                )}

                {/* Accessibility Widget */}
                {customizationData?.hideTriggerButton !== 'Yes' && (
                  <div
                    className="accessibility-widget"
                    style={{
                      left: customizationData?.triggerHorizontalPosition === 'Left' ?
                        `calc(10px + ${parseInt(customizationData?.triggerHorizontalOffset || '0px')}px)` :
                        customizationData?.triggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                      right: customizationData?.triggerHorizontalPosition === 'Right' ?
                        `calc(10px + ${parseInt(customizationData?.triggerHorizontalOffset || '0px')}px)` : 'auto',
                      top: customizationData?.triggerVerticalPosition === 'Top' ?
                        `calc(10px + ${parseInt(customizationData?.triggerVerticalOffset || '0px')}px)` : 'auto',
                      bottom: customizationData?.triggerVerticalPosition === 'Bottom' ?
                        `calc(10px + ${parseInt(customizationData?.triggerVerticalOffset || '0px')}px)` : 'auto',
                      transform: customizationData?.triggerHorizontalPosition === 'Center' ?
                        (customizationData?.triggerVerticalPosition === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                        (customizationData?.triggerVerticalPosition === 'Middle' ? 'translateY(-50%)' : 'none')
                    }}
                  >
                    <div
                      className={`widget-trigger ${customizationData?.triggerButtonShape?.toLowerCase() || 'circle'} ${customizationData?.triggerButtonSize?.toLowerCase() || 'medium'}`}
                      style={{ backgroundColor: customizationData?.triggerButtonColor || '#007bff' }}
                      onClick={() => setShowModal(!showModal)}
                    >
                      <img
                        src={iconOptions.find(icon => icon.id === customizationData?.selectedIcon)?.label || icon1}
                        alt="Accessibility Icon"
                        className="widget-icon"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Payment card (aligned with Preview) */}
        <div className="publish-page-payment-panel">
          <div className="panel-header">
            <h3>Subscription</h3>
          </div>
          <div className="publish-page-payment-window">
            <div className="payment-card publish-page-payment-card">
              <div className="pricing-flex publish-page-pricing-flex">
                <div className="pricing-single-column">
                  <div className="main-price">
                    <div className="price-number">${isAnnual ? '19' : '24'}</div>
                    <div className="price-period">/{isAnnual ? 'month: Purchased Annually' : 'month'}</div>
                  </div>
                  <div className={`payment-toggle ${isAnnual ? 'annually' : 'monthly'}`}>
                    <button
                      className={`toggle-option ${!isAnnual ? 'active' : ''}`}
                      onClick={() => setIsAnnual(false)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`toggle-option ${isAnnual ? 'active' : ''}`}
                      onClick={() => setIsAnnual(true)}
                    >
                      Annually
                    </button>
                  </div>
                  <div className="savings-info" style={{ opacity: isAnnual ? 1 : 0, visibility: isAnnual ? 'visible' : 'hidden' }}>
                    You Save 20%
                  </div>
                  <div className="secondary-price">
                    ${isAnnual ? '19' : '24'}/month{isAnnual ? ': Purchased Annually' : ''}
                  </div>
                  <button
                    className="purchase-btn"
                    onClick={handlePurchaseNow}
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishScreen;
