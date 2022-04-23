<template>
  <TextCard
    :pic="pic"
    :name="name"
    :subtitle="subtitle"
    :text="text"
    :helpful-count="helpfulCount"
    helpful-btn
    show-more
  />
</template>

<script>
import { getDateString } from '@/utils'
import TextCard from '@/components/TextCard'

export default {
  name: 'Review',

  props: {
    name: { type: String, required: true },
    pic: { type: String, required: true },
    date: { type: Date, required: true },
    leaseTerm: { type: Array, required: true },
    text: { type: String, required: true },
    helpfulCount: { type: Number, required: true },
  },

  components: {
    TextCard,
  },

  computed: {
    leaseTermString() {
      return `Lease Term: ${this.leaseTerm.join(', ')}`
    },
    subtitle() {
      return [getDateString(this.date), this.leaseTermString]
    },
  },
}
</script>