import React from "react";
import NumberFormat from 'react-number-format';
import Select from 'react-select';

export function MagicInput({ customRef, title, placeHolder, onChange, type }) {

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
        />
      </div>
    </div>
  );
}

export function MagicInputPrice({ customRef, title, placeHolder, onChange }) {

  return (
    <div>
      {/*Magic inputn Price*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
          <p className="text-xl pl-1">{title}</p>
        </div>

        <NumberFormat id="intra"
          ref={customRef}
          required
          onChange={onChange}
          className="pl-2 outline-none w-full pb-3"
          placeholder={placeHolder}
          prefix="R$"
          thousandSeparator
          isNumericString
          />
          
      </div>
    </div>
  );
}

export function MagicInputNum({ customRef, title, placeHolder, onChange }) {

  return (
    <div>
      {/*Magic inputn Price*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
          <p className="text-xl pl-1">{title}</p>
        </div>

        <NumberFormat id="intra"
          ref={customRef}
          required
          onChange={onChange}
          className="pl-2 outline-none w-full pb-3"
          placeholder={placeHolder}
          thousandSeparator
          isNumericString
          />
          
      </div>
    </div>
  );
}

export function MagicInputPercent({ customRef, title, placeHolder, onChange }) {

  
  return (
    <div>
      {/*Magic input Percent*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
          <p className="text-xl pl-1">{title}</p>
        </div>

        <NumberFormat id="intra"
          ref={customRef}
          required
          onChange={onChange}
          className="pl-2 outline-none w-full pb-3"
          placeholder={placeHolder}
          format="###%"
          max="10"
          isNumericString
          />
      </div>
    </div>
  );
}

export function MagicInputDate({ customRef, title, placeHolder, onChange }) {

  
  return (
    <div>
      {/*Magic input Date*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
          <p className="text-xl pl-1">{title}</p>
        </div>

        <NumberFormat id="intra"
          ref={customRef}
          required
          onChange={onChange}
          className="pl-2 outline-none w-full pb-3"
          placeholder={placeHolder}
          format="####"
          isNumericString
          />
      </div>
    </div>
  );
}

export function MagicInputSelect({ customRef, title, options, onChange }) {

  return (
    <div>
      {/*Magic inputn Price*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
          <p className="text-xl pl-1">{title}</p>
        </div>

          <Select id="intra"
          ref={customRef}
          required
          className="pl-2 outline-none w-full pb-3"
          options={options} onChange={onChange} />
 
      </div>
    </div>
  );
}

export function MagicInputLink({ customRef, title, placeHolder, onChange }) {

  return (
    <div>
      {/*Magic inputn Price*/}
      <div id="input" className="w-full border px-5 mt-3 border-gray-200">
        <div className="p-1 pt-3 flex items-center">
          <p className="text-xl pl-1">{title}</p>
        </div>

        <div className="flex pl-2">
        <p>https://</p>

        <input id="intra"
          ref={customRef}
          required
          onChange={onChange}
          className="pl-1 outline-none w-full pb-3"
          placeholder={placeHolder}
          />
          </div>
          
      </div>
    </div>
  );
}