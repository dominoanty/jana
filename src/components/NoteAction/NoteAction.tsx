import React, { useState, MouseEvent } from 'react';
import './NoteAction.css';
import cx from 'classnames';

interface NoteActionProps{
    iconCSS: string,
    onClick: Function
}
function NoteAction(props: NoteActionProps) {

    const [isClicked, setClicked] = useState(false);

    let onClick = (e: MouseEvent) => {

        e.stopPropagation();

        // Call Parent Click
        props.onClick();

        // Handle Animations
        setClicked(true);
        setTimeout(() => {setClicked(false)}, 1000);
    }

    return (
        <i className={cx('note-action', props.iconCSS, {
            'clicked': isClicked
        })} onClick={onClick} ></i>
    )

}

export default NoteAction;