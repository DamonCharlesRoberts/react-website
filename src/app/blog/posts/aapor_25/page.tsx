"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function PostComponent () {
    const [postContent, setPostContent] = useState("");
    useEffect(() => {
        fetch("/posts/aapor_25.md")
        .then((response) => response.text())
        .then((text) => setPostContent(text));
    }, []);
    return (
        <section>
            <ReactMarkdown>{postContent}</ReactMarkdown>
        </section>
    );
}
export default PostComponent;
//export default function Post() {
//    const [scrollY, setScrollY] = useState(0);
//    // Function to handle scroll event
//    const handleScroll = () => {
//        setScrollY(window.scrollY);
//    };
//
//    useEffect(() => {
//        // Add scroll event listener
//        window.addEventListener("scroll", handleScroll);
//
//        // Cleanup scroll event listener
//        return () => {
//            window.removeEventListener("scroll", handleScroll);
//        };
//    }, []);
//
//    // Function to calculate opacity based on scroll position
//    const getOpacity = (index: number) => {
//        // Adjusts opacity for each paragraph based on scroll position
//        const opacity = Math.min(1, Math.max(0.3, (scrollY - index * 50) / 100));
//        return opacity;
//    };  
//    return (
//        <section>
//            <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
//                AAPOR 2025
//            </h1>
//            <p>
//            AAPOR is the American Association of Public Opinion Research and is an organization
//            full of election pollsters, federal statisticians and academics who care about the
//            field of how we can best gather and summarize how the public feels. It is an
//            important organization full of people who care about giving voice to 
//            the people. This group of passionate people meet every year to share what they
//            have been doing to try to get better at how to do this as an industry. This exercise
//            has become even more important in the last decade or so given some of the very public
//            misses that members of this community have made about forecasting. I take some issue
//            with the whole of the public opinion industry falling on the sword for this because
//            I believe there is a distinction that needs to be more clearly made between forecasting
//            with horse-race polling and public opinion research. However, I will lay that aside for
//            a different time.
//            </p>
//            <p 
//                style={{opacity:getOpacity(0),transition:"opacity 0.2s ease-out"}}
//            >
//            The point of this post is for me to share my reflections about this year's particular
//            meeting that happened in St. Louis. I unfortunately was not able to attend all sessions
//            or am aware of all of the great work that people presented on. From my experience, the
//            two common threads were: (1) how can we use generative AI to help public opinion researchers
//            be more efficient from an analysis and data collection stand point or to be more
//            statistically efficient by using synthetic or silicon data to augment real data collected
//            from (presumably) real people; (2) and how can we deal with the pernicious problem of certain
//            groups in the public being very unwilling to share their beliefs to public opinion researchers.
//            I tended to attend panels that were more focused on the latter so my focus will largely be
//            on what I learned from panels on that topic.         
//            </p>
//            <p
//                style={{opacity:getOpacity(1),transition:"opacity 0.2s ease-out"}}
//            >
//            For the past decade or so, a common theme has been emerging in public opinion research:
//            Trump supporters have been harder to get into our datasets than other members of the population.
//            This is a problem as it means that our datasets are underrepresenting the viewpoints of Trump
//            supporters. The results of this has been quite public for the past decade or so with many, including
//            Trump, arguing that polls and other forms of public opinion research is biased against Trump.
//            This "bias" is largely not the result of an active desire to have our datasets underrepresent
//            Trump supporters out of any nefarious desire to suppress those voices. The reality is
//            that this is actually the opposite. In almost each panel that I attended, there was a very
//            clear message that public opinion researchers are wanting to solve this problem. However, there
//            are tremendous challenges. The key problem that public opinion researchers are desperate to solve
//            is how to reach those who voted for Trump but who generally prefer to avoid the nastiness of 
//            the current political climate. 
//            </p>
//        </section>
//    );
//}
