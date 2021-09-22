<template>
    <header class="header-area header-default transparent sticky-header" :class="{'is-sticky': isSticky}">
        <div class="container">
            <div class="row">
                <div class="col-6 col-sm-4 col-lg-3">
                    <div class="header-logo-area">
                        <n-link to="/">
                            <img class="logo-main" src="/images/logo/logo.png" alt="Logo" />
                            <img class="logo-light" src="/images/logo/logo-light.png" alt="Logo" />
                        </n-link>
                    </div>
                </div>
                <div class="col-6 col-sm-8 col-lg-9">
                    <div class="header-align">
                        <div class="header-navigation-area navigation-style-two">
                            <Navigation />
                        </div>
                        <div class="header-action-area">
                            <button class="btn-menu d-xl-none" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>


                          <!--Get A Free Quote BUTTON-->

                            <!--<n-link to="/contact" class="btn-theme btn-style">-->
                                <!--Get A Free Quote -->
                                <!--<i class="icon-style icofont-double-right"></i>-->
                            <!--</n-link>-->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            Navigation: () => import('@/components/Navigation'),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>
