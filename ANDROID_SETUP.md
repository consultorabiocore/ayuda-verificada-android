# Android Setup

## Tecnología elegida
Capacitor (hybrid app) para reutilizar la web de AyudaVerificada y el backend Supabase existente.

## Requisitos
- Android Studio
- Android SDK (API 35+)
- JDK 17

## Pasos
1. Abrir `mobile/android` en Android Studio.
2. Sincronizar Gradle.
3. Configurar firma de release (keystore).
4. Generar AAB: Build > Generate Signed Bundle / APK.

## Variables
La app carga la web desplegada en Vercel (server.url en capacitor.config.ts). Para usar una URL local, cambia `server.url`.