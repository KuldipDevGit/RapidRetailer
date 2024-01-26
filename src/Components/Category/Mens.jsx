import { Grid, Typography } from "@mui/material";
import all_product from "../../assets/all_product";
import ProductCard from "../ProductCard";

function Mens() {
  console.log("data", all_product);
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="h1" variant="h2">
            Mens
          </Typography>
        </Grid>

        {all_product
          .filter((product) => product.category === "men")
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Mens;
