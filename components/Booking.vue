<template>
    <section class="about-area">
        <div class="position-relative">
            <div class="container">

<!--              BOOKING BLOCK-->
                <div class="row">

                    <div class="">
<!--                    <div class="col-lg-12 col-xl-6">-->
                        <div class="about-content-style">
                            <div class="section-title">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line1.png" alt="image">
                                  <h5>{{ headline }}</h5>
                                </div>

                              <div class="new-event">
                                <h6>{{ titleline }}</h6>

                                <p>{{ paragraphline }}</p>

                                <div class="comment-form-content">
                                  <div class="row">

                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <Message v-if="message" message="Title can't be blank"> </Message>
<!--                                          todo-->
                                        <p>1. Add Radio Button With 3 PRIORITY and difference colors</p>
<!--                                          todo-->
                                        <p>2. Add reset for PRIORITY: Default priority after reset to default Event</p>
                                          <NewEvent
                                            :note="note"
                                            @addNote="addNote" />

                                        <div class="note-header" style="margin: 36px 0;">
                                          <h6>{{ titleline }}</h6>

                                            <p>{{ search }}</p>
                                          <search
                                              :search="search"
                                              placeholder="Find your Event"
                                              @search="search = $event"
                                          />

                                          <div class="icons">
                                            <svg :class="{ active: grid }" @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                            <svg :class="{ active: !grid }" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                                          </div>
                                        </div>


                                      </div>
                                    </div>

<!--                                    INPUTS-->
                                    <div class="col-md-12">
                                      <div class="form-group">

<!--                                          todo-->
                                      <p>3. By clicking to header of the event - start header editing (hidden input)</p>

                                        <Events
                                          :notes="notesFilter" :grid="grid" @remove="removeNote"
                                        />

                                        <!--                                    INPUTS-->
<!--                                        <input v-model="note.title" class="form-control" type="text" >-->
<!--                                        <div class="new-event" v-if="message">-->
<!--                                          <p>{{ message }}</p>-->
<!--                                        </div>-->
                                      </div>
                                    </div>

<!--                                    <div class="col-md-12">-->
<!--                                      <div class="form-group">-->
                                        <!--                                    INPUTS-->
<!--                                        <textarea class="form-control" v-model="note.excerpt" ></textarea>-->
<!--                                      </div>-->
<!--                                    </div>-->

<!--                                    <div class="row">-->
<!--                                    <div class="col-md-12">-->
<!--                                    <div class="form-group group-style mb-0">-->
                                      <!--                                    INPUTS-->
<!--                                      <AppButton @click="addNote">New Event</AppButton>-->
<!--                                    </div>-->
<!--                                    </div>-->
<!--                                    </div>-->

                                  </div>
                                </div>

<!--                                <input class="comment-form" v-model="note.title" type="text">-->
<!--                                <textarea class="comment-form" v-model="note.excerpt" ></textarea>-->
<!--                                <AppButton class="comment-form" @click="addNote">New Event</AppButton>-->
                              </div>

<!--                              NEW EVENT-->
<!--                              <div class="comment-form-content" v-for="(note, index) in notes" :key="index">-->
<!--                                <div class="">-->
<!--                                  <p>{{ note.title }}</p>-->
<!--                                  <p>{{ note.excerpt }}</p>-->
<!--                                </div>-->
<!--                              </div>-->

                                <h2 class="title">Ready for change today to become the <span>industry leaders</span> tomorrow </h2>
                                <p>We create digital experiences that thrill people – and grow business.</p>
                            </div>
                            <div class="inner-content" data-aos="fade-up" data-aos-duration="1200">
                                <p><span class="text-block">E</span>xperienced Digital Media creators and developers with a 10 years of experience in design and development in different forms.</p>
                                <p>Governors of simple visual design and the code. We know exactly how to make ideas shine. We are hands-on creatives, specialising in product and digital design.</p>
                                <p class="mb-0">You provide the vision, we provide the solution. Having launched our own startups and with 50+ successful projects on our resume. We are passionate about creating products with a strong visual identity and strong functionality under the hood.</p>
                                <div class="inline-style">
                                    <a href="#" class="btn btn-theme btn-border">
                                        Team Members
                                        <i class="icon icofont-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  components: {
    Message: () => import('@/components/Message'),
    NewEvent: () => import('@/components/NewEvent'),
    Events: () => import('@/components/Events'),
    Search: () => import('@/components/Search'),
  },
  data() {

    return {
      headline: 'Booking App',
      titleline: 'Book Your Own Event!',
      paragraphline: 'Or choose from list',
      search: '',
      message: null,
      grid: true,
      note: {
        title: '',
        excerpt: ''
      },
      notes: [
        {
          imgSrc: "/images/blog/b1.jpg",
          link: "",
          title: "First Event",
          excerpt: "Descr for first event",
          // date: new Date(Date.now()).toLacaleString(),
          // date: Date.now().toLacaleString(),
          date: '12.05.2001',
          comment: 0,
          like: 0,
          author: "Lroosileht",
          category: "tshirt"
        },
        {
          imgSrc: "/images/blog/b2.jpg",
          link: "",
          title: "Second Event",
          excerpt: "You can by this print by placing an order by email.",
          date: "13 July, 2021",
          comment: 0,
          like: 0,
          author: "Inna Tyurikova",
          category: "frame"
        },
        {
          imgSrc: "/images/blog/b3.jpg",
          link: "",
          title: "Third Event",
          excerpt: "You can by this print by placing an order by email.",
          date: "13 July, 2021",
          comment: 0,
          like: 0,
          author: "Kangelane",
          category: "hoody"
        },
        {
          imgSrc: "/images/blog/b4.jpg",
          link: "",
          title: "Four Event",
          excerpt: "You can by this print by placing an order by email.",
          date: "13 July, 2021",
          comment: 0,
          like: 0,
          author: "Kangelane",
          category: "Electronics/Gadget"
        },
        {
          imgSrc: "/images/blog/b4.jpg",
          link: "",
          title: "Five Event",
          excerpt: "You can by this print by placing an order by email.",
          date: "13 July, 2021",
          comment: 0,
          like: 0,
          author: "Kangelane",
          category: "Electronics/Gadget"
        },
      ]
    }
  },
  computed: {
      notesFilter () {
          let array = this.notes,
              search = this.search
          if (!search) return array
          // To Lower Case
          search = search.trim().toLowerCase()
          // FILTER
          array = array.filter(function (item) {
              if (item.title.toLowerCase().indexOf(search) !== -1) {
                  return item
              }
          })
           // Error
          return array
      }
  },
  methods: {
    addNote () {
      // console.log(this.note)
      let {title, excerpt} = this.note

      if (title === '') {
        this.message = "title can't be blank!"
        return false
      }

      this.notes.push({
        title,
        excerpt
      })
      this.note.title = ''
      this.note.descr = ''
      this.message = null
    },
    removeNote (index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style>
.about-area {
  padding: 0px 0 120px;
}
</style>

