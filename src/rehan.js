import { useEffect } from "react";
import { useState } from "react";
import { act } from "react-dom/test-utils";
const array = [
  {
    id: 1,
    title: "5K",
    pase: "Phase 1 Profit Target",
    persentage: "6%",
    minTrade: "Minimum Trading Days",
    minDay: "5 days",
    tPeriod: "Trading Period",
    tDays: "30 days",
    phasMax: "Phase 1 Max Overall Loss",
    phaseMaxPer: "5.00%",
    phaseMaxOverLos: "Phase 1 Max Overall Loss",
    phaseMaxOverLosPer: "10.00%",
  },
  {
    id: 2,
    title: "10K",
    pase: "Phase 1 Profit Target",
    persentage: "61%",
    minTrade: "Minimum Trading Days",
    minDay: "15 days",
    tPeriod: "Trading Period",
    tDays: "20 days",
    phasMax: "Phase 1 Max Overall Loss",
    phaseMaxPer: "9.00%",
    phaseMaxOverLos: "Phase 1 Max Overall Loss",
    phaseMaxOverLosPer: "15.00%",
  },
  {
    id: 3,
    title: "18K",
    pase: "Phase 1 Profit Target",
    persentage: "71%",
    minTrade: "Minimum Trading Days",
    minDay: "12 days",
    tPeriod: "Trading Period",
    tDays: "22 days",
    phasMax: "Phase 1 Max Overall Loss",
    phaseMaxPer: "19.00%",
    phaseMaxOverLos: "Phase 1 Max Overall Loss",
    phaseMaxOverLosPer: "92.00%",
  },

  {
    id: 4,
    title: "14K",
    pase: "Phase 1 Profit Target",
    persentage: "7%",
    minTrade: "Minimum Trading Days",
    minDay: "22 days",
    tPeriod: "Trading Period",
    tDays: "26 days",
    phasMax: "Phase 1 Max Overall Loss",
    phaseMaxPer: "84.00%",
    phaseMaxOverLos: "Phase 1 Max Overall Loss",
    phaseMaxOverLosPer: "91.00%",
  },
];
const array2 = [
  {
    title: "mdsar",
    pase: "Phase 1 Profit ",
    persentage: "45%",
    minTrade: "Minimum Trading ",
    minDay: "5 days",
    tPeriod: "Trading Period",
    tDays: "30 days",
    phasMax: "Phase 1 Max Overall Loss",
    phaseMaxPer: "5.00%",
    phaseMaxOverLos: "Phase 1 Max Overall Loss",
    phaseMaxOverLosPer: "10.00%",
  },
  {
    title: "reharn",
    pase: "Phase 1 Profit ",
    persentage: "16%",
    minTrade: "Minimum Trading ",
    minDay: "15 days",
    tPeriod: "Trading Period",
    tDays: "3 days",
    phasMax: "Phase 1 Max yes Loss",
    phaseMaxPer: "9.00%",
    phaseMaxOverLos: "Phase 1 Max ",
    phaseMaxOverLosPer: "70.00%",
  },
];

function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  const [arr, setArr] = useState(array);
  const [showData, setShowData] = useState([]);
  const [def, setDef] = useState(false);
  const [act, setAct] = useState(0);

  const first = arr[0];

  const itemData = (id, idxt) => {
    setDef(true);
    setAct(idxt);
    setShowData(id);
  };
  return (
    <>
      <div className="flex flex-col justify-center  items-center border w-[41%] mx-auto border-black p-5">
        <div className="flex justify-center space-x-8  my-5 items-center  w-full">
          <div className="text-3xl text-green-400 font-bold  ">
            <p>Normal</p>
          </div>
          <div
            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer "
            onClick={() => {
              setToggle(!toggle);
              if (toggle === true) {
                setArr(array2);
                setShowData(array2[act]);
              } else {
                setArr(array);
                setShowData(array[act]);
              }
              console.log(toggle);
            }}
          >
            <div
              className={
                "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                (toggle ? null : toggleClass)
              }
            ></div>
          </div>
          <div className=" text-3xl font-bold">
            <p>Aggressive</p>
          </div>
        </div>

        <div className="w-full mx-auto">
          <div className="w-full">
            <p className="text-4xl font-bold w-full">Phase 1 (Normal)</p>
          </div>
          <div className="w-full">
            <p className="text-3xl  w-full text-gray-400">
              Detailed Explanations of Trading Objectives
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-3 w-full  text-center ">
          {arr.map((item, idx) => {
            console.log("rehan idex", idx);
            console.log("ideee", idx);
            return (
              <div
                key={idx}
                onClick={() => itemData(item, idx)}
                className={
                  act === idx
                    ? " border border-black text-3xl font-bold p-5 w-full bg-green-500"
                    : "border border-black text-3xl font-bold p-5 w-full bg-blue-300"
                }
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="w-full">
          {def ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.pase}{" "}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.persentage}
                  </th>
                </tr>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.minTrade}{" "}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.minDay}
                  </th>
                </tr>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.tPeriod}{" "}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.tDays}
                  </th>
                </tr>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.phasMax}{" "}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.phaseMaxPer}
                  </th>
                </tr>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.phaseMaxOverLos}{" "}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {showData.phaseMaxOverLosPer}
                  </th>
                </tr>
              </thead>
            </table>
          ) : (
            <div className="w-full border border-black p-5 mt-5">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.pase}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.persentage}
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.minTrade}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.minDay}
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.tPeriod}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.tDays}
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.phasMax}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.phaseMaxPer}
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.phaseMaxOverLos}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {first.phaseMaxOverLosPer}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Switch;
