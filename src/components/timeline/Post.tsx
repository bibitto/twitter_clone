import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css';

export const Post = () => {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>プログラミングチュートリアル</h3>
                        <span className='post__headerSpecial'>
                            <VerifiedUser className='post__badge' />
                             @shin_Enginner
                        </span>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Raactなう</p>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random" />
                <div className='post__footer'>
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small'/>
                    <FavoriteBorder fontSize='small'/>
                    <PublishOutlined fontSize='small'/>
                </div>
            </div>
        </div>
    )
}
