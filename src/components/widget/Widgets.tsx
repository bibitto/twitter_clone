import Search from '@mui/icons-material/Search';
import { height } from '@mui/system';
import React from 'react';
import {
TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed,
} from "react-twitter-embed";
import './Widgets.css';

export const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <Search className='widgets__searchIcon'/>
                <input placeholder='キーワード検索' type="text"/>
            </div>
            <div className='widgets__widgetContainer'>
                <h2>いまどうしてる？</h2>
                <TwitterTweetEmbed tweetId={'1513387777001357313'} />
                <TwitterTimelineEmbed sourceType='profile' screenName='Deep_in_Crypto' options={{height: 400}}/>
                <TwitterShareButton url='https://twitter.com/Deep_in_Crypto' options={{text: 'React.jsを勉強中', via: 'Deep_in_Crypto'}} />
            </div>
        </div>
    )
}
