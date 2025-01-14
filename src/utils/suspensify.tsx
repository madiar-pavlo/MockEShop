import { LazyExoticComponent, Suspense } from 'react';
import Loader from '../components/UI/MainUI/Loader/Loader';

const suspensify = ({
  element,
}: {
  element: LazyExoticComponent<() => JSX.Element>;
}) => {
  const Element = element;
  return (
    <Suspense fallback={<Loader />}>
      <Element />
    </Suspense>
  );
};

export default suspensify;
