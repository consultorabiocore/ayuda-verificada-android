import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ayudaverificada.app',
  appName: 'AyudaVerificada',
  webDir: 'www',
  server: {
    url: 'https://ayuda-verificada.vercel.app',
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
