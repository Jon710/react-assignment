import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
// import Avatar from "avataaars";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
  },
  options: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  characterDetails: {
    height: 28,
    width: 28,
  },
}));

export default function Character({ item, favorite, onChangeFavorite }) {
  const classes = useStyles();

  function showCharacterDetails() {
    console.log('clique!');
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => showCharacterDetails()}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2" color="textSecondary">
              CHARACTER
            </Typography>
            <Typography component="h6" variant="h6">
              {item.name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {item.characterPlanet}
            </Typography>
          </CardContent>
        </div>
        {/* <CardMedia className={classes.cover} title={item.name}>
        <Avatar
          style={{ width: "100px", height: "100px" }}
          avatarStyle="Circle"
          topType="LongHairMiaWallace"
          accessoriesType="Prescription02"
          hairColor={item.hair_color}
          // facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="PastelBlue"
          // eyeType="Happy"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor={item.skin_color}
        />
      </CardMedia> */}
      </CardActionArea>
      <div className={classes.options}>
        <IconButton onClick={onChangeFavorite} aria-label="icon">
          {(favorite && <MdFavorite color="#ea1d2c" />) || <MdFavoriteBorder />}
        </IconButton>
      </div>
    </Card>
  );
}
