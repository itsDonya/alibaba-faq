<template>
  <section id="questions">
    <TheQuestion
      v-for="(item, i) in allQuestions"
      @click="toggleExpand(i)"
      :key="i"
      v-bind="item"
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
      // Calls the function that toggles the card's expand with specific index
      this.$store.commit("toggleExpand", index);
    },
  },
};
</script>
