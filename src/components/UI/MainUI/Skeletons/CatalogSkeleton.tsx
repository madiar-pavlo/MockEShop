import { Box, Skeleton } from '@mui/material';

const CatalogSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'center',
      }}
    >
      {/* Skeleton для загрузки карточек продуктов */}
      {[...Array(6)].map((_, index) => (
        <Skeleton
          key={index}
          variant='rectangular'
          sx={{
            flex: '1 1 300px',
            maxWidth: {
              xs: '230px',
              sm: '250px',
            },
          }}
          height={500}
        />
      ))}
    </Box>
  );
};

export default CatalogSkeleton;
