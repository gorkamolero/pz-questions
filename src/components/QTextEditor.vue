<template>
  <div class="editor">
    <editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <vs-icon icon="format_bold" />
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <vs-icon icon="format_italic" />
        </button>

      </div>
    </editor-menu-bubble>
    
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { call } from 'vuex-pathify'
import { Editor, EditorContent, EditorMenuBubble, Extension } from 'tiptap'
import { BulletList, ListItem, Placeholder, Bold, Italic, Link, } from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBubble,
  },
	props: {
    id: Number,
    parent: {
      type: [Boolean, Number],
      default: false,
    },
		field: String,
		placeholder: {
			type: String,
			default: 'Add your question here...'
		},
		content: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
  },
  watch: {
    content () {
      if (this.content === this.editor.getHTML()) return
      this.editor.setContent(this.content)
    }
  },
  methods: {
    update: call('Qs/updateQuestion'),
  },
  data() {
    return {
			keepInBounds: true,
      editor: new Editor({
				content: this.content,
        extensions: [
          new BulletList(),
          new ListItem(),
          new Placeholder({
            emptyClass: 'is-empty',
            emptyNodeText: this.placeholder,
            showOnlyWhenEditable: true,
          }),
          new Italic(),
          new Bold(),
          new class extends Extension {
            keys = () => ({ Enter: (state, dispatch, view) => true })
          }(),
				],
				onUpdate: ({ getJSON, getHTML}) => {
					// Clear timeout each time a key is pressed
          clearTimeout(this.timeout)

          const updateObj = {
            id: this.id,
            content: getHTML(),
          }
          if (this.parent !== false) { updateObj.parent = this.parent }
					
					// Wait half a second without input before running update
					this.timeout = setTimeout(() => {
            this.update(updateObj)
					}, 1500)
				},
      })
    }
	},
  beforeDestroy() {
    this.editor.destroy()
	},
}
</script>

<style lang="scss">
  // Reset
	.splitpanes__pane { overflow: visible; }
	.editor p { margin: 0; }
  // Placeholder
  p.is-empty::before {
    content: attr(data-empty-text);
    float: left;
    color: #aaa;
    pointer-events: none;
    height: 0;
    font-style: italic;
  }

  .menububble{
    position: absolute;
    display: flex;
    z-index: 20;
    background: #000;
    border-radius: 5px;
    padding: .3rem;
    margin-bottom: .5rem;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s,visibility .2s;

    &.is-active {
      opacity: 1;
      visibility: visible;
    }

    &__button {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        background: rgba(0,0,0,0);
        border: 0;
        color: #fff;
        padding: .2rem .5rem;
        margin-right: .2rem;
        border-radius: 3px;
        cursor: pointer;
    }
  }
</style>
