import Head from 'next/head';
import React from 'react';
import QuizzesSection from '../../../components/DashboardComponents/QuizzesSection';

const DashQuiz = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Quizzes Dashboard</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* DASHBOARD QUIZ CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <QuizzesSection />
        </div>
    );
};

export default DashQuiz;