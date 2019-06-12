<template>
	<nav class="QActions puiSpaceOut">
    <vs-button size="small"  @click.native="addQ"
        radius color="danger" type="gradient" icon="add" />
    <vs-button size="small" :disabled="!canUndo" @click="undo"
        radius color="danger" type="gradient" icon="undo" />
    <vs-button size="small" :disabled="!canRedo" @click="redo"
        radius color="danger" type="gradient" icon="redo" />
    <vs-button size="small"  @click="reload"
        radius color="danger" type="gradient" icon="restore" />
  </nav>
</template>

<script>
import { get, call } from 'vuex-pathify'

export default {
	computed: {
    canUndo: get('Qs/canUndo'),
    canRedo: get('Qs/canRedo')
	},
  methods: {
    reload: call('Qs/reload'),
    addQ: call('Qs/addQuestion'),
    undo: call('Qs/undo'),
		redo: call('Qs/redo')
  },
}
</script>

<style>
  .QActions {
		width: 100%;
		bottom: 0;
		display: flex;
		align-items: center;
    justify-content: flex-start;
    padding: var(--space-s) 0;
	}
</style>
