<template>
    <section class="portfolio-area">
        <div class="container">
            <div class="row">

              <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                <h2 class="title">Kangelane <span class="bottom-style">Careers App</span></h2>
                <div class="desc">
                  <p class="mt-20" >On Kangelane, you can find your business needs and be
                    <u class="text-theme-color2">a part of creative community in Estonia.</u>
                    You get access to exclusive content, classes, community, and insight into creative process of creators.</p>
                </div>
              </div>


              <div class="col-lg-12">
                <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                  <div class="portfolio-filter-menu mb-0">
<!--                    {{ portfolios }}-->

                    <input v-model="portfolio.title" type="text">
                    <textarea v-model="portfolio.category"></textarea>
                    <button @click="addNote">New note</button>

                    <div class="notes">
                      <div class="note" v-for="(portfolio, index) in portfolios" :key="index">
                        <div class="note-header">
                          <p>{{ portfolio.title }}</p>
                        </div>
                        <div class="note-body">
                          <p>{{ portfolio.category }}</p>
                          <span>{{ portfolio.link }}</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  </div>
                </div>
              </div>


                <div class="col-lg-12">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <div class="portfolio-filter-menu mb-0">
                            <button data-filter="all">All ProjectS</button>
                            <button data-filter=".business">Business</button>
                            <button data-filter=".tech">Programming & Tech</button>
                            <button data-filter=".marketing">Digital Marketing</button>
                            <button data-filter=".design">Graphics & Design</button>
                            <button data-filter=".data">Data</button>
                            <button data-filter=".music">Music & Audio</button>
                            <button data-filter=".video">Video & Animation</button>
                            <button data-filter=".writing">Writing & Translation</button>
                            <button data-filter=".consulting">Consulting</button>
                            <button data-filter=".lifestyle">Lifestyle</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row portfolio-grid gutter-50 box" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-md-6 portfolio-item mix" :class="blogs.category" v-for="(blogs, index) in blogs" :key="index">
                    <div class="inner-content">

<!--                        <div class="thumb">-->
<!--                            <n-link to="/project-details">-->
<!--                                <img :src="blogs.imgTitle" :alt="blogs.name"/>-->
<!--                            </n-link>-->
<!--                        </div>-->

                        <div class="thumb">
                          <div  v-if="blogs.imgTitle !== null">
                            <img :src="`http://localhost:1337${blogs.imgTitle.url}`" :alt="blogs.name">
                          </div>
                          <span v-else>No immage</span>
                        </div>

                        <div class="portfolio-info">
                            <div class="content">
                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="shape image">
                                <h3 class="title">
<!--                                    <n-link to="/project-details">{{ blogs.name }}</n-link>-->

                                    <n-link :to="/classes/+blogs.id" >{{ blogs.name }}</n-link>

                                </h3>
                                <p class="">
                                  {{ blogs.shortDescr }}
                                </p>
                                <n-link to="/project-details" class="category">{{ blogs.category }}</n-link>
                            </div>
                            <n-link :to="/classes/+blogs.id" class="btn-icon">
                                <i class="icofont-long-arrow-right"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-footer text-center" data-aos="fade-up" data-aos-duration="1300">
                <n-link to="" class="btn btn-theme btn-lg mb-1">Load More</n-link>
            </div>
<!--        </div>-->
    </section>
</template>

<script>
    export default {


        data() {
            return {
                mixer: null,

                portfolio: {
                  title: '',
                  category: ''
                },

                portfolios: [
                    {
                        imgSrc: "/images/portfolio/1.jpg",
                        title: "Business Management",
                        category: "business",
                        link: "/course-1"
                    },
                    {
                        imgSrc: "/images/portfolio/2.jpg",
                        title: "Market Statics & Analysis.",
                        category: "marketing",
                        link: "/course-2"
                    },
                    {
                        imgSrc: "/images/portfolio/3.jpg",
                        title: "Digital Marketing",
                        category: "consulting",
                        link: "/course-3"
                    },
                    {
                        imgSrc: "/images/portfolio/4.jpg",
                        title: "Business Consultation",
                        category: "digital",
                        link: "/course-4"
                    },
                    {
                        imgSrc: "/images/portfolio/5.jpg",
                        title: "Link Building Services",
                        category: "tech",
                        link: "/course-1"
                    },
                    {
                        imgSrc: "/images/portfolio/6.jpg",
                        title: "Social Media Marketing",
                        category: "data",
                        link: "/course-2"
                    },
                ]
            }
        },

        methods: {
          addNote () {
            console.log(this.portfolio)
            let {title, category} = this.portfolio

            if (title === '') {
              this.message = 'title can`t be blank!'
              return false
            }

            this.portfolios.push({
              title,
              category,
              date: new Date(Date.now()).toLocaleString()
            })
            this.message = null
            this.portfolio.title = ''
            this.portfolio.category = ''
          }
        },



        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl)
            })
        },
    };
</script>
