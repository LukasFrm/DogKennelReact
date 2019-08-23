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
    },

    ru: {

    }
  }
   
  Globalize.setMessages(messages)
  Globalize.setLocale('en')
