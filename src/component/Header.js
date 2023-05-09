import "./Header.css";

const Header = ({title, leftChild, rigthChild}) => {
    return (
        <div className="Header">
            <div className="header-left">{leftChild}</div>
            <div className="header-title">{title}</div>
            <div className="header-right">{rigthChild}</div>
        </div>
    )
}

export default Header;