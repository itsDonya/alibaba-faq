<template>
  <main>
    <BaseTitle title="پرسش‌های شما" />
    <TheQuestions />
  </main>
</template>

<script>
import BaseTitle from "./components/UI/BaseTitle.vue";
import TheQuestions from "./components/Questions/TheQuestions.vue";

export default {
  components: {
    BaseTitle,
    TheQuestions,
  },
};
</script>
