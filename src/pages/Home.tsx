import React from "react";
import WeightCalculator from "../components/features/WeightCalculator/WeightCalculator";

function Home() {
   return (
      <div>
         <section id="weightCalculator" className="flex justify-center">
            <WeightCalculator />
         </section>
      </div>
   );
}

export default Home;
