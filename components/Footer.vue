<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="text-center">
        <v-btn
          v-for="link in links"
          :key="link"
          rounded
          color="textColor1"
          text
          class="text-none font-weight-bold my-2">
          {{ link }}
        </v-btn>
      </v-col>

      <v-col cols="12" class="text-center">
        <v-divider/>
      </v-col>
      <v-col cols="12" class="text-center flex my-2">
        <v-btn icon>
          <IconFacebook width="24" height="24"/>
        </v-btn>
        <v-btn icon>
          <IconTwitter width="24" height="24"/>
        </v-btn>
        <v-btn icon>
          <IconTelegram width="24" height="24"/>
        </v-btn>
      </v-col>

      <span class="body-2 mb-1">2022 © ООО “Понаехали” </span>
    </v-row>

  </v-footer>
</template>

<script>
import IconFacebook from "@/components/icons/social/IconFacebook";
import IconTwitter from "@/components/icons/social/IconTwitter";
import IconTelegram from "@/components/icons/social/IconTelegram";

export default {
  name: "Footer",
  components: {IconFacebook,IconTelegram,IconTwitter},
  data: () => ({
    icons: [IconFacebook, IconTwitter, IconTelegram],
    links: ["О проекте", "Руководство", "Правила", "Помощь"]
  }),
  methods: {}
}
</script>

<style scoped>

</style>
