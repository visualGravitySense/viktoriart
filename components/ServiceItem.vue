<template>
    <div class="icon-box-item">
        <div class="icon-box">
            <img class="icon-img" :src="service.icon" alt="Icon">
        </div>
        <div class="content">
            <div class="separator-line">
                <img src="/images/shape/line-s1.png" alt="Image">
            </div>
            <h4>{{ service.title }}</h4>
<!--            <p>{{ service.desc }}</p>-->
            <n-link to="" class="btn-link">More Classes <i class="icon icofont-arrow-right"></i></n-link>
        </div>
        <div class="icon-shape">
            <img class="shape-img1" src="/images/shape/s1.png" alt="Icon">
            <img class="shape-img2" src="/images/shape/s2.png" alt="Icon">
            <img class="shape-img3" src="/images/shape/s3.png" alt="Icon">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>
