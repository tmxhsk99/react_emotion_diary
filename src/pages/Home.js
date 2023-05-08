import {useSearchParams} from "react-router-dom";

const Home = () => {
    const [searchPrams, setSearchPrams] = useSearchParams();
    console.log(searchPrams.get("sort"));
    return <div>홈페이지 입니다.</div>;
};

export default Home;