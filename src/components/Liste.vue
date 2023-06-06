<template>
  <div>
    <h2>Collapse, Accordion {{ open }}</h2>

    <div   class="accordion mb-1" role="tablist">


      <b-card v-for="cnt in 2" class="position-static" no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-link v-b-toggle="'bodymonth_' + cnt" class="card-link">
            <span>List{{cnt}}</span>
          </b-link>
        </b-card-header>

        <b-collapse
          :id="'bodymonth_' + cnt"
         
          :model-value="open === cnt"
          @update:model-value="open = cnt"
          role="tabpanel"
        >
          <b-card-body>
            <b-list-group flush class="scroll-list">
              <b-list-group-item
                v-for="(docu, docuindex) in PreparedDocuList"
                :key="docuindex"
                class="mb-2 position-static"
              >
                <div class="d-flex justify-content-between">
                  <div
                    class="text-break flex-grow-1 cursor-pointer"
                    :data-id="docu.id"
                  >
                    <h6 class="my-0">{{ docu.name }}</h6>
                  </div>

                  <div>
                  <b-button
                        size="sm"
                        variant="outline-secondary"
                        class="mx-2"
                        @click.prevent.stop="onclick_clickme">
                        click me
                    </b-button>
                  
                  </div>
                </div>
              </b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-collapse>
      </b-card>

    </dv>


  <confirmationdialog
      title="Confirm Delete"
      :showDialog="showConfirmationDialog"
      @click_yes="onClick_Dialog"
      @click_no="onClick_Dialog"
      @close="onClick_Dialog">
      <span>Are you sure ?</span>
  </confirmationdialog>


  </div>
</template>

<script>
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import confirmationdialog from './confirmationdialog'

export default defineComponent({
  name: 'HelloWorld',

  setup: () => ({ }),

  components: { confirmationdialog },

  props: {},

   data() {
        return {
            showConfirmationDialog: false,
            open: 1,
        }
    },


  computed: {
    PreparedDocuList(): any[] {
      const prepareddoculist: any[] = [];

      for (let i = 0; i < 3; i++) {
        const docu = {
          id: i,
          name: 'docu_' + i,
        };

        prepareddoculist.push(docu);
      }

      return prepareddoculist;
    },
  },

  methods: {
    onclick_clickme(){
      this.showConfirmationDialog = true
    },

    onClick_Dialog() {
        this.showConfirmationDialog = false;
    },


  },
});
</script>
