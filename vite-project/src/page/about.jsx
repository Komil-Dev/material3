import React from 'react';
import Layout from '../components/layout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const images = [
    "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_4.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_6.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_8.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_4.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_6.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_8.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_8.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_4.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_6.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_8.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg",
    "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",

];

const About = () => {
    return (
        <Layout>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 1 }}
                    p={2}
                >
                    {Array.from(Array(images.length)).map((_, index) => (
                        <Grid item xs={5} sm={4} md={3} key={index}>
                            <Box width={280} height={360} boxShadow={3} bgcolor={"#fff"} borderRadius={"20px"}>
                                <img
                                    width={"100%"}
                                    height={"200vh"}
                                    src={images[index]}
                                    alt={`Image ${index + 1}`}
                                    style={{
                                        borderTopLeftRadius: "10px",
                                        borderTopRightRadius: "10px",
                                        objectFit: "cover",
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export default About;
