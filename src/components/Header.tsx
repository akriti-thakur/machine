import React from "react";
import MaIn from "./Main.tsx";



export default function HeaDer (){


    return(<>
     <div className="flex flex-col p-4 max-w-[1400px] mx-auto w-full">
           <section className=" min-h-screen flex flex-col">
              <header className="flex items-center justify-between gap-4 p-4">
                   <b><h1>FREE<span className="text-blue-400">scribble</span></h1></b>
                  <button className="flex items-center gap-2">
                      <p>New</p>
                      <span className="material-symbols-outlined">add</span>
                  </button>
             </header>
            <MaIn/>
           </section> 
           
           
           <footer></footer>
     </div>
    
    
    
    </>)

}