import React, { useState } from 'react'
import "./topfold.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';
const Topfold = () => {
    const [query, setQuery] = useState(" ");
    const dispatch = useDispatch();
    const handleQuery=(e)=>{
            setQuery(e.target.value);
            dispatch(searchExpense(e.target.value))
    }
  return (
    <div className='topfold'>
    {window.location.pathname==='/'? 
    <div className='home-topfold'>
            <div className='searchbar'>
            <i className='fi-rr-search'></i>
            <input  value={query} placeholder='Search for expenses'  onChange={(e) => handleQuery(e)}
             />
            </div>
            <Link to='add-expense'>
                <div className='header-button'>
                <i className="fi fi-br-add"></i>
                <label>Add</label>
            </div>
            </Link>
            
        </div>: (
          <div className='add-topfold'>
          <Link to='/'>
          <div className='add-topfold-button'>
          <i class="fi fi-rr-angle-small-left"></i>
          <label>Back</label>
          </div>
          </Link>
          <Link to='/'>
          <div className='add-topfold-button'>
          <i className="fi fi-rr-cross-circle"></i>
          <label>Cancle</label>
          </div>
          </Link>
          
          
          </div>
        )
    }
        
    </div>
  )
}

export default Topfold 