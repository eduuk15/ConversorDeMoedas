const optionsMoedas = [
  { moeda: 'BRL', moeda_nome: 'Real (BRL)', pais_nome: 'Brasil', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197386.png', prefixo: 'R$' },
  { moeda: 'USD', moeda_nome: 'Dólar Americano (USD)', pais_nome: 'Estados Unidos', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197484.png', prefixo: '$' },
  { moeda: 'AFN', moeda_nome: 'Afegane afegão (AFN)', pais_nome: 'Afeganistão', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197515.png', prefixo: '؋' },
  { moeda: 'ZAR', moeda_nome: 'Rand sul-africano (ZAR)', pais_nome: 'África do Sul', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197562.png', prefixo: 'R' },
  { moeda: 'ALL', moeda_nome: 'Lek albanês (ALL)', pais_nome: 'Albânia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/3909/3909330.png', prefixo: 'L' },
  { moeda: 'EUR', moeda_nome: 'Euro (EUR)', pais_nome: 'União Européia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197615.png', prefixo: '€' },
  { moeda: 'AOA', moeda_nome: 'Kwanza angolano (AOA)', pais_nome: 'Angola', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197513.png', prefixo: 'Kz' },
  { moeda: 'SAR', moeda_nome: 'Rial saudita', pais_nome: 'Árabia Saudita', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/5111/5111777.png', prefixo: 'ر.س' },
  { moeda: 'DZD', moeda_nome: 'Dinar argelino', pais_nome: 'Argélia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197511.png', prefixo: 'د.ج' },
  { moeda: 'ARS', moeda_nome: 'Peso argentino', pais_nome: 'Argentina', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197573.png', prefixo: '$' },
  { moeda: 'AMD', moeda_nome: 'Dram arménio', pais_nome: 'Armênia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197516.png', prefixo: '֏' },
  { moeda: 'AUD', moeda_nome: 'Dólar australiano', pais_nome: 'Austrália', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/323/323367.png', prefixo: '$' },
  { moeda: 'BOB', moeda_nome: 'Boliviano', pais_nome: 'Bolívia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197504.png', prefixo: 'Bs.' },
  { moeda: 'BAM', moeda_nome: 'Marco convertível da Bósnia e Herzegovina', pais_nome: 'Bósnia e Herzegovina', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/5922/5922070.png', prefixo: 'KM' },
  { moeda: 'BGN', moeda_nome: 'Lev búlgaro', pais_nome: 'Bulgária', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197502.png', prefixo: 'лв' },
  { moeda: 'XAF', moeda_nome: 'Franco CFA BEAC', pais_nome: 'Camarões', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197531.png', prefixo: 'Fr' },
  { moeda: 'QAR', moeda_nome: 'Rial catarense', pais_nome: 'Catar', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197618.png', prefixo: 'ر.ق' },
  { moeda: 'CZK', moeda_nome: 'Coroa checa', pais_nome: 'República Tcheca', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/5959/5959221.png', prefixo: 'Kč' },
  { moeda: 'CLP', moeda_nome: 'Pesco chileno', pais_nome: 'Chile', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197586.png', prefixo: '$' },
  { moeda: 'CNY', moeda_nome: 'Iuane chinês', pais_nome: 'China', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197375.png', prefixo: '¥' },
  { moeda: 'COP', moeda_nome: 'Peso colombiano', pais_nome: 'Colômbia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197575.png', prefixo: '$' },
  { moeda: 'KPW', moeda_nome: 'Won norte-coreano', pais_nome: 'Coréia do Norte', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197600.png', prefixo: '₩' },
  { moeda: 'KRW', moeda_nome: 'Won sul-coreano', pais_nome: 'Coréia do Sul', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197582.png', prefixo: '₩' },
  { moeda: 'CRC', moeda_nome: 'Colón costarriquenho', pais_nome: 'Costa Rica', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197506.png', prefixo: '₡' },
  { moeda: 'DKK', moeda_nome: 'Coroa dinamarquesa', pais_nome: 'Dinamarca', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197565.png', prefixo: 'kr' },
  { moeda: 'EGP', moeda_nome: 'Libra egípcia', pais_nome: 'Egito', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197558.png', prefixo: 'ج.م' },
  { moeda: 'AED', moeda_nome: 'Dirame dos Emirados Árabes Unidos', pais_nome: 'Emirados Árabes Unidos', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/323/323301.png', prefixo: 'د.إ' },
  { moeda: 'PHP', moeda_nome: 'Peso filipino', pais_nome: 'Filipinas', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/323/323301.png', prefixo: '₱' },
  { moeda: 'HTG', moeda_nome: 'Gurde haitiano', pais_nome: 'Haiti', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197389.png', prefixo: 'G' },
  { moeda: 'HKD', moeda_nome: 'Dólar de Honguecongue', pais_nome: 'Honguecongue', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197570.png', prefixo: '$' },
  { moeda: 'INR', moeda_nome: 'Rupia indiana', pais_nome: 'Índia', bandeira_img: 'https://cdn-icons-png.flaticon.com/512/197/197419.png', prefixo: '₹' }

]

export {
  optionsMoedas
}
