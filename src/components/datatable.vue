<template>
  <DataTable :value="data" class="p-datatable-gridlines">
    <Column field="title" header="Title"></Column>
    <Column field="pages" header="Pages"></Column>
    <Column field="meta_description" header="Meta Description"></Column>
  </DataTable>
</template>

<script setup>
import { defineProps } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

//Se utiliza un  props para recibir la propiedad data, de tipo Array obligatoria
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
