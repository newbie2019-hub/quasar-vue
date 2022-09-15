<template>
  <q-page padding>
    <div class="row justify-between items-center q-mt-sm">
      <div>
        <p class="text-h5 text-weight-bold q-mb-none text-capitalize">
          {{ albums.title }}
        </p>
        <p class="">
          Shown below are all the photos in the album of {{ albums.user.name }}
        </p>
      </div>
      <q-btn unelevated color="primary" to="/albums" size="12px">Return</q-btn>
    </div>
    <div class="row q-mt-md">
      <div
        class="col-xs-6 col-sm-4 col-md-3 q-pl-sm q-pt-sm"
        v-for="(photo, i) in photos"
        :key="i"
      >
        <q-img :src="photo.url" class="rounded-sm">
          <div class="absolute-bottom">
            <p class="text-capitalize ellipsis">{{ photo.title }}</p>
          </div>
        </q-img>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useDataStore } from "../stores/data-store";
import { useRoute, useRouter } from "vue-router";

let albums, photos;
const route = useRoute();
const router = useRouter();
const jsonPlaceholder = useDataStore();

albums = computed(() => jsonPlaceholder.getData[route.params.id]);
photos = computed(() => albums.value.photos);
</script>
