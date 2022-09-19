<template>
        <div class="div">
            <div>
                <p class="text-h2">
                    Conversor de Moedas
                </p>
            </div>
            <q-form class="form" @submit="converter">
                    <q-card-section horizontal class="row no-wrap q-pt-none">
                    <q-select
                        class="text-h5"
                        popup-content-class="text-h6"
                        label="Moeda a ser convertida"
                        color="blue-4"
                        bg-color="grey-2"
                        label-color="blue-7"
                        outlined
                        v-model="moedaA.moeda"
                        :options="optionsMoedas"
                        option-value="moeda"
                        option-label="moeda_nome"
                        map-options
                        emit-value
                        @update:model-value="atualizaPrefixo()"
                        :rules="[val => !!val || 'É necessário escolher uma moeda a ser convertida!']"
                    >
                        <template v-slot:prepend>
                            <q-avatar>
                                <img src="src/assets/images/money-bill-solid.svg" />
                            </q-avatar>
                        </template>
                        <template v-slot:option="scope">
                            <q-item v-bind="scope.itemProps">
                                <q-item-section avatar>
                                    <q-avatar>
                                        <img :src="scope.opt.bandeira_img" />
                                    </q-avatar>
                                </q-item-section>
                                 <q-item-section>
                                    <q-item-label>{{ scope.opt.moeda_nome }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </template>
                    </q-select>

                    <q-input
                        class="text-h5"
                        label="Valor para converter"
                        color="blue-7"
                        bg-color="grey-2"
                        label-color="blue-7"
                        outlined
                        v-model="moedaA.quantidade"
                        lazy-rules
                        mask="#.##"
                        fill-mask="0"
                        reverse-fill-mask
                        :prefix="moedaA.prefixo"
                        :rules="[val => !!val || 'É necessário informar um valor a ser convertido!']"
                    />

                    </q-card-section>

                    <q-card-section id="second_card" horizontal class="row no-wrap q-pt-none">
                    <q-select
                        class="text-h5"
                        popup-content-class="text-h6"
                        label="Moeda na qual será convertida"
                        color="green-6"
                        bg-color="grey-2"
                        label-color="green-6"
                        outlined
                        v-model="moedaB.moeda"
                        :options="optionsMoedas"
                        option-value="moeda"
                        option-label="moeda_nome"
                        map-options
                        emit-value
                        @update:model-value="atualizaPrefixo()"
                        :rules="[val => !!val || 'É necessário escolher uma moeda como base de conversão!']"
                    >
                        <template v-slot:prepend>
                            <q-avatar>
                                <img src="src/assets/images/money-bill-solid.svg" />
                            </q-avatar>
                        </template>
                        <template v-slot:option="scope">
                            <q-item v-bind="scope.itemProps">
                                <q-item-section avatar>
                                    <q-avatar>
                                        <img :src="scope.opt.bandeira_img" />
                                    </q-avatar>
                                </q-item-section>
                                 <q-item-section>
                                    <q-item-label>{{ scope.opt.moeda_nome }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </template>
                    </q-select>

                    <q-input
                        class="text-h5"
                        label="Valor convertido"
                        color="green-8"
                        bg-color="grey-4"
                        label-color="green-8"
                        outlined
                        :model-value="conversao"
                        @update:model-value="(value) => emit('update:conversao', value)"
                        readonly
                    />

                    </q-card-section>

                    <div class="btn">
                       <q-btn
                        label="Converter"
                        type="submit"
                        icon="img:https://cdn-icons-png.flaticon.com/512/150/150531.png"
                        stack
                        outline
                        style="color: goldenrod;"
                    />
                    </div>

            </q-form>
        </div>
</template>

<script type="module">
import { defineComponent, ref, defineEmits } from 'vue'
import { optionsMoedas } from './options'
import axios from 'axios'

export default defineComponent({
  name: 'PageConversor',
  setup () {
    const moedaA = ref({
      moeda: '',
      quantidade: '',
      pais_nome: '',
      bandeira_img: '',
      prefixo: ''
    })

    const moedaB = ref({
      moeda: '',
      quantidade: '',
      pais_nome: '',
      bandeira_img: '',
      prefixo: ''
    })
    defineEmits(['update:conversao'])
    const conversao = ref('0.00')

    const atualizaPrefixo = () => {
      const prefixoA = ref(optionsMoedas.find(data => data.moeda === moedaA.value.moeda))
      moedaA.value.prefixo = ref(prefixoA.value.prefixo)

      const prefixoB = ref(optionsMoedas.find(data => data.moeda === moedaB.value.moeda))
      moedaB.value.prefixo = ref(prefixoB.value.prefixo)
    }

    const converter = () => {
      const options = {
        method: 'GET',
        url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
        params: { format: 'json', from: `${moedaA.value.moeda}`, to: `${moedaB.value.moeda}`, amount: `${moedaA.value.quantidade}` },
        headers: {
          'X-RapidAPI-Key': 'b9630c8cb2msh7e8d035158731a1p1447d7jsn9c7de4047b29',
          'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
        }
      }

      let valorTratado = ''
      axios.request(options).then(function (response) {
        const valor = response.data.rates[`${moedaB.value.moeda}`].rate_for_amount
        valorTratado = parseFloat(valor).toFixed(2)
        conversao.value = moedaB.value.prefixo + ' ' + valorTratado
      }).catch(function (error) {
        console.error(error)
      })
    }

    return {
      moedaA,
      moedaB,
      optionsMoedas,
      conversao,
      converter,
      atualizaPrefixo
    }
  }
})
</script>

<style>
  .form {
    padding: 35px;
    height: 500px;
    width: 100%;
    font-family: 'Times New Roman', Times, serif;
  }
  .text-h5 {
    width: 100%;
  }

  .text-h2 {
    text-align: center;
    padding-top: 50px;
    font-family: 'seagram';
  }

  #second_card {
    margin-top: 20px;
  }

  .btn {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @font-face {
    font-family: seagram;
    src: url(public/font/Seagram_tfb.ttf);
  }
</style>
