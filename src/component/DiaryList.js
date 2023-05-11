import "./DiaryList.css";
import Button from "../component/Button";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const sortOptionList = [
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "오래된 순"},
]
/**
 * @param data 필터링된 일기 데이터
 * @returns {JSX.Element}
 * @constructor
 */
const DiaryList = ({data}) => {
    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        const compare = (a, b) => {
            if (sortType === "latest") {
                return Number(b.date) - Number(a.date);
            } else {
                return Number(a.date) - Number(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(data));
        copyList.sort(compare);
        setSortedData(copyList);

    }, [data, sortType]);
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const navigate = useNavigate();
    const onClickNew = () => {
        navigate("/new");
    }

    return (
        <div className="DiaryList">
            <div className="menu-wrapper">
                <div className="left-col">
                    <div className="nes-select">
                        <select value={sortType} onChange={onChangeSortType}>
                            {
                                sortOptionList.map((it, idx) =>
                                    <option key={idx} value={it.value}>{it.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="right-col">
                    <Button
                        type={"positive"}
                        text={"새 일기 쓰기"}
                        onClick={onClickNew}
                    />
                </div>
            </div>
        </div>
    );
}

export default DiaryList;