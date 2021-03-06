import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          English: "English",
          Vietnamese: "Vietnamese",
          Back: "Back",
          Replay: "Replay",
          Language: "Language",
          Level: "Level",
          Welcome: "Welcome",
          Congratulations: "Congratulations",
          "The fastest is best": "The fastest is best",
          "The longest is best": "The longest is best",
          "Your score": "Your score",
          "Your time": "Your time",
          "Remaining time": "Remaining time",
          "Top players": "Top players",
          "Single player": "Single player",
          "Multi player": "Multi player",
          "Main menu": "Main menu",
          "Speed mode": "Speed mode",
          "Survival mode": "Survival mode",
          "Coming soon...": "Coming soon...",
          "Scroll down to play": "Scroll down to play",
          "Scroll down to chat": "Scroll down to chat",
          "Preparing resource...": "Preparing resource...",
          "Please complete all levels as fast as you can":
            "Please complete all levels as fast as you can",
          "Try your best not to run out of time as long as possible.":
            "Try your best not to run out of time as long as possible",
          "Your time will increase when you match a pair of pokemon":
            "Your time will increase when you match a pair of pokemon",
          "Choosing the wrong pair will increase the time":
            "Choosing the wrong pair will increase the time",
          "Choosing the wrong pair will decrease the time":
            "Choosing the wrong pair will decrease the time",
          "Accept alphabet and digit only.":
            "Accept alphabet, digits and space only.",
          "Please enter your name": "Please enter your name",
          "Enter your name here": "Enter your name here",
          "Make your own ranking": "Make your own ranking",
          "Make match": "Make match",
          "Find random match": "Find random match",
          "Enter your message here...": "Enter your message here...",
        },
      },
      vi: {
        translation: {
          English: "Ti???ng Anh",
          Vietnamese: "Ti???ng Vi???t",
          Back: "Quay v???",
          Replay: "Ch??i l???i",
          Language: "Ng??n ng???",
          Level: "C???p ?????",
          Welcome: "Ch??o b???n",
          Congratulations: "Xin ch??c m???ng",
          "The fastest is best": "Ho??n th??nh c??ng s???m, th??? h???ng c??ng cao",
          "The longest is best":
            "K??o d??i th???i gian c??ng l??u, th??? h???ng c??ng cao",
          "Your score": "??i???m s??? c???a b???n",
          "Your time": "Th???i gian c???a b???n",
          "Remaining time": "Th???i gian c??n l???i",
          "Top players": "Danh s??ch ng?????i ch??i h??ng ?????u",
          "Single player": "C?? nh??n",
          "Multi player": "?????i kh??ng",
          "Main menu": "M??n h??nh ch??nh",
          "Speed mode": "T???c ?????",
          "Survival mode": "Sinh t???n",
          "Coming soon...": "??ang ph??t tri???n...",
          "Preparing resource...": "??ang chu???n b???...",
          "Scroll down to play": "L??n chu???t xu???ng ????? ch??i",
          "Scroll down to chat": "L??n chu???t xu???ng ????? nh???n tin",
          "Please complete all levels as fast as you can":
            "H??y ho??n th??nh t???t c??? c???p ????? nhanh nh???t c?? th??? ",
          "Try your best not to run out of time as long as possible":
            "C??? g???ng h???t s???c ????? kh??ng h???t th???i gian l??u nh???t c?? th???",
          "Your time will increase when you match a pair of pokemon":
            "Th???i gian c???a b???n s??? t??ng th??m khi ch???n kh???p m???t c???p pokemon",
          "Choosing the wrong pair will increase the time":
            "Ch???n sai c???p s??? b??? t??ng th??m th???i gian",
          "Choosing the wrong pair will decrease the time":
            "Ch???n sai c???p s??? b??? gi???m th???i gian",
          "Accept alphabet and digit only.":
            "Ch??? ch???p nh???n ch??? c??i, ch??? s??? v?? k?? t??? tr???ng.",
          "Please enter your name": "H??y nh???p t??n c???a b???n",
          "Enter your name here": "Nh???p t??n b???n t???i ????y",
          "Make your own ranking": "T???o x???p h???ng c???a b???n",
          "Make match": "T???o tr???n ?????u",
          "Find random match": "T??m tr???n ng???u nhi??n",
          "Enter your message here...": "Nh???p tin nh???n t???i ????y...",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
