import './index.css';

const FilterCard = () => {
  return (
    <div className='filter-card'>
      <div className='d-flex flex-row justify-content-between align-center line' >
        <p>Filter</p>
        <p>CLEAR ALL</p>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Types of Plants</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Price</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Nursery</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Ideal Plant Location</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Indoor/Outdoor</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Maintenance</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Plant Size</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Water Schedule</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Colour</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between line'>
        <p>Seasonal</p>
        <span>+</span>
      </div>
      
      <div className='d-flex flex-row justify-content-between'>
        <p>Light Efficient</p>
        <span>+</span>
      </div>
    </div>
  );
};

export default FilterCard;
