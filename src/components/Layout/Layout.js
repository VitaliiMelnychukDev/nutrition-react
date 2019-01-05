import React from 'react';

const layout = (props) => (
  <>
    <header>
      <div>Logo</div>
      <div>User Login Part</div>
      <div>Menu</div>
    </header>
    <main>
      {props.children}
    </main>
    <footer>
      <div>Info: email, phone, etc</div>
      <div>Social</div>
      <div>Copyright Line</div>
    </footer>
  </>
);

export default layout;