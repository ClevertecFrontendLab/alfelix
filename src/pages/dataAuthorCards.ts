import { alexAvatar, ekaterinaAvatar, elenaAvatar } from '~/assets/images/home_page';
import UserRecommendProps from '~/type/userRecommendProps';

const dataAuthorCards: UserRecommendProps[] = [
    {
        nameRecommend: 'Елена Высоцкая',
        avatarRecommend: elenaAvatar,
        email: '@elenapovar',
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        nameRecommend: 'Alex Cook',
        avatarRecommend: alexAvatar,
        email: '@funtasticooking',
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        nameRecommend: 'Екатерина Константинопольская',
        avatarRecommend: ekaterinaAvatar,
        email: '@bake_and_pie',
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
export default dataAuthorCards;
