//Import Images
import FirstGif from './image/FirstGif.gif';
import SecondGif from './image/SecondGif.gif';
import ThirdGif from './image/ThirdGif.gif';
import ForthGif from './image/ForthGif.gif';
import FirstGif2 from './image/FirstGif2.gif';
import SecondGif2 from './image/SecondGif2.gif';
import ThirdGif2 from './image/ThirdGif2.gif';
import ForthGif2 from './image/ForthGif2.gif';


export const SampleProjectState = () => {
  return [
    {
      title: 'Project 1',
      mainImg: FirstGif,
      secondaryImg: FirstGif2,
      url: '/sample/project-1',
      technologies: [
        {
          item: 'React',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'Bootstrap',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'Material UI',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 2',
      mainImg: SecondGif,
      secondaryImg: SecondGif2,
      url: '/sample/project-2',
      technologies: [
        {
          item: 'React Native',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'GraphQL',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'Material UI',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 3',
      mainImg: ThirdGif,
      secondaryImg: ThirdGif2,
      url: '/sample/project-3',
      technologies: [
        {
          item: 'React',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'Reactstrap',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'Scss',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 4',
      mainImg: ForthGif,
      secondaryImg: ForthGif2,
      url: '/sample/project-4',
      technologies: [
        {
          item: 'React',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'MongoDB',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          item: 'Styled components',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};