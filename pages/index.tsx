import { signIn, signOut, useSession } from 'next-auth/client';
// import styles from '../styles/Home.module.css';

type Props = {
  data: {
    title: string;
    text: string;
  };
};

const Page: React.VFC<Props> = ({ data }) => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          {loading ? (
            <>Loading ...</>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>{' '}
            </>
          )}
        </>
      )}
      {session && (
        <>
          Signed in as <img src={session.user.image ?? ''} width="50px" /> 　 　
          {session.user.name} <br />
          AccessToken : {session.accessToken} <br />
          <button onClick={() => signOut()}>Sign out</button> 　{' '}
        </>
      )}
    </>
  );
};

export default Page;
