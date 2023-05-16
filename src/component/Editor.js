import "./Editor.css";
import {useCallback, useEffect, useState} from "react";
import {emotionList, getFormattedDate} from "../util";
import Button from "../component/Button";
import {useNavigate} from "react-router-dom";
import EmotionItem from "./EmotionItem";
const Editor = ({initData, onSubmit}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });

    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            })
        }
    }, [initData]);

    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    }
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    }
    const handleSubmit = () => {
        onSubmit(state);
    }
    const handleOnGoBack = () => {
        navigate(-1);
    }

    const handleChangeEmotion = useCallback((emotionId) => {
        setState((state) => ({
            ...state,
            emotionId
        }));
    },[]);
    return (
        <div className="nes-container with-title is-centered Editor">
            <div className="editor-section">
                <div className="nes-container is-dark with-title black-description-box calendar-wrapper">
                    <span className="title">오늘의 날짜</span>
                    <input type="date" value={state.date} onChange={handleChangeDate}/>
                </div>
            </div>
            <div className="editor-section">
                <h4>오늘의 감정</h4>
                <div className="input-wrapper emotion-list-wrapper">
                    {emotionList.map((it) =>
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id}
                        />
                    )}
                </div>
            </div>
            <div className="editor-section">
                <h4>오늘의 일기</h4>
                <div className="input-wrapper">
                    <textarea
                        className="nes-textarea"
                        placeholder="오늘은 어땟나요?"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor-section bottom-section">
                <Button text={"취소하기"} onClick={handleOnGoBack}/>
                <Button text={"작성완료"} type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default Editor;