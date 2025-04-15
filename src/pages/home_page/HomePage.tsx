import { Divider, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router';

import GreenButton from '~/components/buttons/green-button/GreenButton';
import LastBlock from '~/components/last-block/LastBlock';
import Toolbar from '~/components/toolbar/Toolbar';
import dataLongCard from '~/pages/dataLongCardMain';
import dataSimpleCard from '~/pages/dataSimpleCard';

import AuthorBlock from './components/author/AuthorBlock';
import JuicyBlock from './components/juicy/JuicyBlock';
import Slider from './components/slider_1/Slider_1';
import styles from './HomePage.module.css';

function MainPage() {
    const text =
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.';
    return (
        <>
            <Toolbar title='Приятного аппетита!' isExtraSpace />
            <Heading className={styles.subtitle} as='h2'>
                Новые рецепты
            </Heading>
            <Slider />
            <Flex className={styles['subtitle_container']}>
                <Heading className={styles.subtitle} as='h2'>
                    Самое сочное
                </Heading>
                <Link className={styles['button_desktop']} to='/juicy' data-test-id='juiciest-link'>
                    <GreenButton text='Вся подборка' />
                </Link>
            </Flex>
            <JuicyBlock />
            <Link
                className={styles['button_mobile']}
                to='/juicy'
                data-test-id='juiciest-link-mobile'
            >
                <GreenButton text='Вся подборка' />
            </Link>
            <AuthorBlock />
            <Divider />
            <LastBlock
                title='Веганская кухня'
                text={text}
                simpleCardArray={dataSimpleCard}
                longCardArray={dataLongCard}
                isChangeTable
            />
        </>
    );
}

export default MainPage;
