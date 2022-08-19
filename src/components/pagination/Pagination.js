import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import { paginationStyle } from "./PaginationStyle";

export default function PaginationSquared({ pageCount, handlePageChange }) {
  return (
    <Box
      sx={{
        justifyContent: "right",
        alignItems: "right",
        display: "flex",
        margin: "20px 0px",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          onChange={handlePageChange}
          count={pageCount}
          shape="rounded"
          sx={paginationStyle}
        />
      </Stack>
    </Box>
  );
}
