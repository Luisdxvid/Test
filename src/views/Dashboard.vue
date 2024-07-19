<template>
  <div class="card" style="height: 80vh">
    <h2 class="inicio">Inicio</h2>

    <!-- Mostrar los datos si estan disponibles -->

    <div
      v-if="nombre && apellido"
      class="data-display flex justify-content-center align-items-center font-bold sm:font-semibold text-xl"
    >
      <p>Hola {{ nombre }} {{ apellido }}</p>
    </div>

    <!-- Mostrar boton de form si los datos no han sido enviados -->
    <div class="primaryboton flex justify-content-center align-items-center">
      <Boton v-if="!datosEnviados" @mostrar-formulario="mostrarFormulario" />
    </div>

    <!-- Mostrar el formulario en caso de ser visible -->
    <PopupForm
      v-if="formularioVisible"
      :mostrar="formularioVisible"
      @cerrar-formulario="cerrarFormulario"
      @submit-form="submitForm"
    />
  </div>
</template>

<script>
// Importacion del componente
import { defineComponent } from "vue";
import Boton from "../components/button.vue";
import PopupForm from "../components/popup-form.vue";

export default defineComponent({
  components: {
    Boton,
    PopupForm,
  },

  // Se retorna un objeto
  data() {
    return {
      nombre: "",
      apellido: "",
      formularioVisible: false,
      datosEnviados: false,
    };
  },

  // Metodos del componente para mostrar, cerrar o enviar formulario
  methods: {
    mostrarFormulario() {
      console.log("Metodo mostrar formulario ejecutado exitosamente");
      this.formularioVisible = true;
    },
    cerrarFormulario() {
      this.formularioVisible = false;
    },
    submitForm({ nombre, apellido }) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.datosEnviados = true;
      this.cerrarFormulario();
    },
  },
});
</script>

<style scoped>
@import "primeflex/primeflex.css";

@media only screen and (max-width: 768px) {
  .primaryboton {
    height: 50vh;
  }
}
.primaryboton {
  margin-top: 20%;
}

.data-display {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
