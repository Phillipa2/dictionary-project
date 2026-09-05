import React  from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
    if (props.results) {
        return (
            <div className="Results">
               <h2>{props.results.word}</h2>
               <Phonetic phonetic={props.results.phonetic} word={props.results.word} />
               {props.results.meanings && props.results.meanings.map(function (meaning, index) {
                   return <Meaning key={index} meaning={meaning} />;
                })}
            </div>
        );
    } else {
        return null;
    }
}