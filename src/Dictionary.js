import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition..`);

        let apiKey = `92414bb17980of4b8b810faf837183tc`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
    </div>

    )
}