import {useNavigate} from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import {useContext, useEffect} from "react";
import {DiaryDispatchContext} from "../App";
import {dateStringToCalcTimeStamp, setPageTitle} from "../util";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBaok = () => {
        navigate(-1);
    }
    useEffect(() =>{
        setPageTitle("새 일기 쓰기");
    },[])

    const onSubmit = (data) => {
        const {date, content, emotionId} = data;
        const calculableDate = dateStringToCalcTimeStamp(date);
        onCreate(calculableDate, content, emotionId);
        navigate("/",{replace: true});
    }
    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로가기"} onClick={goBaok}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};
export default New;
