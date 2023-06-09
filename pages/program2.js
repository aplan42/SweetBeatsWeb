import Head from 'next/head';
import React, { useContext, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import InstrumentContainer from '../components/InstrumentContainer';
import InstrumentContainerDrag from '../components/InstrumentContainerDrag';
import MeasuresContainer2 from '../components/MeasuresContainer2';
import { InstrumentsContext } from '../hooks/InstrumentContext';

/**
 * Program 2 is the same thing as the first program file, except that this one deals
 * with drag and drop
 * @library react-beautiful-drag-n-drop
 * Above library is gonna be the one CARRYING this UI literally
 * Comes with pre-packaged drag and drop events. Hardest part is gonna be parsing
 * the instrument state in a way that the dnd state handler can read it
 * @returns 
 */
const program2 = () => {
    const [togglePlayer, setTogglePlayer] = useState(true);
    const  {start, stop} = useContext(InstrumentsContext)
    return (
      <>
        <Head>
          <title>Alternate Design - Drag and Drop</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <DragDropContext onDragEnd={() => console.log("hello")}>
          <div className="main_app_container">
            <MeasuresContainer2/>
            <div className="instruments">
              <div className="instrument-types-label">
                Instrument Types
                <button onClick={() => {
                  if (togglePlayer) {
                    start();
                  } else {
                    stop();
                  }
                  setTogglePlayer(!togglePlayer);
                }}>Start</button>
              </div>
              <div className="instruments-container">
                <InstrumentContainerDrag name="drums" color="#455192" instrument_ident="drums"/>
                <InstrumentContainerDrag name="bass" color="#779F68" instrument_ident="bass"/>
                <InstrumentContainerDrag name="melody" color="#B95264" instrument_ident="melody"/>
                <InstrumentContainerDrag name="auxiliary" color="#D2C761" instrument_ident="auxiliary"/>
              </div>
            </div>
          </div>
          </DragDropContext>
        </main>
      </>
    )
}

export default program2