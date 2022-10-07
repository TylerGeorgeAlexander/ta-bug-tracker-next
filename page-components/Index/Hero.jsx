import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Next</span>
          <span className={styles.mongodb}>Bug Tracker</span>
          <span>App</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
        </Container>

        <Container>
          <p className={styles.subtitle}>
            A Next.js and MongoDB web application, designed with simplicity for
            learning and real-world applicability in mind. Designed with Hoang
            Vo&#39;s template and amazing work with next-connect.
          </p>
          <ButtonLink
            href="https://github.com/hoangvvo/nextjs-mongodb-app"
            type="secondary"
            className={styles.button}
          >
            GitHub
          </ButtonLink>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Hero;
