import { Grid, GridItem } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import AccordionMenu from './componentLayout/accordion/AccordionMenu';
import RightAside from './componentLayout/aside/RightAside';
import FooterMobile from './componentLayout/footer-mobile/FooterMobile';
import FooterDesktop from './componentLayout/footerDesktop/FooterDesktop';
import Header from './componentLayout/header/Header';
import styles from './Layout.module.css';

type LayoutProps = PropsWithChildren;

function Layout({ children }: LayoutProps) {
    return (
        <Grid className={styles['main_container']}>
            <Header />
            <GridItem className={styles.navigation} as='aside'>
                <AccordionMenu />
                <FooterDesktop />
            </GridItem>
            <GridItem className={styles.main} as='main'>
                {children}
            </GridItem>
            <RightAside />
            <GridItem className={styles.footer} as='footer' data-test-id='footer'>
                <FooterMobile />
            </GridItem>
        </Grid>
    );
}

export default Layout;
