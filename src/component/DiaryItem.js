import "./DiaryItem.css";
import {useNavigate} from "react-router-dom";
import React from "react";
import {emotionList, getEmotionImgById} from "../util";
import Button from "../component/Button";

const DiaryItem = ({id, emotionId, content, date}) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    }
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    return (
        <div className="DiaryItem">
            <div
                onClick={goDetail}
                className={["img-section", `img-section-${emotionId}`].join(" ")}
            >
                <div className="img-wrapper">
                    <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)}/>
                    <span>
                        {
                            emotionList.map((em) => {
                                    if (em.id === emotionId) {
                                        return em.name;
                                    }
                                }
                            )
                        }
                    </span>
                </div>
            </div>
            <div onClick={goDetail} className="info-section">
                <div className="date-wrapper">
                    {new Date(parseInt(date)).toLocaleString('ko-KR', dateOptions)}
                </div>
                <div className="content-wrapper">
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className="button-section">
                <Button onClick={goEdit} text={"수정하기"}/>
            </div>
        </div>
    );
}
export default React.memo(DiaryItem) ;