import { useState } from 'react';

function App() {
  const [feedCost, setFeedCost] = useState(1.12);
  const [feedReduction, setFeedReduction] = useState(6.5);
  const [mortalityReduction, setMortalityReduction] = useState(1.0);
  const [condemnationReduction, setCondemnationReduction] = useState(1.0);
  const [leaseCost, setLeaseCost] = useState(15);

  const calcPerBird = () => {
    const feedSaving = feedCost * (feedReduction / 100);
    const mortalitySaving = 4.10 * (mortalityReduction / 100);
    const condemnationSaving = 4.10 * (condemnationReduction / 100);
    return feedSaving + mortalitySaving + condemnationSaving;
  };

  const perBirdBenefit = calcPerBird();
  const perThousandBenefit = perBirdBenefit * 1000;
  const netBenefit = perThousandBenefit - leaseCost;
  const roi = perThousandBenefit / leaseCost;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Broiler Gender Sorting ROI Calculator</h1>
      <div className="space-y-3">
        <div>
          <label>Feed Cost ($/bird):</label>
          <input
            type="number"
            value={feedCost}
            onChange={e => setFeedCost(parseFloat(e.target.value))}
            className="ml-2 border rounded px-2"
          />
        </div>
        <div>
          <label>Feed Reduction (%):</label>
          <input
            type="number"
            value={feedReduction}
            onChange={e => setFeedReduction(parseFloat(e.target.value))}
            className="ml-2 border rounded px-2"
          />
        </div>
        <div>
          <label>Mortality Reduction (ppt %):</label>
          <input
            type="number"
            value={mortalityReduction}
            onChange={e => setMortalityReduction(parseFloat(e.target.value))}
            className="ml-2 border rounded px-2"
          />
        </div>
        <div>
          <label>Condemnation Reduction (ppt %):</label>
          <input
            type="number"
            value={condemnationReduction}
            onChange={e => setCondemnationReduction(parseFloat(e.target.value))}
            className="ml-2 border rounded px-2"
          />
        </div>
        <div>
          <label>Lease Cost ($/1,000 birds):</label>
          <input
            type="number"
            value={leaseCost}
            onChange={e => setLeaseCost(parseFloat(e.target.value))}
            className="ml-2 border rounded px-2"
          />
        </div>
      </div>
      <hr className="my-4"/>
      <div>
        <p>Benefit per bird: ${perBirdBenefit.toFixed(4)}</p>
        <p>Benefit per 1,000 birds: ${perThousandBenefit.toFixed(2)}</p>
        <p>Net benefit per 1,000 birds: ${netBenefit.toFixed(2)}</p>
        <p>ROI: {roi.toFixed(2)} : 1</p>
      </div>
    </div>
  );
}

export default App;