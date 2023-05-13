import "./Viewer.css";
import {emotionList} from "../util";

const Viewer = ({content, emotionId}) => {
    const emotionItem = emotionList.find((it) => it.id === emotionId);
    return (
        <div className="Viewer nes-container">
            <section>
                <div className="nes-container is-dark black-description-box">오늘의 감정은 어땠나요?</div>
                <div
                    className={[
                        "nes-container is-centered emotion-img-wrapper",
                        `emotion-img-wrapper-${emotionId}`,
                    ].join(" ")}>
                    <img alt={emotionItem.name} src={emotionItem.imgOn}/>
                </div>
                <div className="nes-container is-dark with-title black-description-box">
                    <p className="title">{emotionItem.characterName}</p>
                    {emotionItem.characterScript}
                </div>
            </section>
            <section>
                <div className="nes-container is-dark with-title black-description-box content-wrapper">
                    <h4 className="title">오늘의 일기</h4>
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;