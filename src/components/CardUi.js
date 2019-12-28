import React, { useState } from 'react';
import { IconButton, CardContent, Chip, CardMedia, Collapse, Card } from '@material-ui/core';
import {
  StarRounded as StarRoundedIcon,
  Room as RoomIcon,
  ExpandMore as ExpandMoreIcon,
  StarBorderRounded as StarBorderRoundedIcon
} from '@material-ui/icons';
import clsx from 'clsx';
import Rating from 'react-rating';
import '../styles/cardUi.scss';

const CardUi = () => {

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
            image={process.env.PUBLIC_URL + "/img/nandos/butterflybreasts.jpg"}
            title="nandos"
          />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h1>
              Nandos
          </h1>
          <div className="break" />
            <div className="short-info">
              <RoomIcon />
              <span>
              The Waterfront
            </span>
              <Chip label="$$" className="card-cost" color="secondary" size="medium" variant="outlined" />
              <Chip label="20-40 mins" className="wait-time" color="primary" size="medium" variant="outlined" />
              <Rating
                emptySymbol={<StarBorderRoundedIcon />}
                fullSymbol={<StarRoundedIcon />}
                initialRating={4}
                readonly
              />
            </div>
          </div>

          <div className="info-container">
            <div className="card-row">
              <div className="chip-container">
                <Chip label="Chicken" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Trendy" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Grilled" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Portugese" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Finger-licking" className="chip" onClick={undefined} clickable={true} />
              </div>
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
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h2>The PERi-PERi Story</h2>
              <p>
              South African flavour with a Portuguese twist. The folks down at Nando’s have been firing up meal time since their very first restaurant in 1987. It’s been a long road from humble beginnings, but Britain’s favourite PERi-PERi restaurant shows no sign of slowing down. With over 400 chicken joints in with UK, the journey for Nando’s is nowhere near completion.
        </p>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </div>
  );
}

export default CardUi;
