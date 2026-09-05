import React from "react";

export default function Phonetic(props) {
    if (!props.phonetic) {
        return null;
    }

    function playPronunciation() {
        const utterance = new SpeechSynthesisUtterance(props.word);
        window.speechSynthesis.speak(utterance);
    }

    return (
        <div className="Phonetic">
            <button onClick={playPronunciation}>Listen</button>
            <br />
           {props.phonetic}
        </div>
    );
}