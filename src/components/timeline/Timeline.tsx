import React from 'react'
import { Post } from './Post';
import './Timeline.css';
import { TweetBox } from './TweetBox';


export const Timeline = () => {
    return (
        <div className='timeline'>
            <div className='timeline__header'>
                <h2>ホーム</h2>    
            </div>

            <TweetBox/>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>    
    );
};
