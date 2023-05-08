import "./Button.css";
const Button = ({text, type, onClick}) => {
    let btnType = ["positive", "negative"].includes(type) ? type : "default";
    switch (btnType) {
        case "positive":
            btnType = "is-success";
            break;
        case "negative":
            btnType = "is-error"
            break;
    }
    return (
        <button className={["nes-btn", `${btnType}`, `Button`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    type: "default",
}

export default Button;


