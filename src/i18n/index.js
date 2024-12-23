import { createI18n } from "vue-i18n";
import sl from "./locales/sl.json";

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: {sl}
})

export default i18n
