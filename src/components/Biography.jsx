import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
      <img src={imageUrl} alt='aboutImg'/>
      </div>
      <div className='banner'>
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Welcome to SKMC, Muzaffarpur. The Institute runs by Department of Higher and Health Department, Government of Bihar. The Institute is one of the oldest medical science academic and research center in bihar. Its marvelous architecture and spacious class rooms and laboratories makes it one of the most sought out and selected medical science learning center in bihar.</p>
        <p>In March 1970 a Society namely Vaishali Shiksha Pratisthan was registered with objective to advance, promote, encourage & spread of professional, medical & general education in Bihar.</p>
        <p>The holy union of powerful personality of trio namely Sri L.P.Shahi (the then cabinet minister), Late Dr (Prof.)S.M.Nawab (a surgeon of national fame) and Late Sri Raghunath Pandey (a man of conviction & dynamism) built up a strong confidence and enthusiasm among the members of VSP who s collective & sincere effort given the birth to SRI KRISHNA MEDICAL COLLEGE on fateful day of 11th may, 1970 which was inaugurated by the then Chief Minister of Bihar, Late Sri Daroga Prasad Rai.</p>
      </div>
    </div>
  )
}

export default Biography
