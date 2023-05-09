import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = WrappedComponent => {
  const Wrapper = (props) => {
    const Router = useRouter();
    const { isAuthenticated } = props;

    useEffect(() => {
      if (!isAuthenticated) {
        Router.replace('/login');
      }
    }, [isAuthenticated]);

    return <WrappedComponent {...props} />
  }

  return Wrapper;
}

export default withAuth;
/*
import withAuth from '../path/to/withAuth';

const ProtectedPage = () => {
  return (
    <div>
      Esta es una página protegida.
    </div>
  );
}

export default withAuth(ProtectedPage);
*/
