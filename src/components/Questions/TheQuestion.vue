<template>
  <BaseCard :isOpened="isOpened" @click="toggleCard">
    <template #question>
      <h2 class="question-card__question">{{ question }}</h2>
    </template>
    <template #answer>
      <p class="question-card__answer">
        {{ answer }}
      </p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  data() {
    return {
      isOpened: false,
    };
  },
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseCard,
  },
  methods: {
    toggleCard() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>
