import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Linkwarden",
  slug: "linkwardenfix",
  owner: "hollx3s-team",
  version: "1.4.5",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "linkwarden",
  userInterfaceStyle: "automatic",
  ios: {
    supportsTablet: true,
    bundleIdentifier: "app.linkwarden",
    entitlements: {
      "com.apple.security.application-groups": ["group.app.linkwarden"],
    },
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
      NSAppTransportSecurity: {
        NSAllowsArbitraryLoads: true,
      },
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/maskable_logo.png",
      backgroundColor: "#ffffff",
    },
    package: "app.linkwarden",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-iap",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#FFFFFF",
        dark: {
          image: "./assets/images/splash-icon.png",
          resizeMode: "contain",
          backgroundColor: "#171717",
        },
      },
    ],
    [
      "@react-native-google-signin/google-signin",
      {
        iosUrlScheme:
          process.env.EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME ??
          "com.googleusercontent.apps.1097450926817-o94t2bb30jt2me2u17ni2cc2qogd2v34",
      },
    ],
    "expo-secure-store",
    [
      "expo-image-picker",
      {
        photosPermission:
          "Allow $(PRODUCT_NAME) to access your photos to upload custom link banners.",
        cameraPermission: false,
        microphonePermission: false,
      },
    ],
 [
      "expo-share-intent",
      {
        iosAppGroupIdentifier: "group.app.linkwarden",
        iosActivationRules:
          'SUBQUERY (extensionItems, $extensionItem, SUBQUERY ($extensionItem.attachments, $attachment, (ANY $attachment.registeredTypeIdentifiers UTI-CONFORMS-TO "public.url" OR ANY $attachment.registeredTypeIdentifiers UTI-CONFORMS-TO "public.text" OR ANY $attachment.registeredTypeIdentifiers UTI-CONFORMS-TO "public.plain-text")).@count > 0).@count > 0',
        androidIntentFilters: ["text/*"],
      },
    ],
