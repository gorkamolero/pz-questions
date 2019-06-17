<template>
  <article class="QItem">
    <div class="QItemTitle">
      <div class="QItemTitleDetails puiSpaceOut">
        <vs-chip v-if="question.type">
          <vs-avatar :icon="QTypeIcon.icon"/>
          {{ question.type }}
        </vs-chip>
        <QTextEditor
          class="QTitleEditor"
          :id="question.id"
          :content="question.title"
          field="title" />
      </div>
      <vs-button @click="removeQ(question.id)" size="small" radius color="dark" type="line" icon="remove" tabindex="-1" class="x-small" />
    </div>

    
    
  </article>
</template>

<script>
/*

<div class="QOptions">
        <div class="QOption puiSpaceOut" v-for="(option, i) in question.options" :key="i">
          <small class="id">Q{{ index }}.{{ i }}</small>
          <span> - </span>
          <QTextEditor
            class="QOptionEditor"
            :parent="question.id"
            :id="option.id"
            :content="option.title" />
        </div>
      </div>
*/
import { get, call } from 'vuex-pathify'
import QTextEditor from './QTextEditor'

export default {
  props: ['question', 'index'],
  components: {
    QTextEditor
  },
  methods: {
    removeQ: call('Qs/removeQuestion')
  },
  computed: {
    QTypes: get('Qs/QTypes'),
    QTypeIcon() { return this.QTypes.find(qtype => qtype.type === this.question.type) }
  }
}
</script>

<style lang="scss">
  .QItem {
    position: relative;
    user-select: none;
		border-bottom: var(--border);
    padding: var(--space) 0;

    &:after {
      content: '';
      height: 0px;
      width: calc(100% - var(--space-l));
      border-bottom: 1px solid var(--light-grey);
      position: absolute;
      bottom: 0; left: 50%; transform: translateX(-50%);
    }
    

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

  .QItemTitle {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
  }

  .QItemTitleDetails {
    display: flex;
    align-items: center;

    .QTitleEditor { margin-top: -4px; }
    .con-vs-chip {
      min-width: 60px;
      min-height: 18px;
      .con-vs-avatar {
        width: 15px;
        height: 15px;
        transform: scale(.9) transformY(-4px);
        transform-origin: center left;
      }
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

  .x-small { transform: scale(.75) }

  .QOption {
    display: flex;
    align-items: baseline;  
    small { opacity: .5; }
    padding: var(--space-s);
  }
</style>
