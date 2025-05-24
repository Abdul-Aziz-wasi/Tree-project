import React from 'react';

const Benefit = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-2xl text-green-800 text-center font-bold'>FAQ About Benefits of Trees</h3>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-4">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do trees help the environment?</div>
  <div className="collapse-content text-sm">Trees absorb carbon dioxide and release oxygen, improving air quality. They also reduce soil erosion, provide shade, and support biodiversity by offering habitats for wildlife.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold"> How do trees benefit human health?</div>
  <div className="collapse-content text-sm">Trees reduce stress, improve mental well-being, and filter pollutants from the air, lowering risks of respiratory diseases. Green spaces with trees also encourage outdoor physical activity.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What economic benefits do trees provide?</div>
  <div className="collapse-content text-sm">Trees increase property values, save energy by providing shade (reducing cooling costs), and produce resources like fruits, wood, and medicinal products, supporting livelihoods.</div>
</div>
        </div>
    );
};

export default Benefit;