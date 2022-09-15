<template>
  <div class="col-xs-6 col-sm-4 col-md-3 q-pl-sm q-pt-sm">
    <router-link :to="`album/${index}`">
      <q-card>
        <q-img :src="img" class="rounded-sm">
          <div class="absolute-bottom">
            <p class="text-capitalize ellipsis">{{ title }}</p>
            <p class="">by: {{ user }}</p>
          </div>
        </q-img>
      </q-card>
    </router-link>
  </div>
</template>
<script setup>
const props = defineProps({
  img: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  index: {
    type: Number,
    default: null,
  },
  user: {
    type: String,
    default: "John Doe",
    required: true,
  },
  title: {
    type: String,
    default: "Album Title Goes here",
    required: true,
  },
});
</script>
