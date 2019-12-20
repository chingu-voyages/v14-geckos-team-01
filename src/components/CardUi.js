import React, { useState } from 'react';
import { IconButton, CardContent, Chip, CardMedia, Collapse, Card } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import RoomIcon from '@material-ui/icons/RoomRounded';
import clsx from 'clsx';
import '../styles/cardUi.scss'
import img from '../img/nandos/butterflybreasts.jpg'


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
            image={img}
            title="nandos"
          />
        </div>

        <div className="card-title">
          <h1>
            Nandos
          </h1>
          <div className="short-info">
            <RoomIcon />
            <span>
              0.3 miles, Brighton
            </span>
            <Chip label="$$" className="card-cost" color="secondary" size="medium" variant="outlined" />
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
          <div className="card-row mx-auto">
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
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default CardUi;
