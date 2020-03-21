<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-date-picker
            v-model="fecha"
            full-width
            color="error"
            dark
            locale="es-co"
            :max="maximo"
            :min="minimo"
            @change="getDolar(fecha)"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">{{valor}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      fecha: new Date().toISOString().substr(0, 10),
      maximo: new Date().toISOString().substr(0, 10),
      minimo: "1984",
      valor: null
    };
  },
  methods: {
    async getDolar(dia) {
      try {
        let ddmmyy = dia
          .split("-")
          .reverse()
          .join("-");
        let datos = await axios.get(
          `https://mindicador.cl/api/dolar/${ddmmyy}`
        );
        if (datos.data.serie.length > 0) {
          this.valor = await datos.data.serie[0].valor;
        }else{
          this.valor = 'Sin Resultado'
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getDolar(this.fecha);
  }
};
</script>
