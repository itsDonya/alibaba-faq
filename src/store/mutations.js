export default {
  toggleExpand(state, index) {
    const clickedQuestion = state.questions[index];
    clickedQuestion.isOpened = !clickedQuestion.isOpened;
  },
};
