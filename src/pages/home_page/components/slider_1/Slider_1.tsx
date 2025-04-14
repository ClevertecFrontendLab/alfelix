import { Flex } from '@chakra-ui/react';

import dataSliderCard from '~/pages/dataSliderCard';

import CardSlider from '../slider/CardSlider';
import SliderButton from '../slider_button/SliderButton';
import styles from './Slider.module.css';

function Slider() {
    return (
        <Flex className={styles['container_slider']}>
            <SliderButton />
            <Flex className={styles['card_container']}>
                {dataSliderCard.map(({ image, title, description, label, favorites, like }) => (
                    <CardSlider
                        key={title}
                        image={image}
                        title={title}
                        description={description}
                        label={label}
                        favorites={favorites}
                        like={like}
                    />
                ))}
            </Flex>
            <SliderButton reverse />
        </Flex>
    );
}

export default Slider;
