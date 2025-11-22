import React, { useState } from 'react';
import Nabvbar from './Nabvbar.jsx';
import Home from '../Pages/Home.jsx';

export default function Layout() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Nabvbar search={search} setSearch={setSearch} />
      <Outlet context={{ search }} />
    </div>
  );
}

