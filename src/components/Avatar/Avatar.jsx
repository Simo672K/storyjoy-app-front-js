import React from "react";

function getNameAbrev(name){
  const nameCoposant = name.split(' ');

  return `${nameCoposant[0].substring(0,1)}${nameCoposant[1].substring(0,1)}`
}

function Avatar({img, size, name}) {
  const colors = ["bg-sky-500", "bg-zinc-700", "bg-orange-500", "bg-red-600", "bg-green-500"]
  return (
    <span className={`block rounded-full border-2 border-white overflow-hidden ${size==='sm'? 'w-10 h-10': 'w-14 h-14'}`}>
      {
        img?
        <img src={img} alt="" />
        :
        <span className={`text-white font-medium text-2xl w-full h-full flex items-center justify-center ${colors[Math.ceil(Math.random()*colors.length-1)]}`}>
          {
            getNameAbrev(name).toUpperCase()
          }
        </span>
      }
    </span>
  );
}

export default Avatar;
