import React from 'react'

const Pajination = ({productsperpage,totalproduct ,paginate ,activePage}) => {
  
  const pagenumber=[];
  for(let i=1;i<=Math.ceil(totalproduct/productsperpage); i++){
    pagenumber.push(i)
  }
    return (
    <ul className='default-pagination lab-ul'>
      <li>
        <a href="" onClick={()=>{
        if (activePage<pagenumber.length) {
          paginate(activePage-1);
          
        } 
          }}>

            <i className='icofont-rounded-left'>add pajiantion number</i>
          </a>
      </li>
     {
        pagenumber.map((number)=>{
            <li key={number} className={`page-item ${number==activePage ? "bg-warning":""}`}>
               <button onClick={()=>paginate(number)} className='bg-transparen '>{number}</button>
            </li>
        })
     }
    </ul>
  )
}

export default Pajination
