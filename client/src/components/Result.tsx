import React from 'react'
import moment from 'moment';

import './styles/result.css';

interface IResultProps {
    result: any;
}

const Result: React.FC<IResultProps> = ({result}) => {
    return (
        <div className="result-paper" >
            <img src={result.image_url} alt=""/>
            <div className="info-container">
                <h2>{result.title}</h2>
                <div>
                    <p>Rating: {result.score}</p>
                    {result.volumes ? <p>Volumes: {result.volumes}</p> : null}
                    {result.chapters ? <p>Chapters: {result.chapters}</p> : null}
                    {result.episodes ? <p>Episodes: {result.episodes}</p> : null}
                    <p>{result.synopsis}</p>
                    <p>Started: {moment(result.start_date).format("LL")}</p>
                    <p>Ended: {moment(result.end_date).format("LL")}</p>
                    {/* <a href={result.url}>View More</a> */}
                </div>
            </div>
        </div>
    )
}

export default  Result;