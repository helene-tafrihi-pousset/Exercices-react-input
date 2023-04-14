import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardProps {
  pokemon: {
    name: string
    image: string
  }

}
function CardPoke({ pokemon }: CardProps) {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={pokemon.image}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is the pokemon
            {' '}
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
export default CardPoke;
