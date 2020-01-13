import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, CardContent, Chip, CardMedia, Collapse, Card,
} from '@material-ui/core';
import {
  StarRounded as StarRoundedIcon,
  Room as RoomIcon,
  ExpandMore as ExpandMoreIcon,
  StarBorderRounded as StarBorderRoundedIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import Rating from 'react-rating';
import 'styles/cardUi.scss';

function capFirstLetter(text) {
  return text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

const CardUi = ({ list }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
      <Card className="main-card">
        <div className="card-img">
          <CardMedia
            className="card-img-inner"
            image={process.env.PUBLIC_URL + list.images[0]}
            title="nandos"
          />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h1>
              {capFirstLetter(list.name)}
            </h1>
            <div className="short-info">
              <RoomIcon />
              <span>
<<<<<<< HEAD
                {list.location}
              </span>
              <Chip label={'$'.repeat(list.price)} className="card-cost" color="secondary" size="medium" variant="outlined" />
              <Chip label={list.waitTime} className="wait-time" color="primary" size="medium" variant="outlined" />
=======
                {list[cardIndex].location}
              </span>
              <Chip
                label={'$'.repeat(list[cardIndex].price)}
                className="card-cost"
                color="secondary"
                size="medium"
                variant="outlined"
              />
              <Chip
                label={list[cardIndex].waitTime}
                className="wait-time"
                color="primary"
                size="medium"
                variant="outlined"
              />
>>>>>>> development
              <Rating
                emptySymbol={<StarBorderRoundedIcon />}
                fullSymbol={<StarRoundedIcon />}
                initialRating={list.rating}
                readonly
              />
            </div>
          </div>

          <div className="info-container">
            <div className="card-row">
              <div className="chip-container">
<<<<<<< HEAD
                {list.tags.map(x => {
                  return <Chip label={capFirstLetter(x)} key={'chip' + x} className="chip" onClick={undefined} clickable={true} />
                })}
=======
                {list[cardIndex].tags.map((x) => (
                  <Chip
                    label={capFirstLetter(x)}
                    key={`chip${x}`}
                    className="chip"
                    onClick={undefined}
                    clickable
                  />
                ))}
>>>>>>> development
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h2>
                {capFirstLetter(list[cardIndex].titleDecription)}
              </h2>
              <p>
                {list[cardIndex].description}
              </p>
            </CardContent>
          </Collapse>
>>>>>>> development
        </div>

        <div className="card-row mx-auto justify-content-center">
          <IconButton
            className={clsx('expand', {
              'expand-open': expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h2>{capFirstLetter(list.titleDecription)}</h2>
            <p>
              {list.description}
            </p>
          </CardContent>
        </Collapse>

      </Card>
    </div>
  );
};

CardUi.propTypes = {
  list: PropTypes.shape({}).isRequired,
};

export default CardUi;
