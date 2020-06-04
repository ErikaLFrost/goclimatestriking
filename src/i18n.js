import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-GB': {
    translation: {
      words: {
        student: 'Student',
        parent: 'Parent',
        next: 'Next',
        send: 'Send',
        or: 'or',
        firstAndlastName: 'Name',
        email: 'Email',
        yourName: 'Your name',
        yourChildsName: 'Your childs name',
        city: 'Skolort',
        school: 'School',
        class: 'Class',
        subject: 'Subject',
        to: 'To',
        chooseArea: 'Choose area first',
        noDataSaved: '(We do not save your data)',
        login: 'Log in',
        skipLogin: "I don't have Twitter",
      },
      home: {
        seal: 'An absence app from Fridays For Future',

        text:
          'This is the service that makes it simple to school strike for the climate.',
        comingSoon: 'Coming soon. Keep your eyes peeled.',
        button: 'Register absence',
        bottomMessage:
          "We're watering the flowers and building the app. Welcome back in a few days.",
      },
      share: {
        url: 'https://www.goclimatestriking.com',
        message: {
          parent: {
            sendCopy:
              'I support the school strike for the climate and have informed my childs absence to their school and our politicians.',
            notSendCopy:
              'I support the school strike for the climate and have informed my childs absence to their school.',
          },
          student: {
            sendCopy:
              'I will be participating in the school strike for the climate and have informed my school and our politicians of my absence.',
            notSendCopy:
              'I will be participating in the school strike for the climate and have informed my school of my absence.',
          },
        },
        strikeUrl: 'https://fridaysforfuture.org/events/map',
      },
      hello: {
        title: 'Hello!',
        titleLoggedIn: 'Hello {{name}}!',
        titleReady: 'Okey-Dokey!',
        changedMind: 'I changed my mind. I would like to use my own Twitter.',
        text:
          'Please login with Twitter so that we can send a tweet on your behalf. Not using Twitter? You can borrow ours.',
        textLoggedIn:
          'Great! Looks like your ready to go. Please make a selection below.',
      },
      parentOrStudent: {
        title: 'Who are you?',
        titleLoggedIn: 'So {{name}}, who are you?',
        text:
          'This service is made for students, but can also be used by parents who want to support their childs participation in a climate strike.',
      },
      parentInfo: {
        title: "What's your name?",
        text:
          'För att vi ska kunna rapportera in ditt barns frånvaro behöver vi ha dina kontaktuppgifter.',
      },
      studentInfo: {
        student: {
          title: 'Who are you?',
          text:
            'To send the tweet in the right direction, we need some information.',
        },
        parent: {
          title: "What's your childs name?",
          text:
            'To send the tweet in the right direction, we need some information about your child.',
        },
      },
      selectDay: {
        title: 'Choose date to strike!',
        text: {
          parent:
            'On what dates will your child strike? You can choose one or multiple below. The calendar is updated continuously.',
          student:
            'On what dates will you strike? You can choose one or multiple below. The calendar is updated continuously.',
        },
        date: 'Oktober 2019',
        months: {
          '0': 'January',
          '1': 'February',
          '2': 'March',
          '3': 'April',
          '4': 'May',
          '5': 'June',
          '6': 'July',
          '7': 'August',
          '8': 'September',
          '9': 'October',
          '10': 'November',
          '11': 'December',
        },
        info: {
          title: 'Strike info',
          text:
            'Go on strike at your closest town hall or a central space. Bring a sign, take a photo and share.',
        },
      },
      preview: {
        student: {
          title: 'Preview',
          text: 'Check it out. This is how the tweet will look.',
          message:
            "On the {{- date}}, I will participate in the global strike for the climate, because the climate can't wait. - {{fullname}} from {{country}} #fridaysforfuture #goclimatestriking",
          greetings: 'Eco friendly greetings, ',
          sendCopy:
            'Ja, skicka en kopia till Miljöministern och Utbildningsministern',
        },
        parent: {
          title: 'Preview',
          text: 'Kolla, så här kommer frånvaromeddelandet att se ut.',
          message:
            "On the {{- date}}, I support {{fullname}} to participate in the global strike for the climate, because the climate can't wait. #fridaysforfuture #goclimatestriking",
          greetings: 'Eco friendly greetings, ',
          sendCopy:
            'Ja, skicka en kopia till Miljöministern och Utbildningsministern',
        },
      },
      thanks: {
        title: 'Tack för att du bryr dig om klimatet!',
        textSendCopy:
          'Snyggt jobbat! Ett meddelande har skickats till {{school}} och berörda politiker. En kopia skickas till din inbox.',
        textNotSendCopy:
          'Snyggt jobbat! Ett meddelande har skickats till {{school}}. En kopia skickas till din inbox.',
        share: 'Sprid ordet till andra',
        map: 'Here you can find the climate strike closest to you',
        social:
          "Pst! Don't forget to check in at the event. Take a picture and tag it on social media, #fridaysforfuture #goclimatestriking.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-GB',
});

export default i18n;
