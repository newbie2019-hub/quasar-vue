<template>
  <q-item
    :exact="exact"
    clickable
    tag="a"
    :to="link"
    class="row justify-center items-center"
  >
    <q-icon :name="icon" size="24px" class="q-ml-md" />
    <q-item-section>
      <q-item-label class="q-mb-none q-ml-md">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    exact: {
      type: Boolean,
      default: false,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
