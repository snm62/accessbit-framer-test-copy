declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.svg';

export {};

declare global {
  type WebflowAPI = import('./webflowtypes').WebflowAPI;

  interface Window {
    webflow: WebflowAPI;
  }
  var webflow: WebflowAPI;
}

interface ColorVariable {
  id: string;
  name: string;
  value: string;
}