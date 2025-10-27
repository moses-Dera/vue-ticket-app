<template>
  <ToastProvider>
    <Layout>
      <router-view />
    </Layout>
  </ToastProvider>
</template>

<script>
import Layout from "./components/Layout.vue";
export default { components: { Layout } };
</script>
