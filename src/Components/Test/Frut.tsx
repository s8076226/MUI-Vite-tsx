import * as React from 'react';
//import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
];

interface RenderItemOptions {
  item: string;
  handleRemoveFruit: (item: string) => void;
}

function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function Frut() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 0));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item: string) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    
    <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={handleAddFruit}
        >
          <FilterAltIcon />
        </IconButton>
      
    
    // <Button
    //   variant="contained"
    //   disabled={fruitsInBasket.length >= FRUITS.length}
    //   onClick={handleAddFruit}
    // >
    //   Add fruit to basket
    // </Button>
  );

  return (
    <div>
      {addFruitButton}
      <List sx={{ mt: 1 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
          ))}
        </TransitionGroup>
      </List>
    </div>
  );
}
