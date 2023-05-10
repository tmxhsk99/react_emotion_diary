import {useSearchParams} from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Home = () => {
    //const [searchPrams, setSearchPrams] = useSearchParams();


    return (
        <div>
            <Editor
                onSubmit={() => {
                    alert("작성 완료 !");
                }}
            />
        </div>
    );
};

export default Home;