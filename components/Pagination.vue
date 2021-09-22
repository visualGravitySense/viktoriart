<template>
    <div class="pagination-area text-center pt-0 pb-70" data-aos="fade-up" data-aos-duration="1000">
        <nav>
            <ul class="page-numbers">
                <li>
                    <!--<a class="page-number next" href="#">-->
                    <a class="page-number next" @click="prevPage">
                        <i class="icofont-double-left"></i>
                    </a>
                </li>

                <!--<li>-->
                    <!--<a class="page-number" href="#">1</a>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a class="page-number" href="#">2</a>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a class="page-number" href="#">3</a>-->
                <!--</li>-->

                <li>
                    <a class="page-number next" @click="nextPage">
                        <i class="icofont-double-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
