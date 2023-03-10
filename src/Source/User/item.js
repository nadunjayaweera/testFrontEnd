
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import ButtonAppBar from './ButtonAppBar';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
}));

export default function ItemList() {
  return (
    <div>
      <ButtonAppBar/>
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
          <Grid xs={12}>
              
    <Item>
    <Card variant="outlined" sx={{ width: 320 }}>
    <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
    Chocolate Chip Cookies
    </Typography>
    <Typography level="body2">Net WT.200g</Typography>
    <IconButton
    aria-label="Chocolate Chip"
    variant="plain"
    color="neutral"
    size="sm"
    sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
    >
    <BookmarkAdd />
    </IconButton>
    <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
    <img 
        src="http://cdn.shopify.com/s/files/1/0260/6877/9066/products/100895_f7ed1085-0cc9-4f5e-a25d-771509b1b168.jpg?v=1627811177?auto=format&fit=crop&w=286"
        srcSet="http://cdn.shopify.com/s/files/1/0260/6877/9066/products/100895_f7ed1085-0cc9-4f5e-a25d-771509b1b168.jpg?v=1627811177?auto=format&fit=crop&w=286&dpr=2 2x"
        loading="lazy"
        alt=""
    />
    </AspectRatio>
    <Box sx={{ display: 'flex' }}>
    <div>
        <Typography level="body3">Price:</Typography>
        <Typography fontSize="lg" fontWeight="lg">
        Rs.580
        </Typography>
    </div>
    <Button
        variant="solid"
        size="sm"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ ml: 'auto', fontWeight: 600 }}
    >
        Buy
    </Button>
    </Box>
    </Card>     
        </Item>
      </Grid>
      <Grid xs={12}>
        
              
        <Item>
      <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Dairy Milk
      </Typography>
      <Typography level="body2">Net WT.35g</Typography>
      <IconButton
        aria-label="Chocolate"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://cmhlprodblobstorage1.blob.core.windows.net/sys-master-cmhlprodblobstorage1/h10/ha7/9030481281054/cmhl_1000000340844_1_hero.jpg_Default-WorkingFormat_1000Wx1000H?auto=format&fit=crop&w=286"
          srcSet="https://cmhlprodblobstorage1.blob.core.windows.net/sys-master-cmhlprodblobstorage1/h10/ha7/9030481281054/cmhl_1000000340844_1_hero.jpg_Default-WorkingFormat_1000Wx1000H?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Rs.100
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Buy
        </Button>
      </Box>
    </Card>
    
                  
        </Item>
      </Grid>
      <Grid xs={12}>
        <Item>

      <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Toffee Crisp
      </Typography>
      <Typography level="body2">Net WT.30g</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://www.britishcornershop.co.uk/img/large/CY0273.jpg?auto=format&fit=crop&w=286"
          srcSet="https://www.britishcornershop.co.uk/img/large/CY0273.jpg?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Rs.165
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Buy
        </Button>
      </Box>
      </Card>

        </Item>
      </Grid>

      <Grid xs={12}>
        <Item>
        <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Hershey's nuggets
      </Typography>
      <Typography level="body2">Net WT.200g</Typography>
      <IconButton
        aria-label="Toffee"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://products.blains.com/600/132/1323394.jpg?auto=format&fit=crop&w=286"
          srcSet="https://products.blains.com/600/132/1323394.jpg?auto=format&fit=crop&w=286dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Rs.450
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Buy
        </Button>
      </Box>
      </Card>
       </Item>
      </Grid>

      
      <Grid xs={12}>
        <Item>
          <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Juzt Jelly
      </Typography>
      <Typography level="body2">Net WT.50g</Typography>
      <IconButton
        aria-label="Jelly"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://www.justgotochef.com/img/1545459094-Alpenliebe-Juzt%20Jelly-Front.jpg?auto=format&fit=crop&w=286"
          srcSet="https://www.justgotochef.com/img/1545459094-Alpenliebe-Juzt%20Jelly-Front.jpg?auto=format&fit=crop&w=286dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Rs.70
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Buy
        </Button>
      </Box>
      </Card>
        </Item>
      </Grid>

      <Grid xs={12}>
        <Item>
          <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        KitKat
      </Typography>
      <Typography level="body2">Net WT.40g</Typography>
      <IconButton
        aria-label="KitKat"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://www.kitkatarabia.com/sites/default/files/styles/crop_dsu_c_gallery_thumb_large/public/2022-03/KITKAT%C2%AE%202%20Finger%20Milk%20Chocolate%20Bar%20_Desktop-428x428px.png?h=ace29aed&itok=AoNzNwYL?auto=format&fit=crop&w=286"
          srcSet="https://www.kitkatarabia.com/sites/default/files/styles/crop_dsu_c_gallery_thumb_large/public/2022-03/KITKAT%C2%AE%202%20Finger%20Milk%20Chocolate%20Bar%20_Desktop-428x428px.png?h=ace29aed&itok=AoNzNwYL?auto=format&fit=crop&w=286dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Rs.50
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Buy
        </Button>
      </Box>
      </Card>
        </Item>
      </Grid>
      </Grid>
      </div>
  );
}