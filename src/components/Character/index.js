import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActionArea,
  Dialog,
  List,
  ListItem,
} from '@material-ui/core';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Avatar } from 'react-avataaars';

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
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState();
  const classes = useStyles();

  const showCharacterDetails = () => {
    setOpen(true);
    setHash(Math.random());
  };
  const handleClose = () => setOpen(false);

  const options = {
    gender: item.gender,
    skin: item.skin_color,
    hairColor: item.hair_color,
    eyeColor: item.eye_color,
  };

  return (
    <>
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
        </CardActionArea>
        <div className={classes.options}>
          <IconButton onClick={onChangeFavorite} aria-label="icon">
            {(favorite && <MdFavorite color="#ea1d2c" />) || (
              <MdFavoriteBorder />
            )}
          </IconButton>
        </div>
        <Dialog onClose={() => handleClose()} open={open} maxWidth="lg">
          <List>
            <ListItem>
              <Avatar options={options} hash={hash} />
              <h1 style={{ fontFamily: 'Sans-Serif' }}>{item.name}</h1>
            </ListItem>
          </List>
        </Dialog>
      </Card>
    </>
  );
}
