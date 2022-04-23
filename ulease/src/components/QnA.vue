<template>
  <v-card outlined class="pa-4 rounded-lg">
    <TextCard
      class="mb-4"
      :name="question.name"
      :pic="question.pic"
      :subtitle="getSubtitleQ(question.date)"
      :text="question.text"
    />

    <v-divider />

    <template v-for="answer, i in answers">
      <TextCard 
        :key="i"
        class="my-4"
        :name="answer.name"
        :pic="answer.pic"
        :subtitle="getSubtitleA(answer.date)"
        :text="answer.text"
        :helpful-count="answer.helpfulCount"
        inset
        helpful-btn
      />
      <v-divider :key="`divider-${i}`" />
    </template>
    
    <div class="d-flex mt-4">
      <v-icon class="mx-2">mdi-account</v-icon>
      <v-text-field 
        placeholder="Answer question"
        outlined
        dense
        hide-details 
      />
    </div>
  </v-card>
</template>

<script>
import { getDateString } from '@/utils'
import TextCard from '@/components/TextCard'

export default {
  name: 'QnA',
  
  props: {
    question: { type: Object, required: true },
    answers: { type: Array, default: [] },
  },

  components: {
    TextCard,
  },

  methods: {
    getSubtitleQ(date) {
      return `Asked on ${getDateString(date)}`
    },
    getSubtitleA(date) {
      return `Answered on ${getDateString(date)}`
    },
  },
}
</script>