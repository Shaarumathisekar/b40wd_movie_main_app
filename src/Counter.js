import { useState } from "react";

//Hook Concept using useState:
export function Counter() {
    // camelCase
    let [like, setLike] = useState(0);
    let [disLike, setDisLike] = useState(0);

    const likeStyles = {
        color: like >= 10 ? "green" : "cyan",
        fontSize: "18px",
    };

    const disLikeStyles = {
        color: disLike >= 10 ? "red" : "cyan",
        fontSize: "18px",
    };
    return (
        <div>
            {/* Conditiona rendering */}
            {like - disLike >= 10 ? <h3> You are awesome 🤞🤞 </h3> : null}
            <button style={likeStyles} onClick={() => setLike(like + 1)}> 👍
                {like}</button>
            <button style={disLikeStyles} onClick={() => setDisLike(disLike + 1)}> 👎
                {disLike}</button>
        </div>
    );

}
