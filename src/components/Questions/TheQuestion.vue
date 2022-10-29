<template>
  <BaseCard :isOpened="isOpened">
    <template #question>
      <h2 class="question-card__question">{{ question }}</h2>
    </template>
    <template #answer>
      <!-- <p class="question-card__answer" :class="{ opened: isOpened }"> -->
      <p class="question-card__answer">
        {{ answer }}
      </p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  props: {
    question: String,
    answer: String,
    isOpened: Boolean,
  },
  components: {
    BaseCard,
  },
};
</script>
