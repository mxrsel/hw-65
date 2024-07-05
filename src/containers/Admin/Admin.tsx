import React, { useState, useEffect } from 'react';
import { PAGES } from '../../constants';
import { ApiPage } from '../../types';
import axiosApi from '../../axiosApi';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [pageMutation, setPageMutation] = useState<ApiPage>({
    page: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    if (pageMutation.page) {
      const fetchPage = async () => {
        try {
          const response = await axiosApi.get(`/pages/${pageMutation.page}.json`);
          setPageMutation({ ...response.data, page: pageMutation.page });
        } catch (error) {
          console.error('Error fetching page:', error);
        }
      };

      void fetchPage();
    }
  }, [pageMutation.page]);

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPageMutation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await axiosApi.put(`/pages/${pageMutation.page}.json`, pageMutation);
    navigate(`/pages/${pageMutation.page}`);
  };

  return (
    <div className="adminPage row mt-2">
      <div className="col ">
        <h1>Edit pages</h1>
        <form onSubmit={onSubmit}>
          <select
            name="page"
            id="page"
            required
            className="select-page"
            value={pageMutation.page}
            onChange={onFieldChange}>
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
              className="form-control"
              value={pageMutation.title}
              onChange={onFieldChange}/>
          </label>

          <label htmlFor="content">
            Content
            <textarea
              name="content"
              id="content"
              className="form-control"
              required
              value={pageMutation.content}
              onChange={onFieldChange}/>

          </label>
          <button className="btn btn-primary mt-2" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
