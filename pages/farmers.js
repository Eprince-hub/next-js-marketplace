import {
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import { useContext } from 'react';
import Layout from '../components/Layout';
// import Product from '../models/Product';
import User from '../models/user';
import db from '../utils/db';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';

// Using the grid component from material UI
// The grid parent is called Container and it can take spaces and other props
// the grid items are called card and
// the cardActionArea inside the card will be clickable areas.
// cardMedia = image

export default function Farmers(props) {
  // getting the react context from useContext
  const { state } = useContext(Store);

  // make condition to make sure that only logged in users can view this page
  console.log('data here: ', state);

  const classes = useStyles();

  const { adminUsers } = props;

  return (
    <Layout title="farmers">
      <section className={classes.homePageProductsStyle}>
        <div>
          <Typography variant="h3" align="center">
            Know Where Your Food Is Coming From
          </Typography>
        </div>
        <div>
          <Grid container spacing={3}>
            <TableContainer>
              <Table>
                {/* Table Body From Material UI*/}
                <TableBody>
                  {adminUsers.map((adminUser) => (
                    <TableRow key={adminUser._id}>
                      {/* Table name Cell */}

                      <TableCell>
                        <NextLink href="/market" passHref>
                          <Link>
                            <Typography>Name: {adminUser.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>

                      {/* Table cell for Price */}
                      <TableCell align="right">
                        Joined Since: {adminUser.createdAt.slice(0, 16)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  // connecting to DB database;
  await db.connect();

  // Getting the products from the database;
  // we use lean object from mongoose to transform
  // the data back to a javascript object just like
  // JSON.stringify because mongoose always returns
  // Mongoose document from the database.
  // const products = await Product.find({}).lean();
  const adminUsers = await User.find({ isAdmin: true }).lean();

  // disconnect from the database
  await db.disconnect();

  return {
    props: {
      // calling the convert to doc function on each product that is returned from the database
      // and pass the value to the products
      // this stops the id errors from this function
      // because of the mongo document model.
      // products: products.map(db.convertDocToObj),
      adminUsers: adminUsers.map(db.convertDocToObj),
    },
  };
}
