import React from 'react'
import Characteritems from './Characteritems'
import spin from '../../src/img/spinner.gif'
function Charactergrid({items ,isloading }) {
    return isloading?(<img className='spinner' src={spin} alt='' />):(<section className='cards' >
        { items.map(item => (
        <Characteritems key={item.char_id} item={item} >{item.name}</Characteritems>
        ))}
    </section>
       
    )
}

export default Charactergrid
