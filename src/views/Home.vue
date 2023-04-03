<script>
import { RouterLink } from "vue-router";
import gsap from "gsap";
import { Icon } from "@iconify/vue";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

let tl = gsap.timeline();
let isFullScreen = false;
let isPause = false;

export default {
  data() {
    return {
      name: "Vue.js",
    };
  },
  components: {
    Icon,
  },
  methods: {
    updateCoordinates(event) {
      let $cursor = this.$refs.cursor;
      if (
        event.clientX < 170 ||
        event.clientX > window.screen.width - 175 ||
        event.clientY < 40 ||
        event.clientY > window.screen.height - 175
      ) {
        $cursor.style.display = `none`;
      } else {
        $cursor.style.display = `block`;
      }
      $cursor.style.left = `${event.clientX - 40}px`;
      $cursor.style.top = `${event.clientY - 80}px`;
    },
    explorHandler(event) {
      tl.to(".logo", { y: -200, duration: 2 }, 0.3);
      tl.to(
        ".home-intro-main-title",
        { css: { scale: 150, left: -1800 }, duration: 1 },
        1
      );
      tl.to(".home-intro", { css: { display: "none" }, duration: 1 }, 1);
      tl.to(".controls-panel", { css: { opacity: 1 }, duration: 2 }, 1.5);
    },
    playVideoHandler(event) {
      let $video = this.$refs.video;
      if ($video.paused) {
        isPause = true;
        $video.play();
      } else {
        isPause = false;
        $video.pause();
      }
      console.log(isPause);
    },
    ontimeupdateHandler(event) {
      let $video = this.$refs.video;
      let $time = this.$refs.time;
      const percentagePosition = (100 * $video.currentTime) / $video.duration;
      $time.style.backgroundSize = `${percentagePosition}% 100%`;
      $time.value = percentagePosition;
    },
    soundButton(event) {
      let $video = this.$refs.video;
      $video.muted = !$video.muted;
    },
    fullscreenButton(event) {
      let $video = this.$refs.video;
      console.log(isFullScreen);
      if (!isFullScreen) {
        if ($video.requestFullscreen) {
          $video.requestFullscreen();
        } else if ($video.webkitRequestFullscreen) {
          $video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          $video.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    videoExplor(event) {
      // tl.fromTo(".home-container", { css : {opacity : 1} }, {css : {opacity : 0 }, duration: 0.3 }, 0.3);
      setTimeout(() => this.$router.push({ path: "/LandingPage" }), 600);
    },
  },
};
</script>

<template>
  <div ref="homeContainer" className="home-container">
    <div className="home" @mousemove="updateCoordinates" @click="explorHandler">
      <div ref="cursor" className="cursor" style="left: 20px">
        <img src="../assets/img/Group 1(1).svg" alt="" />
      </div>
      <video
        ref="video"
        @timeupdate="ontimeupdateHandler"
        @click="videoExplor"
        muted
        autoplay
        loop
      >
        <source src="../assets/video/fotage razak.mp4" type="video/mp4" />
      </video>
      <div class="controls-panel">
        <a v-if="isPause"
          ><Icon
            icon="clarity:pause-solid"
            color="#eee"
            width="22"
            class="mx-2"
            @click="playVideoHandler"
        /></a>
        <a v-else
          ><Icon
            icon="ci:play-arrow"
            color="#eee"
            width="22px"
            class="mx-2"
            @click="playVideoHandler"
        /></a>
        <input
          ref="time"
          type="range"
          min="0"
          max="100"
          value="0"
          className="flex-grow-1 timeline"
        />
        <div class="d-flex gap-2 mx-2">
          <Icon
            icon="clarity:volume-up-line"
            color="#eee"
            width="22px"
            @click="soundButton"
          />
          <Icon
            icon="fluent:arrow-expand-20-regular"
            color="#eee"
            width="22px"
            @click="fullscreenButton"
          />
        </div>
      </div>
      <div className="logo-row d-flex justify-content-center w-100">
        <img class="logo" src="../assets/img/blue-logo.png" alt="" />
      </div>
      <div ref="homeIntro" className="home-intro justify-content-center">
        <div className="home-intro-title">
          <h2>QUALITY and OLDNESS BY</h2>
          <h4>PHARMACEUTICAL COMPANY</h4>
          <h1 className="text-center home-intro-main-title">
            <span className="align-self-end">R</span
            ><b className="align-self-center">aza</b><span>k</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../styles/home/home.scss"></style>
