<template>
  <div class="card">
    <h2>Datos</h2>
    <DataTableComponent :data="data" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ApiService from "../service/ApiService.ts";
import DataTableComponent from "../components/datatable.vue";

const data = ref([]); // Estado reactivo para los datos
const apiService = new ApiService(); //Creacion de estancia del servicio de la API

onMounted(async () => {
  try {
    //Se llama a la API para cargar datos
    const response = await apiService.loadData();
    console.log("API Response:", response); // Verifica los datos en la consola
    data.value = response; // Asigna los datos al estado reactivo
  } catch (error) {
    console.error("Error loading data:", error); //En caso de error al llamar dicha API
  }
});
</script>

<style scoped>
.card {
  margin: 2rem;
}
</style>
