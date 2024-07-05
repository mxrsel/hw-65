// src/components/Page.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ApiPage } from '../../types';

const Page: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const [page, setPage] = useState<ApiPage | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await axiosApi.get(`/pages/${pageId}.json`);
        setPage(response.data);
      } catch (error) {
        console.error('Error fetching page:', error);
      }
    };

    void fetchPage();
  }, [pageId]);

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
};

export default Page;
