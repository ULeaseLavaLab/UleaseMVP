<template>
  <div class="py-8">
    <div class="d-flex align-center mb-6" style="column-gap: 5px;">
      <v-icon class="c-blue-text">mdi-forum</v-icon>
      <div class="t-h4-inter">5 answered questions</div> 
      <div class="_divider mx-4" /> 
      <div class="t-h4-inter">5 unanswered questions</div>
    </div>

    <div class="d-flex align-center mb-4">
      <v-text-field 
        color="var(--blue)"
        class="mr-2"
        outlined 
        placeholder="Search questions" 
        append-icon="mdi-magnify"
        dense
        hide-details
      />
      <v-btn
        style="align-self: stretch; height: unset;"
        dark
        color="var(--blue)"
        class="t-button-text"
      >Ask a question</v-btn>
    </div>

    <template v-for="{ question, answers }, i in questions">
      <QnA 
        :key="i"
        class="mb-4"
        :question="question"
        :answers="answers"
      />
    </template>
  </div>
</template>

<script>
import QnA from '@/components/QnA'

export default {
  name: 'QnAs',
  
  props: {
    questions: { type: Array, default: [] },
  },

  components: {
    QnA,
  },
}
</script>