import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

import MainContainer from "../../components/profilePage/MainContainer";

type Props = {};

function ProfilePage({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>에브리봉황</title>
        <meta name="description" content="3월의 판타지아의 「파스텔 레인」들어보세요." />
        <link rel="icon" href="/images/header.png" />
      </Head>

      <MainContainer />
    </motion.div>
  );
}

export default ProfilePage;
