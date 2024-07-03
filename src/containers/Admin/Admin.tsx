import React from 'react';

const Admin: React.FC= () => {
  return (
    <div className="adminPage">
      <h1>Edit pages</h1>
      <select></select>
      <label>
        Title
      <input
        type="text"
        name="title"/>
      </label>

      <label>
        Content
        <textarea>

        </textarea>
      </label>
    </div>
  );
};

export default Admin;