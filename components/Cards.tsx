import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useStore } from 'react-redux'
import { TypesBeers } from '../types/globals'
import CardModal from './CardModal'

const style: any = {
  root: {
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card: {
    width: 345,
    height: 285,
    margin: 3,
    backgroundColor: '#87cefa',
    boxShadow:
      '0px 2px 100px 0px rgb(181 149 48 / 31%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  cardActionArea: {
    height: 285,
  },
  cardMedia: {
    width: '10%',
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: '20px',
  },
}

export default function MainShow() {
  const store = useStore()
  const [open, setOpen] = React.useState<boolean>(false)
  const [beerItem, setBeerItem] = React.useState<TypesBeers>()

  const handleOpen = (item: TypesBeers) => {
    setBeerItem(item)
    setOpen(true)
  }

  let sortArray: Array<TypesBeers> = store.getState().beers

  return (
    <>
      <div style={style.root}>
        {sortArray?.map((item: TypesBeers, index: number) => {
          return (
            <Card sx={style.card} key={index}>
              <CardActionArea style={style.cardActionArea} onClick={() => handleOpen(item)}>
                <CardMedia
                  component="img"
                  height="140"
                  style={style.cardMedia}
                  image={item.image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.abv}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
        <CardModal open={open} setOpen={setOpen} item={beerItem} />
      </div>
    </>
  )
}
