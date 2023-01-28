import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MainLine from './MainLine';


function App() {

  const [react, setReact] = useState([]);
  console.log(react);
  useEffect(() => {
    reactissue();
  }, [])

  const reactissue = async () => {
    const response = await fetch("https://api.github.com/repos/facebook/react/issues");
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setReact(jsonData);
    const Bugs = []
     jsonData.forEach(values =>values.labels.forEach(label => {
      if (label.name.toLowerCase().includes("bug")) Bugs.push(label.name)
    }))
    console.log("Bugs" , Bugs);
  }
  // reactissue();

 
  return (
    <div className="App">
      
      <Header />
      <MainLine/>
      <hr style={{
        border: "1px solid #30363d"
      }} />
      <div className='container'>
        <div className='content p-4 text-center border color-border-muted d-block'>
          <div className='position-relative'>
            <div className='col-8 mx-auto'>
              <h4 className='mb-2'>
                <h4 className='h5'> 👋 Want to contribute to facebook/react? </h4>
                <p className='m-0'>If you have a bug or an idea, read the <a href='https://github.com/facebook/react/blob/cb16201180a2642696303d4aac3a04e5fd348512/CONTRIBUTING.md'>contributing guidelines</a> before opening an issue.</p>
                <p className='m-0'>If you're ready to tackle some open issues, <a href="https://github.com/facebook/react/contribute"> we've collected some good first issues for you.</a></p>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='content p-4 borderm color-border-muted d-block'>
          <div className='position-relative'>
            <div className='col-8 mx-auto'>
              <ul className='flex-container space-between'>
                <li class="flex-item"> <svg class="octiconk" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                </svg> &nbsp; <b className='open'>625 open</b> &nbsp;&nbsp; <svg class="tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>&nbsp;&nbsp; 11,085 Closed</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="flex-item">Author <span class="dropdown-caret hide-sm"></span> </li>
                <li class="flex-item">label <span class="dropdown-caret hide-sm"></span> </li>
                <li class="flex-item">Projects <span class="dropdown-caret hide-sm"></span> </li>
                <li class="flex-item">Milestone <span class="dropdown-caret hide-sm"></span> </li>
                <li class="flex-item">Assignee <span class="dropdown-caret hide-sm"></span> </li>
                <li class="flex-item">Sort <span class="dropdown-caret hide-sm"></span> </li>
              </ul>
            </div>
          </div>
        </div>
        {react.map((values) => {
          return (
            <>
              <div className='mb-5'>
                <div className='contentm border'>

                  <h3 className='titletext'>
                    <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                    </svg>
                    <a href={values.url}>{values.title}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="badge">{values.user.type}</span>&nbsp;&nbsp;&nbsp;
                    <span className="badgea">{values.labels.map(label => label.name)}
                      <span className="tooltiptext"> {values.labels.map(label => label.description)}  </span>
                    </span>&nbsp;&nbsp;
                    <span className="badgec">{values.labels.map(label =>(label.name.toLowerCase().includes("bug")) && (label.name))}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='badgeb'> {values.labels.map(label =>(label.name.toLowerCase().includes("unconfirmed")) && (label.name))}</span>
                    {/* <span className="chat"> </span> */}
                  </h3>

                  <span class="muted"> #{values.number} opened at {values.updated_at} by <a href={values.user.html_url}>{values.user.login}</a></span>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
