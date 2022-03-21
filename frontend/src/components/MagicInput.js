import React from "react";

export default function MagicInput({ customRef, title, placeHolder, type, maxLength, max, onChange }) {
  return (
    <div>
      {/*Magic input*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
         

          <p className="text-xl pl-1">{title}</p>
        </div>

        <input
          id="intra"
          type={type}
          ref={customRef}
          required
          onChange={onChange}
          className="pl-2 outline-none w-full pb-3"
          placeholder={placeHolder}
          maxLength={maxLength}
          max={max}
        />
      </div>
    </div>
  );
}
