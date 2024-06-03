import React, { useMemo, useState } from 'react';
import './home.css';
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';
import Layout from '../../components/Layout';
import dog1 from '../../assets/img/posts/dog-1.png';
import dog2 from '../../assets/img/posts/dog-2.png';
import dog3 from '../../assets/img/posts/dog-3.jpg';
import cat1 from '../../assets/img/posts/cat-1.png';
import cat2 from '../../assets/img/posts/cat-2.png';

import pawLike from '../../assets/img/paw-icon.jpg';

type HomeProps = {
  title?: string;
};

function Home({ title }: HomeProps) {
  const initialPosts = [
    {
      id: 'user-1',
      userName: 'Zarpado',
      media: dog1,
      description: 'morning',
      likeCount: 125,
    },
    {
      id: 'user-2',
      userName: 'Zeus',
      media: cat1,
      description: 'no caption 👽',
      likeCount: 125,
    },
    {
      id: 'user-3',
      userName: 'Chocolate',
      media: dog2,
      description: 'hi <3',
      likeCount: 125,
    },
    {
      id: 'user-4',
      userName: 'Enzo',
      media: dog3,
      description: 'with my cat sister Lily',
      likeCount: 125,
    },
    {
      id: 'user-5',
      userName: 'Wini Fred',
      media: cat2,
      description: 'relax',
      likeCount: 125,
    },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (index: number) => {
    const newValue = posts.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          likeCount: item.likeCount + 1,
        };
      }
      return item;
    });

    setPosts(newValue);
  };
  return (
    <Layout>
      <div className='pb-mt-9 pb-space-y-5'>
        {posts.map((post, index) => (
          <article
            className='pb-rounded-lg pb-border pb-border-solid pb-border-neutral-30'
            key={post.id}
          >
            <div className='pb-py-2 pb-px-3 pb-flex pb-items-center pb-gap-2.5'>
              <img
                src={post.media}
                alt='avatar'
                className='pb-h-[42px] pb-w-[42px] pb-rounded-s-full pb-rounded-ee-full pb-object-cover'
              />
              <span className='pb-text-sm pb-font-medium pb-text-neutral-100'>
                {post.userName}
              </span>
            </div>
            <img
              src={post.media}
              alt={post.userName}
              className='pb-w-[495px]'
            />
            <div className='pb-px-3'>
              <div className='pb-flex pb-justify-between pb-py-2'>
                <button onClick={() => handleLike(index)}>
                  <img src={pawLike} alt='like' className='pb-h-6 pb-w-auto' />
                </button>
                <div className='pb-flex pb-gap-2'>
                  <ChatBubbleOvalLeftIcon className='pb-h-6 pb-w-auto pb-text-orange-500' />
                  <BookmarkIcon className='pb-h-6 pb-w-auto pb-text-orange-500' />
                </div>
              </div>
              <div className='pb-text-sm pb-font-medium pb-text-neutral-100'>
                {post.likeCount} Me gusta
              </div>
              <div className='pb-py-2 pb-font-medium pb-text-neutral-500'>
                {post.description}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
