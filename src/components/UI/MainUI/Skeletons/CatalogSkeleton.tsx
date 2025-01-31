import { Box, Skeleton } from '@mui/material';

const CatalogSkeleton = ({skeletonsCount = 6}: {skeletonsCount?: number}) => {
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
      {[...Array(skeletonsCount)].map((_, index) => (
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
