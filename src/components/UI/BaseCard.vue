<template>
  <div class="question-card">
    <div class="card-header">
      <BaseQuestionMarkIcon />
      <slot name="question" />
      <BaseChevronDownIcon />
    </div>
    <transition name="answer">
      <div class="card-body" v-if="isOpened">
        <slot name="answer" />
      </div>
    </transition>
  </div>
</template>

<script>
import BaseQuestionMarkIcon from "./BaseQuestionMarkIcon.vue";
import BaseChevronDownIcon from "./BaseChevronDownIcon.vue";
export default {
  props: {
    isOpened: Boolean,
  },
  components: {
    BaseQuestionMarkIcon,
    BaseChevronDownIcon,
  },
};
</script>
