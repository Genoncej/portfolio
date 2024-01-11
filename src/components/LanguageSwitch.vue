<script>
  import { useI18n } from 'vue-i18n'
  import Tr from "@/lang/translation.js"
  
  export default {
    setup() {
      const { t, locale } = useI18n()
      const supportedLocales = Tr.supportedLocales
      const switchLanguage = async (event) => {
        const newLocale = event.target.value
        await Tr.switchLanguage(newLocale)
      }
      return { t, locale, supportedLocales, switchLanguage }
    }
  }
</script>
<template>
    <select @change="switchLanguage" class="bg-ocean-sea">
      <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"
      >
        {{ t(`locale.${sLocale}`) }}
      </option>
    </select>
</template>
