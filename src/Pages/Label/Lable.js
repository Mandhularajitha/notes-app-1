import React from 'react';
import { v4 as uuid } from "uuid";
import "./Lable.css";
import { useNoteContext } from '../../Context/notesContext';
import { Navigation, Sidebar } from '../../Components/index';


export const Label = () => {

  const { note: { saveLabel }, dispatchNote } = useNoteContext();

  return (
    <>
      < Navigation />
      <div className='flex'>
        <Sidebar />
        <div className="card flex  wrap gap-1">
          {
            saveLabel.map(content => {
              return (
                <section style={{ backgroundColor: content.bgColor }} className='label-section relative' key={uuid()}>
                  <section className="data-render flex-column jstfy-ctnt-spc-between">
                    <div>
                      <p>Title: {content.Title}</p>
                      <p className="priority-style absolute">{content.priority}</p>
                      <hr />
                      <p>{content.Value}</p>
                    </div>
                    <div>
                      < hr />
                      <p>Label: {content.Label}</p>
                    </div>
                  </section>
                  <section className='bottom-icon flex absolute'>
                    <button onClick={() => {
                      dispatchNote({ type: "Archieve", payload: content })
                      dispatchNote({ type: "Remove_From_Label", payload: content })
                      dispatchNote({ type: "Remove_Data", payload: content })
                    }}>
                      <i className="fa fa-archive"></i>
                    </button>
                    <button onClick={() => {
                      dispatchNote({ type: "Trash", payload: content })
                      dispatchNote({ type: "Remove_From_Label", payload: content })
                      dispatchNote({ type: "Remove_Data", payload: content })
                    }}>
                      <i className="fa fa-trash-o"></i>
                    </button>
                  </section>
                </section>
              )
            })}
        </div>
      </div>

    </>
  )
}