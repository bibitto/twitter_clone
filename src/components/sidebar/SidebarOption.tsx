import React, { FC } from 'react';
import "./SidebarOption.css";

type Props = {
    text: string;
    // anyではなくOverridableComponent<SvgIconTypeMap<{}, "svg">>でも良さげです
    // ただそれだとMUIのみの対応になってしまうので無難にany
    Icon: any;
};

export const SidebarOption: FC<Props> = props => {
    const { text, Icon } = props;
    return (
        <div className='sidebarOption'>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}
