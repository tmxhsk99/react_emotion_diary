import emotion1 from "./assets/img/emotion1.png";
import emotion2 from "./assets/img/emotion2.png";
import emotion3 from "./assets/img/emotion3.png";
import emotion4 from "./assets/img/emotion4.png";
import emotion5 from "./assets/img/emotion5.png";
import emotion1on from "./assets/img/emotion1_on.gif";
import emotion2on from "./assets/img/emotion2_on.gif";
import emotion3on from "./assets/img/emotion3_on.gif";
import emotion4on from "./assets/img/emotion4_on.gif";
import emotion5on from "./assets/img/emotion5_on.gif";
export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId) {
        case "1":
            return emotion1;
        case "2":
            return emotion2;
        case "3":
            return emotion3;
        case "4":
            return emotion4;
        case "5":
            return emotion5;
        default:
            return null;

    }
}
export const getEmotionClickedImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId) {
        case "1":
            return emotion1on;
        case "2":
            return emotion2on;
        case "3":
            return emotion3on;
        case "4":
            return emotion4on;
        case "5":
            return emotion5on;
        default:
            return null;

    }
}


export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
}

export const emotionList = [
    {
        id:1,
        name: "완전 좋음",
        img: getEmotionImgById(1),
        imgOn: getEmotionClickedImgById(1)
    },
    {
        id:2,
        name: "좋음",
        img: getEmotionImgById(2),
        imgOn: getEmotionClickedImgById(2)
    },
    {
        id:3,
        name: "그럭저럭",
        img: getEmotionImgById(3),
        imgOn: getEmotionClickedImgById(3)
    },
    {
        id:4,
        name: "나쁨",
        img: getEmotionImgById(4),
        imgOn: getEmotionClickedImgById(4)
    },
    {
        id: 5,
        name: "끔찍함",
        img: getEmotionImgById(5),
        imgOn: getEmotionClickedImgById(5)
    },
]