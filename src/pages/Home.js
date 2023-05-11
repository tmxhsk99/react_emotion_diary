import Button from "../component/Button";
import Header from "../component/Header";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {getMonthRangeByDate} from "../util";
import DiaryList from "../component/DiaryList";

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);
    const headerTitle = `${pivotDate.getFullYear()}년
                                   ${pivotDate.getMonth() + 1}월`
    useEffect(() => {
        if (data.length >= 1) {// 전체 일기에서 해당 월에 해당하는 일기만 필터링 한다.
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter((it) =>
                    beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            );
        } else {// 등록한 일기가 없는경우
            setFilteredData([]);
        }
    }, []);
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rigthChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filteredData}/>
        </div>
    );
};

export default Home;