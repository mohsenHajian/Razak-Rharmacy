<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MoreDetails from "../component/MoreDetails.vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

gsap.registerPlugin(ScrollTrigger);

const initAnimation = () => {
  ScrollTrigger.create({
    trigger: ".about-details",
    onEnter: () => {
      gsap.fromTo(
        ".about-details",
        { css: { top: "20px" } },
        {
          duration: 3,
          css: { top: "0" },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".about-category",
        { css: { borderColor: "#ffffff00" } },
        {
          duration: 3,
          delay: 0.6,
          css: { borderColor: "#FFF" },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".about-category-icon-one",
        { css: { opacity: 0 } },
        {
          duration: 3,
          delay: 1.1,
          css: { opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".about-category-icon-two",
        { css: { opacity: 0 } },
        {
          duration: 3,
          delay: 1.3,
          css: { opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".about-category-icon-three",
        { css: { opacity: 0 } },
        {
          duration: 3,
          delay: 1.5,
          css: { opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });

  ScrollTrigger.create({
    trigger: ".our-story",
    onEnter: () => {
      gsap.fromTo(
        ".topStory",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".detailsStory p",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          delay: 0.3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });

  ScrollTrigger.create({
    trigger: ".Responsibility",
    onEnter: () => {
      gsap.fromTo(
        ".Responsibility h2",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".Responsibility p",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".shape-left",
        { css: { left: "-100%" } },
        {
          duration: 3,
          css: { left: "-20%" },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });

  ScrollTrigger.create({
    trigger: ".team-header",
    onEnter: () => {
      gsap.fromTo(
        ".team-header h2",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".team-header p",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
      gsap.fromTo(
        ".shape-right",
        { css: { right: "-100%" } },
        {
          duration: 3,
          css: { right: "-12%" },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });

  ScrollTrigger.create({
    trigger: ".team-member",
    onEnter: () => {
      gsap.fromTo(
        ".team-member-footer",
        { css: { scale: 0, opacity: 0 } },
        {
          duration: 3,
          delay: 0.4,
          css: { scale: 1, opacity: 1 },
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
  });
};

export default {
  components: {
    Icon,
    MoreDetails,
  },
  mounted() {
    this.animationHandler();
  },
  methods: {
    animationHandler(Events) {
      initAnimation();
    },
  },
};
</script>

<template>
  <div class="about-us">
    <img src="../assets/img/img 6.png" alt="" class="about-us-bg" />
    <div class="about-us-bg-dark"></div>
    <div class="header">
      <div
        class="about-header d-flex justify-content-between align-items-center"
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
      <div class="about-details d-flex flex-column">
        <span>about us</span>
        <h1>
          razak pharmacy <br />
          story
        </h1>
        <p>
          With more than half a century <br />
          of experience
        </p>
        <div class="about-category">
          <h5 class="story">Our Story</h5>
          <Icon
            class="about-category-icon-one"
            icon="dashicons:arrow-right-alt2"
            color="white"
            width="13"
          />
        </div>
        <div class="about-category">
          <h5 class="responsibility">Responsibility</h5>
          <Icon
            class="about-category-icon-two"
            icon="dashicons:arrow-right-alt2"
            color="white"
            width="13"
          />
        </div>
        <div class="about-category">
          <h5 class="team-category">Our Team</h5>
          <Icon
            class="about-category-icon-three"
            icon="dashicons:arrow-right-alt2"
            color="white"
            width="13"
          />
        </div>
      </div>
    </div>

    <section class="our-story flex-column">
      <div class="topStory d-flex flex-column">
        <span>Our Story</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          excepturi voluptatum ipsam, ea culpa magnam veritatis
        </p>
      </div>
      <div class="detailsStory d-flex w-100 justify-content-between">
        <img src="../assets/img/img 7.png" alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          illo ullam consectetur sapiente nemo laudantium nostrum sed maiores
          qui commodi minus recusandae fuga fugiat, provident iusto praesentium
          rerum beatae vero sunt, culpa nobis. Laboriosam rem cum dicta,
          excepturi omnis unde! illo ullam consectetur sapiente nemo laudantium
          nostrum sed maiores qui commodi minus recusandae fuga fugiat,
          provident iusto praesentium rerum beatae vero sunt, culpa nobis.
          Laboriosam rem cum dicta, excepturi omnis unde!
        </p>
      </div>
    </section>

    <section class="Responsibility d-flex justify-content-between">
      <h2>Our Responsibility</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
        voluptatibus distinctio vitae corrupti assumenda ut porro illo ullam
        saepe nemo vero itaque quos, inventore recusandae dolorum et quam
        voluptatibus distinctio vitae corrupti assumenda ut porro illo ullam
        saepe nemo vero itaque quos, inventore recusandae dolorum et quam
        voluptatibus distinctio vitae corrupti assumenda ut porro illo ullam
        saepe nemo vero itaque quos, inventore recusandae dolorum et quam
        beatae? Placeat!
      </p>
    </section>

    <section class="team">
      <img class="shape-left" src="../assets/img/shape-left.svg" alt="" />
      <img class="shape-right" src="../assets/img/shape-right.svg" alt="" />
      <div
        class="team-header d-flex justify-content-between align-content-center"
      >
        <h2>
          Meet Our team <br />
          of experts
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat
          sequi recusandae. Voluptates officia laboriosam quod deleniti
          veritatis, reprehenderit eligendi consequuntur sequi recusandae.
          Voluptates officia laboriosam quod deleniti veritatis, reprehenderit
          eligendi consequuntur
        </p>
      </div>
      <div class="team-content d-flex gap-5">
        <div class="team-member d-flex flex-column">
          <img src="../assets/img/index.jpg" alt="" />
          <div class="team-member-footer d-flex justify-content-between my-2">
            <div class="d-flex flex-column py-2">
              <h6>Mohsen Hajian</h6>
              <span>CEO</span>
            </div>
            <MoreDetails
              position="absolute"
              width="30px"
              height="30px"
              bottom="28px"
              right="15px"
            />
          </div>
        </div>
        <div class="team-member d-flex flex-column">
          <img src="../assets/img/index.jpg" alt="" />
          <div class="team-member-footer d-flex justify-content-between my-2">
            <div class="d-flex flex-column py-2">
              <h6>Mohsen Hajian</h6>
              <span>CEO</span>
            </div>
            <MoreDetails
              position="absolute"
              width="30px"
              height="30px"
              bottom="28px"
              right="15px"
            />
          </div>
        </div>
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
      <div class="footer-sub">
        @2021 Razak Pharmacy.All Right reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped src="../styles/aboutUs/about-us.scss"></style>
