import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Table from '../components/Table';


import React, { useState, useEffect } from 'react';

function AppOld() {
   let [data, setData] = useState([]);

  const [find,setFind]= useState({
    isSearching: false,
    value:''
  })

  let visibleData = find.isSearching ? data.filter(user=>(user.cin).toLowerCase().replace(' ','') == (find.value).toLowerCase().replace(' ','')) : data;

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);




  return (
    <>

      <nav className="navbar navbar-dark bg-dark mb-5">
        <div className="container-fluid">
            <a className="navbar-brand">Association Brahma 2014/2025</a>
                <form onSubmit={(e)=>e.preventDefault() } className="d-flex">
                     <input 
                     value={find.value}
                     onChange={(e)=>setFind({isSearching : true,value:(e.target.value).replace(' ','')})}
                     className="form-control me-2" 
                     type="search" 
                     placeholder="Entrer le CIN ici" 
                     aria-label="Search"
                    />
                    <button className="btn btn-outline-info" type="submit">Recherché</button>
                </form>
         </div>
</nav>

    <div className='col-md-12 mx-4'>
    <h1 className='alert alert-info'>Association Brahma Application</h1>

        <Table visibleData={visibleData}/>
    </div>

  </>
  );
}

export default AppOld;
