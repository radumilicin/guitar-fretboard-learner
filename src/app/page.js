import Image from "next/image";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownSection,
//   DropdownItem
// } from "@nextui-org/react";
import Key from "./Options";

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

export function Intervals(){
    return (
        <div className="absolute top-[5%] left-[75%] w-[20%] h-[90%] bg-slate-500 z-1">
          <div className="relative top-0 left-0 h-[30%] w-[100%] bg-slate-500">
            <div className="flex items-center h-full w-[50%]">
              <div className="font-medium text-xl font-roboto mx-auto">Intervals</div>
            </div>
            <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
              <div className="relative top-[25%] left-[25%] w-[50%] h-[40%] rounded-full bg-black"></div>
              <div className="absolute top-[15%] left-[20%] w-[30%] h-[60%] rounded-full bg-[#cb2a2a]"></div>
            </div>
          </div>
          <div className="relative grid grid-cols-3 top-0 left-0 h-[70%] w-[100%] bg-white">
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">Root</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">3</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">#5/b6</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">b2</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">4</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">6</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">2</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">#4/b5</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">b7</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">b3</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">5</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
            <div className="relative flex flex-row items-center h-full w-full">
              <div className="flex justify-center items-center relative basis-3/5 h-full font-semibold">7</div>
              <div className="relative basis-2/5 h-full flex justify-center items-center">
                <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
              </div>
            </div>
          </div>
        </div> 
    );
}

export function GridChordScale(){
  return (
     <div className="relative grid grid-cols-2 gap-[10%] left-0 top-[5%] h-[90%] bg-[#3D3D3D]"> 
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full">
              <div className="flex relative text-3xl items-center justify-center font-semibold font-roboto w-[50%]">Chord</div>
              <div className="relative w-[50%] h-[100%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#cb2a2a]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-opacity-50 text-black bg-[#727777] rounded-lg" onClick={null}>Insert chord...</div>
            </div>
          </div>
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full">
              <div className="flex relative text-3xl items-center justify-center font-semibold font-roboto w-[50%]">Scale</div>
              <div className="relative w-[50%] h-[100%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#cb2a2a]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-opacity-50 text-black bg-[#727777] rounded-lg" onClick={null}>Insert scale...</div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-2xl font-semibold font-roboto mx-auto">Tuning</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="flex relative left-[0%] top-[25%] w-[100%] h-[75%] text-center justify-center align-center text-opacity-50 text-black bg-[#727777] rounded-lg" onClick={null}>Choose tuning...</div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-2xl font-semibold font-roboto mx-auto">Instrument</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative flex w-[100%] justify-evenly flex-row left-0 top-0 h-full bg-[#727777] rounded-md">
                <div className="flex basis-1/3 h-[100%] items-center justify-center text-xl font-bold">Guitar</div>
                <div className="w-[2%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
                <div className="flex basis-1/3 h-[100%] items-center justify-center text-xl font-bold">Bass</div>
                <div className="w-[2%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
                <div className="flex basis-1/3 h-[100%] items-center justify-center text-xl font-bold">Piano</div>              
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
