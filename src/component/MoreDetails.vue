<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: [
    "position",
    "bottom",
    "right",
    "left",
    "top",
    "border",
    "width",
    "height",
  ],
};
</script>

<template>
  <div
    class="more-details"
    :style="{ position, bottom, right, left , border , width , height}"
  >
  <div :style="{border}" class="more-details-border"></div>
    >
    <!-- <Icon icon="dashicons:arrow-right-alt2" color="#eee" /> -->
  </div>
</template>

<style scoped src="../styles/components/more-details.scss"></style>
