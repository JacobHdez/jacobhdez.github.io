export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'Videojuegos' | 'Programación';
    tech: string[];
    link?: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Videojuego de Terror',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus arcu at sapien elementum mattis. Aenean mattis mi nibh, ut dapibus odio iaculis et. Cras fermentum egestas odio id varius. Morbi mollis nunc ut libero porta vehicula. Sed pharetra fermentum tellus, non pulvinar eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu dolor aliquam, rutrum sapien eget, feugiat arcu. Sed tempus risus auctor, laoreet metus in, elementum tortor. Etiam scelerisque elementum velit ac pharetra. Suspendisse condimentum augue nec cursus semper. In hac habitasse platea dictumst. Nam tincidunt dolor velit, at finibus purus ornare ut. Aenean ac nibh efficitur, fringilla massa ac, bibendum dolor.\nSuspendisse scelerisque, est sed aliquet porta, nulla est consequat massa, dignissim aliquet est velit non ex. Proin aliquet, mi ac blandit maximus, mauris ligula consectetur massa, vitae convallis mauris sapien sed nisl. Nulla lobortis urna sit amet ex lacinia, elementum ornare dolor ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consectetur ipsum eu lacus luctus finibus. Cras eget scelerisque orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nibh, eleifend a pharetra a, suscipit ac odio. Integer at lorem elit. In ac laoreet felis. Morbi eu leo et turpis varius dignissim. Aenean ultricies, lorem nec pulvinar vestibulum, libero ex molestie magna, sit amet pharetra arcu ante sit amet turpis. Sed eu quam et sem porttitor dignissim. Cras eleifend tincidunt ligula sed feugiat.',
        category: 'Videojuegos',
        tech: ['Unreal Engine 5', 'C++'],
        image: 'https://hollowsense.com/assets/img/Logos/Logos%20Hollow%20Sense%20PNG/HollowSense_Logo_Contorno.png'
    },
    {
        id: 2,
        title: 'Videojuego de Terror',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus arcu at sapien elementum mattis. Aenean mattis mi nibh, ut dapibus odio iaculis et. Cras fermentum egestas odio id varius. Morbi mollis nunc ut libero porta vehicula. Sed pharetra fermentum tellus, non pulvinar eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu dolor aliquam, rutrum sapien eget, feugiat arcu. Sed tempus risus auctor, laoreet metus in, elementum tortor. Etiam scelerisque elementum velit ac pharetra. Suspendisse condimentum augue nec cursus semper. In hac habitasse platea dictumst. Nam tincidunt dolor velit, at finibus purus ornare ut. Aenean ac nibh efficitur, fringilla massa ac, bibendum dolor.\nSuspendisse scelerisque, est sed aliquet porta, nulla est consequat massa, dignissim aliquet est velit non ex. Proin aliquet, mi ac blandit maximus, mauris ligula consectetur massa, vitae convallis mauris sapien sed nisl. Nulla lobortis urna sit amet ex lacinia, elementum ornare dolor ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consectetur ipsum eu lacus luctus finibus. Cras eget scelerisque orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nibh, eleifend a pharetra a, suscipit ac odio. Integer at lorem elit. In ac laoreet felis. Morbi eu leo et turpis varius dignissim. Aenean ultricies, lorem nec pulvinar vestibulum, libero ex molestie magna, sit amet pharetra arcu ante sit amet turpis. Sed eu quam et sem porttitor dignissim. Cras eleifend tincidunt ligula sed feugiat.',
        category: 'Videojuegos',
        tech: ['Unreal Engine 5', 'C++'],
        image: 'https://hollowsense.com/assets/img/Logos/Logos%20Hollow%20Sense%20PNG/HollowSense_Logo_Contorno.png'
    },
    {
        id: 3,
        title: 'Videojuego de Terror',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus arcu at sapien elementum mattis. Aenean mattis mi nibh, ut dapibus odio iaculis et. Cras fermentum egestas odio id varius. Morbi mollis nunc ut libero porta vehicula. Sed pharetra fermentum tellus, non pulvinar eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu dolor aliquam, rutrum sapien eget, feugiat arcu. Sed tempus risus auctor, laoreet metus in, elementum tortor. Etiam scelerisque elementum velit ac pharetra. Suspendisse condimentum augue nec cursus semper. In hac habitasse platea dictumst. Nam tincidunt dolor velit, at finibus purus ornare ut. Aenean ac nibh efficitur, fringilla massa ac, bibendum dolor.\nSuspendisse scelerisque, est sed aliquet porta, nulla est consequat massa, dignissim aliquet est velit non ex. Proin aliquet, mi ac blandit maximus, mauris ligula consectetur massa, vitae convallis mauris sapien sed nisl. Nulla lobortis urna sit amet ex lacinia, elementum ornare dolor ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consectetur ipsum eu lacus luctus finibus. Cras eget scelerisque orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nibh, eleifend a pharetra a, suscipit ac odio. Integer at lorem elit. In ac laoreet felis. Morbi eu leo et turpis varius dignissim. Aenean ultricies, lorem nec pulvinar vestibulum, libero ex molestie magna, sit amet pharetra arcu ante sit amet turpis. Sed eu quam et sem porttitor dignissim. Cras eleifend tincidunt ligula sed feugiat.',
        category: 'Videojuegos',
        tech: ['Unreal Engine 5', 'C++'],
        image: 'https://hollowsense.com/assets/img/Logos/Logos%20Hollow%20Sense%20PNG/HollowSense_Logo_Contorno.png'
    }
]
