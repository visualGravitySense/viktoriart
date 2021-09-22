<template>

      <div class="container">

          <div class="row">
            <div class="col-lg-12">
            <AdminNavigation />
            </div>
          </div>
      </div>

</template>

<script>
    export default {
        components: {
            Navigation: () => import('@/components/Navigation'),
        },

        // data() {
        //     return {
        //         isSticky: false,
        //     }
        // },

        // methods: {
            // offcanvas mobile-menu
            // mobiletoggleClass(addRemoveClass, className) {
            //     const el = document.querySelector('#offcanvas-menu');
            //     if (addRemoveClass === 'addClass') {
            //         el.classList.add(className);
            //     } else {
            //         el.classList.remove(className);
            //     }
            // },
        // },

        // mounted(){
        //     window.addEventListener('scroll', () => {
        //         let scrollPos = window.scrollY
        //         if(scrollPos >= 200){
        //             this.isSticky = true
        //         } else {
        //             this.isSticky = false
        //         }
        //     })
        // },
    };
</script>
