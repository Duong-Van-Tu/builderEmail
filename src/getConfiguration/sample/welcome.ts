import { TEditorConfiguration } from '../../documents/editor/core';

const WELCOME: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F2F5F7',
      canvasColor: '#FFFFFF',
      textColor: '#242424',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block-1709571212684',
        'block-1709571228545',
        'block-1709571234315',
        'block-1709571247550',
        'block-1709571258507',
      ],
    },
  },
  'block-1709571212684': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: 'https://img.pikbest.com/ai/illus_our/20230418/64e0e89c52dec903ce07bb1821b4bcc8.jpg!w700wp',
        alt: 'Marketbase',
        linkHref: 'https://marketbase.app',
        contentAlignment: 'middle',
        width: 100,
        height: 80,
      },
    },
  },
  'block-1709571228545': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Hi Tú 👋,',
      },
    },
  },
  'block-1709571234315': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Chào mừg bạn đến với công ty chúng tôi',
      },
    },
  },
  'block-1709571247550': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Sau đây là các dịch vụ của công ty chúng tôi:',
      },
    },
  },
  'block-1709571258507': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: 'https://i.ytimg.com/vi/NaQnFcDKFiM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAkRd73gqJ_Jtytt1J23I1zxtqQaA',
        alt: 'Video thumbnail',
        linkHref:
          'https://www.youtube.com/watch?v=NaQnFcDKFiM&list=RDNaQnFcDKFiM&start_radio=1',
        contentAlignment: 'middle',
      },
    },
  },
};

export default WELCOME;
