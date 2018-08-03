<template>
  <div class="at-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentUpward } from 'c-ui/src/utils/util'
import Emitter from 'c-ui/src/mixins/emitter'

export default {
  name: 'AtCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  watch: {
    value (value) {
      this.updateModel()
    }
  },
  methods: {
    updateModel () {
      const value = this.value
      this.childrens = findComponentUpward(this, 'AtCheckbox')

      if (this.childrens) {
        this.childrens.forEach(child => {
          child.model = value
          child.currentValue = value.indexOf(child.label) >= 0
          child.isGroup = true
        })
      }
    },
    change (date) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
    }
  },
  mounted () {
    this.updateModel()
  }
}
</script>
