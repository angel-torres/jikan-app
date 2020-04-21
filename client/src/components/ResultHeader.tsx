import React from 'react';
import { Paper } from '@material-ui/core';

interface IResultHeaderProps {
    title: string;
    imageUrl: string;
    rank: number;
    episodes: number;
    rating: string;
}

const ResultHeader: React.FC<IResultHeaderProps> = ({
    title,
    imageUrl,
    rank,
    rating,
    episodes
}) => {
    return (
        <Paper>
            <div className="info-container">
            <img src={imageUrl} alt=""/>
                <div>
                    <h2>{title}</h2>
                    <p>Rank: {rank}</p>
                    <p>Rating: {rating}</p>
                    {episodes ? <p>Episodes: {episodes}</p> : null}
                    {/* {result.volumes ? <p>Volumes: {result.volumes}</p> : null} */}
                    {/* {result.chapters ? <p>Chapters: {result.chapters}</p> : null} */}
                    {/* <p>{result.synopsis}</p> */}
                    {/* <p>Started: {result.start_date}</p> */}
                    {/* <p>Ended: {result.end_date}</p> */}
                    {/* <a href={result.url}>View</a> */}
                </div>
            </div> 
        </Paper>
    )
};

export default ResultHeader;