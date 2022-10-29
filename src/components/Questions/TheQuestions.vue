<template>
  <section id="questions">
    <TheQuestion
      v-for="(item, i) in allQuestions"
      @click="toggleExpand(i)"
      :key="i"
      :question="item.question"
      :answer="item.answer"
      :isOpened="item.isOpened"
    />
  </section>
</template>

<script>
import TheQuestion from "./TheQuestion.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TheQuestion,
  },
  computed: {
    ...mapGetters(["allQuestions"]),
  },
  methods: {
    toggleExpand(index) {
      this.$store.commit("toggleExpand", index);
    },
  },
};
</script>
