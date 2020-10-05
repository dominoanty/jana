import React from 'react';
import './Notes.css';
import Note from '../../components/Note/Note';
import NoteModel from '../../models/Note';

function Notes() {

    const notes: NoteModel[] = [{
            title: 'What is the world?',
            body: 'It\'s not Lorem Ipsum, in case you were wondering, and more text and more text and blah blah balh writing so much omg i keep writing it\'s crazy, this never keeps ending its amazing just keeps on going' ,
            tags: ['Life', 'Inspiration']
        },
        {
            title: 'What is the world?',
            body: 'It\'s not Lorem Ipsum, in case you were wondering',
            tags: ['Life', 'Motivation']
        },
        {
            title: 'What is the world?',
            body: 'It\'s not Lorem Ipsum, in case you were wondering',
            tags: ['College', 'Whatever']
        },
    ]

    return (
        <div className="notes">
            <div className="notes-heading">Your Notes</div>
            <div className="notes-list">
                {
                    notes.map(note => 
                        <Note note={note}/>)
                }
            </div>
            <div className="add-note">
                <button className="button box-shadow-1">
                    + Add 
                </button>
            </div>
        </div>
    )
}

export default Notes;