<template>
  <div class="question-card">
    <div class="card-header">
      <BaseQuestionMarkIcon />
      <slot name="question"></slot>
      <BaseChevronDownIcon :class="{ chevronOpened: isOpened }" />
    </div>
    <transition name="answer">
      <div class="card-body" v-if="isOpened">
        <slot name="answer"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseQuestionMarkIcon from "./BaseQuestionMarkIcon.vue";
import BaseChevronDownIcon from "./BaseChevronDownIcon.vue";
export default {
  props: {
    isOpened: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    BaseQuestionMarkIcon,
    BaseChevronDownIcon,
  },
};
</script>
