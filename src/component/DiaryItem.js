import "./DiaryItem.css";
import {useNavigate} from "react-router-dom";
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
                    {new Date(parseInt(date)).toLocaleDateString()}
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

export default DiaryItem;