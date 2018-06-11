<template>
  <div
    class="c-btn-group"
    :class="[
      size ? `c-btn-group--${size}` : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CButtonGroup',
  props: {
    size: String,
    gap: {
      type: Number,
      default: -1
    }
  }
}
</script>
