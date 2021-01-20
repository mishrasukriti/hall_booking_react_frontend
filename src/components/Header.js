import React, { useState } from 'react';
import Link from './Link';

const Header = () => {
  const [windowPath, setWindowPath] = useState(window.location.pathname)


  return (
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className={`nav-link ${windowPath === "/" ? "active" : ""}`} href="/" onWindowChange={()=>setWindowPath(window.location.pathname)}>Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${windowPath === "/addroom" ? "active" : ""}`} href="/addroom"  onWindowChange={()=>setWindowPath(window.location.pathname)}>Add New Hall</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${windowPath === "/bookroom" ? "active" : ""}`} href="/bookroom" onWindowChange={()=>setWindowPath(window.location.pathname)}>Book New Room</Link>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
    
  );
};

export default Header;