<script>
import { defineComponent } from "vue";
import Button from "primevue/button";

export default defineComponent({
  //Usabilidad del componente Button
  components: { Button },
  //Metodos del componente
  methods: {
    //Este metodo se ejecuta cuando se da clic en el boton
    mostrarFormulario() {
      //Mensaje en consola para verificacion
      console.log("Botón clicado, emitirá evento mostrar-formulario");
      //Evento para mostrar formulario
      this.$emit("mostrar-formulario");
    },
  },
});
</script>

<template>
  <div class="">
    <Button @click="mostrarFormulario" class="text-sm" label="Mostrar" />
  </div>
</template>
