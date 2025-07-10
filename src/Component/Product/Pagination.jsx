import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <Stack spacing={3} alignItems="center" sx={{ mt: 4 }}>
      <div>
        {currentItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
}
