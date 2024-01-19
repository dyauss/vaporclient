import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GameCards() {
  return (
    <Card sx={{ maxWidth: 400, boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'}}>
      <CardMedia
        sx={{ height: 190 }}
        image="https://meups.com.br/wp-content/uploads/2019/03/Sekiro-Shadows-Die-Twice-.jpg"
        title="Sekiro"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Sekiro
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{  maxHeight: '100px', overflowY: 'scroll' }}>
          Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice Sekiro Shadows Die Twice 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">Comprar por R$ 15,00</Button>
        <Button variant="contained" color="success">Salvar na lista de desejos</Button>
      </CardActions>
    </Card>
  );
}