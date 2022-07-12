

const RenderPortfolio = ({portfolio}) => {
  return (
    <div className='images-container'>
      {portfolio.map((port, idx) => (
        <div className='image-box' key={idx}>
          <img src={port.cover} alt='portfolio' className='portfolio-image' />
          <div className='content'>
            <p className='title'>{port.title}</p>
            <h4 className='description'>{port.description}</h4>
            <button className='btn' onClick={() => window.open(port.url)}>
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RenderPortfolio
