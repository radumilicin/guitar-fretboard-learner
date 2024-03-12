import { color } from 'framer-motion';
import react from 'react';
import React, { useState } from 'react';
// import Interval from './page.js';

// export default function Options(){
//   return (

//   );
// }

export function Note({note, onClick, color}) {

  const [colorNote, pressNote] = useState("[#727777]")
  // const [pressed, setPress] = useState(false)

  const changeColorNote = () => {

    if( colorNote == "blue-700" ){
      pressNote("[#727777]")

      // change K changes the 
      // changeK()
      // changeK()
      
    } else {
      pressNote("blue-700")
      // changeK()
      // console.log("note color: " + colorNote)
    }
  }

  // for(var i = 0; i < keysPressed.length ; i++){
  //   if((i === 0 && note === "A") || (i === 1 && note === "B") || (i === 2 && note === "C") || (i === 3  && note === "D") || (i === 4 && note === "E") || (i === 5 && note === "F") || (i === 6 && note === "G")){
  //     changeColorNote();
  //   }
  // }

  return (
    <div className="relative basis-1/7 h-[100%] w-full items-center justify-center" onClick={changeColorNote}>
      {note === "A" ?
      <div className={"absolute w-[100%] h-full z-1 rounded-l-md" + (" bg-" + color)} onClick={onClick}>
        <div className="relative flex text-xl font-bold justify-center items-center">{note}</div>
      </div> : note === "G" ? 
      <div className={"absolute w-[100%] h-full z-1 rounded-r-md" + (" bg-" + color)} onClick={onClick}>
        <div className="relative flex text-xl font-bold justify-center items-center">{note}</div>
      </div> : 
        <div className={"absolute w-[100%] h-full z-1" + (" bg-" + color)} onClick={onClick}>
          <div className="relative flex text-xl font-bold justify-center items-center">{note}</div>
        </div>      
    },
    </div>
  );
}

export function SharpFlat({accidental}) {

  const [colorNote, pressNote] = useState("[#727777]")

  const changeColorNote = () => {
    if( colorNote == "blue-700" ){
      pressNote("[#727777]")
      // console.log("note color: " + colorNote)
    } else {
      pressNote("blue-700")
      // console.log("note color: " + colorNote)
    }
  }


  if(accidental === "#"){
   return (
      <div className="relative flex basis-1/2 h-[100%] items-center justify-center text-xl font-bold">
          <div className={"absolute w-full h-full rounded-l-md z-1" + ( " bg-" + colorNote)} onClick={changeColorNote}>
            <div className="relative w-full h-full flex justify-center items-center">{accidental}</div>
          </div>
        </div>);
  }
  return (
        <div className="relative flex basis-1/2 h-[100%] items-center justify-center text-xl font-bold">
          <div className={"absolute w-full h-full rounded-r-md z-1" + ( " bg-" + colorNote)} onClick={changeColorNote}>
            <div className="relative w-full h-full flex justify-center items-center">{accidental}</div>
          </div>
        </div> 
  );
}

export function NoteRep({text}){
  
  const [color, setColor] = useState("bg-[#727777]")

  const changeState = () => {
    if ( color === "bg-blue-700" ){
      setColor("bg-[#727777]")
    } else {
      setColor("bg-blue-700")
    }
  }

  return (
    <div className="relative flex flex-row items-center h-full w-full">
      <div className="flex justify-center items-center relative basis-4/5 h-full font-semibold text-2xl">{text}</div>
      <div className="relative basis-2/5 h-full flex justify-center items-center" onClick={changeState}>
        <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
        {color === "bg-[#727777]" &&
          <React.Fragment>
            <div className="absolute justify-center items-center w-5 h-5 bg-[#727777] rounded-full z-0"></div>
            <div className="absolute justify-center items-center w-3 h-3 bg-[#3D3D3D] rounded-full z-1"></div>
          </React.Fragment>
        }
      </div>
    </div>
  );
}

export default function Key(){

  const [pressedKeys, setPressedKeys] = useState([false, false, false, false, false, false, false]);

  const keyChange = (index) => {
    // Create a new array to update the pressed keys
    const updatedKeys = [...pressedKeys];
    
    // Reset all keys to false (not pressed)
    for (let i = 0; i < updatedKeys.length; i++) {
      updatedKeys[i] = false;
    }

    // Set the currently pressed key to true
    updatedKeys[index] = true;

    // Update the state with the new array
    setPressedKeys(updatedKeys);
  };

  return (
    <div className="relative left-0 top-[10%] w-full h-[80%] flex flex-col">
      <div className="relative flex flex-col basis-1/2 items-center justify-center w-full md:h-auto">
        <div className="flex h-1/2 items-center justify-center w-full text-black text-2xl font-semibold">Key</div>
        <div className="flex justify-normal flex-row left-[10%] w-[80%] h-full md:h-auto">
          {/* Divs with notes A to G */}
          
          <div className="relative flex w-[100%] justify-evenly flex-row left-0 top-0 h-full bg-[#727777] rounded-md">
            <Note note="A" onClick={() => keyChange(0)} color={pressedKeys[0] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="B" onClick={() => keyChange(1)} color={pressedKeys[1] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="C" onClick={() => keyChange(2)} color={pressedKeys[2] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="D" onClick={() => keyChange(3)} color={pressedKeys[3] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="E" onClick={() => keyChange(4)} color={pressedKeys[4] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="F" onClick={() => keyChange(5)} color={pressedKeys[5] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="G" onClick={() => keyChange(6)} color={pressedKeys[6] ? 'blue-700' : '#727777'}></Note>
          </div>
          {/* Divs with # and b */}
          <div className="flex flex-row basis-3/10 w-[30%] h-[100%] justify-evenly">
            <div className="flex basis-1/5 h-[100%]"></div>
            <div className="flex basis-4/5 h-full bg-[#727777] rounded-md">
              <SharpFlat accidental="#"></SharpFlat>
              <div className="w-[4%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
              <SharpFlat accidental="b"></SharpFlat>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col basis-1/2 items-center justify-center w-full md:h-auto ">
        <div className="flex h-1/2 items-center justify-center w-full text-black text-2xl font-semibold">Note representation</div>
        <div className="flex flex-row left-[10%] w-[80%] h-1/2">
          <NoteRep text="Intervals"></NoteRep>
          {/* <div className="relative flex flex-row w-1/2 h-full">
            <div className="flex basis-4/5 h-full font-semibold text-2xl text-black justify-center items-center">
              Intervals
            </div>
            <div className="flex basis-1/5 h-[100%] justify-center items-center relative">
              <div className="flex absolute justify-center items-center w-6 h-6 bg-[#727777] rounded-full z-0"></div>
              <div className="flex absolute justify-center items-center w-4 h-4 bg-[#3D3D3D] rounded-full z-1"></div>
            </div>
          </div> */}
          <NoteRep text="Note name"></NoteRep>
          {/* Your content for the second part */}
        </div>
      </div>
    </div>
  );
}



