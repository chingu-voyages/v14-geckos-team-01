import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import '../styles/cardUi.scss'
import img from '../img/nandos/butterflybreasts.jpg'
import Chip from '@material-ui/core/Chip';

const CardUi = (props) => {

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className="card-container">
      <h1>
        Nandos
  </h1>
      <Card className="main-card">
        <div className="card-img">
          <CardMedia
            className="card-img-inner"
            image={img}
            title="nandos"
          />
        </div>
        <div>
        <h2>Address</h2>
        <p>
          12 Fried Chicken Avenue<br />
          Hempdon Park<br />
          Brighton<br />
          JF9 8JN
      </p>
        <h2>Tags</h2>
        <Chip label="Chicken" onClick={undefined} />
        <Chip label="Trendy" onClick={undefined} />
        <Chip label="Grilled" onClick={undefined} />
        <Chip label="Portugese" onClick={undefined} />
        <Chip label="Finger-licking" onClick={undefined} />
      </div>
        <h2>Price</h2>
        <h2>Description</h2>
      </Card>
    </div>
  );
}




export default CardUi;