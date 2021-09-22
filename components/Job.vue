<template>
  <section class="portfolio-details-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="portfolio-details-content" data-aos="fade-up" data-aos-duration="1000">
            <div class="portfolio-tab-content">
              <div class="thumb">
<!--                <img src="/images/portfolio/tab-b1.jpg" alt="image">-->
                <img :src="`http://localhost:1337${post.titleImg.url}`" :alt="post.title">

              </div>
              <div class="portfolio-info-list">
                <h4>Course details</h4>
                <div class="separator-line">
                  <img class="me-1" src="/images/shape/line-s4.png" alt="image">
                  <img src="/images/shape/line-s4.png" alt="image">
                </div>
                <ul class="info-list-style">
                  <li>
                    <span>Title</span>
                    <span>{{ post.title }}</span>
                  </li>
                  <li>
                    <span>Company</span>
                    <span>{{ post.author }}</span>
                  </li>
                  <li>
                    <span>Course start</span>
                    <span>{{ post.deadline }}</span>
                  </li>
                  <li>
                    <span>Language</span>
                    <span>{{ post.jobType }}</span>
                  </li>
                  <li>
                    <span>Course time</span>
                    <span>{{ post.location }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <h2 class="title">{{ post.title }}</h2>
            <div class="separator-line">
              <img class="me-1" src="/images/shape/line-s2.png" alt="image">
              <img src="/images/shape/line-s1.png" alt="image">
            </div>

            <p>{{ post.excerpt }}</p>
            <p class="mb-39">{{ post.desired }}</p>
            <h2 class="title">{{ post.capabilities }}</h2>
            <div class="separator-line">
              <img class="me-1" src="/images/shape/line-s2.png" alt="image">
              <img src="/images/shape/line-s1.png" alt="image">
            </div>
            <p>{{ post.res }}</p>

              <h2 class="title">{{ post.bonus }}</h2>
              <div class="separator-line">
                  <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                  <img src="/images/shape/line-s1.png" alt="image">
              </div>
              <p>{{ post.bon}}</p>

              <h2 class="title">{{ post.company }}</h2>
              <div class="separator-line">
                  <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                  <img src="/images/shape/line-s1.png" alt="image">
              </div>
              <p>{{ post.about }}</p>

              <h2 class="title">{{ post.youget }}</h2>
              <div class="separator-line">
                  <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                  <img src="/images/shape/line-s1.png" alt="image">
              </div>
              <p>{{ post.lifeAt }}</p>



            <div class="video-divider">
              <img src="/images/photos/video1.jpg" alt="image">

              <CoolLightBox
                :items="items"
                :index="index"
                @close="index = null">
              </CoolLightBox>
              <a class="btn-play play-video-popup" href="javascript:void(0)" @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex">
                                <span class="icon">
                                    <img src="/images/icons/play.png" alt="image">
                                </span>
              </a>
              <span class="video-duration">Intro Video</span>
            </div>
            <!--<h2 class="title">Project Summery</h2>-->
            <!--<div class="separator-line">-->
              <!--<img class="me-1" src="/images/shape/line-s2.png" alt="image">-->
              <!--<img src="/images/shape/line-s1.png" alt="image">-->
            <!--</div>-->
            <!--<p class="mb-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ially unchanged. It was popularised in the 1960s with the release of Letraset sheets an contaning orem Ipsum passages, and more recently with desktop publishing software like pageMaker including versions of  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ially unchanged. It was popularised in the 1960s with the release.</p>-->
            <!--<p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>-->


            <div class="category-social-content">
              <div class="category-items">
                <n-link to="/project">Business</n-link>
                <n-link to="/project">Marketing</n-link>
                <n-link to="/project">Consulting</n-link>
              </div>
              <div class="social-items">
                <a href="#"><i class="icofont-facebook"></i></a>
                <a href="#"><i class="icofont-skype"></i></a>
                <a href="#"><i class="icofont-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="page-navigation" data-aos="fade-up" data-aos-duration="1000">
            <div class="nav-item prev">
              <div class="thumb">
                <img src="/images/portfolio/nav1.jpg" alt="image">
                <a href="#"><i class="icofont-double-left"></i></a>
              </div>
              <div class="content">
                <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                <h4><a href="#">Digital Marketing</a></h4>
                <n-link to="/project" class="category">Business / Marketing</n-link>
              </div>
            </div>
            <div class="nav-item-center">
              <a href="#">
                <img src="/images/icons/dot.png" alt="image">
              </a>
            </div>
            <div class="nav-item next">
              <div class="thumb">
                <img src="/images/portfolio/nav2.jpg" alt="image">
                <a href="#"><i class="icofont-double-right"></i></a>
              </div>
              <div class="content">
                <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                <h4><a href="#">Business Consulting</a></h4>
                <n-link to="/project" class="category">Business / Marketing</n-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="comment-form" data-aos="fade-up" data-aos-duration="1100">
            <div class="section-title text-center">
              <h2 class="title">Send a <span>CV.</span></h2>
            </div>
            <!--                JOB APPLY / send CV form component-->
            <applyJob />
          </div>
        </div>

        <div class="comment-area">
          <h2 class="title" data-aos="fade-up" data-aos-duration="1000">Comments <span>(25)</span></h2>
          <comments :comments="comments" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: "Job",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    applyJob: () => import('@/components/ApplyJob'),
    comments: () => import('@/components/Comments'),
    CoolLightBox,
  },
  data () {
    return { comments: [
        { name: 'Alex', text: 'Lorem Text 22Alex22 1 Lorem Text 22Alex22 1, Lorem Text 22Alex22 1Lorem Text 22Alex22 1 Lorem Text 22Alex22 1, Lorem Text 22Alex22 1 Lorem Text 22Alex22 1 Lorem Text 22Alex22 1, Lorem Text 22Alex22 1 Lorem Text 22Alex22 1 Lorem Text 22Alex22 1, Lorem Text 22Alex22 1' },
        { name: '22Alex22', text: 'Telik Lorem Text 22Alex22 1 Lorem Text 22Alex22 1, Lorem Text 22Alex22 1 Telikks Lorem Text 1122 Telik Lorem Text 22Alex22 1 Lorem Text 22Alex22 1, Lorem Text 22Alex22 1 Telikks Lorem Text 1122' },
      ] }
  }
};
</script>

  // data() {
  //   return {
  //     items: [
  //       {
  //         src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
  //         autoplay: true
  //       },
  //     ],
  //     index: null
  //   }
  // },

<style>
    .comment-area {
        margin-top: 66px;
    }
</style>

