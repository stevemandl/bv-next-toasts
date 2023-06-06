<template>
  <div>
    <!-- no-close-on-esc  no-close-on-backdrop hide-header-close -->

    <b-modal
      centered
      hideHeaderClose
      size="md"
      buttonSize="md"
      okVariant="outline-primary"
      okTitle="Ja"
      cancelVariant="outline-secondary"
      cancelTitle="Nein"
      footerClass="p-2"
      :model-value="showDialog"
      @hidden="onclose"
    >
      <!-- Header -->
      <template #header>
        <h5>{{ title }}</h5>
      </template>

      <!-- Content -->
      <div class="d-block">
        <span :class="textcolor">
          <font-awesome-icon
            :icon="['fas', 'exclamation-triangle']"
            fixed-width
            size="2x"
          />
        </span>

        <slot></slot>
      </div>

      <!-- Footer -->
      <template #footer>
        <b-form-group class="mt-3 pms-form-group">
          <b-button
            @click.prevent="onclick_yes"
            variant="outline-primary"
            size="md"
            class="ms-0"
            title="Durchführen"
          >
            <!-- <font-awesome-icon icon="save" fixed-width /> -->
            <span class="mx-2">Ja</span>
          </b-button>

          <b-button
            @click.prevent="onclick_no"
            variant="outline-secondary"
            size="md"
            class="ms-2"
            title="Abbrechen"
          >
            <!-- <font-awesome-icon icon="window-close" fixed-width /> -->
            <span class="mx-2">Nein</span>
          </b-button>
        </b-form-group>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'confirmationdialog',

  data() {
    return {};
  },

  props: {
    title: String,
    showDialog: Boolean,
  },

  emits: {
    click_yes: null,
    click_no: null, // no validation
    close: null,
  },

  watch: {},

  created() {},

  mounted() {},

  computed: {
    textcolor(): string {
      return 'text-danger';
    },
  },

  methods: {
    onclick_yes() {
      this.$emit('click_yes');
    },

    onclick_no() {
      this.$emit('click_no');
    },

    onclose() {
      this.$emit('close');
    },
  },
});
</script>

<style scoped></style>
