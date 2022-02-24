import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../utilities/redux/slices/courseSlice";
import { fetchForums } from "../utilities/redux/slices/forumSlice";
import { fetchCategories } from "../utilities/redux/slices/categorySlice";
import PackageSection from "../components/HomeComponents/PackageSection";
import QuizSection from "../components/HomeComponents/QuizSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import TalentSection from "../components/HomeComponents/TalentSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import FeatureSection from "../components/HomeComponents/FeatureSection";
import CounterSection from "../components/HomeComponents/CounterSection";
import PrivacyPolicySection from "../components/HomeComponents/PrivacyPolicySection";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategories());
    dispatch(fetchCourses());
    dispatch(fetchForums());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <HeroSection />
      <FeatureSection />
      <TalentSection />
      <QuizSection />
      <PackageSection />
      <TestimonialSection />
      <CounterSection />
      <PrivacyPolicySection />
    </div>
  )
}