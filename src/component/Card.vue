<script>
import { Icon } from "@iconify/vue";
import MoreDetails from '../component/MoreDetails.vue'
export default {
  components: {
    Icon,
    MoreDetails
  },
  props: [
      "img" ,
      "title"
  ],
  methods : {

  }
};
</script>

<template>
    <div ref="cardNews" class="card-news d-flex flex-column" >
        <!-- <img  v-bind:src="'../assets/img/img 1.png'" alt=""> -->
        <img  src='../assets/img/img 1.png' alt="">
        <div class="card-details">
            <span>News</span>
            <h5>{{title}}</h5>
            <span>2022/03/22</span>
            <MoreDetails position="absolute" width="30px" height="30px" bottom="40px" left="15%" />
        </div>
    </div>
</template>

<style scoped src="../styles/components/card.scss"></style>
