import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card sx={{ width: "400px" }}>
        <CardActionArea>
          <Grid container>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt={product.name}
                height="400"
                image={product.image}
                title={product.name}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" color="text.secondary">
                ₹{product.new_price}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {product.old_price && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹{product.old_price}
                </Typography>
              )}
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Grid>

            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
