import React from 'react';

const Table = ({ visibleData,setSearch }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header d-flex justify-content-center ">
              <button onClick={()=>setSearch('')} className='btn btn-outline-success fw-bold fs-4 mx-5 '>La liste Complet des Dossiers</button>
            </div>
            <div className="card-body p-2">
              <table className="table table-striped table-bordered text-center">
                <thead className="table-info">
                  <tr>
                    <th>Nom</th>
                    <th>CIN</th>
                    <th>Proprietaire</th>
                    <th>Local</th>
                    <th>Superficie</th>
                    <th>Type</th>
                    <th>Secteur</th>
                    <th>N° Dossier</th>
                    <th>N° Contrat</th>
                    <th>Pay</th>
                    <th>Recu</th>
                    <th>Elect</th>
                    <th>L'eau</th>
                    <th>Téléphone</th>
                    <th>Inscription</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleData.length > 0 ? (
                    visibleData.map(user => (
                      <tr key={user.id}>
                        <td className="fs-5">{user.nom}</td>
                        <td>{user.cin}</td>
                        <td>{user.proprietaire}</td>
                        <td>{user.Local}</td>
                        <td>{user.Superficie}m²</td>
                        <td>{user.type}</td>
                        <td className="fs-5">Sect: {user.Lot}</td>
                        <td>
                          <span
                            className={user.AC ? 'fs-6' : 'badge bg-info w-100 fw-bold text-dark'}
                          >
                            {user.numDossier.toString().replace('.', '-')}
                          </span>
                        </td>
                        <td>
                          <span className={user.AC ? 'badge bg-info w-100 fw-bold text-dark' : ''}>
                            {user.AC}
                          </span>
                        </td>
                        <td
                          className={
                            user.pay === 'NP'
                              ? 'badge bg-danger text-white w-100 h-100'
                              : 'badge bg-success text-white w-100 h-100'
                          }
                        >
                          {user.pay}
                        </td>
                        <td>{user.recu ? `${user.recu} DH` : user.recu}</td>
                        <td className={user.E === 'EE' ? 'text-danger fw-bold' : 'fw-normal'}>
                          {user.E}
                        </td>
                        <td className={user.L === 'LL' ? 'text-danger fw-bold' : 'fw-normal'}>
                          {user.L}
                        </td>
                        <td>0{user.phone}</td>
                        <td>{user.inscrDossier}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="15" className="text-center text-muted">
                        Aucun enregistrement trouvé
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
