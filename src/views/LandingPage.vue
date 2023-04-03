<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MoreDetails from "../component/MoreDetails.vue";
import Card from "../component/Card.vue";
import { RouterLink } from "vue-router";

let pressed = false;
let startX;
let x;

gsap.registerPlugin(ScrollTrigger);

const lineFounder = () => {
  ScrollTrigger.create({
    trigger: ".header-details",
    onEnter: () => {
      gsap.fromTo(
        ".header-details",
        { css: { y : '20px', opacity: 0 } },
        {
          duration: 3,
          delay : 1,
          css: { y : '0px', opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });

  gsap.set(".motiv", { zIndex: (i, target, targets) => targets.length - i });

  let allBGs = gsap.utils.toArray(".motiv");
  let allBGsNotLast = allBGs.slice(0, -1);
  let allLines = gsap.utils.toArray(".text");
  let allLinesNotLast = allLines.slice(0, -1);
  let next = 1,
    fade = 0.1,
    st = 0.3, //  line animation
    tt = 3000; // 'total time' in px of scrub animation

  gsap.set(".textWrap", { yPercent: -50 });

  let action = gsap
    .timeline({ defaults: { ease: "none", stagger: next } })

    .fromTo(
      ".studies-title",
      { css: { opacity: 0, y: "-=600" } },
      { css: { opacity: 1, y: "-=150" }, duration: st, ease: "none" }
    )
    .fromTo(
      allLines,
      { css: { opacity: 0 } },
      { y: "-=250", duration: st, ease: "none", opacity: 1 }
    )
    .fromTo(
      allLinesNotLast,
      { css: { opacity: 1 } },
      { y: "-=250", duration: st, ease: "none", opacity: 0 },
      next
    )

    .to(allBGsNotLast, { autoAlpha: 0, duration: fade }, next)
    .to(allBGs, { transformOrigin: "center", duration: next / 2 }, next / 2)


  ScrollTrigger.create({
    trigger: "#section02",
    start: "top top",
    end: "+=" + tt,
    pin: true,
    animation: action,
    scrub: 0.3,
  });
  ScrollTrigger.create({
    trigger: ".about-razak-title",
    onEnter: () => {
      gsap.fromTo(
        ".about-razak-title",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });
  ScrollTrigger.create({
    trigger: ".about-razak-details",
    onEnter: () => {
      gsap.fromTo(
        ".about-razak-details",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });
  ScrollTrigger.create({
    trigger: ".news-header",
    onEnter: () => {
      gsap.fromTo(
        ".news-header-border",
        { css: { width: "0%" } },
        {
          duration: 5,
          css: { width: "100%" },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".news-header-text",
        { css: { opacity: 0, y: "50px" } },
        {
          duration: 5,
          css: { opacity: 1, y: 0 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });
  ScrollTrigger.create({
    trigger: ".follow-img",
    start: "bottom bottom",
    end : "top top",
    onEnter: () => {
      gsap.fromTo(
        ".follow-img",
        { css: { width: "0vw" } },
        {
          duration: 1,
          css: { width: "7vw" },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
    onLeave: () => {
      gsap.fromTo(
        ".follow-img",
        { css: { width: "7vw" } },
        {
          duration: 1,
          css: { width: "0vw" },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
    onEnterBack: () => {
      gsap.fromTo(
        ".follow-img",
        { css: { width: "0vw" } },
        {
          duration: 1,
          css: { width: "7vw" },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
    onLeaveBack : () => {
      gsap.fromTo(
        ".follow-img",
        { css: { width: "8vw" } },
        {
          duration: 1,
          css: { width: "0vw" },
          ease: "expo",
          overwrite: "auto",
        }
      );

    }
  });
};

const checkBoundary = (event) => {
  let $sliderContainer = this.$refs.sliderContainer;
  let $innerSlider = this.$refs.innerSlider;
  let outer = $sliderContainer.getBoundingClientRect();
  let inner = $innerSlider.getBoundingClientRect();

  if (parseInt($innerSlider.style.left) > 0) {
    $innerSlider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    $innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
};
export default {
  components: {
    MoreDetails,
    Card,
  },
  mounted() {
    this.studiesHandler();
  },
  methods: {
    sliderHandler(Events) {
      let $sliderContainer = this.$refs.sliderContainer;
      let $innerSlider = this.$refs.innerSlider;
      pressed = true;
      startX = Events.offsetX - $innerSlider.offsetLeft;
      $sliderContainer.style.cursor = "grabbing";
    },
    sliderHandlerEnter(Events) {
      let $sliderContainer = this.$refs.sliderContainer;
      $sliderContainer.style.cursor = "grab";
    },
    sliderHandlerUp(Events) {
      let $sliderContainer = this.$refs.sliderContainer;
      $sliderContainer.style.cursor = "grab";
      pressed = false;
    },
    sliderHandlerMove(Events) {
      let $innerSlider = this.$refs.innerSlider;
      if (!pressed) return;
      Events.preventDefault();

      x = Events.offsetX;

      $innerSlider.style.left = `${x - startX}px`;
      checkBoundary(Events);
    },
    studiesHandler(Events) {
      lineFounder();
    },
  },
};
</script>

<template>
  <div class="landing-page">
    <section class="header">
      <img src="../assets/img/slider img.png" alt="" />
      <div class="bg-darker"></div>
      <div
        class="top-nav d-flex justify-content-between align-items-center w-100"
      >
        <img src="../assets/img/white-logo.png" alt="" />
        <div class="d-flex gap-5 align-items-center">
          <p>English</p>
          <RouterLink to="/menu">
            <button class="menu" @click="menueHandler">
              <img src="../assets/img/menu-icon.png" alt="" />
              <span>Menu</span>
            </button>
          </RouterLink>
        </div>
      </div>
      <div class="header-details">
        <h1>
          Razak <br />
          Rharmacy
        </h1>
        <p>
          With more than half a century <br />
          of experience
        </p>
        <MoreDetails position="absolute" bottom="0px" right="-45px" />
      </div>
      <div class="header-icons d-flex align-items-center gap-3">
        <img src="../assets/img/whatsapp.png" alt="" />
        <img src="../assets/img/instagram.png" alt="" />
        <img src="../assets/img/linkedin-in.png" alt="" />
      </div>
    </section>
    <section class="about-razak d-flex justify-content-between">
      <div class="about-razak-title d-flex flex-column gap-2">
        <span>About Razak</span>
        <h3>
          Razak Rharmacy <br />
          With more than half a <br />
          century of experience & <br />
          most quality
        </h3>
        <div class="about-razak-title-more d-flex align-items-center gap-4">
          <span>Click & Learn more</span>
          <MoreDetails width="30px" height="30px" border="1px solid black" />
        </div>
      </div>
      <div class="about-razak-details d-flex flex-column gap-2 col-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          reiciendis obcaecati itaque blanditiis. Error iste quam magni! Omnis,
          fugit! Minima vitae quae doloremque quaerat? Dolorum illum, quod quis
          quam commodi nisi error
        </p>
        <div class="d-flex px-3 gap-2">
          <button>
            Product <Icon icon="dashicons:arrow-right-alt2" color="#eee" />
          </button>
          <button>
            Contact <Icon icon="dashicons:arrow-right-alt2" color="#eee" />
          </button>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="news-bg"></div>
      <div class="news-header d-flex flex-column gap-4 w-100">
        <div class="news-header-border"></div>
        <div class="news-header-text d-flex flex-column">
          <span>Blogs</span>
          <h1>News & Events</h1>
        </div>
      </div>
      <div
        ref="sliderContainer"
        class="news-cards-container"
        @mousedown="sliderHandler"
        @mouseenter="sliderHandlerEnter"
        @mouseup="sliderHandlerUp"
        @mousemove="sliderHandlerMove"
      >
        <div ref="innerSlider" class="news-cards gap-4">
          <Card title="lorem" img="img 1.png" />
          <Card title="lorem" img="img 2.png" />
          <Card title="lorem" img="img 3.png" />
          <Card title="lorem" img="img 1.png" />
          <Card title="lorem" img="img 2.png" />
          <Card title="lorem" img="img 3.png" />
          <Card title="lorem" img="img 1.png" />
          <Card title="lorem" img="img 2.png" />
          <Card title="lorem" img="img 3.png" />
        </div>
      </div>
    </section>
    <section class="studies">
      <section id="section02">
        <div class="studies-title">
          <span>Case Studies</span>
          <h3>RAZAK's Case Studies</h3>
        </div>
        <div class="wrap">
          <div class="motiv motiv-one"></div>
          <div class="motiv motiv-two "></div>
          <div class="motiv motiv-three"></div>
        </div>
        <div class="textWrap">
          <div ref="textOne" class="text one d-flex flex-column">
            <h1>Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              nisi enim voluptates neque accusantium
            </p>
            <MoreDetails left="3%" bottom="-30px" width="30px" height="30px" />
          </div>
          <div ref="textTwo" class="text two d-flex flex-column">
            <h1>Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              nisi enim voluptates neque accusantium
            </p>
            <MoreDetails left="3%" bottom="-30px" width="30px" height="30px" />
          </div>
          <div ref="textThree" class="text three d-flex flex-column">
            <h1>Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              nisi enim voluptates neque accusantium
            </p>
            <MoreDetails left="3%" bottom="-30px" width="30px" height="30px" />
          </div>
        </div>
      </section>
    </section>

    <section class="follow flex-column">
      <h1 class="follow-text">
        don't <img class="follow-img" src="../assets/img/img 7.png" /> you
        <br />
        follow <img class="follow-img" src="../assets/img/img 6.png" /> us ?
      </h1>
      <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
        <span class="follow-instagram">Follow Our Instagram</span>
        <MoreDetails border="1px solid black" width="20px" height="20px" />
      </div>
    </section>
    <footer class="footer">
      <div class="footer-logo">
        <img src="../assets/img/white-logo.png" alt="" />
        <p>Pharmaceutical Company</p>
      </div>
      <div class="footer-details">
        <div class="footer-learn">
          <h6>Learn</h6>
          <p>About Razak</p>
          <p>Responsibility</p>
          <p>Gallery</p>
        </div>
        <div class="footer-explor">
          <h6>Explor</h6>
          <p class="poppinsLight">Bloge Studies</p>
          <p class="poppinsLight">Products</p>
        </div>
        <div class="footer-collaborate">
          <h6>Collaborate</h6>
          <p class="poppinsLight">Contact</p>
          <p class="poppinsLight">Became a colleague</p>
          <p class="poppinsLight">Complaint</p>
        </div>
        <div class="footer-contact">
          <h6>contact</h6>
          <div class="d-flex align-items-center gap-2">
            <Icon icon="carbon:phone" color="white" width="18" />
            <p class="poppinsLight">021-44537027</p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <Icon icon="codicon:mail" color="white" width="18" />
            <p class="poppinsLight">info@razak.com</p>
          </div>
          <div class="d-flex align-items-center my-3 gap-3">
            <img src="../assets/img/whatsapp.png" alt="" />
            <img src="../assets/img/instagram.png" alt="" />
            <img src="../assets/img/linkedin-in.png" alt="" />
          </div>
        </div>
      </div>
      <div class="footer-sub">@2021 Razak Pharmacy.All Right reserved.</div>
    </footer>
  </div>
</template>

<style scoped src="../styles/landingPage/landingPage.scss"></style>
