<template>
    <section class="blog-details-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="blog-details-column">
                        <div class="post-details-content">
                            <div class="post-details-body">
                                <div class="content" data-aos="fade-up" data-aos-duration="1000">
                                    <h2 class="title">Finding The Best Business Solution.</h2>
                                    <div class="separator-line mb-21">
                                        <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
                                        <img src="/images/shape/line-s1.png" alt="shape">
                                    </div>
                                    <div class="meta">
                                        <div class="inner-meta">
                                            <n-link to="/blog" class="post-date">06 Jan, 2021</n-link>
                                            <n-link to="/blog" class="post-comment"><i class="icofont-speech-comments"></i> 2,538</n-link>
                                            <n-link to="/blog" class="post-like"><i class="icofont-heart"></i> 789</n-link>
                                            <a class="post-author"><i class="icofont-user-alt-7"></i> Alvin Malone</a>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>
                                    <div class="thumb">
                                        <img src="/images/blog/b1.jpg" alt="image">
                                    </div>
                                    <h2 class="title">Business Management</h2>
                                    <div class="separator-line">
                                        <img class="me-1" src="/images/shape/line-s2.png" alt="shape">
                                        <img src="/images/shape/line-s1.png" alt="shape">
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>
                                    <div class="blockquote-area">
                                        <blockquote class="blockquote-style">
                                            <p>Lorem Ipsum simply dummy text the printing and industry has been the industry' <span>standard dummy text ever</span> make a type specimen book.</p>
                                            <div class="icon">”</div>
                                        </blockquote>
                                    </div>
                                    <p class="mb-26">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
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
                                <div class="page-navigation" data-aos="fade-up" data-aos-duration="1000">
                                    <div class="nav-item prev">
                                        <div class="thumb">
                                            <img src="/images/portfolio/nav1.jpg" alt="image">
                                            <n-link to="/blog-details"><i class="icofont-double-left"></i></n-link>
                                        </div>
                                        <div class="content">
                                            <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                                            <h4>
                                                <n-link to="/blog-details">Digital <br>Marketing</n-link>
                                            </h4>
                                            <n-link to="/blog" class="post-date">07 Jan, 2021</n-link>
                                        </div>
                                    </div>
                                    <div class="nav-item-center">
                                        <n-link to="/blog">
                                            <img src="/images/icons/dot.png" alt="image">
                                        </n-link>
                                    </div>
                                    <div class="nav-item next">
                                        <div class="thumb">
                                            <img src="/images/portfolio/nav2.jpg" alt="image">
                                            <n-link to="/blog-details"><i class="icofont-double-right"></i></n-link>
                                        </div>
                                        <div class="content">
                                            <img class="line-shape" src="/images/shape/line-s1.png" alt="image">
                                            <h4>
                                                <n-link to="/blog-details">Business <br>Consulting</n-link>
                                            </h4>
                                            <n-link to="/blog-details" class="post-date">07 Jan, 2021</n-link>
                                        </div>
                                    </div>
                                </div>
                                
                                <PostAuthorInfo />

                                <div class="comment-area">
                                    <h2 class="title" data-aos="fade-up" data-aos-duration="1000">Comments <span>(25)</span></h2>
                                    <CommentList />

                                    <CommentForm />
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="sidebar-area">
                            <WidgetSearch />

                            <ServiceCategoryWidget />

                            <WidgetVideo />

                            <WidgetSocial />

                            <WidgetRecentPost />

                            <WidgetTags />
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
            PostAuthorInfo: () => import('@/components/PostAuthorInfo'), 
            CommentList: () => import('@/components/CommentList'), 
            CommentForm: () => import('@/components/CommentForm'), 
            WidgetSearch: () => import('@/components/WidgetSearch'), 
            ServiceCategoryWidget: () => import('@/components/ServiceCategoryWidget'),
            WidgetVideo: () => import('@/components/WidgetVideo'),
            WidgetSocial: () => import('@/components/WidgetSocial'),
            WidgetRecentPost: () => import('@/components/WidgetRecentPost'),
            WidgetTags: () => import('@/components/WidgetTags'),
        },
    };
</script>