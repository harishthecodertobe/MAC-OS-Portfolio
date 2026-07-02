import React,{useEffect, useState} from 'react';
import  Markdown from 'react-markdown';
import MacWindow from './MacWindow'
import './note.scss';

const Note = ({ windowName, setWindowsState }) => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch('/note.txt')
            .then(response => response.text())
            .then(data => setMarkdown(data));
    }, []);

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
           <div className="note-window">
            {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
           </div>
        </MacWindow>

    );
};


export default Note;