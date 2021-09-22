<template>
    <section class="feature-area feature-about-area">
        <div class="container">
            <div class="row feature-list" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-lg-4" v-for="(feature, index) in features" :key="index">
                    <div class="feature-list-item">
                        <div class="icon">
                            <img class="img-icon" :src="feature.iconSrc" :alt="feature.title">
                        </div> 
                        {{ feature.title }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                features: [
                    {
                        iconSrc: "/images/icons/f1.png",
                        title: "Who We Are?"
                    },
                    {
                        iconSrc: "/images/icons/f2.png",
                        title: " Mission & Vission"
                    },
                    {
                        iconSrc: "/images/icons/f3.png",
                        title: "What We Do?"
                    },
                ]
            }
        },
    };
</script>