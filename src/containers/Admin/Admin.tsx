import React from 'react';
import {PAGES} from '../../constants';

const Admin: React.FC= () => {
  return (
    <div className="adminPage">
      <h1>Edit pages</h1>
      <form>
      <select
        name="page"
        id="page"
        required
        className="select-page">
        <option value="">Select Page</option>
        {PAGES.map((page) => (
          <option key={page.id} value={page.id}></option>
        ))}
      </select>
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
      </form>
    </div>
  );
};

export default Admin;