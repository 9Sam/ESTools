import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../Button";

function WeightCalculator() {
   const [url, setUrl] = useState("");

   useEffect(() => {
      console.log(url);
   }, [url]);

   const handleClick = async () => {
      await axios
         .get(url)
         .then((res) => console.log(res))
         .catch((err) => console.log(err));
   };

   return (
      <div className="w-1/2 h-auto p-5 border-2 rounded-lg border-gray-600">
         <h2 className="text-xl ">Weight Calculator</h2>
         <hr className="my-4" />

         <div>
            <form action="">
               <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Url:
               </label>
               <input
                  type="text"
                  className="block w-full py-2 px-3 my-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-my-blue focus:outline-none focus:border-transparent"
                  placeholder="Enter your name"
                  onChange={(e) => setUrl(e.target.value)}
               />
               <Button htmlType="button" type="primary" onClick={handleClick}>
                  Get data
               </Button>
            </form>
         </div>

         <section id="results" className="my-4">
            <div className="w-full h-auto p-4 border-2 border-danger">
               <h2>Results:</h2>
               <hr />
            </div>
         </section>
      </div>
   );
}

export default WeightCalculator;
