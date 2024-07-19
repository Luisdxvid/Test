<template>
  <Dialog
    header="Información"
    :visible="mostrar"
    modal
    @hide="cerrarFormulario"
  >
    <form @submit.prevent="handleSubmit">
      <div class="p-fluid mt-2">
        <div class="field mt-2">
          <div class="mb-4 font-bold">
            <!-- <label for="">Por favor introduzca sus datos:</label> -->
            <p>Por favor introduzca sus datos:</p>
          </div>
          <InputText
            placeholder="Nombre"
            id="nombre"
            v-model="FormData.nombre"
            required
          />
        </div>
        <div class="mt-4 field">
          <InputText
            placeholder="Apellido"
            id="apellido"
            v-model="FormData.apellido"
            required
          />
        </div>
        <div class="grid between mt-4">
          <div class="col-6 md-6">
            <div class="field">
              <InputText
                placeholder="Ciudad"
                id="ciudad"
                v-model="FormData.ciudad"
                required
              />
            </div>
          </div>
          <div class="col-6 md-6">
            <div class="field">
              <InputText
                placeholder="Pais"
                id="pais"
                v-model="FormData.pais"
                required
              />
            </div>
          </div>
        </div>

        <div class="flex justify-content-center flex-wrap mt-2">
          <div class="flex-1 flex px-7 py-2 border-round">
            <Button
              label="Cancelar"
              icon="pi pi-times"
              class="p-button-secondary"
              @click="cerrarFormulario"
            />
          </div>
          <div class="flex-1 flex px-7 py-2 border-round">
            <Button label="Aceptar" icon="pi pi-check" type="submit" />
          </div>
        </div>
      </div>
    </form>
  </Dialog>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default defineComponent({
  components: { Dialog, InputText, Button },
  props: {
    mostrar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      FormData: {
        nombre: "",
        apellido: "",
        ciudad: "",
        pais: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit-form", {
        nombre: this.FormData.nombre,
        apellido: this.FormData.apellido,
        ciudad: this.FormData.ciudad,
        pais: this.FormData.pais,
      });
    },

    cerrarFormulario() {
      this.$emit("cerrar-formulario");
    },
  },
});
</script>

<style scoped>
@import "primeflex/primeflex.css";
</style>
