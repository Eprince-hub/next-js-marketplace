import nc from 'next-connect';
import User from '../../../../../models/user';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import db from '../../../../../utils/db';

const handler = nc();

// this error took me approximately about 5 hours to figure out. I have this authentication middleware like this => handler.use(isAdmin, isAuth); and i was getting a failed request error with status code 500 and a response with isAdmin undefined. So now i realized that the problem was that the authentication have to place first before the user can be checked for being an admin or not. so having this authentication middleware like this => handler.use(isAuth, isAdmin); solved my five hours of agony. thanks console.log

handler.use(isAuth, isAdmin);

// api that handles the user information fetch to the frontend. The user that should be edited.
handler.get(async (req, res) => {
  await db.connect();

  const user = await User.findById(req.query.id);

  await db.disconnect();

  res.send(user);
});

// api that handles the user information update that is coming from the frontend
handler.put(async (req, res) => {
  await db.connect();

  // find the user with corresponding id
  const user = await User.findById(req.query.id);

  // console.log('The body request header: ', req.body);
  // console.log('checking for user info: ', req.user);

  // check if user exists and was found
  if (user) {
    // this uses the reference from the user model to create an objectId of the farmer that updated this user and it can be referenced in other to get the farmer's information
    // user.farmer = req.user._id; // comment it out: checking errors

    // convert the user name to SEO friendly slug and removing any extra white space
    const newSlug =
      req.body.name
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase()
        .replaceAll(' ', '-') +
      '-' +
      Math.random();

    // populate the user information with the new information coming from the api request
    user.name = req.body.name;
    user.slug = newSlug; // have to remove the slug from the frontend
    user.price = req.body.price;
    user.image = req.body.image;
    user.category = req.body.category;
    user.farmerName = req.body.farmerName;
    user.farmingMethod = req.body.farmingMethod;
    user.description = req.body.description;
    user.contains = req.body.contains;
    user.dietType = req.body.dietType;
    user.packaging = req.body.packaging;
    user.recipe = req.body.recipe;
    user.countInStock = req.body.countInStock;
    user.address = req.body.address;
    user.city = req.body.city;
    user.postCode = req.body.postCode;

    // save the new information of the user
    await user.save();

    // disconnect from the database
    await db.disconnect();

    res.send({ message: 'The user update was successful' });
  } else {
    await db.disconnect();

    res.status(404).send({ message: 'The User does not exist' });
  }
});

// api that handles the deletion of the user
handler.delete(async (req, res) => {
  await db.connect();

  const user = await User.findById(req.query.id);

  if (user) {
    await user.remove();

    await db.disconnect();

    res.send({ message: 'This User have been deleted' });
  } else {
    await db.disconnect();

    res.status(404).send({ message: 'The User does not exist' });
  }
});

export default handler;
