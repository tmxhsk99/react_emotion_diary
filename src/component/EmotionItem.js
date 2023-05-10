import React from "react";
import "./EmotionItem.css";

const EmotionItem = ({id, img, imgOn, name, onClick, isSelected}) => {
    const handleOnClick = () => {
        onClick(id);
    };

    return (
        <div className={[
            "EmotionItem", isSelected ? `nes-container with-title is-centered EmotionItem-on-${id}` : `EmotionItem-off`
        ].join(" ")}
             onClick={handleOnClick}
        >

            <img
                alt={`emotion${id}`}
                src={isSelected ? imgOn : img}
            />
            <span>{name}</span>
        </div>
    );
}

export default EmotionItem;