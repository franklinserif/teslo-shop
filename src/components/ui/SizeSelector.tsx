import { TSize } from "@/interfaces";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  selectedSize?: TSize;
  sizes: TSize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box sx={{ ml: 0.7 }}>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "primary" : "info"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
