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
        <div className="info-container">
          <div className="card-row">

            <div className="address-container">

              <h2>Address</h2>
              <p>
                12 Fried Chicken Avenue<br />
                Hempdon Park<br />
                Brighton<br />
                JF9 8JN
            </p>
            </div>
            <div>
              <h2>Tags</h2>
              <div className="chip-container">
                <Chip label="Chicken" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Trendy" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Grilled" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Portugese" className="chip" onClick={undefined} clickable={true} />
                <Chip label="Finger-licking" className="chip" onClick={undefined} clickable={true} />
              </div>
            </div>
          </div>
          <div className="card-row">
            <div>
              <h2>Price</h2>
            </div>
            <div>
              <h2>Description</h2>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}




export default CardUi;