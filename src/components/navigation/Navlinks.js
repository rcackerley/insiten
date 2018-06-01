import React from 'react';
import {Link} from 'react-router-dom';

let Navlinks = () =>
  <ul className="navlinks layout-across">
    <Link to="/"><li className="navlink">Pipeline</li></Link>
    <Link to="/contacts"><li className="navlink">Contacts</li></Link>
  </ul>

export default Navlinks;
