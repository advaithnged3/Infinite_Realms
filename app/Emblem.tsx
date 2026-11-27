import React from "react";

export type EmblemKind = "fist" | "bat" | "lantern" | "doom";

const labels:Record<EmblemKind,string>={fist:"Heroic power insignia",bat:"Bat-shaped vigilante insignia",lantern:"Lantern Corps power-ring insignia",doom:"Armoured monarch mask insignia"};

export function Emblem({kind,size=120}:{kind:EmblemKind;size?:number}){
 const shared={fill:"none" as const,stroke:"currentColor",strokeWidth:5,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};
 return <svg className={`hero-emblem hero-emblem-${kind}`} width={size} height={size} viewBox="0 0 200 200" role="img" aria-label={labels[kind]} focusable="false">
  <circle cx="100" cy="100" r="91" className="emblem-orbit"/>
  <circle cx="100" cy="100" r="78" className="emblem-core"/>
  {kind==="fist"&&<g className="emblem-mark">
   <path d="M49 147 42 127 43 103Q44 91 55 89l5-35q2-13 14-12 12 1 12 14l-1 23 5-41q2-13 14-12 12 1 12 14l-1 39 7-32q3-12 15-9 11 3 8 15l-5 34 8-19q5-11 16-6 10 5 5 17l-15 37 4 31-18 16H73Z" className="emblem-fill"/>
   <path d="m60 91 1 27m28-39-1 27m27-26-5 25m24-6-8 24M47 127l25 28h55" {...shared} className="emblem-line"/>
  </g>}
  {kind==="bat"&&<g className="emblem-mark"><path className="emblem-fill" d="M10 76 43 91 37 55 77 78 100 40 123 78 163 55 157 91 190 76 178 125 151 145 130 130 100 157 70 130 49 145 22 125Z"/><path d="M10 76 43 91 37 55 77 78 100 40 123 78 163 55 157 91 190 76" {...shared} className="emblem-line"/></g>}
  {kind==="lantern"&&<g className="emblem-mark"><path className="emblem-fill" d="M100 37 126 57 126 75 144 88 144 132 126 148 74 148 56 132 56 88 74 75 74 57Z"/><path d="M80 64h40M73 88h54M80 148v-22q20-18 40 0v22M100 90v35m-18-18h36" {...shared} className="emblem-line"/><path d="M87 51h26" {...shared} className="emblem-line"/></g>}
  {kind==="doom"&&<g className="emblem-mark"><path className="emblem-fill" d="M100 30 151 49 146 111 127 153 100 174 73 153 54 111 49 49Z"/><path d="m59 78 31 10-7 14-27-3m85-21-31 10 7 14 27-3M100 96v32m-21 15 21-7 21 7M83 151l-4 10m20-9v13m21-13 4 10" {...shared} className="emblem-line"/><path d="M100 35v40" {...shared} className="emblem-line"/></g>}
 </svg>
}