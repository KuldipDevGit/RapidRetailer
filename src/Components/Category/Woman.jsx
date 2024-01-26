import { Grid, Typography } from "@mui/material";
import all_product from "../../assets/all_product";
import ProductCard from "../ProductCard";
function Woman() {
  return (
    <>
      <Typography component="h1" variant="h2">
        Mens
      </Typography>

      {all_product
        .filter((product) => product.category === "women")
        .map((product) => (
          <Grid container key={product.id}>
            <Grid item xs={4}>
              <ProductCard product={product} />
            </Grid>
          </Grid>
        ))}
    </>
  );
}

export default Woman;
