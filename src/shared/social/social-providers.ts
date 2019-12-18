import { SocialProvider } from './social-provider';

export class SocialProviders {

    public static icons: Array<SocialProvider> = [

        {
            icon: 'fab fa-twitter',
            label: 'Twitter',

            getUrl: (text: string, url: string): string => {

                return `https://twitter.com/intent/tweet?source=tweetbutton&text=${ text }&url=${ url }`;

            }

        },

        {

            icon: 'fab fa-facebook',
            label: 'Facebook',

            getUrl: (text: string, url: string): string => {

                return `https://www.facebook.com/sharer/sharer.php?u=${ url }`;

            }

        }

    ];

}
