import { Globalize } from 'react-easy-intl'

const messages = {
    en: {
      'Brand': 'The Loyal Dog',
      'About Us': 'About Us',
      'Our Dogs' : 'Our Dogs',
      'Litters': 'Litters',
      'Gallery': 'Gallery',
      'Breed Standards': 'Breed Standards',

    },
    
    lt: {
      'Brand': 'Ištikimas šuo',
      'I have #qty books.': 'Eu {qty, plural, =0{não tenho nenhum livro} one{tenho 1 livro} other{tenho # livros} }.'
    },

    ru: {

    }
  }
   
  Globalize.setMessages(messages)
  Globalize.setLocale('en')
