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
        characterName: "퀵 맨",
        characterScript: "완전 좋아!!!",
        img: getEmotionImgById(1),
        imgOn: getEmotionClickedImgById(1)
    },
    {
        id:2,
        name: "좋음",
        characterName: "히트맨",
        characterScript: "좋다 좋아! 불타오른다!!",
        img: getEmotionImgById(2),
        imgOn: getEmotionClickedImgById(2)
    },
    {
        id:3,
        name: "그럭저럭",
        characterName: "에어맨",
        characterScript: "흠...그럭저럭이군...",
        img: getEmotionImgById(3),
        imgOn: getEmotionClickedImgById(3)
    },
    {
        id:4,
        name: "나쁨",
        characterName: "플래시맨",
        characterScript: "기분이 나쁘다!!!",
        img: getEmotionImgById(4),
        imgOn: getEmotionClickedImgById(4)
    },
    {
        id: 5,
        name: "끔찍함",
        characterName: "우드맨",
        characterScript: "기분이 끔찍히 나쁘다!!!!",
        img: getEmotionImgById(5),
        imgOn: getEmotionClickedImgById(5)
    },
]
/**
 * 해당 월의 시작과 끝을 나타내는 타임스탬프를 반환한다.
 * @param date
 * @returns {{endTimeStamp: number, beginTimeStamp: number}}
 */
export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const endTimeStamp = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();
    return {beginTimeStamp, endTimeStamp};
};

export const setPageTitle = (title) => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = title;
}

export const convertToISO8601 = (year, month, day, hours, minutes, seconds) => {
    // 월은 0부터 시작하므로 1을 빼줍니다.
    month -= 1;

    // Date 객체를 생성하여 입력된 년, 월, 일, 시간, 분, 초 값을 기반으로 설정합니다.
    var date = new Date(year, month, day, hours, minutes, seconds);

    // Date 객체를 ISO 8601 형식의 문자열로 변환합니다.
    var iso8601String = date.toISOString();

    return iso8601String;
}

const YYYYMMddRegex = /^\d{4}-\d{2}-\d{2}$/;
/**
 * YYYY-MM-dd 형식의 문자열을 현재 시간을 붙여서 계산 가능한 타임스탬프값으로 파싱하는 함수
 * @param date
 * @returns {*}
 */
export const dateStringToCalcTimeStamp = (date)  =>{
    if(YYYYMMddRegex.test(date)){
        const currentDate = new Date();
        const dateArr = date.split("-");
        const dateTimeString = convertToISO8601(dateArr[0], dateArr[1], dateArr[2], currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        return new Date(dateTimeString);
    }
    return date;
}