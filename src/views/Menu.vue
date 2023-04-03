<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MoreDetails from "../component/MoreDetails.vue";
import { RouterLink } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

const initAnimation = () => {
  gsap.set(".motiv", { zIndex: (i, target, targets) => targets.length - i });

  var allBGs = gsap.utils.toArray(".motiv");
  let allBGsNotLast = allBGs.slice(0, -1);
  var allLines = gsap.utils.toArray(".text");
  let allLinesNotLast = allLines.slice(0, -1);
  var next = 1,
    fade = 0.1,
    st = 0.3, //  line animation
    tt = 3000; // 'total time' in px of scrub animation


  var action = gsap
    .timeline({ defaults: { ease: "none", stagger: next } })

    .fromTo(
      allLines,
      { autoAlpha: 0.6 },
      { autoAlpha: 1, duration: st, ease: "none" }
    )
    .fromTo(
      allLines,
      { autoAlpha: 1 },
      { autoAlpha: 0.6, duration: st, ease: "none" },
      next
    )

    .to(allBGsNotLast, { autoAlpha: 0, duration: fade }, next)
    .to(allBGs, { transformOrigin: "center", duration: next / 2 }, next / 2)
    .to({}, { duration: 0.5 }); //

  ScrollTrigger.create({
    trigger: "#section02",
    start: "top top",
    end: "+=" + tt,
    pin: true,
    animation: action,
    scrub: 0.3,
  });


  ScrollTrigger.create({
    trigger: ".menu",
    onEnter: () => {
      gsap.fromTo(
        ".about-us-text",
        { css: { opacity: 0, y: "-30px" } },
        {
          duration: 0.5,
          delay : 0.3,
          css: { opacity: 0.6, y: 0 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".product-text",
        { css: { opacity: 0, y: "-30px" } },
        {
          duration: 0.5,
          delay : 0.6,
          css: { opacity: 0.6, y: 0 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".news-events-text",
        { css: { opacity: 0, y: "-30px" } },
        {
          duration: 0.5,
          delay : 0.9,
          css: { opacity: 0.6, y: 0 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".contact-us-text",
        { css: { opacity: 0, y: "-30px" } },
        {
          duration: 0.5,
          delay : 1.2,
          css: { opacity: 0.6, y: 0 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".img-wrap",
        { css: { opacity: 0, y: "-50px" } },
        {
          duration: 0.5,
          delay : 2.2,
          css: { opacity: 1, y: 0 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });



};

export default {
  components: {
    MoreDetails,
  },
  mounted() {
    this.animationHandler();
  },
  methods: {
    animationHandler() {
      initAnimation();
    },
  },
};
</script>

<template>
  <section class="menu">
    <section id="section02">
      <div
        class="menu-header d-flex justify-content-between align-items-center"
      >
        <img src="../assets/img/white-logo.png" alt="" />
        <img class="menu-icon" src="../assets/img/menu-white.svg" alt="" />
      </div>
      <div class="menu-content d-flex justify-content-between">
        <div class="d-flex flex-column">
          <RouterLink to="/aboutUs">
            <h2 class="about-us-text text">About US</h2>
          </RouterLink>
          <h2 class="product-text text">product</h2>
          <h2 class="news-events-text text">news & events</h2>
          <h2 class="contact-us-text text">contact us</h2>
        </div>
        <div class="img-wrap">
          <img src="../assets/img/img 2.png" alt="" class="motiv" />
          <img src="../assets/img/img 3.png" alt="" class="motiv" />
          <img src="../assets/img/img 4.png" alt="" class="motiv" />
          <img src="../assets/img/img 5.png" alt="" class="motiv" />
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped src="../styles/menu/menu.scss"></style>
