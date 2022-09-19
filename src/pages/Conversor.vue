<template>
        <div class="div">
            <div>
                <p class="text-h2">
                    Conversor de Moedas
                </p>
            </div>
            <div class="imagem_moeda">
              <img src="https://cdn-icons-png.flaticon.com/512/2523/2523042.png" alt="">
            </div>
            <q-form class="form" @submit="converter">
                    <q-card-section horizontal class="row no-wrap q-pt-none">
                    <q-select
                        class="text-h5"
                        popup-content-class="text-h6"
                        label="Moeda a ser convertida"
                        color="blue-7"
                        bg-color="grey-2"
                        label-color="blue-7"
                        outlined
                        v-model="moedaA.moeda"
                        :options="optionsMoedas"
                        option-value="moeda"
                        option-label="moeda_nome"
                        map-options
                        emit-value
                        @update:model-value="atualizaPrefixoA()"
                        :rules="[val => !!val || 'É necessário escolher uma moeda a ser convertida!']"
                    >
                        <template v-slot:prepend>
                            <q-avatar>
                                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382625.png" />
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
                        @update:model-value="atualizaPrefixoB()"
                        :rules="[val => !!val || 'É necessário escolher uma moeda como base de conversão!']"
                    >
                        <template v-slot:prepend>
                            <q-avatar>
                                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382625.png" />
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

                    <q-card-section id="terceiro" horizontal class="row no-wrap q-pt-none">
                    <div class="ue">
                      <b>União Europeia</b>: Alemanha, Áustria, Bélgica, Bulgária*, Chipre, Croácia*, Dinamarca*, Eslováquia, Eslovénia, Espanha, Estónia, Finlândia,
                      França, Grécia, Hungria*, Irlanda, Itália, Letônia, Lituânia, Luxemburgo, Malta, Países Baixos (Holanda), Polônia*, Portugal, Reṕública Tcheca*, Romênia* e Suécia*.
                      <br>
                      <br>
                      * = País não pertencente à zona do Euro
                      <img id="ue_img" src="https://cdn-icons-png.flaticon.com/512/197/197615.png">
                    </div>
                    <div class="uk">
                      <b>Reino Unido</b>: Escócia, Inglaterra, Irlanda do Norte e País de Gales.
                      <br>
                      <br>
                      <b>Territórios que não pertencem ao Reino Unido, mas usam a libra esterlina:</b> Anguilla, Bermudas, Geórgia do Sul, Gibraltar,
                      Ilhas Cayman, Ilhas Malvinas, Ilhas Pitcairn, Ilhas Virgens Britânicas, Monte Serrat e Santa Helena.
                      <img id="uk_img" src="https://cdn-icons-png.flaticon.com/512/197/197374.png">
                    </div>
                    </q-card-section>
            </q-form>
        </div>
</template>

<script type="module">
import { defineComponent, ref, defineEmits } from 'vue'
import { optionsMoedas } from './options'
import useNotify from 'src/composables/UseNotify'
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

    const { notifyError, notifySuccess } = useNotify()

    defineEmits(['update:conversao'])
    const conversao = ref('0.00')

    const atualizaPrefixoA = () => {
      const prefixoA = ref(optionsMoedas.find(data => data.moeda === moedaA.value.moeda))
      moedaA.value.prefixo = ref(prefixoA.value.prefixo)
    }

    const atualizaPrefixoB = () => {
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

      console.log('entrou aqui')
      let valorTratado = ''
      axios.request(options).then(function (response) {
        console.log('entrou aqui')
        const valor = response.data.rates[`${moedaB.value.moeda}`].rate_for_amount
        notifySuccess('Conversão realizada com sucesso!')
        valorTratado = parseFloat(valor).toFixed(2)
        conversao.value = moedaB.value.prefixo + ' ' + valorTratado
      }).catch(function (error) {
        console.error(error)
        notifyError('Um erro ocorreu ao converter a moeda selecionada!')
      })
    }

    return {
      moedaA,
      moedaB,
      optionsMoedas,
      conversao,
      converter,
      atualizaPrefixoA,
      atualizaPrefixoB
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

  .imagem_moeda {
    margin: auto;
    display: block;
    max-height: 150px;
    max-width: 150px;
    width: auto;
    height: auto;
  }

  #terceiro {
    padding: 35px;
  }

  .ue {
    width: 100%;
    font-size: 1.3em;
  }
  .uk {
    width: 100%;
    font-size: 1.3em;
    padding-left: 60px;
  }

  #ue_img {
    padding-top: 20px;
    margin: auto;
    display: block;
    max-height: 100px;
    max-width: 100px;
    width: auto;
    height: auto;
  }

  #uk_img {
    padding-top: 20px;
    margin: auto;
    display: block;
    max-height: 100px;
    max-width: 100px;
    width: auto;
    height: auto;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  /* html, body {
 overflow: hidden;
} */

  @font-face {
    font-family: seagram;
    src: url(http://truefonts.blogspot.com/2012/12/seagram-font.html);
  }
</style>
