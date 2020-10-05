import React, { useState, MouseEvent } from 'react';
import cx from 'classnames';
import './Note.css';
import NoteAction from '../NoteAction/NoteAction';
import NoteModel from '../../models/Note';

interface NoteProps {
    note: NoteModel
}

function Note(props: NoteProps) {

    const [isExpanded, setExpanded] = useState(true);

    const [isEditing, setEditing] = useState(false);

    let expandNote = () => {
        console.log('Expanding ');
        // setExpanded(!isExpanded);
    };

    let startEdit = (e : MouseEvent) => {
        console.log('Editing started');
        setEditing(true);
    }

    let completeEdit = (e: MouseEvent) => {
        console.log('Editing complete');
        setEditing(false);
    }

    let deleteNote = (e: MouseEvent) => {
        console.log('Deleting started');
    }

    let clickNoteBody = (e: MouseEvent) => {
        if(isEditing)
            e.stopPropagation();
    }

    return (
    <div className={cx('box-shadow-2 note', {
        'note-expanded': isExpanded 
        })} 
        onClick={expandNote}>

        <div className={cx('note-title', {'editing': isEditing})} contentEditable={isEditing} onClick={clickNoteBody}>
            {props.note.title}
        </div>
        <div className={cx('note-body', {'editing': isEditing})} contentEditable={isEditing} onClick={clickNoteBody} >
            {props.note.body}
        </div>
        <div className="note-tags">
            {
                props.note.tags.map(tag => 
                        <span className="note-tag">{tag}</span>)
            }
            <span className={cx("note-add-tag", {'editing': isEditing})}>Add Tag</span>
        </div>
        {
        isExpanded ? 
            <div className="note-toolbar">
                {isEditing ? 
                    <NoteAction iconCSS='fa fa-check' onClick={completeEdit}/>
                :
                    <NoteAction iconCSS='far fa-edit' onClick={startEdit}/>}
                <NoteAction iconCSS='fa fa-trash' onClick={deleteNote}/> 
            </div> 
            : 
            <div></div>
        }
    </div>
    );
}

export default Note;