<template>
  <article class="QItem">
    <vs-input :value="question" @change="onChange">{{ question }}</vs-input>
  </article>
</template>

<script>
import { call } from 'vuex-pathify'

export default {
  props: ['question', 'index'],
  methods: {
    onChange (e) {
      this.update({
        index: this.index,
        content: e.target.value
      })
    },
    update: call('questions/updateQuestion')
  },
}
</script>

<style lang="scss">
  .QItem {
    position: relative;
    display: flex;
    user-select: none;
		border-bottom: var(--border);
    padding: var(--space-s) 0;
    

    &Inner { padding: var(--spacing) 0; }
    //& + & { border-top: 1px solid lightgray; }

    // Collapse groups
    &Collapse {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height var(--transSpeed) var(--transEasing), opacity var(--transSpeed) var(--transEasing);
    }
    &.active &Collapse {
      max-height: 999px;
      opacity: 1;
    }

    // Nav Effect
    .QItemNav {
      transition: opacity var(--transSpeed) var(--transEasing);
			opacity: 0;
			z-index: 1;
			&:hover { opacity: 1; }
    }
		&:hover .QItemNav,
		&.active .QItemNav {
      opacity: 1;
    }
  }

  .QSorting {
    background: rgba(255, 255, 255, .5);
  }

  .QTitleEditor {
    font-size: 110%;
  }
  .QContextEditor {
    font-size: 90%;
  }
  .QSubtitleEditor {    
    margin-top: var(--mini-spacing)
  }

	//.active { background: red }
	.QItemSorting {
		//transform: rotateY(50deg);
	}
</style>
