export default {
  toggleExpand(state, index) {
    // Identifies the card that the user clicked on (with index) and toggles it's expand
    const clickedQuestion = state.questions[index];
    clickedQuestion.isOpened = !clickedQuestion.isOpened;
  },
};
