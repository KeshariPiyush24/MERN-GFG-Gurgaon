import React, { useState, useEffect } from "react";

const emojiDictionary = {
    "🎄": "Christmas Tree",
    "🎅": "Santa Claus",
    "🦌": "Reindeer",
    "🎁": "Gift",
    "❄️": "Snowflake",
    "☃️": "Snowman",
    "🍪": "Cookie",
    "🕯️": "Candle",
    "🔔": "Bells",
    "🎀": "Ribbon",
    "🎉": "Party",
};

function JingleBells() {
    const [message, setMessage] = useState("");

    function EmojiClickHandler(event) {
        var emoji = event.target.innerText;
        const meaning = emojiDictionary[emoji];
        setMessage(meaning);
    }

    function InputHandler(event) {
        var userInput = event.target.value;
        var meaning = emojiDictionary[userInput];
        if (meaning === undefined) {
            meaning = "We don't have this in our database";
        }
        setMessage(meaning);
    }

    return (
        <div className="main">
            <h1>Type your 👇 emoji here to know its meaning</h1>
            <input type="text" onChange={InputHandler} />
            <p className="message">{message}</p>
            <p>click on emoji to know its meaning</p>
            <ul>
                {
                    Object.keys(emojiDictionary).map((emoji) => {
                        return <li key={emoji} onClick={EmojiClickHandler} >{emoji}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default JingleBells;