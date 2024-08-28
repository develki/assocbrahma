import React, { useState } from 'react'

const Nav = ({find,setFind}) => {

    function onSearch(e){
        e.preventDefault();
        setFind({
            isSerching:true,
            value:e.target.value
        });
    }



  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
        <div className="container-fluid">
            <a className="navbar-brand">Association Brahma 2014/2025</a>
                <form onSubmit={onSearch} className="d-flex">
                     <input 
                     value={find.value}
                     onChange={(e)=>setFind({isSerching : false,value:(e.target.value).replace(' ','')})}
                     className="form-control me-2" 
                     type="search" 
                     placeholder="Entrer le CIN ici" 
                     aria-label="Search"
                    />
                    <button className="btn btn-outline-info" type="submit">Recherché</button>
                </form>
         </div>
</nav>
  )
}

export default Nav