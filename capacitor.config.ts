import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ayudaverificada.app',
  appName: 'AyudaVerificada',
  webDir: 'www',
  server: {
    url: 'https://web-jade-one-64.vercel.app',
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
