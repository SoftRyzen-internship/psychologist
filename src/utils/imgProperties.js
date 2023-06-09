/*
  |============================
  | HOW TO USE
  |============================
*/
// 1. If you wanna responsive image - then value of property (width> height --> mobile, tablet, desktop) must be an empty string ('')
// Path to image starts from public folder
export const imgProperties = {
  TRAININGS: {
    HERO: {
      IMAGE: {
        PATH: '/images/trainingsPage/publicSpeaking.png',
        ALTERNATIVETEXT: 'Психолог Юлія Сулаєва',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '499px',
            DESKTOP: '633px',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '676px',
            DESKTOP: '804px',
          },
        },
      },

      BACKGROUND: {
        PATH: '/images/trainingsPage/publicSpeakingBackground.svg',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '901px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '950px',
            DESKTOP: '',
          },
        },
      },
    },
    CONFLICTOLOGY: {
      IMAGE: {
        PATH: '/images/trainingsPage/conflictology.svg',
        ALTERNATIVETEXT: 'Дві дівчини розмовляють',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '580px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '303px',
            DESKTOP: '',
          },
        },
      },
      BACKGROUND: '',
    },
    STRESSRESISTANCE: {
      IMAGE: {
        PATH: '/images/trainingsPage/stressResistance.svg',
        ALTERNATIVETEXT: 'Чоловік, який балансує на годиннику',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '377px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '356px',
            DESKTOP: '',
          },
        },
      },

      BACKGROUND: '',
    },
    SELFHELP: {
      IMAGE: {
        PATH: '/images/trainingsPage/selfHelp.svg',
        ALTERNATIVETEXT: 'Дівчина з піднятою рукою до гори',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '486px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '374px',
            DESKTOP: '',
          },
        },
      },

      BACKGROUND: '/images/trainingsPage/selfHelpBackground.svg',
    },
    EDUCATIONWITHLOVE: {
      IMAGE: {
        PATH: '/images/trainingsPage/educationWithLove.svg',
        ALTERNATIVETEXT: 'Батько з дитиною',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '542px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '369px',
            DESKTOP: '',
          },
        },
      },

      BACKGROUND: '',
    },
    TIMEMANAGEMENT: {
      IMAGE: {
        PATH: '/images/trainingsPage/timeManagement.svg',
        ALTERNATIVETEXT: 'Хлопець на горі дивиться в далечінь',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '548px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '360px',
            DESKTOP: '',
          },
        },
      },

      BACKGROUND: '',
    },
    STRONGSIDES: {
      IMAGE: {
        PATH: '/images/trainingsPage/strongSides.svg',
        ALTERNATIVETEXT: 'Дівчина з ідеями за ноутбуком',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: '432px',
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: '340px',
            DESKTOP: '',
          },
        },
      },
      BACKGROUND: '',
    },
  },
  SEE_FAR_CBT: 'education',
  NEWS: 'news',
};

Object.freeze(imgProperties);
