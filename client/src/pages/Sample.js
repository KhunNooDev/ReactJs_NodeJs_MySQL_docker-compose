import { useEffect, useState } from 'react';
import { getAPI, postAPI, patchAPI, deleteAPI } from '../api/apicalls';

import SampleForm from '../components/forms/SampleForm';

export default function Sample() {
  const [sampleList, setSampleList] = useState(null);
  const [sample, setSample] = useState(null);
  //refreshData used to trigger the refresh
  const [refreshData, setRefreshData] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    //Load data from API
    getSample();
  }, [refreshData]);

  const getSample = () => {
    getAPI('sample', setSampleList);
  };
  const showSample = (id) => {
    if (id) {
      getAPI(`sample/${id}`, setSample);
    } else {
      setSample(null);
    }
    setShowForm(true);
  };

  const addSample = (e, inputValue) => {
    e.preventDefault();
    postAPI('sample', inputValue).then(() => {
      setRefreshData(!refreshData);
    });
  };
  const editSample = (e, id, inputValue) => {
    e.preventDefault();
    console.log(inputValue);
    patchAPI(`sample/${id}`, inputValue).then(() => {
      setRefreshData(!refreshData);
    });
  };

  const deleteSample = (id) => {
    deleteAPI('sample', id).then(() => {
      setRefreshData(!refreshData);
    });
  };

  return (
    <div className='Pages'>
      <p>
        Edit <code>client/src/pages/Sample.js</code> and save to reload.
      </p>
      {/* button Add cick opens the form with action add*/}
      <button onClick={() => showSample()}>Add</button>
      {showForm && <SampleForm data={sample} add={addSample} edit={editSample} />}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleList ? (
            sampleList.map((val, key) => (
              <tr key={key + 1}>
                <td>{key + 1}</td>
                <td>{val.name}</td>
                <td>
                  <button onClick={() => showSample(val.id)}>Show</button>
                  <button onClick={() => deleteSample(val.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
