<template>
    <div class="widget" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="widget-title">About User Profile</h3>
        <div class="separator-line">
            <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
            <img src="/images/shape/line-s1.png" alt="shape">
        </div>
        <div class="widget-tags">
            <p>Because of the income from my Patreon I've been able to pursue more writing and it has definitely helped me. My patrons have been able to get sneak peeks at the artwork from my non fiction graphic novel Amazions, Abolitionists, and Activists: A Graphic History of Women's Rights and at Hood Feminism. They've had recipes and flash fiction and some videos. But now I want to do more. I want to have Q & A's and run a Discord group and just go all in on the indie content creation. It's going to be fun and interesting and weird. I want more people to join in, I want to have a good time here with all of you. The more support I have the more I can create, and the more cool things we can do together.

              Thank you for reading this far, thank you for supporting my work in whatever aspect you support it. I really appreciate it. And you. For those who can't swing pledging but who have taken the time to read this far? Check in from time to time. I'll occasionally post free public content. It might be super short flash fiction, it might be cheesy jokes, I won't know until the mood strikes, but you'll have a chance to see what goes on in my head too! Thanks again! </p>
            <ul>
                <li v-for="(tag, index) in tags" :key="index">
                    <n-link to="" data-filter=".business">{{ tag }}</n-link>
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
                ],
            }
        },
    };
</script>
