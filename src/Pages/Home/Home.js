import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummeryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                >

                </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;