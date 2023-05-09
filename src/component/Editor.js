import "./Editor.css";
import {useState} from "react";
import {getFormattedDate} from "../util";
import Button from "../component/Button";
import {useNavigate} from "react-router-dom";

const Editor = ({initData, onSubmit}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    const handleChanageDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    }
    const handleChanageContent = (e) => {
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
    return (
        <div className="nes-container with-title is-centered Editor">
            <div className="editor-section">
                <h4>오늘의 날짜</h4>
                <div className="input-wrapper">
                    <input type="date" value={state.date} onChange={handleChanageDate}/>
                </div>
            </div>
            <div className="editor-section">
                <h4>오늘의 감정</h4>
            </div>
            <div className="editor-section">
                <h4>오늘의 일기</h4>
                <div className="input-wrapper">
                    <textarea
                        className="nes-textarea"
                        placeholder="오늘은 어땟나요?"
                        value={state.content}
                        onChange={handleChanageContent}
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