import React, { useEffect } from "react";

export default function MaIn() {
    useEffect(() => {
        let textContainer = document.getElementsByClassName("text-container")[0] as HTMLElement;
        let text = document.querySelectorAll(".text");
        let currentElement = text.length - 1;
        console.log(textContainer, text, currentElement);

        const interval = setInterval(() => {
            text.forEach((element, index) => {
                const el = element as HTMLElement;
                if (index === currentElement) {
                    el.style.opacity = "1";
                    el.style.transform = "scale(1)";
                } else {
                    el.style.opacity = "0.3";
                    el.style.transform = "scale(0.8)";
                }
            });
            textContainer.style.transform = `translate(calc(${text.length - 1 - currentElement}*5px) )`;
            currentElement === 0 ? currentElement = text.length - 1 : currentElement -= 1;
        }, 900);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <main className="flex-1 p-4 flex flex-col text-center justify-center">
                <div id="container" className="container">
                    <span>
                        FREE<span className="text-blue-400">scribble&rarr;</span>
                    </span>
                    <div className="text-container">
                        
                        <span className="text">Record</span>
                        <span className="text">Transcribe</span>
                        <span className="text">Translate</span>
                    </div>

                    <button className="flex item-center text-base justify-between-gap-4 mx-auto w-72 max-w-full my-4">
                     <p>Record</p>
                     <span className="material-symbols-outlined">mic</span>
                    </button>
                    <p className="text-base    mx-auto w-72 max-w-full my-4">OR <label className="text-blue-400 cursor-pointer hover:text-blut-900 duration-200">Upload<input className="hidden" type="file" accept=".mp3,.wave"></input></label> a mp3 file</p>
                    <p className="italic text-slate-500">happy happy! happy!<span className="material-symbols-outlined">sentiment_very_satisfied</span></p>
                </div>
            </main>
        </>
    );
}

