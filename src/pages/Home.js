import {useSearchParams} from "react-router-dom";
import Button from "../component/Button";

const Home = () => {
    //const [searchPrams, setSearchPrams] = useSearchParams();
    return (
        <div>
            <Button
                text={"기본 버튼"}
                onClick={() => {
                    alert("hi");
                }}
            />
            <Button
                type="positive"
                text={"긍정 버튼"}
                onClick={() => {
                    alert("포지티브");
                }}
            />
            <Button
                type="negative"
                text={"부정 버튼"}
                onClick={() => {
                    alert("부정");
                }}
            />

        </div>
    );
};

export default Home;