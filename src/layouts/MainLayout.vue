<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="black"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="240">
      <div class="row justify-center items-center q-mt-md">
        <img
          alt="Quasar logo"
          src="~assets/logo.svg"
          style="width: 40px; height: 40px"
        />
        <p class="text-h5 text-weight-medium q-mb-none q-ml-md">Quasar</p>
      </div>
      <q-list class="q-mt-lg">
        <q-item-label header class="text-weight-bold"> Main Menu </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :exact="link.exact"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-mx-lg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "incomplete_circle",
    link: "/",
    exact: true,
  },
  {
    title: "Albums",
    icon: "photo_library",
    link: "/albums",
    exact: false,
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
