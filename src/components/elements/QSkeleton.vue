<template>
  <skeleton theme="opacity" style="width: 70%" shape="radius" bg-color="#dcdbdc">
    <container>
      <grid>
        <grid-item size="1/5">
          <tb-skeleton  aspect-ratio="0.25"  bg-color="#eee"></tb-skeleton>
        </grid-item>
        <grid-item size="4/5">
          <tb-skeleton aspect-ratio="0.08"></tb-skeleton>
          <tb-skeleton aspect-ratio="0.05"></tb-skeleton>
          <tb-skeleton aspect-ratio="0.05"></tb-skeleton>
        </grid-item>
      </grid>
    </container>
  </skeleton>
</template>

<script>
import '@/plugins/skeleton'
import { TbSkeleton, Skeleton } from 'tb-skeleton'

export default {
  components: {
    TbSkeleton, Skeleton,
  }
}
</script>

<style scoped>
  .vfg-container { padding: 0; }
  .skeleton { padding: var(--space) 0; }
  .tb-skeleton {
    margin-top: 5px
  }
</style>
