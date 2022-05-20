import React from 'react';
import { v4 as uuid } from "uuid";
import { Navigation, Sidebar } from '../../Components';
import { useNoteContext } from '../../Context/notesContext';


const Trash = () => {

  const { note: { saveTrash }, dispatchNote } = useNoteContext();

  return (
    <>
      <Navigation />
      <div className='flex '>
        <Sidebar />
        <div className="card flex jstfy-ctnt-center wrap gap-1">
          {saveTrash.map(content => {
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
                    dispatchNote({ type: "SAVE", payload: content })
                    dispatchNote({ type: "Remove_From_Trash", payload: content })
                  }}>
                    <img className="trash-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiARDaVMwYObNPidjPHTOjsmxrDWCVvfQpEbiWbPlFWoG93AqwesHU79DnHiDFadxZE8&usqp=CAU" alt="trash logo" />
                  </button>

                  <button onClick={()=>dispatchNote({ type: "DELETE_FROM_TRASH", payload: content })}>
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
export {Trash}