<!-- The card used for reviews and Q&As -->

<template>
  <div>
    <div class="d-flex align-center mb-3">
      <v-avatar class="mr-2">
        <img :src="pic">
      </v-avatar>

      <div>
        <div class="t-button-text">{{ name }}</div>
        <div class="t-small c-silver-text d-flex align-center">
          <template v-if="subtitleIsArray">
            <template v-for="t, i in subtitle">
              <div v-if="i !== 0" :key="`dot-${i}`" class="dot c-silver"></div>
              <span :key="i">{{ t }}</span>
            </template>
          </template>
          <span v-else>
            {{ subtitle }}
          </span>
        </div>
      </div>
    </div>

    <div class="d-flex">
      <div v-if="inset" style="flex: 0 0 56px;" />

      <div style="flex: 1">
        <div :class="textClass">
          {{ text }}
        </div>

        <v-btn v-if="showMore" text dense color="var(--blue)" class="t-small px-0">
          <v-icon>mdi-chevron-down</v-icon> Read more
        </v-btn>

        <div v-if="helpfulBtn" class="d-flex align-center mt-2">
          <v-btn text color="var(--silver)" class="t-pre-title px-0" @click="helpful = !helpful">
            <v-icon v-if="helpful" class="c-blue-text">mdi-thumb-up</v-icon>
            <v-icon v-else>mdi-thumb-up-outline</v-icon> 
            <span class="ml-2">Helpful</span>
          </v-btn>
          <v-spacer />
          <div class="t-pre-title c-silver-text">{{ _helpfulCount }} people found this helpful</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextCard',

  props: {
    pic: { type: String, required: true },
    name: { type: String, required: true },
    subtitle: { type: String | Array, required: true },
    text: { type: String, default: '' },
    helpfulBtn: { type: Boolean, default: false },
    helpfulCount: { type: Number, default: 0 },
    inset: { type: Boolean, default: false },
    showMore: { type: Boolean, default: false },
  },

  data() {
    return {
      helpful: false,
    }
  },

  computed: {
    _helpfulCount() {
      return this.helpfulCount + ( this.helpful ? 1 : 0 )
    },
    textClass() {
      return this.inset ? 'c-silver-text t-small' : 'c-black-text t-body'
    },
    subtitleIsArray() {
      return Array.isArray(this.subtitle)
    },
  },
}
</script>