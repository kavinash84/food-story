/** @format */

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

const PaginationComponent = () => (
      <div>
         <Stack spacing={2}>
            <Pagination count={10} size='small' className='mx-auto my-5 paginationStyle' />
         </Stack>
      </div>
   );

export default PaginationComponent;
