import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordref = useRef(null);

  const passwordgenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+=[]{}`-";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copypasswordtoclipboard = useCallback(() => {
    window.navigator.clipboard.writeText(Password);
    passwordref.current?.select();
  }, [Password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, charAllowed, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-2xl py-1">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3  bg-white"
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
            onClick={copypasswordtoclipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 pt-5 pb-5">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              ref={passwordref}
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
              className="cursor-pointer"
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              ref={passwordref}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              ref={passwordref}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
