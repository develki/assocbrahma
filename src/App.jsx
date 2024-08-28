import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  // Filter the data based on the search input
  const visibleData = search
    ? data.filter(user => 
        user.cin.toLowerCase().replace(/\s/g, '') === search.toLowerCase().replace(/\s/g, '')
      )
    : data;

  // Fetch data from the JSON file
  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value.trim());
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <a className="navbar-brand">Association Brahma 2014/2025</a>
          <form onSubmit={(e) => e.preventDefault()} className="d-flex">
            <input
              value={search}
              onChange={handleSearchChange}
              className="form-control me-2"
              type="search"
              placeholder="Entrer le CIN ici"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">Rechercher</button>
          </form>
        </div>
      </nav>

      <div className="col-md-12 mx-4">
        <h1 className="alert alert-info">Association Brahma Application</h1>
        <Table visibleData={visibleData} setSearch={setSearch} />
      </div>
    </>
  );
}

export default App;
