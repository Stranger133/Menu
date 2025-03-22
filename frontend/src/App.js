import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState('');
  const fetchData = async (endpoint) => {
    const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('user:lag')
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result = await response.json();
    setData(result);
  };
  const [path, setPath] = useState('/index');
  useEffect(() => {
    fetchData(path);
  }, [path]);

  return (
    <div className="App">
      {data.length > 0 ? (
        data.map((item) => (
          <a key={item.id} href={'/'+item.name} onClick={() => setPath('/' + item.name)}>
            <span>{item.name}</span>
          </a>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default App;
