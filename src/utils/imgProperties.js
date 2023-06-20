/*
  |============================
  | HOW TO USE
  |============================
*/
// 1. If you wanna responsive image - then value of property (width> height --> mobile, tablet, desktop) must be an empty string ('')
// 2. Path to image starts from public folder
// 3. Width and Height attributes must be in numerical format (example: TABLET: 499 <-- CORRECT;TABLET: '499px' <-- INCORRECT!)
export const imgProperties = {
  TRAININGS: {
    HERO: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/publicSpeaking.png',
          DESKTOP: '/images/trainingsPage/publicSpeakingDesktop.png',
        },
        ALTERNATIVETEXT: 'Психолог Юлія Сулаєва',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 499,
            DESKTOP: 633,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 676,
            DESKTOP: 804,
          },
        },
      },

      BACKGROUND: {
        PATH: '/images/trainingsPage/publicSpeakingBackground.svg',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 901,
            DESKTOP: '',
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 950,
            DESKTOP: '',
          },
        },
      },
    },
    CONFLICTOLOGY: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/conflictology.svg',
          DESKTOP: '/images/trainingsPage/conflictologyDesktop.svg',
        },
        ALTERNATIVETEXT: 'Дві дівчини розмовляють',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 580,
            DESKTOP: 592,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 303,
            DESKTOP: 360,
          },
        },
      },
      BACKGROUND: '',
    },
    STRESSRESISTANCE: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/stressResistance.svg',
          DESKTOP: '/images/trainingsPage/stressResistanceDesktop.svg',
        },
        ALTERNATIVETEXT: 'Чоловік, який балансує на годиннику',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 377,
            DESKTOP: 592,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 356,
            DESKTOP: 456,
          },
        },
      },

      BACKGROUND: '',
    },
    SELFHELP: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/selfHelp.svg',
          DESKTOP: '/images/trainingsPage/selfHelpDesktop.svg',
        },
        ALTERNATIVETEXT: 'Дівчина з піднятою рукою до гори',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 486,
            DESKTOP: 592,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 374,
            DESKTOP: 581.49,
          },
        },
      },

      BACKGROUND: '/images/trainingsPage/selfHelpBackground.svg',
    },
    EDUCATIONWITHLOVE: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/educationWithLove.svg',
          DESKTOP: '/images/trainingsPage/educationWithLoveDesktop.svg',
        },
        ALTERNATIVETEXT: 'Батько з дитиною',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 542,
            DESKTOP: 592,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 369,
            DESKTOP: 396,
          },
        },
      },

      BACKGROUND: '',
    },
    TIMEMANAGEMENT: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/timeManagement.svg',
          DESKTOP: '/images/trainingsPage/timeManagementDesktop.svg',
        },
        ALTERNATIVETEXT: 'Хлопець на горі дивиться в далечінь',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 548,
            DESKTOP: 592,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 360,
            DESKTOP: 348,
          },
        },
      },

      BACKGROUND: '',
    },
    STRONGSIDES: {
      IMAGE: {
        PATH: {
          MOBILE: '/images/trainingsPage/strongSides.svg',
          DESKTOP: '/images/trainingsPage/strongSidesDesktop.svg',
        },
        ALTERNATIVETEXT: 'Дівчина з ідеями за ноутбуком',
        SIZES: {
          WIDTH: {
            MOBILE: '',
            TABLET: 432,
            DESKTOP: 416,
          },
          HEIGHT: {
            MOBILE: '',
            TABLET: 340,
            DESKTOP: 271,
          },
        },
      },
      BACKGROUND: '',
    },
  },
};

Object.freeze(imgProperties);
