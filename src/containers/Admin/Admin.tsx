import React from 'react';
import {PAGES} from '../../constants';

const Admin: React.FC= () => {


  return (
    <div className="adminPage row mt-2">
      <div className="col ">
        <h1>Edit pages</h1>
        <form>
          <select
            name="page"
            id="page"
            required
            className="select-page">
            <option value="">Select Page</option>
            {PAGES.map((page) => (
              <option key={page.id} value={page.id}>{page.title}</option>
            ))}
          </select>
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              id="title"
              required
              className="form-control"/>
          </label>

          <label htmlFor="content">
            Content
            <textarea
              name="content"
              id="content"
              className="form-control">
        </textarea>
          </label>
          <button className="btn btn-primary mt-2" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;