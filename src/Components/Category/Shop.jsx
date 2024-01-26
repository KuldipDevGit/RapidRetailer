import { Grid, Typography } from "@mui/material";
import all_product from "../../assets/all_product";
import ProductCard from "../ProductCard";

function Shop() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} alignItems={"center"}>
          <Typography component="h3" variant="h3">
            Most Populer
          </Typography>
        </Grid>
        {all_product
          .filter((product) => product.category === "men" && product.id === 13)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.category === "women" && product.id === 3)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.category === "kid" && product.id === 27)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        <Grid item xs={12} alignItems={"center"}>
          <Typography component="h3" variant="h3">
            Trending now
          </Typography>
        </Grid>
        {all_product
          .filter((product) => product.category === "men" && product.id === 15)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.category === "women" && product.id === 7)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.category === "kid" && product.id === 25)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}

        <Grid item xs={12} alignItems={"center"}>
          <Typography component="h3" variant="h3">
            New Arrivals
          </Typography>
        </Grid>
        {all_product
          .filter((product) => product.category === "men" && product.id === 18)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.category === "women" && product.id === 4)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        {all_product
          .filter((product) => product.category === "kid" && product.id === 29)
          .map((product) => (
            <Grid item xs={4} key={product.id} marginBottom={10} marginLeft={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Shop;
