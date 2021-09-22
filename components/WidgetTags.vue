<template>
    <div class="widget" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="widget-title">Popular Tags</h3>
        <div class="separator-line">
            <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
            <img src="/images/shape/line-s1.png" alt="shape">
        </div>
        <div class="widget-tags">
            <ul>
                <li v-for="(tag, index) in tags" :key="index">
                    <n-link to="/blog">{{ tag }}</n-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tags: [
                    "Business",
                    "Consulting",
                    "User Interface",
                    "Corporate",
                    "Agency",
                    "Gardening",
                    "Industry",
                    "Minimal",
                    "Unique",
                ]
            }
        },
    };
</script>