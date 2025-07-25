import UserDetail from '@/components/user-detail/user-detail.js';
import { GetUserByUserId, type User } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import { lazy } from 'react';
import { useParams } from 'react-router';
import styles from './index.module.css';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

const User = () => {
  const { id = '' } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GetUserByUserId, {
    variables: { id },
  });

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <section className={styles.section}>
      <UserDetail user={data?.user as User} />
    </section>
  );
};

export default User;
