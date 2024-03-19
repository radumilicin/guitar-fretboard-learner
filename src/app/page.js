'use client'
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  dropdown
} from "@nextui-org/react";
import Key from "./Options";
import React, { useState } from 'react';

export function Fret() {
  return (
    <div className="top-0 w-[1%] h-[100%] bg-[#4A4A4A] z-2"></div>
  );
}

export function FretMarker() {
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] rounded-full bg-[#BA1C1C]"></div>
  );
}

export function Dot(){
  return (
    <div className="absolute left-[70%] top-1/2 transform -translate-y-1/2 w- h-3 rounded-full bg-red-600 border-black border-2"></div>
  );
}

export function Interval({text}){

  const [color, setColor] = useState("bg-[727777]")

  const changeState = () => {
    if ( color === "bg-blue-700" ){
      setColor("bg-[#727777]")
    } else {
      setColor("bg-blue-700")
    }
  }

  return (
    <div className="relative flex flex-row items-center h-full w-full">
      <div className="flex justify-center items-center relative basis-3/5 h-full text-xl   font-semibold">{text}</div>
      <div className="relative basis-2/5 h-full flex justify-center items-center" onClick={changeState}>
        {color === "bg-blue-700" ?
          <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
          :
          <React.Fragment>
            <div className="absolute justify-center items-center w-5 h-5 bg-[#727777] rounded-full z-0"></div>
            <div className="absolute justify-center items-center w-3 h-3 bg-[#3D3D3D] rounded-full z-1"></div>
          </React.Fragment>
        }
      </div>
    </div>
  );
}



export function Intervals(){
    return (
        <div className="absolute top-[5%] left-[75%] w-[20%] h-[90%] bg-[#3D3D3D] z-1">
          <div className="relative top-0 left-0 h-[30%] w-[100%] bg-[#3D3D3D]">
            <div className="flex items-center h-full w-[50%]">
              <div className="font-medium text-2xl font-roboto mx-auto text-black">Intervals</div>
            </div>
            <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
              <div className="relative top-[25%] left-[25%] w-[50%] h-[40%] rounded-full bg-black"></div>
              <div className="absolute top-[15%] left-[20%] w-[30%] h-[60%] rounded-full bg-[#cb2a2a]"></div>
            </div>
          </div>
          <div className="relative grid grid-cols-3 top-0 left-0 h-[70%] w-[100%] bg-[#3D3D3D]">
            <Interval text="Root"></Interval>
            <Interval text="3"></Interval>
            <Interval text="#5/b6"></Interval>
            <Interval text="b2"></Interval>
            <Interval text="4"></Interval>
            <Interval text="6"></Interval>
            <Interval text="2"></Interval>
            <Interval text="#4/b5"></Interval>
            <Interval text="b7"></Interval>
            <Interval text="b3"></Interval>
            <Interval text="5"></Interval>
            <Interval text="7"></Interval>
          </div>
        </div> 
    );
}

export function ChordsDropdown() {

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="text-black">
          Chords
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function Instrument({instrName, onChange, isActive}) {
  // Determine the background color based on whether the instrument is active
  const bgColor = isActive ? "bg-blue-700" : "bg-[#727777]";

  return (
        <div className="relative flex basis-1/3 items-center justify-center w-[100%] h-[100%]" onClick={onChange}>
          {
            instrName === "Guitar" ?
            <div className={`absolute flex w-[100%] items-center justify-center rounded-l-md h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xl font-bold text-black">
                {instrName}
              </div>
            </div> 
              :
            instrName === "Piano" ?
            <div className={`absolute flex w-[100%] items-center justify-center rounded-r-md h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xl font-bold text-black">
                {instrName}
              </div>
            </div> 
              :
            <div className={`absolute flex w-[100%] items-center justify-center h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xl font-bold text-black">
                {instrName}
              </div>
            </div> 
          }
          
        </div>
  );
}


export function DropdownChord(){

  const chordNames = ['Major', 'Minor', 'Diminished', 'Augmented', 'Major 7', 'Minor 7', 'Sus 2', 'Sus4']

  return (
   <div className="absolute top-0 left-0 flex flex-col w-full overflow-y-scroll no-scrollbar max-h-[500%] z-50 bg-[#727777]"> {/* Set a fixed maximum height */}
      {chordNames.map((chord, index) => (
          <div key={index} className="relative flex justify-center align-middle items-center w-full h-1/5 text-black text-2xl hover:bg-gray-200 cursor-pointer z-auto">
            {chord}
          </div> 
      ))}
    </div>
  );
}


export function GridChordScale(){

    const [dropDownChord, setDropDown] = useState(false);

    const changeDropDownState = () => {
      setDropDown(!dropDownChord)
    }



    const [chordPressed, setPressedChord] = [false, false, false, false, false, false];

    const changePressedChord = (index) => {
      previousChords = [...chordPressed]


      if( previousChords[index] === false ){
        previousChords = previousChords.map((chord) => {chord = false;})
        previousChords[index] = true
      } else previousChords = previousChords.map((chord) => {chord = false;})
      
      setPressedChord(previousChords)
    }



  // State to hold the name of the currently active instrument
    const [activeInstrument, setActiveInstrument] = useState("");

    // Function to handle instrument selection
    const handleInstrumentChange = (instrumentName) => {
      if (activeInstrument === instrumentName) {
        // If the same instrument is clicked again, toggle it off
        setActiveInstrument("");
      } else {
        // Set the new active instrument
        setActiveInstrument(instrumentName);
      }
    };


  

  return (
     <div className="relative grid grid-cols-2 gap-[10%] left-0 top-[5%] h-[90%] bg-[#3D3D3D]"> 
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full">
              <div className="flex relative text-3xl items-center justify-center font-semibold font-roboto w-[50% text-black">Chord</div>
              <div className="relative w-[50%] h-[100%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#cb2a2a]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%] z-2">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center flex justify-center items-center text-opacity-50 text-black bg-[#727777] rounded-lg" onClick={changeDropDownState}>
                {
                 dropDownChord && <DropdownChord>Insert chord...</DropdownChord>
              
                }
              </div>
              {/* <ChordsDropdown></ChordsDropdown> */}
            </div>
          </div>
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full z-0">
              <div className="flex relative text-3xl items-center justify-center font-semibold font-roboto w-[50%] text-black">Scale</div>
              <div className="relative w-[50%] h-[100%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#cb2a2a]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%] z-0">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center flex items-center justify-center text-opacity-50 text-black bg-[#727777] rounded-lg" onClick={null}>Insert scale...</div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full z-0">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-2xl font-semibold font-roboto mx-auto text-black">Tuning</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="flex relative left-[0%] top-[25%] w-[100%] h-[75%] text-center justify-center items-center text-opacity-50 text-black bg-[#727777] rounded-lg" onClick={null}>Choose tuning...</div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-2xl font-semibold font-roboto mx-auto text-black">Instrument</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative flex w-[100%] justify-evenly flex-row left-0 top-0 h-full bg-[#727777] rounded-md">
                <Instrument instrName="Guitar" onChange={() => handleInstrumentChange("Guitar")} isActive={activeInstrument === "Guitar"} />
                <div className="w-[2%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
                <Instrument instrName="Bass" onChange={() => handleInstrumentChange("Bass")} isActive={activeInstrument === "Bass"} />
                {/* <div className="flex basis-1/3 h-[100%] items-center justify-center text-xl font-bold text-black">Bass</div> */}
                <div className="w-[2%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
                <Instrument instrName="Piano" onChange={() => handleInstrumentChange("Piano")} isActive={activeInstrument === "Piano"} />
              </div>
            </div>
          </div> 
  </div> 
  );
}

export function Options(){
    return (
      <div className="relative top-[20%] left-[8%] h-[25%] w-[82%] rounded-3xl bg-[#3D3D3D]">
        <div className="absolute grid grid-cols-10 left-0 top-0 h-[100%] w-[100%]">
          <div className="relative col-span-3">
            <Key></Key>
          </div>  
          <div className="relative col-span-4">
            <GridChordScale></GridChordScale>
          </div>  
          <div className="relative col-span-3"></div>  
        </div>
        <Intervals> </Intervals>
      </div>
    );
}



export default function Home() {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-[#2D2D2D]">

      <Options></Options>

      <div className="absolute top-[55%] left-[6%] w-[80%] h-[30%]">

      </div> 
      <div className="absolute top-[55%] left-[8%] rounded-l-lg  w-[2%] h-[35%] bg-slate-600 "> 
        <div className="string1"></div>
        <div className="string2"></div>
        <div className="string3"></div>
        <div className="string4"></div>
        <div className="string5"></div>
        <div className="string6"></div>
      </div>
      <div className="absolute top-[55%] left-[10%] w-[80%] h-[35%] bg-[#713D6F] opacity-90">
        <div className="string1"></div>
        <div className="string2"></div>
        <div className="string3"></div>
        <div className="string4"></div>
        <div className="string5"></div>
        <div className="string6"></div>

        <div className="relative flex flex-row justify-evenly top-0 w-[100%] h-[100%]">
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
        </div>

        {/* <div className="absolute top-[46.5%] left-[27.5%] w-6 h-6"> 
          <FretMarker></FretMarker>
        </div>
        <div className="absolute top-[46.5%] left-[27.5%] w-6 h-6"> 
          <FretMarker></FretMarker>
        </div> */}
      </div>

    </div>
  );
}
