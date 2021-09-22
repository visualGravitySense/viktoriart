<template>
    <div>
      <Header />
      <OffCanvasMobileMenu />
      <PageTitle title="Account" breadcrumbTitle="Admin" />

      <HeaderAdmin />

      <Nuxt />
    </div>
</template>

<script>
    export default {
        middleware: ['auth']
    }
</script>
